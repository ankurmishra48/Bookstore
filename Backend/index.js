import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Book from "./model/book.model.js"; // Ensure this file exists and is named correctly
import fs from "fs";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



fs.readFile("list.json", "utf-8", async (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
    
    try {
      const books = JSON.parse(data);
   
      const existingBooks = await Book.find();
      if (existingBooks.length === 0) {
        await Book.insertMany(books);
        console.log("Data inserted successfully!");
      } else {
        console.log("Data already exists. No insertion needed.");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  });
  
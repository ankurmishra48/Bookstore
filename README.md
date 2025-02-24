BookStoreApp

Overview

BookStoreApp is an online bookstore platform where users can browse, buy, and access free books. The application provides a smooth and engaging experience with a variety of book categories, including free offerings.

Features

📚 Browse Books: Explore a wide range of books across different genres.

💰 Buy Books: Purchase books securely through the platform.

🎁 Free Books Section: Access a selection of books available for free.

🔍 Search & Filter: Easily find books by category, price, or title.

👤 User Authentication: Secure login and registration system.

📦 Admin Panel: Manage books, users, and orders efficiently.

Tech Stack

Frontend: React.js, Tailwind CSS, Slick Carousel

Backend: Node.js, Express.js

Database: MongoDB with Mongoose ORM

Authentication: JWT (JSON Web Tokens)

Installation & Setup

Clone the repository:

git clone https://github.com/ankurmishra48/BookStore.git
cd BookStoreApp

Install dependencies for both frontend and backend:

npm install

Set up your .env file:

PORT=4000
MongoDBURI=your_mongodb_connection_string

Start the backend server:

npm start

Navigate to the frontend directory and start the client:

cd client
npm start

Open the application in your browser at http://localhost:5173

API Endpoints

Books

GET /book → Fetch all books

POST /book → Add a new book

GET /book/:id → Get book details by ID

PUT /book/:id → Update a book

DELETE /book/:id → Delete a book

Users

POST /user/register → Register a new user

POST /user/login → User login

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a Pull Request.

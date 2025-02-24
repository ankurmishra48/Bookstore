import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset, // Function to reset the form
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      console.log("Submitting form...", userInfo);
      await axios.post("https://getform.io/f/aolmlrzb", userInfo, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Your message has been sent!");
      reset(); // Clears the form after submission
      setTimeout(() => navigate("/"), 2000); // Redirect to Home after 2s
    
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      {/* Toaster for notifications */}
      <Toaster />

      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Please fill out the form below to contact me</span>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

          {/* Full Name Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your query"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

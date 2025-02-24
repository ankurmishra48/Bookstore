import React from "react";
import ankurImage from "../assets/ankur.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
          src={ankurImage}
             alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 mt-5 md:mt-0 md:ml-10">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I’m a passionate software developer with expertise in web development, 
            React, and backend technologies. I love creating interactive web applications 
            that solve real-world problems. My goal is to continuously learn and grow while 
            building impactful projects.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            In addition to coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and helping others learn. Feel free to reach out through the contact page!
          </p>
           <Link to="/">
                      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                      </button>
                    </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

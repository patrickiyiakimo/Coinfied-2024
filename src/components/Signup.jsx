import React from "react";
import { IoMdContact } from "react-icons/io";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex text-grey-400 justify-center items-center h-screen bg-gray-900">
      <div className="w-96 p-6 shagow-lg bg-white rounded-md">
        <h1 className="text-3xl text-gray-900 text-center block font-semibold">
          <IoMdContact className="text-gray-900" />
          Sign Up
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label for="username" className="block text-base mb-2">
            Name
          </label>
          <input
            type="text"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-900"
            placeholder="John Doe"
          />
        </div>
        <div className="mt-3">
          <label for="username" className="block text-base mb-2">
            Email
          </label>
          <input
            type="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-900"
            placeholder="JohnDoe@gmail.com"
          />
        </div>
        <div className="mt-3">
          <label for="username" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-900"
            placeholder="123454321"
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="">
            <input type="checkbox" />
            <label>I Agree to Terms & Conditions</label>
          </div>
          <div>
            <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { IoMdContact } from "react-icons/io";


const Login = () => {
  return (
    <div className="flex text-grey-400 justify-center items-center h-screen bg-gray-900">
      <div className="w-96 p-6 shagow-lg bg-white rounded-md">
        <h1 className="text-3xl text-gray-900 text-center block font-semibold">
          <IoMdContact className="text-gray-900" />
          Log in
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label for="email" className="block text-base mb-2">
            Email
          </label>
          <input
            type="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-900"
            placeholder="JohnDoe@gmail.com"
          />
        </div>
        <div className="mt-3">
          <label for="password" className="block text-base mb-2">
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
            <input type="checkbox" className="mr-1" />
            <label>Remember Me</label>
          </div>
          <div>
            <a href="#" className="text-indigo-800 font-semibold">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border-2 border-gray-800 bg-gray-700 text-white py-1  rounded w-full hover:bg-gray-300 hover:border-2 hover:text-gray-900 font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

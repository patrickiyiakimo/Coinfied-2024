import React from "react";
// import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id='Footer'>
      <div className="footer bg-blue-900 text-white">
        <p className="font-bold pt-10 text-center ">Sign up to learn more</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ducimus, nulla at inventore <br />
          corrupti animi ipsa molestiae sequi laudantium debitis nostrum a cum
          modi!
        </p>
        <div className="justify-center items-center">
          <input
            type="text"
            name="text"
            placeholder="Enter your email"
            className="ml-96 bg-blue-500 mt-5 mb-5 text-pink-400 py-2 px-4  "
            style={{ marginLeft: 500 }}
          />
          <button className="bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 hover:from-gray-500 hover:to-blue-500">
            Subscribe
          </button>
        </div>

        <div className=" text-center mt-20 bg-blue-800 pt-5 pb-5 shadow-lg p-6">
          <p>©2024 Coinfied. All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

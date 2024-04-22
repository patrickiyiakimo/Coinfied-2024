import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-blue-900 text-white">
        <p className="font-bold pt-10 pl-20 text-center ">
          Sign up to learn more
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Quibusdam ducimus, nulla at inventore corrupti animi ipsa
          molestiae sequi laudantium debitis nostrum a cum modi!
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            name="text"
            placeholder="Enter your email"
            className="items-center bg-blue-500 mt-5 mb-5 text-white py-2 px-4 rounded "
          />
          <button className="bg-blue-400 hover:bg-blue-700 text-white py-1 px-2">
            Subscribe
          </button>
        </div>

        <div className=" text-center mt-20 bg-blue-800 pt-5 pb-5">
          <p>©2024 Coinfied. All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer = () => {
  const [email, setEmail] = React.useState('')
  
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email)
  }
  
  const subscribe = () => {
    if (email.trim() === '') {
      toast.error("Please enter your email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return;
    }
    toast.success("Thanks For Subscribing!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    

  }
  
  return (
    <div id="Footer">
      <div className="footer bg-gray-700 text-white">
        <p className="font-bold pt-10 text-center ">Sign up to learn more</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ducimus, nulla at inventore <br />
          corrupti animi ipsa molestiae sequi laudantium debitis nostrum a cum
          modi!
        </p>
        <div className="justify-center items-center">
          <input
            onChange={handleEmailChange}
            type="email"
            value={email}
            placeholder="Enter your email"
            className="ml-96 bg-blue-500 mt-5 mb-5 text-white py-2 px-4 "
            style={{ marginLeft: 500 }}
          />
          <button onClick={subscribe } className="bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 hover:from-gray-500 hover:to-blue-500">
            Subscribe
          </button>
        </div>

        <div className=" text-center mt-20 bg-gray-600 pt-5 pb-5 shadow-lg p-6">
          <p>©2024 Coinfied. All rights Reserved</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Footer;

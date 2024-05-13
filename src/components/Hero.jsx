// import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import bitcoin from "../images/bitcoin.png"
// import ethereum from "../images/ethereum.png"
// import tetherusdt from "../images/tetherusdt.png";
// import './index.css';

const Hero = () => {
  return (
    <div className="bg-gray-900 border-t pt-20" id="Hero">
      <div>
        <p className=" text-white text-6xl font-bold ml-20 py-20 font-Gill ">
          Best place to buy and <br />
          sell <span className="text-blue-500">Crypto Currency</span> <br />
          assets
        </p>
        <p className="text-white ml-20">
          Step into the realm of digital currency with Coinfied, where
          possibilities abound and opportunities await. Coinfied isn't just
          another platform; it's your passport to the exciting world of
          cryptocurrency trading. With Coinfied, buying and selling crypto has
          never been easier. Our sleek interface guides you through every step,
          whether you're a seasoned trader or just dipping your toes into the
          crypto waters.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 rounded hover:from-gray-500 hover:to-blue-500 ml-36 mt-20 mb-20">
          Get Started
        </button>
        <button className="ml-10 border border-blue-500 border-blue-500 text-white font-bold py-2 px-4 rounded bg-transparent">
          Watch Tutorial
        </button>
      </div>
    </div>
  );
};

export default Hero;

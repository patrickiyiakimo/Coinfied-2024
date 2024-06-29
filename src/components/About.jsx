import undraw from "../images/undraw_Bitcoin_re_urgq.png";
import AboutText from "./AboutText";
import MyPlayer from "./MyPlayer";


const About = () => {
  return (
    <div className="bg-gray-900 About">
      <div className="About">
        <p className="text-blue-500 text-center md:text-center pt-5 md:pr-20 md:mr-80 md:ml-80 font-bold md:pl-80 md:pt-10 md:pb-5 text-4xl">
          About Us
        </p>
        <p className=" text-white text-center md:text-center md:ml-20 md:pl-80 text-2xl font-bold">
          Accelerate the world's transition
        </p>
        <img
          className="md:w-1/2 p-4 md:pl-56 md:absolute md:top-60  md:py-40  md:m-96 md:right-96 "
          src={undraw}
          alt="bitcoin-pics"
        />
        <p className="text-white p-10 md:ml-80 md:pl-80 pt-5 pb-20 md:mr-20">
        Coinfied is a web application designed as a go-to platform for buying and selling cryptocurrency. It offers a user-friendly interface, robust security measures, and a diverse selection of cryptocurrencies. Real-time market data, mobile accessibility, and advanced trading tools enhance the trading experience. Dedicated customer support ensures assistance whenever needed. Coinfied prioritizes regulatory compliance, providing a trustworthy environment for cryptocurrency trading.
        </p>

        <p className="ml-20 md:text-center text-4xl pb-5 text-blue-500  font-bold md:mt-20">
          Why Choose Us
        </p>
        <p className="text-center text-2xl  font-bold text-white pb-10">
          Safe, guaranteed and easy to use
        </p>
        <p className="text-center text-white px-5 md:pb-20 md:px-40 ">
          <AboutText />
        </p>
         <p className="text-center text-white px-5 md:pb-20 md:px-40 ">
          <AboutText />
        </p>
        <MyPlayer />
      </div>
    </div>
  );
};

export default About;

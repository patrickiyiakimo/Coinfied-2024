// import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-sky-900 border-t" id="Hero">
      <div>
        <p className="text-white text-6xl font-bold ml-20 py-20 font-Gill">
          Best place to buy and <br />
          sell <span className="text-blue-500">Crypto Currency</span> <br />
          assets
        </p>
        <p className="text-white ml-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dignissimos reiciendis,
          <br /> quae mollitia voluptatum doloremque perspiciatis officia,
          impedit autem error, cumque deleniti
          <br /> tenetur dolorum assumenda consequuntur culpa reprehenderit ab
          nobis quos cupiditate
          <br /> itaque? Quam in ratione modi debitis vero temporibus dolor
          libero molestias!
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

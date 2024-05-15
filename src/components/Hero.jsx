import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="bg-gray-900 border-t pt-20 Hero">
      <div>
        <p className="text-white font-3xl pb-10 py-10 md:text-white text-4xl md:text-6xl font-bold ml-10 pr-1 md:ml-20 md:py-20 font-Gill ">
          Best place to buy and <br />
          sell <span className="text-blue-500">Crypto Currency</span> <br />
          assets
        </p>
        <p className="text-white ml-7 mr-5 md:ml-20">
          <HeroText />
        </p>
        <button className="transition ease-in-out duration-300 bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 ml-10 rounded hover:from-gray-500 hover:to-blue-500 md:ml-36 mt-20 mb-20">
          Get Started
        </button>
        <button className="sm:ml-20 ml-10 border border-blue-500 border-blue-500 text-white font-bold py-2 px-4 rounded bg-transparent">
          Download App
        </button>
      </div>
    </div>
  );
};

export default Hero;

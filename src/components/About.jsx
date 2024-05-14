import undraw from "../images/undraw_Bitcoin_re_urgq.png";


const About = () => {
  
  return (
    <div className="bg-gray-900 About">
      <div className="About">
        <p className="text-blue-500 mdpr-80 mr-80 ml-80 font-bold pl-80 pt-10 pb-5 text-4xl">
          About Us
        </p>
        <p className="text-white md:ml-80 pl-80 text-2xl font-bold">
          Accelerate the world's transition
        </p>
        <img
          className="md:w-1/2 pl-56 absolute top-60  py-40  m-96 right-96 "
          src={undraw}
          alt="bitcoin-pics"
        />
        <p className="text-white md:ml-80 pl-80 pt-5 pb-20 mr-20">
        Coinfied is a web application designed as a go-to platform for buying and selling cryptocurrency. It offers a user-friendly interface, robust security measures, and a diverse selection of cryptocurrencies. Real-time market data, mobile accessibility, and advanced trading tools enhance the trading experience. Dedicated customer support ensures assistance whenever needed. Coinfied prioritizes regulatory compliance, providing a trustworthy environment for cryptocurrency trading.
        </p>

        <p className="ml-20 md:text-center text-4xl pb-5 text-blue-500 font-bold mt-20">
          Why Choose Us
        </p>
        <p className="text-center text-2xl font-bold text-white pb-10">
          Safe, guaranteed and easy to use
        </p>
        <p className="text-center text-white px-10 md:pb-20 px-40 ">
          Its intuitive platform caters to users of all levels, making
          navigation effortless. Security is paramount, with robust measures in
          place to safeguard user accounts and assets. A diverse array of
          cryptocurrencies is available, accommodating both mainstream and niche
          preferences. Real-time market data empowers users with insights
          crucial for informed decision-making. The mobile-friendly design
          ensures accessibility on-the-go via smartphones or tablets. Advanced
          trading tools, including customizable charts and technical analysis
          indicators, cater to seasoned traders. Dedicated customer support
          stands ready to assist users with any queries or concerns. Coinfied's
          commitment to regulatory compliance ensures a trustworthy and
          compliant trading environment.
        </p>
      </div>
    </div>
  );
};

export default About;

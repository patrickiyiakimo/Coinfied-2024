import bitcoin from "../images/bitcoing-halving-countdown-2024-bitpay.jpg";
const About = () => {
  return (
    <div className="bg-gray-900">
      <div>
        <p className="text-blue-700 ml-80 pl-80 pt-20 pb-10">About Us</p>
        <p className="text-white ml-80 pl-80 text-4xl font-bold">
          Accelerate the world's transition
        </p>
        <img
          className=" w-1/2  pl-56 absolute top-60  py-40  m-96 right-96 "
          src={bitcoin}
          alt="bitcoin-pics"
        />
        <p className="text-white ml-80 pl-80 pt-5 pb-20 mr-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          obcaecati eligendi,
          <br /> aut id consequatur doloribus nobis magni? Nobis error
          laboriosam rem perferendis blanditiis ullam velit, ratione totam illum
          at sit eos,
          <br /> veniam, neque nemo earum? Totam libero quis dicta eius
          doloribus sapiente ut.
        </p>
        {/* <button className="bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 rounded hover:from-gray-500 hover:to-blue-500 ml-96 mt-5 mb-10 ">
          More About Us
        </button> */}
        <p className="text-center text-blue-700 font-bold mt-20">Why Choose Us</p>
        <p className="text-center text-4xl text-white pb-10">Safe, guaranteed and easy to use</p>
        <p className="text-center text-white pb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          porro delectus rerum modi. <br />
          Cupiditate incidunt excepturi vero, nemo veniam ex quasi quod, tempora
          blanditiis recusandae, reiciendis consequuntur labore facere <br />
          ipsum. Nemo cumque officiis porro, dignissimos fuga, animi quibusdam
          necessitatibus rerum nihil, sapiente quas.
        </p>
      </div>
    </div>
  );
};

export default About;

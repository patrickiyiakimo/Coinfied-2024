import undraw from "../images/undraw_Bitcoin_re_urgq.png";
import undraw_eth from "../images/undraw_Ether_re_y7ft.png";
// import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="bg-gray-900" id="About">
      <div>
        <p className="text-blue-500 ml-80 font-bold pl-80 pt-10 pb-10 text-4xl">
          About Us
        </p>
        <p className="text-white ml-80 pl-80 text-2xl font-bold">
          Accelerate the world's transition
        </p>
        <img
          className=" w-1/2 pl-56 absolute top-60  py-40  m-96 right-96 "
          src={undraw}
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

        <p className="text-center text-4xl text-blue-500 font-bold mt-20">
          Why Choose Us
        </p>
        <p className="text-center text-2xl font-bold text-white pb-10">
          Safe, guaranteed and easy to use
        </p>
        <p className="text-center text-white pb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          porro delectus rerum modi. <br />
          Cupiditate incidunt excepturi vero, nemo veniam ex quasi quod, tempora
          blanditiis recusandae, reiciendis consequuntur labore facere <br />
          ipsum. Nemo cumque officiis porro, dignissimos fuga, animi quibusdam
          necessitatibus rerum nihil, sapiente quas.
        </p>
      </div>
      <div>
        <img src={undraw_eth} alt="Eth-pics" className="w-80 h-80 ml-96"/>
      </div>
    </div>
  );
};

export default About;

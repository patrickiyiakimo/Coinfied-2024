import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="">
      <div className="bg-gray-800 text-white text-sm py-4 font-Gill fixed top-0 w-full z-10 ">
        <ul className="flex">
          <li>
            <h1 className="text-4xl font-bold px-10 pr-20">Coinfied</h1>
          </li>
          <li className="px-10 py-2 pl-32 hover:text-blue-300 cursor-pointer hover:underline ">
            <Link to="Hero" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>

          <li className="px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
            <Link
              to="Market"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Market
            </Link>
          </li>
          <li className="px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
            <Link to="Faq" spy={true} smooth={true} offset={-90} duration={500}>
              FAQ
            </Link>
          </li>

          <li className="px-10 py-2 pr-40 hover:text-blue-300 cursor-pointer hover:underline ">
            <Link
              to="Footer"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

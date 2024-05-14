// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import React from "react";
// import { FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isSetMenu, setIsSetMenu] = React.useState(false);

//   return (
//     <div className="sticky top-0 z-10">
//       <div className="bg-gray-800 text-white text-sm py-4 font-Gill fixed w-full ">
//         <ul className="flex-col md:block space-y-4 space-x-4 flex mb-10">
//           <button onClick={() => setIsSetMenu(!isSetMenu)}>
//             <FaTimes className="text-3xl ml-5 md:hidden absolute" />
//           </button>

//           <button onClick={() => setIsSetMenu(!isSetMenu)}>
//             <FiMenu className="mt-5 text-3xl ml-5 ml-80 md:hidden absolute" />
//           </button>
//           <li>
//             <h1 className="text-4xl display:flex font-bold px-5">Coinfied</h1>
//           </li>

//           {isSetMenu && (
//             <div className="md:flex md:flex-col space-y-4 space-x-4">

//               <li className="flex-col mt-10 space-y-4 py-2 px-4 text-sm pl-8 md:block px-10 py-2 pl-32 hover:text-blue-300 cursor-pointer hover:underline">
//                 <Link
//                   to="Hero"
//                   spy={true}
//                   smooth={true}
//                   offset={0}
//                   duration={500}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="flex-col  space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
//                 <Link
//                   to="About"
//                   spy={true}
//                   smooth={true}
//                   offset={-90}
//                   duration={500}
//                 >
//                   About
//                 </Link>
//               </li>

//               <li className="flex-col  space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
//                 <Link
//                   to="Market"
//                   spy={true}
//                   smooth={true}
//                   offset={-90}
//                   duration={500}
//                 >
//                   Market
//                 </Link>
//               </li>
//               <li className="flex-col  space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
//                 <Link
//                   to="Faq"
//                   spy={true}
//                   smooth={true}
//                   offset={-90}
//                   duration={500}
//                 >
//                   FAQ
//                 </Link>
//               </li>

//               <li className="flex-col  space-y-4 py-2 px-4 text-sm md:block px-10 py-2 pr-40 hover:text-blue-300 cursor-pointer hover:underline ">
//                 <Link
//                   to="Footer"
//                   spy={true}
//                   smooth={true}
//                   offset={-90}
//                   duration={500}
//                 >
//                   Subscribe
//                 </Link>
//               </li>
//             </div>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Link as ScrollLink } from "react-scroll";



const Navbar = () => {
  const [isSetMenu, setIsSetMenu] = React.useState(false);

  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="bg-gray-900 shadow-lg text-white text-sm py-1 font-Gill fixed w-full">
        <ul className="flex-col flex space-y-4 md:space-y-0 space-x-4 mb-10 md:mb-0 ">
          {/* Menu button for mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsSetMenu(!isSetMenu)}
          >
            {isSetMenu ? (
              <FaTimes className="text-3xl text-red-500 ml-80 absolute mt-6 ml-5 " />
            ) : (
              <FiMenu className="mt-6 text-3xl ml-80 absolute ml-5  " />
            )}
          </button>
          {/* Logo */}
          <li>
            <h1 className="text-4xl font-bold md:flex md:items-center">
              Coinfied
            </h1>
          </li>
          {/* Navbar items */}
          <div
            className={`md:flex md:justify-end space-x-4  ${
              isSetMenu ? "block" : "hidden"
            }`}
          >
            {/* Navbar items */}
            <li className="flex-col mt-0 space-y-4 py-2 px-4 text-sm pl-8 md:block px-10 py-2 pl-32 hover:text-blue-300 cursor-pointer hover:underline">
              <ScrollLink
                to="Hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li className="flex-col space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
              <ScrollLink
                to="About"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li className="flex-col space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
              <ScrollLink
                to="Market"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Market
              </ScrollLink>
            </li>
            <li className="flex-col space-y-4 py-2 px-4 text-sm md:block px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
              <ScrollLink
                to="faq"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                FAQ
              </ScrollLink>
            </li>
            <li className="flex-col space-y-4 py-2 px-4 text-sm md:block px-10 py-2 pr-40 hover:text-blue-300 cursor-pointer hover:underline">
              <ScrollLink
                to="Footer"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Subscribe
              </ScrollLink>
            </li>
            <li className= "flex-col space-y-4 py-2 px-4 text-sm md:block px-10 py-2 pr-40 text-blue-300 cursor-pointer hover:underline">
              <Link
                to="/Signup"
                // spy={true}
                // smooth={true}
                // offset={-90}
                // duration={500}
              >
                Sign Up
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

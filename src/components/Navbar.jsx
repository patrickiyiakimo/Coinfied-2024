const Navbar = () => {
  return (
    <div className="">
      <div className="bg-sky-900 text-white text-sm py-4 font-Gill">
        <ul className="flex">
          <li>
            <h1 className="text-4xl font-bold px-10 pr-20">Coinfied</h1>
          </li>
          <li className="px-10 py-2 pl-32 hover:text-blue-300 cursor-pointer hover:underline ">
            Home
          </li>
          <li className="px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
            About
          </li>
          <li className="px-10 py-2 hover:text-blue-300 cursor-pointer hover:underline">
            Market
          </li>
          <li className="px-10 py-2 pr-40 hover:text-blue-300 cursor-pointer hover:underline ">
            Contact
          </li>
          <li className="pl-40 py-2 hover:text-blue-300 cursor-pointer">
            <button className="bg-gradient-to-r from-blue-500 to-gray-500 text-white font-bold py-2 px-4 rounded hover:from-gray-500 hover:to-blue-500">
              Download App
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

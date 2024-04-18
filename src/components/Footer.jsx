import React from "react";


const Footer = () => {
  return (
    <div>
      <div className="footer bg-blue-900 text-white">
        <p className="text-blue-200 text-center pt-20">Start Now</p>
        <p className="font-bold pt-2 pl-20 text-center ">Sign up to learn more</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Quibusdam
          ducimus, nulla at inventore corrupti animi ipsa molestiae sequi
          laudantium debitis nostrum a cum modi!
        </p>
        <input type="text" name="text" placeholder="Enter your email" className=" " />
        <button className="">Subscribe</button>
        <div className="footer-section bg-blue-600 ml-20 mr-20 mt-20">
          <p className="">Coinfied</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            omnis commodi, nihil veritatis inventore earum autem suscipit vel
            obcaecati optio cupiditate fuga natus aperiam.
          </p>
          <section className="">
            <p>Our Products</p>
            <p>Crypto Earn</p>
            <p>Exchanges</p>
            <p>Defi Wallet</p>
            <p>Converter</p>
            <p>Pages</p>
            <p>About Us</p>
            <p>Our App</p>
            <p>Careers</p>
            <p>Token Safe</p>
            <p>Contact</p>
            <p>08083729474</p>
            <p>Mon-Fri: 9am-11pm</p>
            <p>Coinfied@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;

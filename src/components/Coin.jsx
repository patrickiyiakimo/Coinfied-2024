import React from "react";


const Coin = ({
  name,
  image,
  symbol,
  price,
//   volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="  coin-container ">
      <hr className="border-gray-600 mb-5" />
      <div className="coin-row hover:bg-gray-800 hover:text-blue-700 ">
        <div className="coin pr-5 pl-5 grid grid-cols-6 gap-10 md:pr-10 md:pl-10">
          <img className="w-5 md:w-11" src={image} alt="crypto" />
          <p className=" text-white">{name}</p>
          <p className="text-white coin-symbol">{symbol}</p>

          
            <p className=" text-white coin-price   ">${price}</p>
            {/* <p className=" text-white coin-volume ">${volume}</p> */}
            {priceChange < 0 ? (
              <p className=" text-red-400  coin-percent red">
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className=" text-green-400 coin-percent green">
                {priceChange.toFixed(2)}%
              </p>
            )}
            <p className="text-white coin-marketcap">
              MKT Cap: ${marketcap.toLocaleString()}
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default Coin;

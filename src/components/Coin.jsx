import React from "react";

const Coin = ({ name, image, symbol, price, priceChange, marketcap }) => {
  return (
    <div className="  coin-container mb-10">
      <hr className="border-gray-600  mt-2" />
      <div className="coin-row hover:bg-gray-800 hover:text-blue-700 ">
        <div className="coin pr-10 pl-3 grid grid-cols-5 gap-3 md:pr-10 md:pl-28">
          <img className="w-5 mt-3 md:w-11" src={image} alt="crypto" />
          <p className=" text-white mt-3">{name}</p>
          <p className="text-white coin-symbol mt-3">{symbol}</p>
          <p className=" text-white coin-price mt-3">${price}</p>
          {priceChange < 0 ? (
            <p className=" text-red-400 mt-3 coin-percent red">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className=" text-green-400 mt-3 coin-percent green">
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="text-white mt-3 coin-marketcap">
            {/* MKT Cap: ${marketcap.toLocaleString()} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

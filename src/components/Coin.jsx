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
    <div className="pl-5 border-t coin-container pt-5 pb-5">
      <div className="coin-row flex hover:bg-gray-600 hover:text-blue-700 hover:bg-gray-600  ">
        <div className="coin flex items-center">
          <img className="w-11 mr-4 ml-40" src={image} alt="crypto" />
          <p className=" text-white">{name}</p>
          <p className="text-white coin-symbol">{symbol}</p>
        </div>
        <div className=" text-white coin-data flex items-center ml-40">
          <p className=" text-white coin-price mr-40 ">${price}</p>
          {/* <p className=" text-white coin-volume ">${volume}</p> */}
          {priceChange < 0 ? (
            <p className=" text-red-400  coin-percent red">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className=" text-green-400  coin-percent green">
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="text-white ml-32 coin-marketcap">
            MKT Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

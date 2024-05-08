import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";
import Pagination from "./Pagination";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coins.slice(firstPostIndex, lastPostIndex);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fillteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="Market" className="bg-gray-900 pb-20">
      <div className="">
        <p className="text-white font-bold text-center pt-20 text-4xl">
          Market Price
        </p>
        <p className="text-white text-center pt-5 text-2xl">
          Search a currency
        </p>
        <form className="flex justify-center items-center">
          <input
            className="bg-gradient-to-r from-purple-500 to-gray-500 mt-5 mb-5 text-white py-2 px-4 rounded"
            type="text"
            name="text"
            placeholder="search"
            onChange={handleChange}
          />
        </form>
      </div>
      {currentPosts.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      <Pagination totalPosts={coins.length} postsPerPage={postsPerPage} setCurrentPage={ setCurrentPage} />
    </div>
  );
};

export default Market;

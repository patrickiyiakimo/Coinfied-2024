import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center">
      {pages.map((page, index) => {
          return <button key={index} onClick={() => setCurrentPage(page)} className={`bg-gray-400  hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${page === currentPage ? "bg-gray-600" : ""}`} style={{margin: "0 5px"}}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;

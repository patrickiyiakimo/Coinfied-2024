import React from "react";


const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center">
      {pages.map((page, index) => {
          return <button key={index} onClick={() => setCurrentPage(page)} className={`bg-gray-400  hover:bg-gray-500 text-sm text-white m-1 font-bold py-1 px-2 md:py-2 md:px-4 rounded ${page === currentPage ? "bg-gray-600" : ""}`} style={{margin: "0 5px"}}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;

















// {
//   "name": "coinfied",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^1.6.8",
//     "clsx": "^2.1.1",
//     "marque": "^1.0.1",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-fast-marquee": "^1.6.4",
//     "react-icons": "^5.2.1",
//     "react-router-dom": "^5.3.4",
//     "react-scripts": "5.0.1",
//     "react-scroll": "^1.9.0",
//     "react-toastify": "^10.0.5",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test --coverage",
//     "coverage": "react-scripts test --coverage",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "jest": "^27.5.1",  
//     "tailwindcss": "^3.4.3"
//   }
// }

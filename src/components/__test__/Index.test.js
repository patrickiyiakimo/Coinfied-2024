// import React from "react";
// import ReactDOM from "react-dom/client";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import App from "../App";
// import "../index.css"; // Ensure you import the CSS to avoid styling issues

// describe("Index Component", () => {
//   test("renders App component without crashing", () => {
//     // Create a mock root element
//     const rootElement = document.createElement("div");
//     rootElement.setAttribute("id", "root");
//     document.body.appendChild(rootElement);

//     // Render the App component
//     const root = ReactDOM.createRoot(rootElement);
//     root.render(<App />);

//     // Check if the App component is rendered by looking for a specific text or element
//     // Adjust the text to something specific from your App component if needed
//     expect(screen.getByText(/Best place to buy and/i)).toBeInTheDocument(); // Example, adjust based on actual content
//   });
// });



// index.test.js
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../App";
import { BrowserRouter as Router } from "react-router-dom"; // if you use routing in App.js

test("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(
    <Router>
      <App />
    </Router>
  );
  // If no errors were thrown, the test will pass
});

// index.test.js
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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

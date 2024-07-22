// App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import { expect } from "@jest/globals";

describe("App Component", () => {
  test("renders Navbar, Hero, About, Market, Faq, and Footer on the homepage", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if Navbar is rendered
    expect(screen.getByText(/Coinfied/i)).toBeInTheDocument();

    // Check if Hero section is rendered
    expect(
      screen.getByText(/Best place to buy and sell Crypto Currency assets/i)
    ).toBeInTheDocument();

    // Check if About section is rendered
    expect(
      screen.getByText(/To sign up for Coinfied, visit the website/i)
    ).toBeInTheDocument();

    // Check if Market section is rendered
    expect(screen.getByText(/Market/i)).toBeInTheDocument();

    // Check if FAQ section is rendered
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();

    // Check if Footer is rendered
    expect(
      screen.getByText(/©2024 Coinfied. All rights Reserved/i)
    ).toBeInTheDocument();
  });

  test("navigates to Sign Up page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );

    // Simulate navigation to /signup
    fireEvent.click(screen.getByText(/Sign Up/i));

    // Check if SignUp component is rendered
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  test("navigates to Login page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );

    // Simulate navigation to /login
    fireEvent.click(screen.getByText(/Log In/i));

    // Check if Login component is rendered
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Mocking components used in App
jest.mock("./components/Navbar", () => () => <div>Navbar</div>);
jest.mock("./components/Hero", () => () => <div>Hero</div>);
jest.mock("./components/About", () => () => <div>About</div>);
jest.mock("./components/Market", () => () => <div>Market</div>);
jest.mock("./components/Faq", () => () => <div>Faq</div>);
jest.mock("./components/Footer", () => () => <div>Footer</div>);
jest.mock("./components/Signup", () => () => <div>SignUp</div>);
jest.mock("./components/Login", () => () => <div>Login</div>);

describe("App Component", () => {
  test("renders Navbar and all sections for the home page route", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
    expect(screen.getByText(/Hero/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Market/i)).toBeInTheDocument();
    expect(screen.getByText(/Faq/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });

  test("renders SignUp component for /signup route", () => {
    window.history.pushState({}, "Test Page", "/signup");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/SignUp/i)).toBeInTheDocument();
  });

  test("renders Login component for /login route", () => {
    window.history.pushState({}, "Test Page", "/login");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});

// src/components/Navbar.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders Navbar and navigates correctly", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the Navbar renders correctly
    expect(screen.getByText(/Coinfied/i)).toBeInTheDocument();

    // Simulate clicking on 'Sign Up' link
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(window.location.pathname).toBe("/signup");

    // Simulate clicking on 'Log In' link
    fireEvent.click(screen.getByText(/Log In/i));
    expect(window.location.pathname).toBe("/login");
  });

  test("toggles menu in mobile view", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Initially menu should be closed
    expect(screen.queryByText(/Home/i)).toBeNull();

    // Simulate menu button click
    fireEvent.click(screen.getByRole("button"));

    // Menu should now be visible
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../Signup";


describe("Signup Component", () => {
  beforeEach(() => {
    render(<Signup />);
  });

  test("renders the Signup component correctly", () => {
    // Check if the title is rendered
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();

    // Check if the input fields are rendered
    expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/JohnDoe@gmail.com/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/123454321/i)).toBeInTheDocument();

    // Check if the checkbox and link are rendered
    expect(
      screen.getByLabelText(/I Agree to Terms & Conditions/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Forgot Password?/i)).toBeInTheDocument();

    // Check if the submit button is rendered with correct text
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test("renders the Signup component with correct styles", () => {
    // Check if the button has correct class names
    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toHaveClass(
      "border-2",
      "border-gray-800",
      "bg-gray-700",
      "text-white",
      "py-1",
      "rounded",
      "w-full",
      "hover:bg-gray-300",
      "hover:border-2",
      "hover:text-gray-900",
      "font-semibold"
    );
  });
});

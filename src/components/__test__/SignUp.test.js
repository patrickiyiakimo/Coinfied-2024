// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Signup from "../Signup";

// describe("Signup Component", () => {
//   test("renders the Signup form with all input fields and labels", () => {
//     render(<Signup />);

//     expect(screen.getByText("Sign Up")).toBeInTheDocument();
//     expect(screen.getByLabelText("Name")).toBeInTheDocument();
//     expect(screen.getByLabelText("Email")).toBeInTheDocument();
//     expect(screen.getByLabelText("Password")).toBeInTheDocument();
//     expect(
//       screen.getByText("I Agree to Terms & Conditions")
//     ).toBeInTheDocument();
//     expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
//   });

//   test("allows input in the Name field", () => {
//     render(<Signup />);

//     const nameInput = screen.getByPlaceholderText("John Doe");
//     fireEvent.change(nameInput, { target: { value: "Jane Doe" } });

//     expect(nameInput.value).toBe("Jane Doe");
//   });

//   test("allows input in the Email field", () => {
//     render(<Signup />);

//     const emailInput = screen.getByPlaceholderText("JohnDoe@gmail.com");
//     fireEvent.change(emailInput, { target: { value: "jane.doe@gmail.com" } });

//     expect(emailInput.value).toBe("jane.doe@gmail.com");
//   });

//   test("allows input in the Password field", () => {
//     render(<Signup />);

//     const passwordInput = screen.getByPlaceholderText("123454321");
//     fireEvent.change(passwordInput, { target: { value: "password123" } });

//     expect(passwordInput.value).toBe("password123");
//   });

//   test("checks the Terms & Conditions checkbox", () => {
//     render(<Signup />);

//     const checkbox = screen.getByLabelText(/I Agree to Terms & Conditions/i);
//     fireEvent.click(checkbox);

//     expect(checkbox.checked).toBe(true);
//   });

//   test("submit button works", () => {
//     render(<Signup />);

//     const submitButton = screen.getByRole("button", { name: /submit/i });
//     fireEvent.click(submitButton);

   
//   });
// });


import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "./Signup";

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

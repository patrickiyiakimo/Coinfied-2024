import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../Signup";

describe("Signup Component", () => {
  test("renders the Signup form with all input fields and labels", () => {
    render(<Signup />);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByText("I Agree to Terms & Conditions")
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("allows input in the Name field", () => {
    render(<Signup />);

    const nameInput = screen.getByPlaceholderText("John Doe");
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });

    expect(nameInput.value).toBe("Jane Doe");
  });

  test("allows input in the Email field", () => {
    render(<Signup />);

    const emailInput = screen.getByPlaceholderText("JohnDoe@gmail.com");
    fireEvent.change(emailInput, { target: { value: "jane.doe@gmail.com" } });

    expect(emailInput.value).toBe("jane.doe@gmail.com");
  });

  test("allows input in the Password field", () => {
    render(<Signup />);

    const passwordInput = screen.getByPlaceholderText("123454321");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  test("checks the Terms & Conditions checkbox", () => {
    render(<Signup />);

    const checkbox = screen.getByLabelText(/I Agree to Terms & Conditions/i);
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  test("submit button works", () => {
    render(<Signup />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

   
  });
});

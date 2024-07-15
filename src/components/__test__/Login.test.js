import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

describe("Login Component", () => {
  test("renders Login component correctly", () => {
    render(<Login />);

    // Check if the Login header is rendered
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();

    // Check if the email input is rendered
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

    // Check if the password input is rendered
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check if the remember me checkbox is rendered
    expect(screen.getByLabelText(/Remember Me/i)).toBeInTheDocument();

    // Check if the forgot password link is rendered
    expect(screen.getByText(/Forgot Password?/i)).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("email input should accept text", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  test("password input should accept text", () => {
    render(<Login />);

    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  test("checkbox should be checkable", () => {
    render(<Login />);

    const checkbox = screen.getByLabelText(/Remember Me/i);
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  test("submit button should be clickable", () => {
    render(<Login />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);

    // Since there's no form submission logic in the component, we just check that the button is clickable
    expect(submitButton).toBeEnabled();
  });
});

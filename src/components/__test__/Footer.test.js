import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";

// Mock toastify module to prevent actual toasts in tests
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
  ToastContainer: () => <div />,
}));

describe("Footer Component", () => {
  test("renders Footer component correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Sign up to learn more")).toBeInTheDocument();
    expect(
      screen.getByText(
        /To sign up for Coinfied, visit the website, fill out the registration form, verify your email, complete any additional steps, and log in to your account./i
      )
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
    expect(
      screen.getByText("©2024 Coinfied. All rights Reserved")
    ).toBeInTheDocument();
  });

  test("handles email input change", () => {
    render(<Footer />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("shows error toast when subscribing with empty email", () => {
    render(<Footer />);
    const subscribeButton = screen.getByText("Subscribe");
    fireEvent.click(subscribeButton);
    expect(toast.error).toHaveBeenCalledWith("Please enter your email", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });

  test("shows success toast when subscribing with a valid email", () => {
    render(<Footer />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const subscribeButton = screen.getByText("Subscribe");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(subscribeButton);

    expect(toast.success).toHaveBeenCalledWith("Thanks For Subscribing!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });
});

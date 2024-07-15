import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(() => null),
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Footer Component", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    expect(screen.getByText(/Sign up to learn more/i)).toBeInTheDocument();
    expect(screen.getByText(/To sign up for Coinfied/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Subscribe/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/©2024 Coinfied. All rights Reserved/i)
    ).toBeInTheDocument();
  });

  test("updates email input value on change", () => {
    render(<Footer />);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("shows error toast when subscribing with empty email", () => {
    render(<Footer />);
    const subscribeButton = screen.getByRole("button", { name: /Subscribe/i });
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
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const subscribeButton = screen.getByRole("button", { name: /Subscribe/i });
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

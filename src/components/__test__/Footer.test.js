import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

describe("Footer Component", () => {
  test("renders Footer component correctly", () => {
    render(<Footer />);

    // Check if the subscription message is rendered
    expect(screen.getByText(/Sign up to learn more/i)).toBeInTheDocument();
    expect(
      screen.getByText(/To sign up for Coinfied, visit the website/i)
    ).toBeInTheDocument();

    // Check if the email input is rendered
    expect(
      screen.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();

    // Check if the subscribe button is rendered
    expect(
      screen.getByRole("button", { name: /Subscribe/i })
    ).toBeInTheDocument();

    // Check if the footer message is rendered
    expect(
      screen.getByText(/©2024 Coinfied. All rights Reserved/i)
    ).toBeInTheDocument();
  });

  test("email input should accept text", () => {
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  test("shows error toast if email is empty", () => {
    render(<Footer />);

    const subscribeButton = screen.getByRole("button", { name: /Subscribe/i });
    fireEvent.click(subscribeButton);

    expect(screen.getByText(/Please enter your email/i)).toBeInTheDocument();
  });

  test("shows success toast if email is provided", () => {
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const subscribeButton = screen.getByRole("button", { name: /Subscribe/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(subscribeButton);

    expect(screen.getByText(/Thanks For Subscribing!/i)).toBeInTheDocument();
  });
});

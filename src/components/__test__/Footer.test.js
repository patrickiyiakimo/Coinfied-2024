// Footer.test.js

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders the component correctly", () => {
    const { getByText, getByPlaceholderText } = render(<Footer />);

    // Check if the component renders sign up message
    expect(getByText("Sign up to learn more")).toBeInTheDocument();

    // Check if input field and subscribe button are rendered
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(getByText("Subscribe")).toBeInTheDocument();
  });

  it("updates email state on input change", () => {
    const { getByPlaceholderText } = render(<Footer />);
    const emailInput = getByPlaceholderText("Enter your email");

    // Simulate user input in email field
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Check if email state is updated correctly
    expect(emailInput.value).toBe("test@example.com");
  });

  it("displays error toast when subscribing with empty email", async () => {
    const { getByPlaceholderText, getByText } = render(<Footer />);
    const emailInput = getByPlaceholderText("Enter your email");
    const subscribeButton = getByText("Subscribe");

    // Click subscribe button without entering email
    fireEvent.click(subscribeButton);

    // Wait for toast to appear
    await waitFor(() => {
      expect(getByText("Please enter your email")).toBeInTheDocument();
    });
  });

  it("displays success toast when subscribing with valid email", async () => {
    const { getByPlaceholderText, getByText } = render(<Footer />);
    const emailInput = getByPlaceholderText("Enter your email");
    const subscribeButton = getByText("Subscribe");

    // Enter a valid email
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Click subscribe button
    fireEvent.click(subscribeButton);

    // Wait for success toast to appear
    await waitFor(() => {
      expect(getByText("Thanks For Subscribing!")).toBeInTheDocument();
    });
  });
});

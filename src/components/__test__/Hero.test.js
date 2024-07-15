import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

// Mocking HeroText component
jest.mock("./HeroText", () => () => <div>Hero Text Content</div>);

describe("Hero Component", () => {
  test("renders the Hero component correctly", () => {
    render(<Hero />);

    // Check if the main text is rendered
    expect(screen.getByText(/Best place to buy and/i)).toBeInTheDocument();
    expect(screen.getByText(/sell/i)).toBeInTheDocument();
    expect(screen.getByText(/Crypto Currency/i)).toBeInTheDocument();
    expect(screen.getByText(/assets/i)).toBeInTheDocument();

    // Check if the HeroText component is rendered
    expect(screen.getByText(/Hero Text Content/i)).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
    expect(screen.getByText(/Download App/i)).toBeInTheDocument();

    // Check if the main button has correct classes
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toHaveClass(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-gray-500",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "ml-10",
      "rounded",
      "hover:from-gray-500",
      "hover:to-blue-500",
      "md:ml-36",
      "mt-20",
      "mb-20"
    );

    // Check if the download button has correct classes
    const downloadButton = screen.getByText(/Download App/i);
    expect(downloadButton).toHaveClass(
      "sm:ml-20",
      "ml-10",
      "border",
      "border-blue-500",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded",
      "bg-transparent"
    );
  });
});

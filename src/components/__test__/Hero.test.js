import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for toBeInTheDocument matcher
import Hero from "../Hero";
import HeroText from "../HeroText";

// Mocking the HeroText component
jest.mock("../HeroText", () => () => <div>Mocked Hero Text</div>);

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("renders the Hero component correctly", () => {
    // Check if the main text is rendered correctly
    expect(screen.getByText(/Best place to buy and/i)).toBeInTheDocument();
    expect(screen.getByText(/sell/i)).toBeInTheDocument();
    expect(screen.getByText(/Crypto Currency/i)).toBeInTheDocument();
    expect(screen.getByText(/assets/i)).toBeInTheDocument();

    // Check if the HeroText component is rendered
    expect(screen.getByText(/Mocked Hero Text/i)).toBeInTheDocument();

    // Check if the "Get Started" button is rendered and has correct classes
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveClass(
      "transition",
      "ease-in-out",
      "duration-300",
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

    // Check if the "Download App" button is rendered and has correct classes
    const downloadButton = screen.getByText(/Download App/i);
    expect(downloadButton).toBeInTheDocument();
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

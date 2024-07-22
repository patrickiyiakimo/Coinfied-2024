import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About"; // Ensure the path is correct
import undraw from "../images/undraw_Bitcoin_re_urgq.png";

// Mocking AboutText and MyPlayer components
jest.mock("./AboutText", () => () => <div>About Text Content</div>);
jest.mock("./MyPlayer", () => () => <div>MyPlayer Content</div>);

describe("About Component", () => {
  test("renders About Us title", () => {
    render(<About />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  test("renders the main description text", () => {
    render(<About />);
    expect(
      screen.getByText("Accelerate the world's transition")
    ).toBeInTheDocument();
  });

  test("renders the image with correct src and alt attributes", () => {
    render(<About />);
    const imgElement = screen.getByAltText("bitcoin-pics");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", undraw);
  });

  test("renders the detailed description text", () => {
    render(<About />);
    expect(
      screen.getByText(
        "Coinfied is a web application designed as a go-to platform for buying and selling cryptocurrency. It offers a user-friendly interface, robust security measures, and a diverse selection of cryptocurrencies. Real-time market data, mobile accessibility, and advanced trading tools enhance the trading experience. Dedicated customer support ensures assistance whenever needed. Coinfied prioritizes regulatory compliance, providing a trustworthy environment for cryptocurrency trading."
      )
    ).toBeInTheDocument();
  });

  test("renders Why Choose Us title", () => {
    render(<About />);
    expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
  });

  test("renders the slogan text", () => {
    render(<About />);
    expect(
      screen.getByText("Safe, guaranteed and easy to use")
    ).toBeInTheDocument();
  });

  test("renders AboutText components", () => {
    render(<About />);
    const aboutTextElements = screen.getAllByText("About Text Content");
    expect(aboutTextElements.length).toBe(2);
  });

  test("renders MyPlayer component", () => {
    render(<About />);
    expect(screen.getByText("MyPlayer Content")).toBeInTheDocument();
  });
});

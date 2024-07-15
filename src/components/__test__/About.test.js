import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";
import AboutText from "../AboutText";
import MyPlayer from "../MyPlayer";

// Mock the AboutText and MyPlayer components
jest.mock("../AboutText", () => () => <div>Mock AboutText</div>);
jest.mock("../MyPlayer", () => () => <div>Mock MyPlayer</div>);

describe("About Component", () => {
  test("renders About Us section correctly", () => {
    render(<About />);

    // Check if the "About Us" header is rendered
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Accelerate the world's transition/i)
    ).toBeInTheDocument();
  });

  test("displays the image with the correct alt text", () => {
    render(<About />);

    // Check if the image is rendered with the correct alt text
    const image = screen.getByAltText("bitcoin-pics");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "undraw_Bitcoin_re_urgq.png");
  });

  test("renders Why Choose Us section correctly", () => {
    render(<About />);

    // Check if the "Why Choose Us" header is rendered
    expect(screen.getByText(/Why Choose Us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Safe, guaranteed and easy to use/i)
    ).toBeInTheDocument();
  });

  test("renders AboutText components", () => {
    render(<About />);

    // Check if the AboutText components are rendered
    expect(screen.getAllByText(/Mock AboutText/i)).toHaveLength(2);
  });

  test("renders MyPlayer component", () => {
    render(<About />);

    // Check if the MyPlayer component is rendered
    expect(screen.getByText(/Mock MyPlayer/i)).toBeInTheDocument();
  });
});

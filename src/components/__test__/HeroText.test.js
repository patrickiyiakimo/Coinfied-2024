import React from "react";
import { render, screen } from "@testing-library/react";
import HeroText from "../HeroText";

describe("HeroText Component", () => {
  test("renders HeroText component correctly", () => {
    render(<HeroText />);

    // Check if the text content is rendered correctly
    expect(
      screen.getByText(/Step into the realm of digital currency/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Coinfied isn't just another platform/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our sleek interface guides you through every step/i)
    ).toBeInTheDocument();
  });
});

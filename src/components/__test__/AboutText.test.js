import React from "react";
import { render, screen } from "@testing-library/react";
import AboutText from "../AboutText";


describe("AboutText Component", () => {
  test("renders the AboutText component", () => {
    render(<AboutText />);
    const textElement = screen.getByText(
      /Its intuitive platform caters to users of all levels, making navigation effortless./i
    );
    expect(textElement).toBeInTheDocument();
  });

  test("contains the expected text content", () => {
    render(<AboutText />);
    const textContent = screen.getByText((content, element) => {
      return (
        content.includes(
          "Its intuitive platform caters to users of all levels, making navigation effortless."
        ) &&
        content.includes(
          "Security is paramount, with robust measures in place to safeguard user accounts and assets."
        ) &&
        content.includes(
          "A diverse array of cryptocurrencies is available, accommodating both mainstream and niche preferences."
        ) &&
        content.includes(
          "Real-time market data empowers users with insights crucial for informed decision-making."
        ) &&
        content.includes(
          "The mobile-friendly design ensures accessibility on-the-go via smartphones or tablets."
        ) &&
        content.includes(
          "Advanced trading tools, including customizable charts and technical analysis indicators, cater to seasoned traders."
        ) &&
        content.includes(
          "Dedicated customer support stands ready to assist users with any queries or concerns."
        ) &&
        content.includes(
          "Coinfied's commitment to regulatory compliance ensures a trustworthy and compliant trading environment."
        )
      );
    });
    expect(textContent).toBeInTheDocument();
  });
});

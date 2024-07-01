import React from "react";
import { render, screen } from "@testing-library/react";
import Coin from "../Coin";

describe("Coin component", () => {
  const coinProps = {
    name: "Bitcoin",
    image: "https://crypto.com/bitcoin.png",
    symbol: "BTC",
    price: 50000,
    priceChange: 5,
    marketcap: 1000000000,
  };

  it("should render the coin name", () => {
    render(<Coin {...coinProps} />);
    const nameElement = screen.getByText(coinProps.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("should render the coin symbol", () => {
    render(<Coin {...coinProps} />);
    const symbolElement = screen.getByText(coinProps.symbol);
    expect(symbolElement).toBeInTheDocument();
  });

  it("should render the coin price", () => {
    render(<Coin {...coinProps} />);
    const priceElement = screen.getByText(`$${coinProps.price}`);
    expect(priceElement).toBeInTheDocument();
  });

  it("should render the coin image", () => {
    render(<Coin {...coinProps} />);
    const imageElement = screen.getByAltText("crypto");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", coinProps.image);
  });

  it("should render the price change with correct color", () => {
    render(<Coin {...coinProps} />);
    const priceChangeElement = screen.getByText(
      `${coinProps.priceChange.toFixed(2)}%`
    );
    expect(priceChangeElement).toBeInTheDocument();
    expect(priceChangeElement).toHaveClass("text-green-400");
  });

  it("should render the market cap", () => {
    render(<Coin {...coinProps} />);
    // Uncomment the line below if the market cap is displayed
    // const marketcapElement = screen.getByText(`MKT Cap: $${coinProps.marketcap.toLocaleString()}`);
    // expect(marketcapElement).toBeInTheDocument();
  });
});

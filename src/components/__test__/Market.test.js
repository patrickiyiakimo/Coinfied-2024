import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Market from "../Market";
import Coin from "../Coin";

// Mock axios
jest.mock("axios");

// Mock Coin component
jest.mock("../Coin", () => {
  return ({ name, image, symbol, marketcap, price, priceChange }) => (
    <div data-testid="coin">
      <p>{name}</p>
      <p>{symbol}</p>
      <p>{marketcap}</p>
      <p>{price}</p>
      <p>{priceChange}</p>
    </div>
  );
});

const mockCoins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    image: "bitcoin.png",
    symbol: "btc",
    market_cap: 1000000,
    current_price: 50000,
    price_change_percentage_24h: 2.5,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    image: "ethereum.png",
    symbol: "eth",
    market_cap: 500000,
    current_price: 2500,
    price_change_percentage_24h: -1.2,
  },
  // Add more mock data if necessary
];

describe("Market Component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockCoins });
  });

  test("renders Market component and fetches data", async () => {
    render(<Market />);

    expect(screen.getByText(/Market Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Search a currency/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });
  });

  test("search functionality works correctly", async () => {
    render(<Market />);

    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: "bitcoin" } });

    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(1);
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    });
  });

  test("pagination works correctly", async () => {
    render(<Market />);

    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });

    // Initially, the first page should be displayed
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();

    // Simulate clicking the second page
    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);

    // In this mock setup, there are no coins for the second page, so none should be displayed
    await waitFor(() => {
      expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
      expect(screen.queryByText("Ethereum")).not.toBeInTheDocument();
    });
  });
});

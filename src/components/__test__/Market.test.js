// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // import axios from "./lib/axios.js";
// import Market from "../Market";
// import React from "react";

// // Mock axios
// jest.mock("axios");

// // Define mock data
// const mockCoins = [
//   {
//     id: "bitcoin",
//     name: "Bitcoin",
//     image: "bitcoin.png",
//     symbol: "btc",
//     market_cap: 1000000,
//     current_price: 50000,
//     price_change_percentage_24h: 2.5,
//   },
//   {
//     id: "ethereum",
//     name: "Ethereum",
//     image: "ethereum.png",
//     symbol: "eth",
//     market_cap: 500000,
//     current_price: 2500,
//     price_change_percentage_24h: -1.2,
//   },
//   // Add more mock data if necessary
// ];

// describe("Market Component", () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({ data: mockCoins });
//   });

//   test("renders Market component and fetches data", async () => {
//     render(<Market />);

//     // Check initial UI elements
//     expect(screen.getByText(/Market Price/i)).toBeInTheDocument();
//     expect(screen.getByText(/Search a currency/i)).toBeInTheDocument();

//     // Wait for data to be loaded and check that the correct number of coins are rendered
//     await waitFor(() => {
//       expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
//     });
//   });

//   test("search functionality works correctly", async () => {
//     render(<Market />);

//     // Wait for data to be loaded
//     await waitFor(() => {
//       expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
//     });

//     // Simulate searching for a coin
//     const searchInput = screen.getByPlaceholderText(/search/i);
//     fireEvent.change(searchInput, { target: { value: "bitcoin" } });

//     // Verify search results
//     await waitFor(() => {
//       expect(screen.getAllByTestId("coin").length).toBe(1);
//       expect(screen.getByText("Bitcoin")).toBeInTheDocument();
//     });
//   });

//   test("pagination works correctly", async () => {
//     render(<Market />);

//     // Wait for data to be loaded
//     await waitFor(() => {
//       expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
//     });

//     // Simulate clicking the pagination button
//     const nextPageButton = screen.getByText("2");
//     fireEvent.click(nextPageButton);

//     // In this mock setup, there are no coins for the second page
//     await waitFor(() => {
//       expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
//       expect(screen.queryByText("Ethereum")).not.toBeInTheDocument();
//     });
//   });
// });

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Market from "../Market";

// Mock axios
jest.mock("axios");

// Define mock data
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

    // Check initial UI elements
    expect(screen.getByText(/Market Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Search a currency/i)).toBeInTheDocument();

    // Wait for data to be loaded and check that the correct number of coins are rendered
    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });
  });

  test("search functionality works correctly", async () => {
    render(<Market />);

    // Wait for data to be loaded
    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });

    // Simulate searching for a coin
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: "bitcoin" } });

    // Verify search results
    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(1);
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    });
  });

  test("pagination works correctly", async () => {
    render(<Market />);

    // Wait for data to be loaded
    await waitFor(() => {
      expect(screen.getAllByTestId("coin").length).toBe(mockCoins.length);
    });

    // Simulate clicking the pagination button
    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);

    // In this mock setup, there are no coins for the second page
    await waitFor(() => {
      expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
      expect(screen.queryByText("Ethereum")).not.toBeInTheDocument();
    });
  });
});

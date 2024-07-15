import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Navbar Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  test("renders Navbar component", () => {
    expect(screen.getByTitle("header")).toBeInTheDocument();
    expect(screen.getByText(/Coinfied/i)).toBeInTheDocument();
  });

  test("toggles menu visibility on button click", () => {
    const menuButton = screen.getByRole("button");

    // Initially, the menu should be hidden
    expect(screen.queryByText(/Home/i)).toBeNull();

    // Click to show the menu
    act(() => {
      fireEvent.click(menuButton);
    });
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Click to hide the menu
    act(() => {
      fireEvent.click(menuButton);
    });
    expect(screen.queryByText(/Home/i)).toBeNull();
  });

  test("contains navigation links", () => {
    const menuButton = screen.getByRole("button");

    // Show the menu to check the links
    act(() => {
      fireEvent.click(menuButton);
    });

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Market/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Subscribe/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });

  test("checks smooth scroll links configuration", () => {
    const menuButton = screen.getByRole("button");

    // Show the menu to check the links
    act(() => {
      fireEvent.click(menuButton);
    });

    expect(screen.getByText(/Home/i)).toHaveAttribute("to", "Hero");
    expect(screen.getByText(/About/i)).toHaveAttribute("to", "About");
    expect(screen.getByText(/Market/i)).toHaveAttribute("to", "Market");
    expect(screen.getByText(/FAQ/i)).toHaveAttribute("to", "faq");
    expect(screen.getByText(/Subscribe/i)).toHaveAttribute("to", "Footer");
  });
});

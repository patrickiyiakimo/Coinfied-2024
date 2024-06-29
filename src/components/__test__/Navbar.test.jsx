import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

it("should render the navbar title", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElement = screen.getByTitle("header");
  expect(navbarElement).toBeInTheDocument();
});

it("should render all the navbar titles in the navbar component", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElements = screen.getAllByRole("listitem");
  expect(navbarElements.length).toBe(8);
});

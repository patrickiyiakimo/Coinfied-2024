import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import About from "../About";

it("should render the navbar title", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElement = screen.getByTitle("header");
  expect(navbarElement).toBeInTheDocument();
});

it("should render all the navbar list items in the navbar component", async () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElements = screen.getAllByRole("listitem");
  expect(navbarElements.length).toBe(8);
});

it("should render the content in the about page", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const aboutElements = screen.getAllByText(/./, { selector: "p" }); // Selects all <p> elements with text
  expect(aboutElements.length).toBe(6);
});
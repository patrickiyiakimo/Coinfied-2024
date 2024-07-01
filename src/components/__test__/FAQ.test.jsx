import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Faq from "./Faq"; // Adjust the import path as needed

it("should render the FAQ title", async () => {
  render(
    <MemoryRouter>
      <Faq />
    </MemoryRouter>
  );

  // Use findBy instead of waitFor to automatically wait for the element to appear
  const faqElement = await screen.findByText("FAQ");
  expect(faqElement).toBeInTheDocument();
});

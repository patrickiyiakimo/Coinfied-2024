import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";


it("should render the FAQ title", async () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  // Use findBy instead of waitFor to automatically wait for the element to appear
  const footerElement = await screen.findByText("Sign up to learn more");
  expect(footerElement).toBeInTheDocument();
});

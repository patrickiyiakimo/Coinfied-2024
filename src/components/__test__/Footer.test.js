// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Footer from "../Footer";

// it("should render the Sign up to learn more text", async () => {
//   render(
//     <MemoryRouter>
//       <Footer />
//     </MemoryRouter>
//   );

//   const footerElement = await screen.findByText("Sign up to learn more");
//   expect(footerElement).toBeInTheDocument();
// });

// it("should render the sign up instructions for Coinfied", async () => {
//   render(
//     <MemoryRouter>
//       <Footer />
//     </MemoryRouter>
//   );

//   const instructionText =
//     "To sign up for Coinfied, visit the website, fill out the registration form, verify your email, complete any additional steps, and log in to your account.";

//   const footerElement = await screen.findByText(instructionText);
//   expect(footerElement).toBeInTheDocument();
// });

// it("should render the input field", () => {
//   render(
//     <MemoryRouter>
//       <Footer />
//     </MemoryRouter>
//   );

//   const inputElement = screen.getByPlaceholderText("Enter your email");
//   expect(inputElement).toBeInTheDocument();
// });

// it("should render the text at the bottom of the footer", async () => {
//   render(
//     <MemoryRouter>
//       <Footer />
//     </MemoryRouter>
//   );

//   const instructionText = "©2024 Coinfied. All rights Reserved";

//   const footerElement = await screen.findByText(instructionText);
//   expect(footerElement).toBeInTheDocument();
// });



import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";

// Mock react-toastify
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
  ToastContainer: () => <div />,
}));

describe("Footer component tests", () => {
  it("should render the 'Sign up to learn more' text", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const footerElement = await screen.findByText("Sign up to learn more");
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the sign up instructions for Coinfied", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const instructionText =
      "To sign up for Coinfied, visit the website, fill out the registration form, verify your email, complete any additional steps, and log in to your account.";

    const footerElement = await screen.findByText(instructionText);
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the input field", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render the text at the bottom of the footer", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const instructionText = "©2024 Coinfied. All rights Reserved";

    const footerElement = await screen.findByText(instructionText);
    expect(footerElement).toBeInTheDocument();
  });
});

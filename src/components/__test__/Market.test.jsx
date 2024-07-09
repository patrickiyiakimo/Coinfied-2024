// import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Market from "../Market";
// // it("should render the market title", async () => {
// //   render(
// //     <MemoryRouter>
// //       <Market />
// //     </MemoryRouter>
// //   );

// //   await waitFor(() => {
// //     const marketElement = screen.getByText("Market Price");
// //     expect(marketElement).toBeInTheDocument();
// //   });
// // });

// // it("should render the market sub-title", async () => {
// //   render(
// //     <MemoryRouter>
// //       <Market />
// //     </MemoryRouter>
// //   );
// //   const marketElement = screen.getByText("Search a currency");
// //   expect(marketElement).toBeInTheDocument();
// // });



// it("should render the market title", async () => {
//   render(
//     <MemoryRouter>
//       <Market />
//     </MemoryRouter>
//   );

//   await waitFor(() => {
//     const marketElement = screen.getByText("Market Price");
//     expect(marketElement).toBeInTheDocument();
//   });
// });

// it("should render the market sub-title", async () => {
//   render(
//     <MemoryRouter>
//       <Market />
//     </MemoryRouter>
//   );
//   const marketElement = screen.getByText("Search a currency");
//   expect(marketElement).toBeInTheDocument();
// });

// it("should render the input field", () => {
//   render(
//     <MemoryRouter>
//       <Market />
//     </MemoryRouter>
//   );

//   const inputElement = screen.getByPlaceholderText("search");
//   expect(inputElement).toBeInTheDocument();
// });

// it("should update the input value on change", () => {
//   render(
//     <MemoryRouter>
//       <Market />
//     </MemoryRouter>
//   );

//   const inputElement = screen.getByPlaceholderText("search");
//   fireEvent.change(inputElement, { target: { value: "bitcoin" } });
//   expect(inputElement.value).toBe("bitcoin");
// });






// FAQ section

// import { render, screen, waitFor } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Faq from "./Faq"; // Adjust the import path as needed

// it("should render the FAQ title", async () => {
//   render(
//     <MemoryRouter>
//       <Faq />
//     </MemoryRouter>
//   );

//   // Use findBy instead of waitFor to automatically wait for the element to appear
//   const faqElement = await screen.findByText("FAQ");
//   expect(faqElement).toBeInTheDocument();
// });



import { MemoryRouter } from "react-router-dom";
import Market from "../Market";


it("should render the navbar title", async () => {
  render(
    <MemoryRouter>
      <Market />
    </MemoryRouter>
  );
  const marketElement = screen.getByTitle("Market Price");
  expect(marketElement).toBeInTheDocument();
});
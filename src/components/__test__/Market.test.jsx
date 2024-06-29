import Market from "../Market";

it("should render the navbar title", async () => {
  render(
    <MemoryRouter>
      <Market />
    </MemoryRouter>
  );
  const navbarElement = screen.getByTitle("header");
  expect(navbarElement).toBeInTheDocument();
});

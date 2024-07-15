import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

// Mock function to track setCurrentPage calls
const mockSetCurrentPage = jest.fn();

const totalPosts = 50;
const postsPerPage = 10;
const totalPages = Math.ceil(totalPosts / postsPerPage);

describe("Pagination Component", () => {
  beforeEach(() => {
    mockSetCurrentPage.mockClear();
  });

  test("renders the correct number of page buttons", () => {
    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={mockSetCurrentPage}
        currentPage={1}
      />
    );

    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(totalPages);
  });

  test("highlights the current page button", () => {
    const currentPage = 3;

    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={mockSetCurrentPage}
        currentPage={currentPage}
      />
    );

    const currentPageButton = screen.getByText(currentPage);
    expect(currentPageButton).toHaveClass("bg-gray-600");
  });

  test("calls setCurrentPage with the correct page number when a page button is clicked", () => {
    render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={mockSetCurrentPage}
        currentPage={1}
      />
    );

    const secondPageButton = screen.getByText(2);
    fireEvent.click(secondPageButton);

    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  test("updates the highlighted page button when a new page is selected", () => {
    const { rerender } = render(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={mockSetCurrentPage}
        currentPage={1}
      />
    );

    const firstPageButton = screen.getByText(1);
    expect(firstPageButton).toHaveClass("bg-gray-600");

    rerender(
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={mockSetCurrentPage}
        currentPage={2}
      />
    );

    const secondPageButton = screen.getByText(2);
    expect(secondPageButton).toHaveClass("bg-gray-600");
    expect(firstPageButton).not.toHaveClass("bg-gray-600");
  });
});

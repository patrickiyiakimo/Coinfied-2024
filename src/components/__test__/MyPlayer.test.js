import React from "react";
import { render, screen } from "@testing-library/react";
import MyPlayer from "../MyPlayer";

// Mock the video import
jest.mock(
  "../video/stock-footage-financial-analyst-working-on-a-computer-with-multi-monitor-workstation-with-real-time-stocks.webm",
  () => "video.mp4"
);

describe("MyPlayer Component", () => {
  test("renders the video player with correct attributes", () => {
    render(<MyPlayer />);

    const videoElement = screen.getByTestId("video-player");

    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute("autoplay");
    expect(videoElement).toHaveAttribute("muted");
    expect(videoElement).toHaveAttribute("controls");
    expect(videoElement).toHaveAttribute("width", "850");
    expect(videoElement).toHaveAttribute("height", "600");
  });

  test("renders the video source correctly", () => {
    render(<MyPlayer />);

    const sourceElement = screen
      .getByTestId("video-player")
      .querySelector("source");

    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute("src", "video.mp4");
    expect(sourceElement).toHaveAttribute("type", "video/mp4");
  });

  test("renders the correct text", () => {
    render(<MyPlayer />);

    const textElement = screen.getByText(/Video gotten from Shutterstock/i);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-white pb-5 text-center");
  });
});

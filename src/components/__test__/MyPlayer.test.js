import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyPlayer from "../MyPlayer";

describe("<MyPlayer />", () => {
  it("renders the component correctly", () => {
    const { getByText, getByTestId } = render(<MyPlayer />);

    // ensuring the video element is rendered
    const videoElement = getByTestId("video-element");
    expect(videoElement).toBeInTheDocument();

    // ensuring the video attributes are set correctly
    expect(videoElement).toHaveAttribute("autoplay");
    expect(videoElement).toHaveAttribute("muted");
    expect(videoElement).toHaveAttribute("width", "850");
    expect(videoElement).toHaveAttribute("height", "600");
    expect(videoElement).toHaveAttribute("controls");

    // Check if source element is present with correct src and type
    const sourceElement = videoElement.querySelector("source");
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute(
      "src",
      "../video/stock-footage-financial-analyst-working-on-a-computer-with-multi-monitor-workstation-with-real-time-stocks.webm"
    );
    expect(sourceElement).toHaveAttribute("type", "video/mp4");

    // Check if text is rendered below the video
    expect(getByText("Video gotten from Shutterstock")).toBeInTheDocument();
  });
});

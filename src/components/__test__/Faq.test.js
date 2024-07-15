import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Faq from "../Faq";

describe("Faq Component", () => {
  test("renders FAQ component correctly", () => {
    render(<Faq />);

    // Check if the FAQ header is rendered
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();

    // Check if all questions are rendered
    const questions = [
      "What is Coinfied?",
      "How do I use Coinfied?",
      "Can I customize Coinfied?",
      "Are there analytics for Coinfied?",
      "Are there limitations to Coinfied?",
      "How secure is Coinfied?",
    ];

    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });

    // Check if answers are hidden initially
    const answers = screen.queryAllByText(/Coinfied/i);
    answers.forEach((answer) => {
      expect(answer).not.toBeVisible();
    });
  });

  test("toggles answer visibility when clicking the SVG icon", () => {
    render(<Faq />);

    const firstQuestion = screen.getByText(/What is Coinfied?/i);
    const firstAnswer = screen.getByText(
      /Coinfied is a cutting-edge web application/i
    );

    // Initially, the answer should be hidden
    expect(firstAnswer).not.toBeVisible();

    // Find the SVG icon and click it to toggle visibility
    const svgIcon = screen.getAllByRole("button")[0];
    fireEvent.click(svgIcon);

    // Now, the answer should be visible
    expect(firstAnswer).toBeVisible();

    // Click the SVG icon again to hide the answer
    fireEvent.click(svgIcon);
    expect(firstAnswer).not.toBeVisible();
  });

  test("ensures all answers can be toggled", () => {
    render(<Faq />);

    // Get all SVG icons and answers
    const svgIcons = screen.getAllByRole("button");
    const answers = [
      "Coinfied is a cutting-edge web application designed to provide users with a seamless experience for buying and selling cryptocurrency. As the premier destination for crypto enthusiasts and investors, Coinfied offers a range of features tailored to meet the needs of both beginners and experienced traders.",
      "Create an account on Coinfied's website and complete any necessary verification steps. Deposit funds into your account via bank transfer, card, or cryptocurrency transfer. Explore the platform to familiarize yourself with its features. Buy cryptocurrency by selecting the asset, specifying the amount, and confirming the transaction.",
      "Certainly! You can customize Coinfied according to your preferences. This could involve adjusting the user interface, setting trading preferences, managing your portfolio, configuring notification settings, enhancing security measures, and even customizing language and localization options.",
      "Yes, Coinfied likely offers analytics tools to assist users in making informed decisions when trading cryptocurrency. These tools may include market data such as real-time and historical price charts, trading volume, and market trends. Additionally, Coinfied may provide technical analysis indicators, fundamental analysis metrics, portfolio analytics, news feeds, and sentiment analysis to help",
      "Coinfied, like any platform, may have its set of limitations that users should consider. Regulatory compliance is a factor, potentially restricting certain features or services in specific regions. Trading features could also have limitations, such as trading pairs, order types, or asset liquidity.",
      "Coinfied prioritizes security to safeguard user accounts and assets. Various measures are implemented, including encryption protocols, secure login procedures, and robust authentication mechanisms. Additionally, Coinfied likely employs industry-standard security practices to protect against potential threats like hacking, phishing, and unauthorized access. Despite these measures, no system is entirely immune to risks.",
    ];

    // Test toggling each answer
    svgIcons.forEach((icon, index) => {
      // Initially, the answer should be hidden
      expect(screen.queryByText(answers[index])).not.toBeVisible();

      // Click the SVG icon to show the answer
      fireEvent.click(icon);
      expect(screen.getByText(answers[index])).toBeVisible();

      // Click the SVG icon to hide the answer
      fireEvent.click(icon);
      expect(screen.queryByText(answers[index])).not.toBeVisible();
    });
  });
});

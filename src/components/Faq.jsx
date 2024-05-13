import React, { useState } from "react";

const Faq = () => {
  const initialFaqState = [
    {
      question: "What is Coinfied?",
      answer:
        "A URL shortener is a tool that converts long and complex URLs into shorter, more manageable links. it makes sharing links easier and can also provide tracking and analytics features.",
      id: 1,
      isAnswerVisible: false,
    },
    {
      question: "How do I use Coinfied?",
      answer:
        "Using a URL shortener is simple. Just paste your long URL into the provided input, click the 'Shorten' button, and you'll get a shortened link that you can share.",
      id: 2,
      isAnswerVisible: false,
    },
    {
      question: "Can I customize Coinfied?",
      answer:
        "Yes, you can customize your short links with a URL shortener that supports custom aliases. This feature allows you to create branded and memorable short URLs.",
      id: 3,
      isAnswerVisible: false,
    },
    {
      question: "Are there analytics for Coinfied?",
      answer:
        "Many URL shorteners provide analytics features, allowing you to track the performance of your short links. You can see metrics such as click-through rate, geographic location of clicks, and more.",
      id: 4,
      isAnswerVisible: false,
    },
    {
      question: "Are there limitations to Coinfied?",
      answer:
        "The limit to the number of links you can shorten depends on the specific URL shortening service you're using. Check the service's documentation for information on any limitations.",
      id: 5,
      isAnswerVisible: false,
    },
    {
      question: "How secure is Coinfied?",
      answer:
        "While shortened URLs are generally safe to use, be cautious when clicking on them, especially from untrusted sources. Some malicious actors may use URL shorteners to disguise harmful links.",
      id: 6,
      isAnswerVisible: false,
    },
  ];

  const [faq, setFaq] = useState(initialFaqState);

  const handleToggle = (id) => {
    setFaq((prevFaq) =>
      prevFaq.map((item) =>
        item.id === id
          ? { ...item, isAnswerVisible: !item.isAnswerVisible }
          : item
      )
    );
  };

  return (
    <div className="faq bg-gray-900 px-40 py-20 text-white">
      <h1 className="font-bold text-blue-500 text-4xl text-center ">FAQ</h1>
      <p className="font-bold text-2xl text-center mb-10">
        Frequently Asked Questions
      </p>
      {faq.map((item) => (
        <div key={item.id}>
          <span>
            <svg
              onClick={() => handleToggle(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                item.isAnswerVisible ? "rotate-180" : ""
              } absolute mx-96 transition-transform`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  item.isAnswerVisible
                    ? "m4.5 15.75 7.5-7.5 7.5 7.5"
                    : "m19.5 8.25-7.5 7.5-7.5-7.5"
                }
              />
            </svg>
          </span>
          <h3 className=" font-bold pb-10">{item.question}</h3>
          {item.isAnswerVisible && (
            <span className="transition-all">
              <p className="bg-gray-800 px-10 py-10 mb-5 rounded text-gray-400 transition-transform duration-500">
                {item.answer}
              </p>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;

// import React, { useState } from "react";


// const Faq = () => {
    
//   const initialFaqState = [
//     {
//       question: "What is Coinfied?",
//       answer:
//         "Coinfied is a cutting-edge web application designed to provide users with a seamless experience for buying and selling cryptocurrency. As the premier destination for crypto enthusiasts and investors, Coinfied offers a range of features tailored to meet the needs of both beginners and experienced traders.",
//       id: 1,
//       isAnswerVisible: false,
//     },
//     {
//       question: "How do I use Coinfied?",
//       answer:
//         "Create an account on Coinfied's website and complete any necessary verification steps. Deposit funds into your account via bank transfer, card, or cryptocurrency transfer. Explore the platform to familiarize yourself with its features. Buy cryptocurrency by selecting the asset, specifying the amount, and confirming the transaction.",
//       id: 2,
//       isAnswerVisible: false,
//     },
//     {
//       question: "Can I customize Coinfied?",
//       answer:
//         "Certainly! You can customize Coinfied according to your preferences. This could involve adjusting the user interface, setting trading preferences, managing your portfolio, configuring notification settings, enhancing security measures, and even customizing language and localization options.",
//       id: 3,
//       isAnswerVisible: false,
//     },
//     {
//       question: "Are there analytics for Coinfied?",
//       answer:
//         "Yes, Coinfied likely offers analytics tools to assist users in making informed decisions when trading cryptocurrency. These tools may include market data such as real-time and historical price charts, trading volume, and market trends. Additionally, Coinfied may provide technical analysis indicators, fundamental analysis metrics, portfolio analytics, news feeds, and sentiment analysis to help ",
//       id: 4,
//       isAnswerVisible: false,
//     },
//     {
//       question: "Are there limitations to Coinfied?",
//       answer:
//         "Coinfied, like any platform, may have its set of limitations that users should consider. Regulatory compliance is a factor, potentially restricting certain features or services in specific regions. Trading features could also have limitations, such as trading pairs, order types, or asset liquidity.",
//       id: 5,
//       isAnswerVisible: false,
//     },
//     {
//       question: "How secure is Coinfied?",
//       answer:
//         "Coinfied prioritizes security to safeguard user accounts and assets. Various measures are implemented, including encryption protocols, secure login procedures, and robust authentication mechanisms. Additionally, Coinfied likely employs industry-standard security practices to protect against potential threats like hacking, phishing, and unauthorized access. Despite these measures, no system is entirely immune to risks.",
//       id: 6,
//       isAnswerVisible: false,
//     },
//   ];

//   const [faq, setFaq] = useState(initialFaqState);

//   const handleToggle = (id) => {
//     setFaq((prevFaq) =>
//       prevFaq.map((item) =>
//         item.id === id
//           ? { ...item, isAnswerVisible: !item.isAnswerVisible }
//           : item
//       )
//     );
//   };

//   return (
//     <div className="faq faq  bg-gray-900 md:px-40 md:py-20 text-white">
//       <h1 className="font-bold text-blue-500 text-4xl text-center pb-5">FAQ</h1>
//       <p className="font-bold text-2xl text-center mb-20">
//         Frequently Asked Questions
//       </p>
//       {faq.map((item) => (
//         <div key={item.id}>
//           <span>
//             <svg
//               onClick={() => handleToggle(item.id)}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className={`w-6 h-6 ${
//                 item.isAnswerVisible ? "rotate-180" : ""
//               } absolute mx-80 cursor-pointer md:mx-96 transition-transform`}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d={
//                   item.isAnswerVisible
//                     ? "m4.5 15.75 7.5-7.5 7.5 7.5"
//                     : "m19.5 8.25-7.5 7.5-7.5-7.5"
//                 }
//               />
//             </svg>
//           </span>
//           <h3 className="mt-5 pl-5 font-bold pb-10">{item.question}</h3>
//           <hr className="border-gray-700 "/>
//           {item.isAnswerVisible && (
//             <span className="transition-all">
//               <p className="bg-gray-800 pr-4 pl-4 pt-5 pb-5 md:px-10 md:py-10 mb-5 rounded text-gray-400 transition-transform duration-500">
//                 {item.answer}
//               </p>
//             </span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faq;




import React, { useState } from "react";

const Faq = () => {
  const initialFaqState = [
    {
      question: "What is Coinfied?",
      answer:
        "Coinfied is a cutting-edge web application designed to provide users with a seamless experience for buying and selling cryptocurrency. As the premier destination for crypto enthusiasts and investors, Coinfied offers a range of features tailored to meet the needs of both beginners and experienced traders.",
      id: 1,
      isAnswerVisible: false,
    },
    {
      question: "How do I use Coinfied?",
      answer:
        "Create an account on Coinfied's website and complete any necessary verification steps. Deposit funds into your account via bank transfer, card, or cryptocurrency transfer. Explore the platform to familiarize yourself with its features. Buy cryptocurrency by selecting the asset, specifying the amount, and confirming the transaction.",
      id: 2,
      isAnswerVisible: false,
    },
    {
      question: "Can I customize Coinfied?",
      answer:
        "Certainly! You can customize Coinfied according to your preferences. This could involve adjusting the user interface, setting trading preferences, managing your portfolio, configuring notification settings, enhancing security measures, and even customizing language and localization options.",
      id: 3,
      isAnswerVisible: false,
    },
    {
      question: "Are there analytics for Coinfied?",
      answer:
        "Yes, Coinfied likely offers analytics tools to assist users in making informed decisions when trading cryptocurrency. These tools may include market data such as real-time and historical price charts, trading volume, and market trends. Additionally, Coinfied may provide technical analysis indicators, fundamental analysis metrics, portfolio analytics, news feeds, and sentiment analysis to help",
      id: 4,
      isAnswerVisible: false,
    },
    {
      question: "Are there limitations to Coinfied?",
      answer:
        "Coinfied, like any platform, may have its set of limitations that users should consider. Regulatory compliance is a factor, potentially restricting certain features or services in specific regions. Trading features could also have limitations, such as trading pairs, order types, or asset liquidity.",
      id: 5,
      isAnswerVisible: false,
    },
    {
      question: "How secure is Coinfied?",
      answer:
        "Coinfied prioritizes security to safeguard user accounts and assets. Various measures are implemented, including encryption protocols, secure login procedures, and robust authentication mechanisms. Additionally, Coinfied likely employs industry-standard security practices to protect against potential threats like hacking, phishing, and unauthorized access. Despite these measures, no system is entirely immune to risks.",
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
    <div className="faq faq bg-gray-900 md:px-40 md:py-20 text-white">
      <h1 className="font-bold text-blue-500 text-4xl text-center pb-5">FAQ</h1>
      <p className="font-bold text-2xl text-center mb-20">
        Frequently Asked Questions
      </p>
      {faq.map((item) => (
        <div key={item.id}>
          <span>
            <svg
              role="button"
              onClick={() => handleToggle(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                item.isAnswerVisible ? "rotate-180" : ""
              } absolute mx-80 cursor-pointer md:mx-96 transition-transform`}
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
          <h3 className="mt-5 pl-5 font-bold pb-10">{item.question}</h3>
          <hr className="border-gray-700 " />
          {item.isAnswerVisible && (
            <span className="transition-all">
              <p className="bg-gray-800 pr-4 pl-4 pt-5 pb-5 md:px-10 md:py-10 mb-5 rounded text-gray-400 transition-transform duration-500">
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

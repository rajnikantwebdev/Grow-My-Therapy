"use client"
import { useState } from "react";

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-main py-16 px-4 text-main-text">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold  mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex items-center justify-between text-left cursor-pointer transition-colors duration-200"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold  hover:/80 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-8 pr-10">
                  <p className="text-lg sm:text-xl  leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
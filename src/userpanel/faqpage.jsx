import React from 'react';

const FaqPage = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We provide assignment writing, essay help, dissertation support, and more." },
    { question: "Is my data secure?", answer: "Yes, we follow strict privacy guidelines to protect your data." },
    { question: "Do you provide plagiarism-free content?", answer: "Absolutely! All of our work is original and plagiarism-free." },
    { question: "How long will it take to complete my order?", answer: "The timeline depends on the complexity and length of your request." },
    { question: "What are your payment options?", answer: "We accept credit cards, PayPal, and other secure payment methods." },
    { question: "Can I request revisions?", answer: "Yes, we offer multiple revisions until you are fully satisfied." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10  bg-[#F3F3F3] text-black mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 border-b-2 pb-4 border-gray-300">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{faq.question}</h3>
            <p className="text-base text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center p-6 rounded-lg shadow-lg bg-[#F3F3F3] text-[#3D52A1]">
        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="mb-6">Feel free to reach out to us for more information or support.</p>
        <a
          href="#"
          className="inline-block bg-[#7191E6] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FaqPage;

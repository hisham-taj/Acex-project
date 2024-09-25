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
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{faq.question}</h3>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Still Have Questions?</h3>
        <p className="mt-2">Feel free to reach out to us for more information or support.</p>
        <a
          href="#"
          className="mt-4 inline-block bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FaqPage;

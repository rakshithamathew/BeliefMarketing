import React, { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the first step in filing a sexual assault lawsuit?",
      answer: "The first step is to consult with an experienced attorney who specializes in sexual assault cases. They will evaluate your case, explain your legal rights, and guide you through the entire process. It's important to act quickly as there are time limitations for filing claims."
    },
    {
      question: "How long do I have to file a lawsuit?",
      answer: "The statute of limitations varies by state and type of case. For sexual assault cases, many states have extended or eliminated time limits, but it's crucial to consult with an attorney immediately to ensure you don't miss any deadlines."
    },
    {
      question: "Can I sue Uber or Lyft for assault by a driver?",
      answer: "Yes, rideshare companies can be held liable for assaults committed by their drivers. These companies have a duty to ensure passenger safety and can be held accountable for negligent hiring, training, or supervision of drivers."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer completely free, confidential consultations. During this meeting, we'll evaluate your case, explain your legal options, and answer all your questions without any obligation to hire us."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#FC821F] text-black p-4 rounded-full">
              <HelpCircle size={48} />
            </div>
          </div>
          <h1 className="text-4xl text-[#151052] sm:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#151052] sm:text-2xl max-w-3xl mx-auto">
            Get answers to common questions about sexual assault cases, legal processes, and your rights as a survivor.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4 pt-0">
                    {item.question}
                  </span>
                  {isActive ? (
                    <ChevronDown className="text-[#FC821F] flex-shrink-0" size={24} />
                  ) : (
                    <ChevronRight className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {isActive && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default FAQ;

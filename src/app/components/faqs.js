"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much do Medical Alert systems cost?",
    answer: "Prices vary depending on the system, rate plan and add-ons selected. To find the right Medical Alert system for your lifestyle, please complete our free medical monitoring assessment."
  },
  {
    question: "Who should wear a Medical Alert system?",
    answer: "A Medical Alert system is ideal for anyone who would like peace of mind by getting 24-hour response in case of a medical emergency, fire or break-in by simply having a help button. It is especially helpful for older adults or seniors who live alone and as shown by studies are more likely to suffer a fall at home. A Medical Alert system can also be used as a panic button. A Medical Alert system can also be used as a panic button. Our systems are available with fall detection, which alerts an response specialist in the event of a fall even if you are unable to press your help button."
  },
  {
    question: "How do Medical Alert systems work?",
    answer: "It’s simple: You wear a Medical Alert help button on a lanyard or bracelet and press your button if you need help. The help button then sends a signal to the two-way speaker, which connects you with one of our trained response specialists. The response specialist assesses the situation and sends appropriate emergency help—family, friends or first responders."
  },
  {
    question: "What kind of emergency help do I get?",
    answer: "That depends on what kind of emergency you’re having. If it’s a minor situation, Medical Alert can contact somebody (such as a neighbor or loved one) on your contact list and have them go to you. For serious emergencies, our Response Specialist will immediately dispatch an ambulance, or contact the police or fire station, depending on what you need."
  },
  {
    question: "Can I use a Medical Alert system if I don’t speak English?",
    answer: "Yes, our Response Specialists include employees who are native speakers of languages other than English; in addition, our Response Specialists are trained to use the International Language Line for real-time translation services in 140 languages. Contact us at 800-800-2537 for more details about the specific language you would need."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-10 md:px-20 bg-[#F6F6F6] text-center">
      <h2 className="text-3xl md:text-4xl text-[#FF0000] mb-8">Frequently Asked Questions</h2>

      <div className="max-w-[90%] mx-auto text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full bg-[#FF0000] text-white p-4 rounded-t-2xl text-lg font-medium"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

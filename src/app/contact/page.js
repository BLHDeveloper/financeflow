"use client";
import { useState } from "react";
import Button from "@/components/Button";
import ErrorDisplay from "@/components/common/ErrorDisplay";

// Composant Input correctement défini
const Input = ({ title, placeholder, type = "text" }) => (
  <div className="flex flex-col justify-center items-start gap-3 w-[364px] h-[106px] shrink-0">
    <p className="text-white text-[18px] font-bold leading-[25.992px] tracking-[0.9px] uppercase">
      {title}
    </p>
    <div className="flex items-start w-full px-[24.995px] py-[20.5px] rounded-full border border-[#010725] hover:border-white bg-[#010D50]">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-white text-[18px] font-normal leading-[27px] focus:outline-none"
      />
    </div>
  </div>
);
// Custom Icon Components
const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#0328EE]"
  >
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MessageSquare = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#0328EE]"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#0328EE]"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  </svg>
);

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Minus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const faqs = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur...",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.",
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet, consectetur...",
  },
  {
    question: "Question 4",
    answer: "Lorem ipsum dolor sit amet, consectetur...",
  },
  {
    question: "Question 5",
    answer: "Lorem ipsum dolor sit amet, consectetur...",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // Simulation d'envoi de formulaire avec délai
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Commentez cette ligne pour tester le succès
      // throw new Error("Erreur lors de l'envoi du message");
      
      alert("Message envoyé avec succès!");
    } catch (error) {
      setFormError(error.message || "Une erreur est survenue lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="px-[133px] max-sm:px-4 mb-[120px] max-sm:mb-[80px] mt-[80px] max-sm:mt-[48px] relative">
        <h1 className="text-white text-[66px] font-bold leading-[79.992px] tracking-[-1px] max-sm:text-[38px] max-sm:leading-[46px] max-sm:w-[341px]">
          Get in touch
        </h1>
        <div className="flex sm:justify-between max-sm:flex-col max-sm:gap-[45px] mt-[52px] max-sm:mt-[40px]">
          {formError ? (
            <div className="w-full md:max-w-xl">
              <ErrorDisplay 
                message={formError} 
                onRetry={() => setFormError(null)}
              />
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input title="Name" placeholder="Full Name" />
                <Input
                  title="Email"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input title="Company" placeholder="Company Name" />
                <Input title="Subject" placeholder="How can we help?" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white text-[18px] font-bold leading-[25.992px] tracking-[0.9px] uppercase">
                  Message
                </p>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-5 bg-[#010D50] border border-[#010725] hover:border-white rounded-xl text-white text-[18px] font-normal leading-[27px] focus:outline-none"
                  required
                />
              </div>
              <Button 
                label={isSubmitting ? "ENVOI EN COURS..." : "SEND MESSAGE"} 
                className="max-sm:w-full"
                disabled={isSubmitting}
                type="submit"
              />
            </form>
          )}
          <div className="inline-flex flex-col items-start gap-8 max-sm:gap-6">
            <div className="flex flex-col justify-center items-start pr-[5px] gap-3 max-sm:pb-[10px] max-sm:gap-5 max-sm:self-stretch.">
              <p className="text-white text-[22px] font-bold leading-[30.998px] tracking-[0.22px] max-sm:text-[26px] max-sm:leading-[36px]">
                Want to reach us directly?
              </p>
              <p className="text-white text-[18px] font-normal leading-[32.004px] w-[377px] max-sm:w-[358px] max-sm:text-[16px] max-sm:leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
                pharetra elementum sit id sagittis non donec egestas.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail /> contact@example.com
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare /> support@example.com
              </li>
              <li className="flex items-center gap-3">
                <Info /> press@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[120px] max-sm:mt-[80px]">
          <h1 className="text-white text-center text-[66px] font-bold leading-[79.992px] tracking-[-1px]">
            FAQ
          </h1>
          <div className="space-y-4 max-w-3xl mx-auto mt-[80px]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  {openIndex === index ? <Minus /> : <Plus />}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

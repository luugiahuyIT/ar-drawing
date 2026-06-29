import type { Route } from "./+types/faq";
import { useState } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "FAQ - PhotoTrace AR" }];
}

const faqs = [
  {
    question: "What is Photo Trace?",
    answer: "Photo Trace lets you import any photo and turn it into an outline you can trace on paper with our AR camera overlay or screen lightbox. All processing happens on your device — your photos never leave your phone."
  },
  {
    question: "How does outline generation work?",
    answer: "Our app uses on-device image processing algorithms to detect edges and contours in your photos, creating a clean, traceable outline in real-time."
  },
  {
    question: "What is Camera Trace?",
    answer: "Camera Trace uses Augmented Reality to project the image outline onto your paper through your phone's camera, allowing you to trace it while looking at your phone screen."
  },
  {
    question: "What is Screen Trace?",
    answer: "Screen Trace turns your device into a lightbox. You place a piece of paper directly over your screen and trace the bright outline displayed underneath."
  },
  {
    question: "How do imports work?",
    answer: "You can import images directly from your device's photo library or files. Supported formats include JPG, PNG, and HEIC."
  },
  {
    question: "How is my photo handled?",
    answer: "Your privacy is our priority. All image processing happens locally on your device. Your photos are never uploaded to any external servers."
  },
  {
    question: "Why do I see ads?",
    answer: "Ads help us keep the core features of the app free for everyone. You can remove ads by upgrading to the premium version."
  },
  {
    question: "How do rewarded ads unlock content?",
    answer: "By watching a short video ad, you can temporarily unlock premium templates or features without paying for a subscription."
  },
  {
    question: "Can I use without internet?",
    answer: "Yes! Once you have downloaded the app, core features like Camera Trace and Screen Trace work completely offline. Internet is only required for downloading new templates or watching rewarded ads."
  }
];

export default function FaqPage() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="antialiased text-on-surface bg-surface font-body-md min-h-[100dvh] flex flex-col md:hidden">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-50 bg-surface/70 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(79,70,229,0.05)] shadow-sm">
        <button 
          onClick={() => navigate(-1)}
          aria-label="Go back" 
          className="flex items-center text-primary font-button-label text-button-label active:scale-95 transition-transform"
        >
          <span aria-hidden="true" className="material-symbols-outlined mr-1">arrow_back</span>
          Back
        </button>
        <h1 className="font-button-label text-button-label font-bold text-on-surface absolute left-1/2 transform -translate-x-1/2">
          FAQ
        </h1>
        <div className="w-10"></div> {/* Spacer for flex balance */}
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-2xl mx-auto space-y-2 pb-24 w-full">
        {faqs.map((faq, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <article 
              key={index}
              aria-expanded={isExpanded} 
              className={`faq-item rounded-xl border border-surface-variant p-4 transition-all duration-300 relative overflow-hidden cursor-pointer ${
                isExpanded ? 'bg-surface-container shadow-sm' : 'bg-surface hover:bg-surface-container-low'
              }`}
              onClick={() => toggleFaq(index)}
            >
              {isExpanded && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
              )}
              <div className="w-full flex items-center justify-between text-left outline-none group">
                <div className="flex items-center gap-3">
                  <span 
                    className={`material-symbols-outlined transition-colors ${isExpanded ? 'text-primary' : 'text-primary/70 group-hover:text-primary'}`} 
                    style={isExpanded ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    help
                  </span>
                  <h2 className="font-button-label text-button-label text-on-surface">{faq.question}</h2>
                </div>
                <span 
                  className="faq-icon material-symbols-outlined text-outline-variant group-hover:text-primary transition-all duration-300"
                  style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
                >
                  chevron_right
                </span>
              </div>
              <div 
                className={`mt-4 pl-9 overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 !mt-0'
                }`}
              >
                <p className="font-caption text-caption text-on-surface-variant font-normal">
                  {faq.answer}
                </p>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface ExpandableFAQProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableFAQ({
  question,
  answer,
  defaultOpen = false,
}: ExpandableFAQProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-2 border-slate-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-md ${
          isOpen ? "rounded-none border-b border-white/20" : ""
        } bg-slate-900 px-6 py-4 text-left text-base font-medium text-white hover:bg-[#1e293b]/90`}
        aria-expanded={isOpen}
      >
        <span className="font-semibold">{question}</span>
        <ChevronUp
          className={`h-5 w-5 text-[#2DD4BF] transition-transform duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-base text-slate-300">{answer}</div>
      </div>
    </div>
  );
}

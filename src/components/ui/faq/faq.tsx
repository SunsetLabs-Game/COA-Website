"use client";
import Image from "next/image";
import { useState } from "react";
import icon from "../../public/Arrow.png";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-lg">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer flex justify-between text-[#f0f0f0] m-auto rounded-t-lg border-[0.5px] border-zinc-500 bg-[#1f2937] p-3 text-sm font-semibold"
      >
        <h1>{question}</h1>
        <div className="w-5">
          <Image className={`contrast-200 transition-transform duration-500 ${isOpen ? `rotate-0` : `rotate-180`}`} src={icon} alt="Arrow Icon" layout="responsive" />
        </div>
      </div>
      <div
        className={`overflow-hidden rounded-b-lg border-[0.5px] border-t-0 border-zinc-500 bg-[#1f2937] text-[#f0f0f0] text-sm font-medium transition-all duration-500 ease-in-out ${
          isOpen ? `max-h-32 p-3` : `max-h-0 p-0`
        }`}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;

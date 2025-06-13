"use client";
import ExpandableFAQ from "@/components/ui/faq/expandable-faq";
import {
  CircleHelp,
  Zap,
  Shield,
  Sword,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const Sidebar = [
    { name: "General", icon: <CircleHelp size={18} />, route: "/" },
    { name: "Gameplay", icon: <Zap size={18} />, route: "/gameplay" },
    { name: "Factions", icon: <Shield size={18} />, route: "/factions" },
    { name: "Combat", icon: <Sword size={18} />, route: "" },
    {
      name: "Marketplace",
      icon: <ShoppingBag size={18} />,
      route: "/marketplace",
    },
    { name: "Community", icon: <Users size={18} />, route: "/community" },
  ];

  const [selected, setSelected] = useState("Community");

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="pt-8 sm:pt-16">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-[44px] font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-[16px] text-gray-400 font-semibold mt-2">
          Find answers to the most common questions about Citizen of Arcanis
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pt-8 lg:pt-16">
        <div className="w-full lg:basis-1/5 border-2 border-slate-800 rounded-[8px] bg-slate-900 h-fit">
          <div className="p-4 font-bold text-lg lg:text-[18px]">Categories</div>
          <hr className="border-slate-800 border" />
          <div className="p-2">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1 lg:gap-1">
              {Sidebar.map((item) => (
                <li
                  key={item.name}
                  className={`px-2 py-3 flex text-gray-400 items-center gap-2 lg:gap-4 rounded-[6px] cursor-pointer transition-colors ${
                    item.name === selected ? "bg-cyan-500 text-teal-700" : ""
                  }`}
                  onClick={() => setSelected(item.name)}
                >
                  <div className="">{item.icon}</div>
                  <div className="text-sm lg:text-[16px] font-medium">
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:basis-4/5">
          <div className="border-2 border-slate-800 p-4 sm:p-6 rounded-[8px]">
            <div className="pb-4">
              <ExpandableFAQ
                question="How can I join a guild in Citizen of Arcanis?"
                answer=""
              />
            </div>
            <div className="pb-4">
              <ExpandableFAQ
                question="What community events are available?"
                answer=""
              />
            </div>
            <div className="pb-4">
              <ExpandableFAQ
                question="Is there player housing in the game?"
                answer=""
              />
            </div>

            <div>
              <ExpandableFAQ
                question="How does the game handle toxic behaviour?"
                answer=""
              />
            </div>
          </div>
          <div className="border-2 border-slate-800 rounded-[8px] p-4 sm:p-6 bg-gradient-to-br from-slate-900 to-slate-700">
            <h1 className="text-center text-xl sm:text-[22px] font-semibold">
              Still have questions?
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base mt-2">
              Our support team is ready to assist you with any other questions
              you might have.
            </p>
            <div className="flex justify-center items-center pt-4">
              <button className="flex items-center gap-2 sm:gap-4 w-fit bg-blue-500 px-3 sm:px-4 py-2 sm:py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-blue-600 transition-colors">
                <CircleHelp size={20} /> Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

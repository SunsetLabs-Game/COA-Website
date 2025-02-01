import {
  Search,
  Gamepad2Icon as GamepadTwo,
  Sword,
  Coins,
  ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/common/input";

export default function HelpCenter() {
  const sections = [
    {
      icon: <GamepadTwo className="size-5 text-teal-400" />,
      title: "Getting Started",
      questions: [
        "How do I create my character?",
        "What are the basic controls?",
        "How do I join a squad?",
      ],
    },
    {
      icon: <Sword className="size-5 text-teal-400" />,
      title: "Combat & Gameplay",
      questions: [
        "How does the combat system work?",
        "What are the different character classes?",
        "How do I level up my skills?",
      ],
    },
    {
      icon: <Coins className="size-5 text-teal-400" />,
      title: "Economy & Trading",
      questions: [
        "How do I trade with other players?",
        "What are gems used for?",
        "How do I earn premium currency?",
      ],
    },
    {
      icon: <ShieldCheck className="size-5 text-teal-400" />,
      title: "Account Security",
      questions: [
        "How do I enable 2FA?",
        "What should I do if my account is hacked?",
        "How do I report a player?",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-400">
          Game Support
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for help..."
            className="w-full pl-10 py-6 bg-[#1B2432] border-none text-white placeholder:text-gray-400 rounded-lg focus-visible:ring-teal-400"
          />
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-[#1B2432] rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2">
                {section.icon}
                <h2 className="text-xl font-semibold text-teal-400">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.questions.map((question, qIndex) => (
                  <button
                    key={qIndex}
                    className="w-full text-left hover:text-teal-400 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

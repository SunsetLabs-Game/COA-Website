"use client"

import { useState } from "react"
import { ChevronUp } from "lucide-react"

interface ExpandableFAQProps {
  question: string
  answer: React.ReactNode
  defaultOpen?: boolean
}

export default function ExpandableFAQ({ question, answer, defaultOpen = false }: ExpandableFAQProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg bg-slate-900 px-4 py-3 text-left text-sm font-medium text-slate-100 hover:bg-slate-800"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronUp
          className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="p-4 text-sm text-slate-100">{answer}</div>
      </div>
    </div>
  )
}


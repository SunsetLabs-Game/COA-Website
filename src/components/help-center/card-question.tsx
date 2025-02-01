import type React from "react"
import { GamepadIcon as GameController } from "lucide-react"
import Link from "next/link"

interface CardQuestionProps {
  icon?: React.ElementType
  title: string
  questions: string[]
  className?: string
}

const CardQuestion: React.FC<CardQuestionProps> = ({
  icon: Icon = GameController,
  title = "Getting Started",
  questions = [],
  className = "",
}) => {
  const baseClasses = "rounded-lg overflow-hidden"
  const containerClasses = "bg-slate-800  border-[1px] border-slate-700"
  const contentClasses = "p-6"
  const headerClasses = "flex items-center gap-2 mb-4"
  const titleClasses = "text-lg font-medium text-emerald-300"
  const listClasses = "space-y-3"
  const linkClasses = "text-slate-200 hover:text-white hover:text-emerald-300 transition-colors duration-200 block text-md"

  const combinedClasses = `${baseClasses} ${containerClasses} ${className}`

  return (
    <div className={combinedClasses}>
      <div className={contentClasses}>
        <div className={headerClasses}>
          <Icon className="w-5 h-5 text-emerald-400" />
          <h2 className={titleClasses}>{title}</h2>
        </div>
        <ul className={listClasses}>
          {questions.map((question, index) => (
            <li key={index}>
              <Link href="#" className={linkClasses} aria-label={question}>
                {question}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardQuestion


import type React from "react"
interface InfoBoxProps {
  title: string
  children: React.ReactNode
}

export default function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="bg-[#0c1624] border border-[#162a43] rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {children}
    </div>
  )
}


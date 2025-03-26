"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="text"
        placeholder="Search items..."
        className="pl-10 bg-gray-900/60 border-gray-700 text-white w-full focus:border-cyan-400 focus:ring-cyan-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}


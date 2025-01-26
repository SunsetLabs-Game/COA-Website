"use client"
import type React from "react"
import { useState, useEffect } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a search query.")
      return
    }
    onSearch(query)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [query, onSearch])

  return (
    <div
      className="flex items-center gap-2 p-1 rounded-full w-full max-w-[500px] h-12"
      style={{ backgroundColor: "#3986AFA6" }}
    >
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-white placeholder-white outline-none px-4 rounded-full"
        aria-label="Search input"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center w-10 h-10 text-white rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-200"
        style={{ backgroundColor: "#3986AFA6" }}
        aria-label="Search button"
      >
        <span className="text-sm">🔍</span>
      </button>
    </div>
  )
}

export default SearchBar


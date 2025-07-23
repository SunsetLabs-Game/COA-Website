"use client"

import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Input } from "@/components/common/input"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      setStatus("loading")
      await addDoc(collection(db, "waitlist"), {
        email,
        createdAt: Timestamp.now(),
      })
      setStatus("success")
      setEmail("")
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] text-white p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1B2432] p-6 rounded-lg space-y-4 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-teal-400">Join the Waitlist</h1>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#0e1a2b] border-none text-white placeholder:text-gray-400 focus-visible:ring-teal-400"
        />
        <button
          type="submit"
          className="w-full bg-[#03b3fe] text-white font-bold py-2 rounded hover:bg-cyan-600 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
        {status === "success" && (
          <p className="text-center text-green-400">Thanks for joining!</p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400">Something went wrong.</p>
        )}
      </form>
    </div>
  )
}

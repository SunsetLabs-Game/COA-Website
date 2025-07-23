"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/button";
import { addEmailToWaitlist } from "@/services/waitlist";
import toast from "react-hot-toast";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await addEmailToWaitlist(email);
      toast.success("You have joined the waitlist!");
      setEmail("");
    } catch (err) {
      toast.error("Failed to join waitlist");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1a2b] text-white">
      <div className="bg-black/50 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#03b3fe] mb-6">Join the Waitlist</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#162a43] border-[#00aaff]/30 placeholder:text-gray-500 text-white"
          />
          <Button type="submit" className="w-full bg-[#03b3fe] hover:bg-cyan-600">
            Join
          </Button>
        </form>
      </div>
    </div>
  );
}

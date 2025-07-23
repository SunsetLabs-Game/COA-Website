"use client"

import { useEffect, useState } from "react"

interface GameplayVideoProps {
  className?: string
}

export default function GameplayVideo({ className = "" }: GameplayVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Use a direct YouTube video URL
  const videoId = "mRH9Z97SwHY"
  
  useEffect(() => {
    // This ensures the component is mounted before trying to load YouTube
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`aspect-video bg-black relative overflow-hidden ${className}`} style={{ zIndex: 30 }}>
      {/* Clear any potential overlays */}
      <div className="absolute inset-0 z-20 bg-black"></div>
      
      {/* Show loading state until iframe is ready */}
      {!isLoaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#03b3fe]"></div>
        </div>
      )}
      
      {/* YouTube iframe with proper styling */}
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 40 }} // Ensure iframe is above everything
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1&controls=1&showinfo=0&color=white&iv_load_policy=3`}
        title="Citizen of Arcanis Gameplay"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="eager"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  )
}

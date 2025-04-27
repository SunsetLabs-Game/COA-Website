"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useStarknetWallet } from "@/hooks/use-starknet-wallet";
import { CopyIcon, CheckIcon, LogOut, Wallet, ChevronDown } from "lucide-react";

export default function StarknetConnect() {
  const {
    address,
    isConnected,
    isConnecting,
    isDisconnecting,
    connectWallet,
    disconnectWallet,
    formatAddress,
    getNetworkName,
  } = useStarknetWallet();
  
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyAddress = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  if (!isClient) {
    return (
      <div className="flex items-center gap-2 relative">
        <Button
          className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white"
        >
          &nbsp;
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 relative" ref={dropdownRef}>
      {isConnected ? (
        <>
          <button 
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1a2e47] hover:bg-[#243a59] cursor-pointer transition-colors border-none"
            onClick={toggleDetails}
            aria-label="Show wallet details"
          >
            <Wallet size={16} className="text-[#00aaff]" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white font-medium">
              {formatAddress()}
            </span>
            <ChevronDown 
              size={14} 
              className={`text-gray-400 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <Button
            variant="outline"
            size="sm"
            className="border-[#00aaff] text-[#00aaff] hover:text-white hover:bg-[#00aaff]"
            onClick={disconnectWallet}
            disabled={isDisconnecting}
          >
            {isDisconnecting ? 
              <span className="animate-pulse">...</span> : 
              <LogOut size={16} />
            }
          </Button>
          
          {showDetails && (
            <div 
              className="absolute top-full right-0 mt-2 w-64 bg-[#0c1624] border border-[#162a43] rounded-md p-3 shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="mb-2">
                <span className="text-gray-400 text-xs">Address</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-white text-sm font-medium truncate max-w-[calc(100%-30px)]">
                    {address}
                  </span>
                  <button 
                    onClick={copyAddress}
                    className="text-[#00aaff] hover:text-[#3dbeff] transition-colors"
                    type="button"
                    aria-label="Copy address"
                  >
                    {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="text-gray-400 text-xs">Network</span>
                <div className="flex items-center mt-1 gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white text-sm">{getNetworkName()}</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-[#162a43]">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  onClick={() => {
                    disconnectWallet();
                    setShowDetails(false);
                  }}
                >
                  Disconnect Wallet
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <Button
          className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white flex items-center gap-2"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <span className="animate-pulse">Connecting...</span>
          ) : (
            <>
              <Wallet size={16} />
              <span>Connect Wallet</span>
            </>
          )}
        </Button>
      )}
    </div>
  );
} 
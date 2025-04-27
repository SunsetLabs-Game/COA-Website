"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import { useStarknetWallet } from "@/hooks/use-starknet-wallet";
import type { UseStarknetWalletResult } from "@/hooks/use-starknet-wallet";

// Create context with default values
const WalletContext = createContext<UseStarknetWalletResult | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const walletData = useStarknetWallet();

  return (
    <WalletContext.Provider value={walletData}>
      {children}
    </WalletContext.Provider>
  );
}

// Custom hook to use the wallet context
export function useWallet(): UseStarknetWalletResult {
  const context = useContext(WalletContext);
  
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  
  return context;
}

// Function to handle account changes
export function handleWalletAccountChange(callback: () => void) {
  if (typeof window !== "undefined") {
    window.addEventListener('starknet_accountsChanged', callback);
    
    return () => {
      window.removeEventListener('starknet_accountsChanged', callback);
    };
  }
  
  return () => {};
} 
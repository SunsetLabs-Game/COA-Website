"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import MetaMaskSDK from "@metamask/sdk";

interface MetaMaskContextType {
  isConnected: boolean;
  account: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const MetaMaskContext = createContext<MetaMaskContextType | null>(null);

export const MetaMaskProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [sdk, setSdk] = useState<MetaMaskSDK | null>(null);

  // Initialize SDK
  useEffect(() => {
    const initializeSDK = () => {
      const MMSDK = new MetaMaskSDK({
        injectProvider: true, 
        dappMetadata: {
          name: "Citizen of Arcanis Website",
          url: window.location.href,
        },
      });

      setSdk(MMSDK);
    };

    initializeSDK();
  }, []);

  // Verifiy connection
  useEffect(() => {
    const checkConnection = async () => {
      const provider = sdk?.getProvider();
      if (provider) {
        try {
          const accounts = await provider.request({ method: "eth_accounts" }) as string[];
          
          if (accounts && accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error verifying connection:", error);
        }
      }
    };
  
    checkConnection();
  }, [sdk]);

  // Listen for account changes
  useEffect(() => {
    const provider = sdk?.getProvider();
    if (provider) {
      const handleAccountsChanged = (...args: unknown[]) => {
        const accounts = args[0] as string[]; 
        
        if (Array.isArray(accounts)) {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          } else {
            setAccount(null);
            setIsConnected(false);
          }
        }
      };
  
      provider.on("accountsChanged", handleAccountsChanged);
  
      return () => {
        provider.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, [sdk]);

  // Connect to MetaMask
  const connect = async () => {
    const provider = sdk?.getProvider();
    if (!provider) {
      alert("MetaMask not installed in your browser");
      return;
    }
  
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      }) as string[];
  
      if (accounts?.[0]) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("Connection error: user rejected connection request");
    }
  };

  // Disconnect from MetaMask
  const disconnect = () => {
    setAccount(null);
    setIsConnected(false);
  };

  return (
    <MetaMaskContext.Provider value={{ isConnected, account, connect, disconnect }}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (!context) throw new Error("useMetaMask must be used within a MetaMaskProvider");
  return context;
};
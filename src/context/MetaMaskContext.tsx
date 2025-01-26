// src/contexts/MetaMaskContext.tsx
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

  // Inicializar el SDK
  useEffect(() => {
    const initializeSDK = () => {
      const MMSDK = new MetaMaskSDK({
        injectProvider: true, // Inyecta automáticamente el provider en window.ethereum
        dappMetadata: {
          name: "Citizen of Arcanis Website",
          url: window.location.href,
        },
      });

      setSdk(MMSDK);
    };

    initializeSDK();
  }, []);

  // Verificar conexión al cargar la página
  useEffect(() => {
    const checkConnection = async () => {
      const provider = sdk?.getProvider();
      if (provider) {
        try {
          // Especificar el tipo de respuesta como string[]
          const accounts = await provider.request({ method: "eth_accounts" }) as string[];
          
          if (accounts && accounts.length > 0) { // Verificar explícitamente
            setAccount(accounts[0]);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error al verificar conexión:", error);
        }
      }
    };
  
    checkConnection();
  }, [sdk]);

  // Escuchar cambios de cuenta
  useEffect(() => {
    const provider = sdk?.getProvider();
    if (provider) {
      const handleAccountsChanged = (...args: unknown[]) => {
        // 1. Extraer el primer argumento (accounts)
        const accounts = args[0] as string[]; // Cast seguro
        
        // 2. Verificar si accounts es un array válido
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

  // Conectar a MetaMask
  const connect = async () => {
    const provider = sdk?.getProvider();
    if (!provider) {
      alert("MetaMask no está instalado!");
      return;
    }
  
    try {
      // Especificar el tipo de respuesta
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      }) as string[];
  
      if (accounts?.[0]) { // Verificar explícitamente
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error al conectar:", error);
      alert("Error al conectar. ¿Rechazaste la solicitud?");
    }
  };

  // Desconectar
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
  if (!context) throw new Error("useMetaMask debe usarse dentro de MetaMaskProvider");
  return context;
};
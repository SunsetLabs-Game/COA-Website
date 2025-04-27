"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  useConnect, 
  useAccount, 
  useDisconnect,
  useNetwork
} from "@starknet-react/core";
import { connect as starknetConnect, disconnect as starknetDisconnect } from "starknetkit";
import toast from "react-hot-toast";

export interface WalletState {
  address: string | undefined;
  chainId: string | undefined;
  isConnected: boolean;
  isConnecting: boolean;
  isDisconnecting: boolean;
}

export interface UseStarknetWalletResult extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  formatAddress: (fullView?: boolean) => string;
  getNetworkName: () => string;
}

export function useStarknetWallet(): UseStarknetWalletResult {
  const { connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  
  const [state, setState] = useState<WalletState>({
    address: undefined,
    chainId: undefined,
    isConnected: false,
    isConnecting: false,
    isDisconnecting: false,
  });

  // Update state when wallet connection changes
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      address,
      chainId: chain?.id ? chain.id.toString() : undefined,
      isConnected: !!address,
    }));
  }, [address, chain]);

  const connectWallet = useCallback(async () => {
    if (state.isConnected) return;
    
    setState(prev => ({ ...prev, isConnecting: true }));
    
    try {
      const result = await starknetConnect({
        modalMode: "alwaysAsk",
        dappName: "Citizen of Arcanis",
      });

      if (result?.connector) {
        await connect({ connector: result.connector });
        toast.success("Wallet connected successfully!");
      }
    } catch (error) {
      console.error("Connection error:", error);
      toast.error("Failed to connect wallet");
    } finally {
      setState(prev => ({ ...prev, isConnecting: false }));
    }
  }, [connect, state.isConnected]);

  const disconnectWallet = useCallback(async () => {
    if (!state.isConnected) return;
    
    setState(prev => ({ ...prev, isDisconnecting: true }));
    
    try {
      await disconnect();
      await starknetDisconnect({ clearLastWallet: true });
      toast.success("Wallet disconnected");
    } catch (error) {
      console.error("Disconnection error:", error);
      toast.error("Failed to disconnect wallet");
    } finally {
      setState(prev => ({ ...prev, isDisconnecting: false }));
    }
  }, [disconnect, state.isConnected]);

  const formatAddress = useCallback((fullView = false) => {
    if (!state.address) return "Not connected";
    
    return fullView 
      ? state.address 
      : `${state.address.slice(0, 6)}...${state.address.slice(-4)}`;
  }, [state.address]);

  const getNetworkName = useCallback(() => {
    if (!state.chainId) return "Not connected";
    
    switch (state.chainId) {
      case "0x534e5f4d41494e":
        return "StarkNet Mainnet";
      case "0x534e5f474f45524c49":
        return "Goerli Testnet";
      case "0x534e5f5345504f4c4941":
        return "Sepolia Testnet";
      default:
        return `Unknown (${state.chainId})`;
    }
  }, [state.chainId]);

  return {
    ...state,
    connectWallet,
    disconnectWallet,
    formatAddress,
    getNetworkName,
  };
} 
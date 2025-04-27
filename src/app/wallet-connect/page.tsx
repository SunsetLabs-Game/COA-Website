"use client";

import { Button } from "@/components/ui/button";
import { useStarknetWallet } from "@/hooks/use-starknet-wallet";
import { useEffect } from "react";

export default function WalletConnect() {
  const {
    address,
    chainId,
    isConnected,
    isConnecting,
    isDisconnecting,
    connectWallet,
    disconnectWallet,
    formatAddress,
    getNetworkName,
  } = useStarknetWallet();

  // Update wallet info when the component mounts to reflect current state
  useEffect(() => {
    // We don't need to do anything here; the hook will update automatically
    // based on the current wallet connection
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">StarkNet Wallet Connection</h1>
          
          <div className="bg-[#0c1624]/70 border border-[#162a43] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Wallet Status</h2>
            
            <div className="grid gap-4">
              <div className="flex justify-between items-center border-b border-[#162a43] pb-3">
                <span className="text-gray-400">Connection Status:</span>
                <span className={`font-medium ${isConnected ? "text-green-400" : "text-red-400"}`}>
                  {isConnected ? "Connected" : "Disconnected"}
                </span>
              </div>
              
              <div className="flex justify-between items-center border-b border-[#162a43] pb-3">
                <span className="text-gray-400">Wallet Address:</span>
                <span className="font-medium text-white">{formatAddress()}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-[#162a43] pb-3">
                <span className="text-gray-400">Network:</span>
                <span className="font-medium text-white">{getNetworkName()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            {!isConnected ? (
              <Button 
                className="bg-[#00aaff] hover:bg-[#00aaff]/80 text-white px-8 py-3 text-lg"
                onClick={connectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-3 text-lg"
                onClick={disconnectWallet}
                disabled={isDisconnecting}
              >
                {isDisconnecting ? "Disconnecting..." : "Disconnect Wallet"}
              </Button>
            )}
          </div>
          
          <div className="mt-10 text-gray-400 text-center">
            <p>
              Connect your StarkNet wallet to access blockchain features of Citizen of Arcanis.
              <br />
              Supported wallets include Argent X, Braavos, and more.
            </p>
          </div>
          
          {address && (
            <div className="mt-8 bg-[#0c1624]/70 border border-[#162a43] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Wallet Details</h2>
              
              <div className="grid gap-4">
                <div className="border-b border-[#162a43] pb-3">
                  <span className="text-gray-400 block mb-1">Full Address:</span>
                  <span className="font-medium text-white break-all">{formatAddress(true)}</span>
                </div>
                
                <div className="border-b border-[#162a43] pb-3">
                  <span className="text-gray-400 block mb-1">Chain ID:</span>
                  <span className="font-medium text-white break-all">{chainId || "Unknown"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
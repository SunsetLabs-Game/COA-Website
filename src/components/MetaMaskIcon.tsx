"use client";

import { Icon } from "@iconify/react";
import { useMetaMask } from "../context/MetaMaskContext";

const MetaMaskIcon = () => {
  const { isConnected, account, connect, disconnect } = useMetaMask();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(-3)}`;
  };

  return (
    <div
      onClick={isConnected ? disconnect : connect}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 12px",
        borderRadius: "8px",
        backgroundColor: isConnected ? "#f0f0f0" : "transparent",
        transition: "background-color 0.2s",
      }}
    >
      <div style={{ position: "relative" }}>
        <Icon
          icon="logos:metamask-icon"
          style={{
            fontSize: "32px",
            color: "#f6851b",
          }}
        />
        {isConnected && (
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "-4px",
              background: "green",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        )}
      </div>
      
      {isConnected && account && (
        <span style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#333",
        }}>
          {truncateAddress(account)}
        </span>
      )}
    </div>
  );
};

export default MetaMaskIcon;
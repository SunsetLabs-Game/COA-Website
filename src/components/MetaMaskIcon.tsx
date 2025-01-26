// src/components/MetaMaskIcon.tsx
"use client";

import { Icon } from "@iconify/react";
import { useMetaMask } from "../context/MetaMaskContext";

const MetaMaskIcon = () => {
  const { isConnected, account, connect, disconnect } = useMetaMask();

  return (
    <div
      onClick={isConnected ? disconnect : connect}
      style={{
        cursor: "pointer",
        display: "inline-block",
        position: "relative",
      }}
    >
      <Icon
        icon="logos:metamask-icon"
        style={{
          fontSize: "48px",
          color: "#f6851b",
        }}
      />
      {account && (
        <div
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "green",
            color: "white",
            borderRadius: "50%",
            padding: "4px 8px",
            fontSize: "12px",
          }}
        >
          ✔️
        </div>
      )}
    </div>
  );
};

export default MetaMaskIcon;
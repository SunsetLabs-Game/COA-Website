// src/components/MetaMaskIcon.tsx
"use client"; // Indica que este es un Client Component

import React from "react";
import { Icon } from "@iconify/react";

const MetaMaskIcon = () => {
  const handleClick = () => {
    console.log("MetaMask icon clicked!");
    // Aquí puedes agregar la lógica de conexión a MetaMask más adelante
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer", // Cambia el cursor a una mano para indicar que es clickeable
        display: "inline-block", // Asegura que el ícono no ocupe toda la línea
      }}
    >
      <Icon
        icon="logos:metamask-icon" // Ícono de MetaMask de Iconify
        style={{
          fontSize: "48px", // Tamaño del ícono
          color: "#f6851b", // Color naranja de MetaMask (opcional)
        }}
      />
    </div>
  );
};

export default MetaMaskIcon;
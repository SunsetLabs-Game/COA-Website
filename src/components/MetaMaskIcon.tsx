// src/components/MetaMaskIcon.jsx
import React from 'react';
import { Icon } from '@iconify/react';

interface MetaMaskIconProps {
  onClick: () => void;
}

const MetaMaskIcon: React.FC<MetaMaskIconProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer', // Cambia el cursor a una mano para indicar que es clickeable
        display: 'inline-block', // Asegura que el ícono no ocupe toda la línea
      }}
    >
      <Icon
        icon="logos:metamask-icon" // Ícono de MetaMask de Iconify
        style={{
          fontSize: '48px', // Tamaño del ícono
          color: '#f6851b', // Color naranja de MetaMask (opcional)
        }}
      />
    </div>
  );
};

export default MetaMaskIcon;
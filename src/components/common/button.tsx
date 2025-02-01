import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
  };

  const sizeClasses = {
    small: 'text-sm py-1 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={combinedClasses} disabled={variant === 'disabled'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

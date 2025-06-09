// components/common/Button.tsx
import React from "react";
import {type ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  className = "",
  onClick,
  type = "button",
}) => {
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Base button classes
  const baseClasses =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${shape} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;


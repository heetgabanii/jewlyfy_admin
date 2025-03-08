import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost" | "3d" | "glass" | "neon";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  style = {},
}) => {
  // Base styles
  const baseStyles = `font-semibold rounded-lg flex items-center justify-center 
                      active:scale-95 transition-all duration-300 ease-in-out`;

  // Variant styles with enhanced shadows and transitions
  const variantStyles: Record<string, string> = {
    primary: `bg-gradient-to-r from-blue-500 to-blue-600 text-white 
              hover:from-blue-600 hover:to-blue-700 
              shadow-lg hover:shadow-xl`,
    
    secondary: `bg-gradient-to-r from-gray-500 to-gray-600 text-white 
                hover:from-gray-600 hover:to-gray-700 
                shadow-lg hover:shadow-xl`,
    
    danger: `bg-gradient-to-r from-red-500 to-red-600 text-white 
             hover:from-red-600 hover:to-red-700 
             shadow-lg hover:shadow-xl`,
    
    outline: `border-2 border-gray-300 text-gray-700 
              hover:bg-gray-50 hover:border-gray-400 
              shadow-sm hover:shadow-md`,

    ghost: `text-gray-700 hover:bg-gray-100 hover:text-gray-900 
            shadow-none hover:shadow-md`,

    "3d": `bg-blue-500 text-white font-bold border-b-4 border-blue-700 
           hover:bg-blue-400 hover:border-blue-500 hover:-translate-y-0.5 
           active:border-b-0 active:translate-y-1 
           shadow-lg hover:shadow-2xl transition-all duration-200 
           transform perspective-1000`,
    
    glass: `backdrop-blur-lg bg-white/20 text-white border border-white/30 
            hover:bg-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] 
            shadow-[0_4px_15px_rgba(255,255,255,0.1)]`,
    
    neon: `bg-purple-600 text-white 
           shadow-[0_0_15px_rgba(147,51,234,0.5)] 
           hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] 
           hover:bg-purple-500 border border-purple-400`,
  };

  // Size styles
  const sizeStyles: Record<string, string> = {
    small: "px-4 py-1.5 text-sm",
    medium: "px-6 py-2.5 text-base",
    large: "px-8 py-3.5 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed filter grayscale" : ""} 
        ${fullWidth ? "w-full" : ""}
        ${className}`}
      style={style}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;

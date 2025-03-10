import React from "react";

interface TextFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = "",
  style = {},
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`} style={style}>
      {/* Label (Above Input) */}
      {label && (
        <label

          className="mb-3 text-gray-700 dark:text-gray-300 font-medium"
          style={{
            fontSize: "14px",
            fontFamily: "revert",
            marginBottom: "25px"

          }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input Field (Below Label) */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          transition: "all 0.3s",
          backgroundColor: "#f9fafb",
          width: "100%",
          fontSize: "16px",

          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          marginTop: "12px",

          ...style,
        }}
        className={`text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 
          transition duration-300 focus:outline-none focus:ring-0
          ${error ? "shadow-[inset_0_2px_4px_rgba(255,0,0,0.1)]" : ""}
          hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]`}
      />

      {/* Error Message (Below Input) */}
      {error && (
        <p className="text-red-500 text-sm mt-1" style={{ fontSize: "12px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;

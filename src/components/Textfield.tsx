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
          className="mb-1 text-gray-700 dark:text-gray-300 font-medium"
          style={{ fontSize: "14px", fontFamily:"revert"}}
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
          border: error ? "1px solid red" : "1px solid #ccc",
          outline: "none",
          transition: "border-color 0.3s",
          backgroundColor: "#fff",
          width: "100%",
          fontSize: "16px",
          ...style,
        }}
        className={`shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition duration-300
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700 focus:ring-blue-500"
          } focus:ring-2 outline-none`}
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

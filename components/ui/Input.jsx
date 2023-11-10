import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  onChange,
  value,
  className,
  style,
  required = false,
}) => {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={style}
        className={`form-control ${className}`}
        required={required}
      />
    </label>
  );
};

export default Input;

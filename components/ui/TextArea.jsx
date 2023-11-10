import React from "react";

const TextArea = ({
  label,
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
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        style={style}
        className={`form-control ${className}`}
        required={required}
      ></textarea>
    </label>
  );
};

export default TextArea;

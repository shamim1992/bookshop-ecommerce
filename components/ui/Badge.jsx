import React from "react";

const Badge = ({ children, count = 0 }) => {
  return (
    <div className="">
      <span className="badge">{count}</span>
      {children}
    </div>
  );
};

export default Badge;

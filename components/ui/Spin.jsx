import React from "react";

const Spin = ({ style, center = false, overlay = false }) => {
  return (
    <div className={overlay ? "overlay" : ""}>
      <div
        style={style}
        className={`spinner ${center ? "m-auto d-block" : ""} `}
      />
    </div>
  );
};

export default Spin;

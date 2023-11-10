import React, { useEffect, useState } from "react";
import styles from "./../styles/Drawer.module.css";

const Drawer = ({
  children,
  visible = false,
  title,
  width = 400,
  onClose,
  style,
  placement,
}) => {
  const [open, setOpen] = useState(visible);
  const handleOnClose = () => {
    onClose();
    setOpen(false);
  };
  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  // console.log("############# Drawer", visible, ", Open ", open);
  return (
    <div className={`${open ? "d-block" : "d-none"}`}>
      <div className={styles.overlay} onClick={handleOnClose} />
      <div
        style={{
          ...style,
          width,
          // placement: placement === "right" ? { right: 0 } : { left: 0 },
        }}
        className={`${styles.container} ${
          placement == "right" ? "right-0" : "left-0"
        } ${open ? styles.active : null}`}
      >
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button className={styles.close_btn} onClick={handleOnClose}>
            &#x2573;
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

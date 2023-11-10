import React, { useEffect, useState } from "react";
import styles from "./../../styles/Modal.module.css";

const Modal = ({
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

  return (
    <div className={`${styles.container} ${open ? "d-block" : "d-none"}`}>
      <div
        style={{
          ...style,
          // width,
        }}
        className={`${styles.content}`}
      >
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {onClose && (
            <button className={styles.close_btn} onClick={handleOnClose}>
              &#x2573;
            </button>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

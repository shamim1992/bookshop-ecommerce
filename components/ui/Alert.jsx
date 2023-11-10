import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "./../../styles/Alert.module.css";
const Alert = ({ duration = 1500 }) => {
  const alerts = useSelector((state) => state.alert.alerts);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, duration);
    }
  }, [alerts]);
  const onClose = () => {
    setShow(false);
  };
  return (
    show && (
      <div className={styles.container}>
        <div className={styles.card}>
          {alert?.type === "success" ? (
            <>
              <AiFillCheckCircle size={20} color="#52c41a" />
              &nbsp;
              {alert?.message ?? "Success"}
            </>
          ) : (
            <>
              <AiFillCloseCircle size={20} color="#ff4d4f" />
              &nbsp;
              {alert?.message ?? "Something went wrong"}
            </>
          )}

          {/* 73d13d */}
        </div>
      </div>
    )
  );
};
export default Alert;

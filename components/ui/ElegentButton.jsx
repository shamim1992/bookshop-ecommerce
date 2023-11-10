import React from "react";
import styles from "./../../styles/CartItem.module.css";
const ElegentButton = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div>
      <div className={`row ${styles.quantity}`}>
        <div className={`col cursor-pointer`} onClick={onDecrement}>
          &minus;
        </div>
        <div className={`col`}>{quantity}</div>
        <div className={`col cursor-pointer `} onClick={onIncrement}>
          +
        </div>
      </div>
    </div>
  );
};

export default ElegentButton;

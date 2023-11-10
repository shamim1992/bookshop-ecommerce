import React from "react";
import styles from "../../styles/Order.module.css";
const OrderItem = ({ data }) => {
  const { id, name, quantity, total_amount } = data;
  return (
    <div className={styles.item}>
      <div>
        {name} x {quantity}
      </div>
      <div>&#8377;{total_amount}</div>
    </div>
  );
};

export default OrderItem;

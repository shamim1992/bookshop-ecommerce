import Image from "next/image";
import React from "react";
import {
  getOrderStatus,
  getPaymentMode,
  getPaymentStatus,
} from "../../helper/Utils";
import styles from "../../styles/Order.module.css";
import OrderItem from "./OrderItem";
import Rating from "../review/Rating";
import { OrderStatus } from "../../helper/Status";
const OrderCard = ({ data }) => {
  const {
    id,
    created_at,
    shipping_address,
    items = [],
    totalItems,
    grand_total_amount,
    shipping_charge = 0.0,
    balance_amount,
    order_status,
    payment_status,
    payment_mode,
    is_reviewed,
  } = data;
  const ORDER_STATUS = getOrderStatus(order_status);
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className="d-flex justify-content-between">
          <div>
            <p>
              ORDER #{id} - {created_at}
            </p>
          </div>
          <div className="">
            <p>{ORDER_STATUS} </p>
          </div>
        </div>
        <hr />
        {shipping_address && (
          <>
            <div className={styles.address}>
              <div>
                <h6>Deliver to</h6>
                <p>{shipping_address}</p>
              </div>
            </div>
            <hr />
          </>
        )}
        <div className={styles.items}>
          {items?.length > 0 &&
            items?.map((item) => <OrderItem key={item.id} data={item} />)}
        </div>
        <hr />
        <div className="">
          <div className={styles.item}>
            <div>Item Total</div>
            <div>&#8377;{grand_total_amount}</div>
          </div>
          <div className={styles.item}>
            <div>Shipping Charges</div>
            <div>&#8377;{shipping_charge}</div>
          </div>
        </div>
        <div className={styles.item}>
          <h5>Payable Amount</h5>
          <h5>&#8377; {grand_total_amount}</h5>
        </div>
        <div className={styles.item}>
          <div>Payable Status</div>
          <div>
            {getPaymentStatus(payment_status)}
            {payment_mode && ` (${getPaymentMode(payment_mode)})`}
          </div>
        </div>
        {/* <div className={styles.item}>
          <div>Payable Mode</div>
          <div>{getPaymentMode(payment_mode)}</div>
        </div> */}

        {order_status == OrderStatus.DELIVERED ? (
          items?.map((item) =>
            !item.is_reviewed ? (
              <Rating key={item.id} order_id={id} item={item} />
            ) : (
              ""
            )
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default OrderCard;

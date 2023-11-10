import { AddressType, OrderStatus, PaymentMode, PaymentStatus } from "./Status";

const getAddressType = (type) => {
  let name = "";
  switch (type) {
    case AddressType.HOME:
      name = "HOME";
      break;
    case AddressType.WORK:
      name = "WORK";
      break;
    case AddressType.OTHER:
      name = "OTHER";
      break;
    default:
  }
  return name;
};

const getOrderStatus = (status, date) => {
  let name = "";
  switch (status) {
    case OrderStatus.PLACED:
      name = "Placed";
      break;
    case OrderStatus.CONFIRMED:
      name = "Confirmed";
      break;
    case OrderStatus.DISPATCHED:
      name = "Dispatched";
      break;
    case OrderStatus.DELIVERED:
      name = "Delivered";
      break;
    case OrderStatus.CANCELLED_CONSUMER:
      name = "Cancelled (Consumer)";
      break;
    case OrderStatus.CANCELLED_ADMIN:
      name = "Cancelled (Admin)";
      break;
    case OrderStatus.RETURNED:
      name = "Returned";
      break;
    default:
  }
  return name;
};

const getPaymentStatus = (type) => {
  let name = "";
  switch (type) {
    case PaymentStatus.UNPAID:
      name = "UNPAID";
      break;
    case PaymentStatus.PAID:
      name = "PAID";
      break;
    case PaymentStatus.REFUNDED:
      name = "REFUNDED";
      break;
    default:
  }
  return name;
};
const getPaymentMode = (type) => {
  let name = "";
  switch (type) {
    case PaymentMode.CASH:
      name = "CASH";
      break;
    case PaymentMode.ONLINE:
      name = "ONLINE";
      break;
    default:
  }
  return name;
};
function isEmpty(value) {
  if (typeof value === "undefined") {
    return true; // undefined values are considered empty
  }
  if (typeof value === "string" && value.trim() === "") {
    return true; // empty string
  }
  if (Array.isArray(value) && value.length === 0) {
    return true; // empty array
  }
  if (
    typeof value === "object" &&
    value !== null &&
    Object.keys(value).length === 0
  ) {
    return true; // empty object
  }
  return false; // non-empty value
}

var str = ""; // your variable or string
if (isEmpty(str)) {
  console.log("The variable is empty.");
}

export {
  getAddressType,
  getOrderStatus,
  isEmpty,
  getPaymentStatus,
  getPaymentMode,
};

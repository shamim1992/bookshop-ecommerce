const AddressType = Object.freeze({
  HOME: 1,
  WORK: 2,
  OTHER: 3,
});
const TransactionType = Object.freeze({
  ROOM_BOOKING: 1,
  RESTAURANT: 2,
  BAR: 3,
  BANQUET: 4,
  SERVICE: 5,
});
const TaxType = Object.freeze({
  NONE: 0,
  GST: 1,
  VAT: 2,
});
const ItemType = Object.freeze({
  FOOD: 1,
  DRINK: 2,
  COMBO: 3,
});
const OrderMode = Object.freeze({
  DINE_IN: 1,
  TAKE_AWAY: 2,
  DELIVERY: 3,
});
const PaymentMode = Object.freeze({
  CASH: 1,
  ONLINE: 2,
  CREDIT: 3,
});
const PaymentStatus = Object.freeze({
  UNPAID: 0,
  PAID: 1,
  REFUNDED: 2,
});

const OrderStatus = Object.freeze({
  PLACED: 0,
  CONFIRMED: 1,
  DISPATCHED: 2,
  DELIVERED: 3,
  CANCELLED_CONSUMER: 4,
  CANCELLED_ADMIN: 5,
  RETURNED: 6,
});

export {
  AddressType,
  TransactionType,
  TaxType,
  ItemType,
  PaymentStatus,
  OrderStatus,
  PaymentMode,
  OrderMode,
};

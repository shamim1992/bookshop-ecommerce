import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./../../styles/CartItem.module.css";
import { createAlert } from "../../store/slices/alertSlice";
import {
  increasCartQty,
  decreaseCartQty,
  removeFromCart,
} from "../../store/slices/cartSlice";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const CartItem = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isLoading, setLoading] = useState(false);
  const { id, itemId, name, price, totalAmount } = data;
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
        <div className="col-span-1">
          <div className="flex lg:gap-4">
            <div>
              <AiOutlineCloseCircle
                size={30}
                onClick={() => dispatch(removeFromCart(id))}
                className="cursor-pointer "
              />
            </div>
            <img
              src="/assets/image1.jpg"
              alt="image"
              className="w-16 rounded-xl"
            />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-5">
          <div>
            <div className="text-base lg:text-lg font-semibold">{name}</div>

            <div className="flex justify-between gap-3 mt-2">
              <div className="flex items-center border justify-center rounded-full">
                <div className="mr-4">
                  <button className="px-3 py-4" onClick={decrementQuantity}>
                    <IoMdRemove />
                  </button>
                </div>

                <div className="text-base font-semibold">{quantity}</div>

                <div className="ml-4">
                  <button className="px-3 py-4" onClick={incrementQuantity}>
                    <IoMdAdd />
                  </button>
                </div>
              </div>

              <div className="flex items-center text-lg font-normal justify-end gap-4">
                <div className={styles.amount}>
                  &#8377;&nbsp;
                  <strong>{totalAmount}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

// const handleIncreament = async () => {
// setLoading(true);
// try {
//   const response = await updateItemQty({
//     id,
//     actionType: "INCREASE",
//   }).unwrap();
//   if (response.status) {
//   } else {
//   }
// } catch (err) {
//   dispatch(
//     createAlert({ type: "error", message: err?.response?.data?.message })
//   );
// } finally {
//   setLoading(false);
// }
// };
// const handleDecreament = async () => {
//dispatch(removeFromCart(id));
// setLoading(true);
// try {
//   let response = await updateItemQty({
//     id,
//     actionType: "DECREASE",
//   }).unwrap();
//   console.log("try ", response);
//   if (response.status) {
//   } else {
//   }
// } catch (err) {
//   console.log("error ", err?.response?.data?.message);
//   // message.error(err.response.data.message);
// } finally {
//   console.log("finally called");
//   setLoading(false);
// }
// };

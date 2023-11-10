import React from "react";
import Modal from "../ui/Modal";
import Image from "next/image";
import styles from "./../../styles/Item.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
} from "../../store/apis/cartApi";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  addToCart,
  decreaseCartQty,
  increasCartQty,
} from "../../store/slices/cartSlice";
import ElegentButton from "../ui/ElegentButton";
const ItemDetailModal = ({ open, setOpen, data }) => {
  const { id, name } = data;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const [addToCart] = useAddToCartMutation();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === id);
  return (
    <>
      <Modal
        visible={open}
        onClose={() => setOpen(false)}
        title={data.name}
        style={{}}
      >
        <div>
          <div className={styles.detail_image}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${data.image}`}
              alt={data.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p></p>
          <p>{data.description}</p>
          <div className="mt-2">
            {cartItem ? (
              <>
                <ElegentButton
                  quantity={cartItem.quantity}
                  onIncrement={() => dispatch(increasCartQty(id))}
                  onDecrement={() => dispatch(decreaseCartQty(id))}
                />
              </>
            ) : (
              <button
                style={{ width: 100 }}
                className={`btn ${styles.cart_btn}`}
                onClick={() => dispatch(addToCart({ id, quantity: 1 }))}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ItemDetailModal;

// const handleAddToCart = async () => {
// if (!isAuthenticated) {
//   dispatch(setAuthDrawer(true));
//   return;
// }
// setLoading(true);
// try {
//   const response = await addToCart({ itemId }).unwrap();
//   if (response.status) {
//     dispatch(createAlert({ type: "success", message: "Added to Cart" }));
//   } else {
//     dispatch(createAlert({ type: "error" }));
//   }
// } catch (err) {
//   dispatch(
//     createAlert({ type: "error", message: err?.response?.data?.message })
//   );
//   console.log("error ", err?.response?.data?.message);
// } finally {
//   console.log("finally called");
//   setLoading(false);
// }
//  };

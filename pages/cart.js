import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import CartItem from "../components/item/CartItem";
import styles from "../styles/Checkout.module.css";
import { useGetCartQuery } from "../store/apis/cartApi";
import { useDispatch, useSelector } from "react-redux";
import { useAddOrderMutation } from "./../store/apis/orderApi";
import { useRouter } from "next/router";
import Spin from "../components/ui/Spin";
import { createAlert } from "../store/slices/alertSlice";
import { clearCart } from "../store/slices/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import AddressDrawer from "../components/address/AddressDrawer";
import ProtectedRoute from "./../components/ProtectedRoute";
import { OrderMode, PaymentMode, PaymentStatus } from "../helper/Status";
import Button from "../components/ui/Button";
import { setAuthDrawer } from "../store/slices/authSlice";
import useRazorpay from "react-razorpay";
const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedCartItems, setSelectedCartItems] = useLocalStorage(
    "items",
    []
  );
  const [Razorpay, isLoaded] = useRazorpay();
  const [paymentMode, setPaymentMode] = useState(1);
  const [orderMode, setOrderMode] = useState(1);
  const [openAddressDrawer, setOpenAddressDrawer] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const user = useSelector((state) => state.auth?.user);
  const {
    data: cart,
    isFetching: isGetCartFetching,
    isLoading: isGetCartLoading,
    isSuccess: isGetCartSuccess,
    isError: isGetCartError,
  } = useGetCartQuery(cartItems);
  const [addOrder] = useAddOrderMutation();
  const handlePlaceOrder = async (payload) => {
    try {
      setLoading(true);
      const result = await addOrder({
        cartItems,
        address_id: cart?.address?.id,
        shipping_address: cart?.address?.name,
        ...payload,
      }).unwrap();
      if (result.status) {
        dispatch(clearCart());
        dispatch(createAlert({ type: "success", message: "Order Successful" }));
        setSelectedCartItems([]);
        router.replace("/account/orders");
      } else {
        dispatch(createAlert({ type: "error" }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error" }));
    } finally {
      setLoading(false);
    }
  };
  const handlePayment = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/create/razorpay/order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: cart?.grandTotal,
          }),
        }
      );
      const order = await response.json();
      const options = {
        order_id: order?.order_id,
        amount: order?.amount,
        currency: order?.current,
        name: "ChanreBookShop",
        description: "Test Transaction",
        image: "https://bookshop.assamtechnologies.com/logo.png",
        handler: (response) => {
          handlePlaceOrder({
            ...response,
            payment_status: PaymentStatus.PAID,
            payment_mode: PaymentMode.ONLINE,
          });
        },
        prefill: {
          name: user?.name || user?.phone,
          contact: user?.phone,
        },
        notes: {
          address:
            "No. 65 (414), 20th Main, West of Chord Road, 1st Block, Rajajinagar, Bangalore- 560010",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      dispatch(createAlert({ type: "error" }));
    }
  };

  return (
    <ProtectedRoute>
      <div className="" style={{ backgroundColor: "#f9fafc" }}>
        {openAddressDrawer && (
          <AddressDrawer
            open={openAddressDrawer}
            setOpen={setOpenAddressDrawer}
          />
        )}
        {isLoading && (
          <Spin
            style={{
              width: "80px",
              height: "80px",
            }}
            center={true}
            overlay={true}
          />
        )}

        {isGetCartFetching && (
          <Spin
            style={{
              width: "80px",
              height: "80px",
            }}
            center={true}
            overlay={true}
          />
        )}
        <div className={styles.container}>
          {isLoggedIn ? (
            <>
              {!cart?.items.length ? (
                <div className="cart_empty">
                  <h1 className="text-center">Cart is empty</h1>
                </div>
              ) : (
                <div className="p-4 space-y-6">
                  <div className={`shadow-lg rounded-md p-4`}>
                    <div className="d-flex justify-content-between rounded-lg">
                      <h3 className="text-lg">Shipping Address</h3>
                      <button
                        className="bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold"
                        onClick={() => setOpenAddressDrawer(true)}
                      >
                        {cart?.address ? "CHANGE" : "ADD "}
                      </button>
                    </div>
                    <div>{cart?.address?.name}</div>
                  </div>
                  {/* <div className="col-lg-4"> */}
                  <div className={`shadow-lg p-4 rounded-md`}>
                    <div className={styles.cart_items}>
                      {cart && cart?.items?.length > 0
                        ? cart.items.map((data) => (
                            <CartItem key={data.id} data={data} />
                          ))
                        : ""}
                    </div>
                    <hr className="mt-3 mb-3" />
                    <div className="">
                      <h4 className="font-medium underline">Billing Details</h4>
                      <div className="row mt-2 text-lg">
                        <div className="col ">Item total</div>
                        <div className="">&#8377;{cart?.grandTotal ?? 0}</div>
                      </div>

                      <div className="row mt-2 mb-3 text-lg">
                        <div className="col">Taxes & Charges</div>
                        <div className="">&#8377;0</div>
                      </div>
                      <hr className="mt-3 mb-3" />

                      <div className="row text-lg">
                        <div className="col">
                          <div>To Pay</div>
                        </div>
                        <div className="">
                          <div>&#8377;{cart?.grandTotal ?? 0}</div>
                        </div>
                      </div>

                      {cart?.address ? (
                        <div>
                          <h4>Place Order</h4>
                          <div className="row">
                            <button
                              className={`col mr-2 ${styles.place_order} bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold w-full items-center mt-4`}
                              onClick={handlePayment}
                              style={{ backgroundColor: "#4b3ccd" }}
                            >
                              Pay Online
                            </button>
                            <button
                              className={`col ml-2 ${styles.place_order} bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold w-full items-center mt-4`}
                              onClick={() =>
                                handlePlaceOrder({
                                  payment_status: PaymentStatus.UNPAID,
                                  payment_mode: null,
                                })
                              }
                              style={{ backgroundColor: "green" }}
                            >
                              Pay Cash
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <button
                            className="bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold items-center mt-4 ml-auto"
                            style={{ opacity: 0.5 }}
                          >
                            Select Shipping Address
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                // </div>
              )}
            </>
          ) : (
            <>
              <div className="cart_empty">
                <Button
                  className="bg-blue-900 px-4 py-2 rounded-lg text-white font-semibold w-full items-center mt-4"
                  style={{
                    fontSize: 20,
                    color: "white",
                    background: "#393185",
                  }}
                  onClick={() => dispatch(setAuthDrawer(true))}
                >
                  Login To Continue
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Checkout;

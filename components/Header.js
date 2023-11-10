import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import { useGetUserQuery } from "../store/apis/authApi";
import { setLoggedIn, setUser } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spin from "./ui/Spin";
import Alert from "./ui/Alert";
import { useGetCartMutation, useGetCartQuery } from "../store/apis/cartApi";
import useLocalStorage from "../hooks/useLocalStorage";
import { setCartItems } from "../store/slices/cartSlice";
import AuthDrawer from "./../components/account/AuthDrawer";
import { setOpenOutletDrawer, setOutlet } from "../store/slices/utilSlice";
import { useRouter } from "next/router";
import HeaderBar from "./HeaderBar";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const openAuthDrawer = useSelector((state) => state.auth.authDrawer);
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const [selectedCartItems, setSelectedCartItems] = useLocalStorage(
    "items",
    []
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    data: response,
    isSuccess,
    isError,
    isFetching,
    isLoading,
    error,
  } = useGetUserQuery();

  const {
    refetch,
    data: cart,
    isFetching: isGetCartFetching,
    isLoading: isGetCartLoading,
    isSuccess: isGetCartSuccess,
    isError: isGetCartError,
  } = useGetCartQuery(cartItems);
  useEffect(() => {
    if (isSuccess) {
      if (response.status) {
        dispatch(setLoggedIn(true));
        dispatch(setUser(response.data));
      } else {
        dispatch(setLoggedIn(false));
        dispatch(setUser({}));
      }
    }
    if (isError) {
      dispatch(setLoggedIn(false));
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    if (selectedCartItems.length > 0) {
      dispatch(setCartItems(selectedCartItems, { skip: true }));
      refetch();
    }
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      setSelectedCartItems(cartItems);
    }
  }, [cartItems]);

  return (
    <>
      <Alert />
      {/* <div style={{}} className={styles.info_bar}>
        <div>Need Help? +91-9535056289</div>
        <div>info@chanrebookshop.com</div>
      </div> */}
      <header className={styles.header}>
        <HeaderBar />
        <Navbar />
      </header>
      {openAuthDrawer && <AuthDrawer />}
    </>
  );
};

export default Header;

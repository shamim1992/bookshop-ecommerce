import React, { useState } from "react";
import OrderCard from "../../components/order/OrderCard";
import { useGetOrdersQuery } from "../../store/apis/orderApi";
import { useLogoutMutation } from "../../store/apis/authApi";
import styles from "../../styles/Account.module.css";
import Button from "../../components/ui/Button";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Spin from "../../components/ui/Spin";
import { apiSlice } from "../../store/slices/apiSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../../components/ProtectedRoute";
import UpdateProfileDrawer from "../../components/account/UpdateProfileDrawer";
import { setAuthDrawer } from "../../store/slices/authSlice";
const Account = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.auth?.user);
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const [openUpdateProfileDrawer, setOpenUpdateProfileDrawer] = useState(false);
  const {
    refetch,
    data: orders = [],
    isFetching,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  } = useGetOrdersQuery();
  const [logout, { isLoading }] = useLogoutMutation();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const result = await logout().unwrap();
      if (result.status) {
        dispatch(apiSlice.util.resetApiState());
        router.replace("/");
      }
    } catch (err) {
    } finally {
    }
  };

  return (
    <ProtectedRoute>
      {openUpdateProfileDrawer && (
        <UpdateProfileDrawer setOpen={setOpenUpdateProfileDrawer} />
      )}
      <div className={styles.container}>
        {isLoggedIn ? (
          <>
            {" "}
            <div className="row">
              <div className={`col-lg-3 ${styles.actions}`}>
                <div className={`${styles.tab_item} ${styles.active}`}>
                  <span className={styles.icon}>
                    <HiUser size={20} color="white" />
                  </span>
                  Account
                </div>
                <div
                  className={`${styles.tab_item} `}
                  onClick={() => {
                    router.push("/account/orders");
                  }}
                >
                  <span className={styles.icon}>
                    <HiOutlineShoppingBag size={20} color="white" />
                  </span>
                  Orders
                </div>

                <Button className="btn save" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
              <div className={`col-lg-9 ${styles.content}`}>
                {isGetLoading ? (
                  <Spin
                    style={{ width: "70px", height: "70px" }}
                    center={true}
                  />
                ) : (
                  <>
                    <div className="d-flex justify-content-between">
                      <h2>My Account</h2>
                      <div>
                        <Button
                          style={{ background: "#393185", color: "white" }}
                          className="btn"
                          onClick={() => setOpenUpdateProfileDrawer(true)}
                        >
                          <AiOutlineEdit className="mr-2" />
                          Update
                        </Button>
                      </div>
                    </div>
                    <div>Name : {user?.name}</div>
                    <div>Phone Number : {user?.phone}</div>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="cart_empty">
              <Button
                className="btn"
                style={{ fontSize: 20, color: "white", background: "#393185" }}
                onClick={() => dispatch(setAuthDrawer(true))}
              >
                Login To Continue
              </Button>
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Account;

import React from "react";
import OrderCard from "../../components/order/OrderCard";
import { useGetOrdersQuery } from "../../store/apis/orderApi";
import { useLogoutMutation } from "../../store/apis/authApi";
import styles from "../../styles/Account.module.css";
import Button from "../../components/ui/Button";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import Link from "next/link";
import Spin from "../../components/ui/Spin";
import { apiSlice } from "../../store/slices/apiSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import ProtectedRoute from "../../components/ProtectedRoute";
const Account = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
      <div className={styles.container}>
        <div className="row">
          <div className={`col-lg-3 ${styles.actions}`}>
            <div
              className={styles.tab_item}
              onClick={() => router.push("/account")}
            >
              <span className={styles.icon}>
                <HiUser size={20} color="white" />
              </span>
              Account
            </div>
            <div className={`${styles.tab_item} ${styles.active}`}>
              <span className={styles.icon}>
                <HiOutlineShoppingBag size={20} color="white" />
              </span>
              Orders
            </div>
            {/* <Button className="btn save">Orders</Button> */}
            <Button className="btn save" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <div className={`col-lg-9 ${styles.content}`}>
            {isGetLoading ? (
              <Spin style={{ width: "70px", height: "70px" }} center={true} />
            ) : (
              <>
                <h2>Orders ({orders?.length})</h2>
                <div className="">
                  {orders.length ? (
                    orders.map((data) => (
                      <OrderCard key={data.id} data={data} />
                    ))
                  ) : (
                    <div className="">No Orders Found</div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Account;

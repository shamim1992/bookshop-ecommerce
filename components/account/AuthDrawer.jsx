import React from "react";
import { useState } from "react";
import Drawer from "../Drawer";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styles from "./../../styles/Auth.module.css";
import {
  useSentOtpMutation,
  useVerifyOtpMutation,
} from "../../store/apis/authApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setAuthDrawer,
  setUser,
} from "../../store/slices/authSlice";
import { useRouter } from "next/router";
import Spin from "../ui/Spin";
import { createAlert } from "../../store/slices/alertSlice";
import OTPInput from "react-otp-input";
const AuthDrawer = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [showOtpVerfication, setShowOtpVerification] = useState(false);
  const [sentOtp] = useSentOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const onClose = () => {
    dispatch(setAuthDrawer(false));
  };
  const [phone, setPhone] = useState(null);
  const [otp, setOtp] = useState(null);
  const handleSentOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await sentOtp({
        phone,
      }).unwrap();
      if (result.status) {
        setToken(result?.token);
        dispatch(
          createAlert({ type: "success", message: "Otp sent successully" })
        );
        setShowOtpVerification(true);
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await verifyOtp({
        phone,
        otp,
        token,
      }).unwrap();
      if (result.status) {
        dispatch(setUser(result?.user));
        if (!result?.user?.name) {
          router.push("/account");
        }
        dispatch(createAlert({ type: "success", message: "Login Successful" }));
        dispatch(setLoggedIn(true));
        dispatch(setAuthDrawer(false));
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      title=""
      visible={true}
      placement="left"
      onClose={onClose}
      style={{}}
    >
      {showOtpVerfication ? (
        <div className="">
          <h2>OTP Verfication</h2>

          <form onSubmit={handleVerifyOtp} autoComplete="off">
            <div className="flex-center mb-4 mt-4">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 5,
                      textAlign: "center",
                      fontSize: 20,
                      border: "1px solid #808080",
                    }}
                  />
                )}
              />
            </div>

            <Button
              type="submit"
              className="save"
              loading={isLoading}
              disabled={!otp}
            >
              Verify
            </Button>
            <p className="mt-2" style={{ lineHeight: "15px" }}>
              By clicking on Verify, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </form>
        </div>
      ) : (
        <div className="">
          <h2>Login</h2>
          <hr />
          <form onSubmit={handleSentOtp} autoComplete="off">
            <Input
              label="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              value={phone || ""}
              required={true}
            />
            <Button type="submit" className="save" loading={isLoading}>
              Sent Otp
            </Button>
          </form>
        </div>
      )}
    </Drawer>
  );
};

export default AuthDrawer;

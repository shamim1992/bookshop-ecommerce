import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlert } from "../../store/slices/alertSlice";
import { setAuthDrawer } from "../../store/slices/authSlice";
import {
  useResetPasswordMutation,
  useSentOtpToEmailMutation,
  useVerifyEmailOtpMutation,
} from "../../store/apis/authApi";
import Drawer from "../Drawer";
import Button from "../ui/Button";
import Input from "../ui/Input";
const ResetPasswordDrawer = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const [otp, setOtp] = useState();
  const [showForgotPasswordUI, setShowForgotPasswordUI] = useState(true);
  const [showOtpVerificationUI, setShowOtpVerificationUI] = useState(false);
  const [showResetPasswordUI, setShowResetPasswordUI] = useState(false);
  const [resetPassword] = useResetPasswordMutation();
  const [sentOtp] = useSentOtpToEmailMutation();
  const [verifyOtp] = useVerifyEmailOtpMutation();
  const onClose = () => {
    setOpen(false);
  };

  const handleOnSentOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await sentOtp({ email }).unwrap();
      if (result.status) {
        setToken(result.token);
        setShowForgotPasswordUI(false);
        setShowOtpVerificationUI(true);
        setShowResetPasswordUI(false);
        dispatch(
          createAlert({ type: "success", message: "Otp sent successfully" })
        );
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setPassword("");
      setLoading(false);
    }
  };
  const handleOnVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await verifyOtp({ otp, token }).unwrap();
      if (result.status) {
        setToken(result.token);
        setShowForgotPasswordUI(false);
        setShowOtpVerificationUI(false);
        setShowResetPasswordUI(true);
        dispatch(
          createAlert({ type: "success", message: "Verification Successful" })
        );
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      console.log(err);
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setPassword("");
      setLoading(false);
    }
  };

  const handleOnResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await resetPassword({ password, token }).unwrap();
      if (result.status) {
        dispatch(
          createAlert({
            type: "success",
            message: "Password changed successfully ",
          })
        );
        setOpen(false);
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      console.log(err);
      dispatch(createAlert({ type: "error", message: err?.data?.message }));
    } finally {
      setPassword("");
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
      {showForgotPasswordUI ? (
        <div className="">
          <h2>Forgot Your Password</h2>
          <p>Enter your email to retrieve your password</p>
          <form onSubmit={handleOnSentOtp} autoComplete="off">
            <Input
              label=""
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email || ""}
              required={true}
            />
            <Button type="submit" className="save" loading={isLoading}>
              Reset
            </Button>
          </form>
        </div>
      ) : null}
      {showOtpVerificationUI && (
        <div className="">
          <h2>OTP Verification</h2>
          <p>A One-time password has been sent to your email id {email}</p>
          <form onSubmit={handleOnVerifyOtp} autoComplete="off">
            <Input
              label=""
              type="number"
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              value={otp || ""}
              required={true}
            />
            <Button type="submit" className="save" loading={isLoading}>
              Verify
            </Button>
          </form>
        </div>
      )}
      {showResetPasswordUI && (
        <div className="">
          <h2>Create New Password</h2>
          <form onSubmit={handleOnResetPassword} autoComplete="off">
            <Input
              label=""
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password || ""}
              required={true}
            />
            <Button type="submit" className="save" loading={isLoading}>
              Reset
            </Button>
          </form>
        </div>
      )}
    </Drawer>
  );
};

export default ResetPasswordDrawer;

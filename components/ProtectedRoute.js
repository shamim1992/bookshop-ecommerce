import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthDrawer } from "./../store/slices/authSlice";
import AuthDrawer from "./../components/account/AuthDrawer";
const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      // router.push("/login");
      dispatch(setAuthDrawer(true));
    } else {
      dispatch(setAuthDrawer(false));
    }
  }, [isLoggedIn]);
  // console.log("isLoggedIn", isLoggedIn);
  return <>{children}</>;
};
export default ProtectedRoute;

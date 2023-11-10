import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./../styles/Navigation.module.css";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { setAuthDrawer } from "../store/slices/authSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const BottomNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  return (
    <div className={styles.container}>
      <div className={styles.nav_item}>
        <Link href="/">
          <a>
            <AiOutlineHome size={25} />
          </a>
        </Link>
      </div>
      <div className={styles.nav_item}>
        <Link href="/">
          <a>
            <MdArticle size={25} />
          </a>
        </Link>
      </div>
      <div className={styles.nav_item}>
        <Link href="/cart">
          <a>
            <HiOutlineShoppingBag size={25} />
          </a>
        </Link>
      </div>
      <div className={styles.nav_item}>
        {/* {isLoggedIn ? (
          <Link href="/account">
            <a>
              <HiUser size={25} />
            </a>
          </Link>
        ) : (
          <Link href="/account">
            <a onClick={() => dispatch(setAuthDrawer(true))}>
              <HiUser size={25} />
            </a>
          </Link>
        )} */}
        <Link href="/account">
          <a>
            <HiUser size={25} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
// activeTabs === 'home' ?
//                     <RiHomeSmile2Fill
//                         size='35'
//                         color='#000'
//                         onClick={() => setActiveTabs('home')}
//                     /> :
//                     <RiHomeSmile2Line
//                         size='35'
//                         color='#000'
//                         onClick={() => setActiveTabs('home')}
//                     />
// const router = useRouter();
// const [activeTabs, setActiveTabs] = useState(props.name);
//   useEffect(() => {
//     switch (activeTabs) {
//       case "home":
//         router.push("/");
//         break;
//       case "search":
//         router.push("/search");
//         break;
//       case "saved":
//         router.push("/saved");
//         break;
//       case "account":
//         router.push("/account");
//         break;
//       default:
//         router.push("/");
//         break;
//     }
//   }, [activeTabs, router]);

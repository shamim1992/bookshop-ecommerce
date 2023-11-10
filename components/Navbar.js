import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useLogoutMutation } from "../store/apis/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartQuery } from "./../store/apis/cartApi";
import { useRouter } from "next/router";
import { apiSlice } from "../store/slices/apiSlice";
import {
  AiFillCaretDown,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineShopping,
} from "react-icons/ai";
import { HiUser, HiOutlineShoppingBag, HiShoppingCart } from "react-icons/hi";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { setAuthDrawer } from "../store/slices/authSlice";
import Badge from "./ui/Badge";
import { createAlert } from "../store/slices/alertSlice";
import { AiOutlineDown } from "react-icons/ai";
import { setOpenOutletDrawer } from "../store/slices/utilSlice";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);
  const outletId = useSelector((state) => state.util.outlet);
  const [logout, { isLoading }] = useLogoutMutation();
  const handleMenuClick = () => {};

  const handleLogout = async () => {
    try {
      const result = await logout().unwrap();
      if (result.status) {
        dispatch(apiSlice.util.resetApiState());
        router.replace("/");
      } else {
        router.replace("/");
      }
    } catch (err) {
    } finally {
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_nav}>
        <div className="d-flex">
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image src="/logo.png" layout="fill" alt="" objectFit="cover" />
            </div>
            {/* <b style={{ fontSize: 18 }}>CHANRE BOOK SHOP</b> */}
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <div>
                <Link href={"/home"}>
                  <a className="flex items-center gap-2 text-base">
                    <span className="header-icon">
                      <AiOutlineHome />
                    </span>
                    <span>Home</span>
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div>
                <Link href={"/shop"}>
                  <a className="flex items-center gap-2 text-base">
                    <span className="header-icon">
                      <AiOutlineShopping />
                    </span>
                    <span>Shop</span>
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div>
                <Link href={"/about"}>
                  <a className="flex items-center gap-2 text-base">
                    <span className="header-icon">
                      <FcAbout />
                    </span>
                    <span>About Us</span>
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div>
                <Link href={"/contact"}>
                  <a className="flex items-center gap-2 text-base">
                    <span className="header-icon">
                      <AiOutlineContacts />
                    </span>
                    <span>Contact Us</span>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="">
            <li>
              <div>
                <Link href={"/search"}>
                  <a>
                    <span className="header-icon">
                      <FiSearch size={25} />
                    </span>
                    <span>Search</span>
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div>
                <Link href="/cart">
                  <a>
                    <Badge count={cartItems.length}>
                      <span className="header-icon">
                        <HiOutlineShoppingBag size={24} />
                      </span>
                      <span>Cart</span>
                    </Badge>
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link href={"/account"}>
                  <a>
                    <span className="header-icon">
                      <HiUser size={25} />
                    </span>
                    <span>Profile</span>
                  </a>
                </Link>
              </div>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <div>
                    <a onClick={handleLogout}>
                      <span className="header-icon">
                        <FiLogOut size={21} />
                      </span>
                      <span>Logout</span>
                    </a>
                  </div>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="mobile_cart row">
          <Link href={"/search"}>
            <a className="mr-3">
              <span>
                <FiSearch size={25} />
              </span>
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <Badge count={cartItems.length}>
                <span>
                  <HiOutlineShoppingBag size={24} />
                </span>
              </Badge>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const HeaderBar = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-3 text-center bg-blue-800 p-1 text-xs">
        <p className="col-span-1 text-white">
          info@chanrebookshop.com | +919535056289
        </p>

        <p className="col-span-1 text-white">
          Flat 20% off <span className="text-red-300"> Shop Now !</span>{" "}
        </p>

        <p className="col-span-1 text-white text-center">
          <ul className="list-disc flex gap-3 text-sm items-center justify-center">
            <li className="text-white">
              <Link href="/">
                <FaTwitter />
              </Link>
            </li>
            <li className="text-white">
              <Link href="/">
                <FaFacebookF />
              </Link>
            </li>
            <li className="text-white">
              <Link href="/">
                <AiFillInstagram />
              </Link>
            </li>
            <li className="text-white">
              <Link href="/">
                <IoLogoWhatsapp />
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default HeaderBar;

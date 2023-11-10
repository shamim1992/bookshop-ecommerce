import React from "react";
import Link from "next/link";
import BottomNavigation from "./BottomNavigation";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <>
      {/* <BottomNavigation /> */}
      <footer className="bg-gray-200 lg:h-80">
        <div className="grid md:grid-cols-3 p-5 gap-5">
          <div className="col-span-1">
            <img src="/logo.png" alt="logo" className="" />
            <div className="space-y-2">
              <h5 className="text-xl font-medium">Our Registered office</h5>
              <p className="flex gap-4">
                <HiLocationMarker className="text-2xl" />
                No. 65 (414), 20th Main, West of Chord Road, 1st Block,
                Rajajinagar,
                <br /> Bangalore- 560010
              </p>
              <p className="flex gap-4 items-center">
                <FiPhone />
                +919535056289
              </p>
              <p className="flex items-center gap-4">
                <MdEmail />
                info@chanrebookshop.com
              </p>
            </div>
          </div>

          <div className="col-span-2 space-x-4">
            <div className="grid grid-cols-2 md:grid-cols-3 md:p-1">
              <div className="col-span-1 md:p-4">
                <h2 className="text-lg lg:text-2xl font-semibold mb-2">
                  Our Services
                </h2>
                <ul className="list-disc">
                  <li className="hover:underline text-base font-medium">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/chanre">ChanRe</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/journals">Journals</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Right Side: Useful Links */}
              <div className="col-span-1 md:p-4">
                <h5 className="text-lg lg:text-2xl font-semibold mb-2">
                  Useful Links
                </h5>
                <ul className="list-disc">
                  <li className="hover:underline text-base font-medium">
                    <Link href="/terms">Terms & Condition</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>
                  <li className="hover:underline text-base font-medium">
                    <Link href="/delivery-policy">Delivery Policy</Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:p-4 mt-3">
                <h5 className="text-lg lg:text-2xl font-semibold mb-2">
                  Follow Us:
                </h5>
                <ul className="list-disc flex gap-3 text-2xl">
                  <li className="text-blue-500">
                    <Link href="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="text-blue-700">
                    <Link href="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="text-pink-600">
                    <Link href="/">
                      <AiFillInstagram />
                    </Link>
                  </li>
                  <li className="text-green-700">
                    <Link href="/">
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <h5>About Us</h5>
              <p>ChanRe Book Shop is online medical book shop</p>
            </div>
            <div className="col-lg-2">
              <h5>Info</h5>
              <Link href="/">Home</Link>
              <Link href="/chanre">ChanRe</Link>
              <Link href="/journals">Journals</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            <div className="col-lg-2">
              <h5>Useful Links</h5>
              <Link href="/terms">Terms & Condition</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/delivery-plicy">Delivery Policy</Link>
            </div>
            <div className="col-lg-4">
              <h5>Our Registered office</h5>
              <p>
                <HiLocationMarker style={{ marginRight: 10, fontSize: 20 }} />
                No. 65 (414), 20th Main, West of Chord Road, 1st Block,
                Rajajinagar, Bangalore- 560010
              </p>
              <p>
                <FiPhone style={{ marginRight: 10 }} />
                +919535056289
              </p>
              <p>
                <MdEmail style={{ marginRight: 10 }} />
                info@chanrebookshop.com
              </p>
            </div>
          </div>
          <h6>&copy; 2022-23 bookshop</h6>
        </div> */}
    </>
  );
};

export default Footer;

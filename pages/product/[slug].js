import React, { useState } from "react";
import styles from "./../../styles/Item.module.css";
import reviewStyles from "./../../styles/Review.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ElegentButton from "../../components/ui/ElegentButton";
import {
  addToCart,
  decreaseCartQty,
  increasCartQty,
} from "../../store/slices/cartSlice";
import Link from "next/link";
import ReviewCard from "../../components/review/ReviewCard";
import { useGetReviewsQuery } from "../../store/apis/orderApi";
import Tab from "./Tab";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Items from "../../components/home/Items";
import { useGetItemsQuery } from "../../store/apis/homeApi";
const Product = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const {
    data: reviews = [],
    isLoading: isLoadingGetReviews,
    isSuccess: isSuccessGetReviews,
    isError: isErrorGetReviews,
  } = useGetReviewsQuery(item?.id);
  const {
    data: relatedItems = [],
    isLoading: isLoadingGetItems,
    isSuccess: isSuccessGetItems,
    isError: isErrorGetItems,
  } = useGetItemsQuery({
    category_id: item?.category_id,
  });
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="flex mb-8 gap-6">
          <div className={`${styles.image_section} border rounded-lg p-4`}>
            <div className={styles.detail_image}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/images/${item?.image}`}
                alt={""}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="text-base border rounded-lg p-4 space-y-5">
            <h1 className="text-green-500 text-lg">InStock</h1>
            <h1 className="text-3xl text-blue-900">{item.name}</h1>

            <h5 className="text-sm flex gap-3">
              <p>Author : {item.author_name}</p> <span>&#8739;</span>
              <p>
                <FaStar className="text-yellow-500" />{" "}
              </p>
              <span>&#8739;</span>
              <p> Publisher :{item.publisher_name}</p>
            </h5>
            <hr className="mt-4 mb-4" />
            <div className="flex gap-3">
              <h4 className="text-2xl">₹ {item.price}</h4>
              <del>₹{item.mrp}</del>
            </div>

            <p className="text-sm">
              Short Description: lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam
            </p>
            <hr className="mt-4 mb-4" />

            <p className="text-xs">Quantity</p>
            <div className="flex items-center gap-3">
              <div className="mt-2 flex items-center border rounded-full">
                <div className="mr-4">
                  <button className="m-3" onClick={decrementQuantity}>
                    <IoMdRemove />
                  </button>
                </div>

                <div className="text-xl font-semibold">{quantity}</div>

                <div className="ml-4">
                  <button className="m-3" onClick={incrementQuantity}>
                    <IoMdAdd />
                  </button>
                </div>
              </div>

              <div className="">
                <button className="bg-orange-500 flex items-center gap-2 text-white px-4 py-3 rounded-full text-sm">
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>

              <div className="">
                <button className="flex items-center gap-2">
                  <FaHeart className="" /> Browse Wishlist
                </button>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <h5>Category : {item.category_name}</h5>
          </div>
        </div>
        <Tab className="" />

        <div>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl text-blue-900 mb-4">Related products</h1>

            <Items data={relatedItems} />
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  try {
    const { slug } = context.query;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/items/${slug}`
    );
    const item = await response.json();
    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    return { props: { item: item.data } };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { props: { item: null } };
  }
}
export default Product;

import Link from "next/link";
import React from "react";
import styles from "./../styles/Category.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../store/slices/utilSlice";
const Category = ({ data }) => {
  const { id, name, image, slug } = data;
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Link href={`/category_id=${id}`}>
      <div
        className={styles.card}
        onClick={() => {
          dispatch(setCategoryId(id));
        }}
      >
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/images/${image}`}
              alt={name}
              layout="fill"
              objectFit="fitXY"
            />
          </div>
          <h5>{name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Category;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Categories from "../components/home/Categories";
import Items from "../components/home/Items.jsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomeBanner from "../components/HomeBanner";
import BestSelling from "../components/home/BestSelling";
import Sidebar from "../components/home/Sidebar";
import Banner from "../components/home/Banner";
import DealOfTheWeek from "../components/home/DealOfTheWeek";
import ProductTabs from "../components/home/ProductTabs";
import Ads from "../components/home/Ads";
import Subscribe from "../components/home/Subscribe";
import InfoSlider from "../components/home/InfoSlider";
export default function Home({ categories, items, banners }) {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={styles.container}>
          <HomeBanner data={banners} />
          <Categories data={categories} />
          <hr className="mt-3" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            <div className="col-span-1 p-4">
              <Sidebar />
            </div>
            <div className="lg:col-span-3 col-span-1">
              <div className="container mx-auto p-4">
                <h1 className="text-3xl text-blue-900 mb-4">New Arrivals</h1>
                <Items data={items?.slice(0, 8)} />
              </div>
              <hr className="mb-3" />

              <div className="container mx-auto p-4">
                <h1 className="text-3xl text-blue-900 mb-4">Recently Added</h1>
                <Items data={items?.slice(0, 8)} />
              </div>

              <hr className="mb-3" />
              <div className="container mx-auto p-4">
                <h1 className="text-3xl text-blue-900 mb-4">
                  Welcome to Our Store
                </h1>
                <Banner />
              </div>

              <hr className="mb-3" />

              <div className="container mx-auto p-4">
                <h1 className="text-3xl text-blue-900 mb-4">
                  Deal of the Week
                </h1>
                <DealOfTheWeek />
              </div>

              <div className="container mx-auto p-4">
                <Ads />
              </div>

              <div className="container mx-auto p-4">
                <h1 className="text-3xl text-blue-900 mb-4">
                  Product Categories
                </h1>
                <ProductTabs data={items} />
              </div>

              <div className="container mx-auto p-4">
                <Subscribe />
              </div>
            </div>
          </div>
          <hr className="mb-3" />
          {/* <Item title="NEW ARRIVALS" data={items} /> */}
          <InfoSlider />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const {} = context.query;
    const [categoriesRes, itemsRes, bannersRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items`),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/banners`),
    ]);

    if (!categoriesRes.ok || !itemsRes.ok || !bannersRes.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const [categories, items, banners] = await Promise.all([
      categoriesRes.json(),
      itemsRes.json(),
      bannersRes.json(),
    ]);
    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    return { props: { categories, items: items.data, banners } };
  } catch (error) {
    // console.error("Error fetching data:", error.message);
    return { props: { categories: [], items: [], banners: [] } };
  }
}

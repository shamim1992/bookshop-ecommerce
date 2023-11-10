import React from "react";
import Items from "../components/home/Items";

const Filter = ({ items = [] }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {items?.length > 0 ? (
        <>
          <Items data={items} title="" />
        </>
      ) : (
        <>
          <div className="center" style={{ height: "100vh" }}>
            <h1>No Items Found</h1>
          </div>
        </>
      )}
    </div>
  );
};
export async function getServerSideProps(context) {
  try {
    const { filter } = context.query;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?${filter}`
    );
    const result = await response.json();
    // if (result.data === null || result.data.length === 0) {
    //   return {
    //     notFound: true,
    //   };
    // }
    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    return { props: { items: result.data } };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { props: { items: [] } };
  }
}
export default Filter;

import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import axios from "axios";
axios.defaults.withCredentials = true;
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, body: data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        // config,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  }),

  tagTypes: ["Auth", "Order", "Address", "Cart", "Outlet", "Review"],
  endpoints: (builder) => ({}),
});

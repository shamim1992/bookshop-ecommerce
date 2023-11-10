import { useDispatch } from "react-redux";
import { apiSlice } from "../slices/apiSlice";
export const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response?.data;
      },
      providesTags: ["Category"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    // getItems: builder.query({
    //   query: (query) => ({
    //     url: `/items?q=${query}`,
    //     method: "GET",
    //   }),
    //   transformResponse: (response) => {
    //     return response?.data;
    //   },
    //   providesTags: ["Category"],
    //   async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    // }),
    getItems: builder.query({
      query: (params) => ({
        url: `/items`,
        method: "GET",
        params,
      }),
      transformResponse: (response) => {
        return response?.data;
      },
      providesTags: ["Category"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
  }),
});

export const { useGetCategoriesQuery, useGetItemsQuery } = homeApi;

import { useDispatch } from "react-redux";
import { apiSlice } from "../slices/apiSlice";
export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (payload) => ({
        url: `/order`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart", "Order"],
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Order"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    getOrders: builder.query({
      query: (id) => ({
        url: `/order`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Order"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/order`,
        method: "PUT",
      }),
      invalidatesTags: ["Order"],
    }),
    addReview: builder.mutation({
      query: (payload) => ({
        url: `/order/review`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Order", "Review"],
    }),
    getReviews: builder.query({
      query: (id) => ({
        url: `/order/review/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Review"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrderByIdQuery,
  useGetOrdersQuery,
  useCancelOrderMutation,
  useAddReviewMutation,
  useGetReviewsQuery,
} = orderApi;

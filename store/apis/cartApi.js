import { useDispatch } from "react-redux";
import { apiSlice } from "../slices/apiSlice";
export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (payload) => ({
        url: `/cart`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Cart"],
    }),
    getCart: builder.query({
      query: (payload) => ({
        url: `/cart?data=${encodeURIComponent(JSON.stringify(payload))}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response?.data;
      },
      providesTags: ["Cart"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    // getCart: builder.mutation({
    //   query: (payload) => ({
    //     url: `/cart`,
    //     method: "POST",
    //   }),
    //   transformResponse: (response) => {
    //     return response?.data;
    //   },
    //   providesTags: ["Cart"],
    //   async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    // }),
    updateItemQty: builder.mutation({
      query: (payload) => ({
        url: `/cart-item`,
        method: "PUT",
        body: payload,
      }),
      // transformResponse: (response) => response.data,
      invalidatesTags: ["Cart"],
    }),
    deleteCartItem: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useGetCartMutation,
  useDeleteCartItemMutation,
  useUpdateItemQtyMutation,
} = cartApi;

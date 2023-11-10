import { useDispatch } from "react-redux";
import { apiSlice } from "./../slices/apiSlice";
export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAddress: builder.mutation({
      query: (payload) => ({
        url: `/address`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Address", "Cart"],
    }),
    updateAddress: builder.mutation({
      query: (payload) => ({
        url: `/address/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Address", "Cart"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    getAddresses: builder.query({
      query: (payload) => ({
        url: `/address`,
        method: "GET",
        body: payload,
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Address"],
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/address/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Address", "Cart"],
    }),
    setDefaultAddress: builder.mutation({
      query: (payload) => ({
        url: `/address/default`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Address", "Cart"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
  }),
});

export const {
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useGetAddressesQuery,
  useSetDefaultAddressMutation,
} = addressApi;

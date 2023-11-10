import { useDispatch } from "react-redux";
import { apiSlice } from "./../slices/apiSlice";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sentOtp: builder.mutation({
      query: (payload) => ({
        url: `/auth/otp/sent`,
        method: "POST",
        body: payload,
        withCredentials: true,
      }),
      invalidatesTags: [""],
    }),
    verifyOtp: builder.mutation({
      query: (payload) => ({
        url: `/auth/otp/verify`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth", "Cart", "Order"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {},
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `/auth`,
        method: "GET",
        withCredentials: true,
      }),
      providesTags: ["Auth"],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: `/auth/profile`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useSentOtpMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
  useGetUserQuery,
  useUpdateProfileMutation,
} = authApi;

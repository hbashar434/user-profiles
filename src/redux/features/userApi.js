import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://college-connect-server-chi.vercel.app/",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => "manageUser",
    }),
  }),
});

export const { useFetchUserQuery } = userApi;

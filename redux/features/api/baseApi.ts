import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      console.log("Preparing headers for API call");
      const token = (getState() as any).auth.token;
      if (token) {
        console.log("Token found, adding to headers");
        headers.set("authorization", `Bearer ${token}`);
      } else {
        console.warn("No token found in auth state");
      }
      // Add ngrok skip warning header for development
      headers.set("ngrok-skip-browser-warning", "any");
      return headers;
    },
  }),
  tagTypes: ["Users", "Plans", "Reports", "Programs"],

  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      // Add ngrok skip warning header for development
      headers.set("ngrok-skip-browser-warning", "any");
      return headers;
    },
  }),
  tagTypes: ["Users", "Plans", "Reports", "Programs"],

  endpoints: () => ({}),
});

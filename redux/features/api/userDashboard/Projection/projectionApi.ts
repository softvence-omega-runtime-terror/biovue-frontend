import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectionApi = createApi({
  reducerPath: "projectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biovue-ai.onrender.com/api/v1/projection",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("ngrok-skip-browser-warning", "any");
      return headers;
    },
  }),
  tagTypes: ["Projection"],
  endpoints: () => ({}),
});

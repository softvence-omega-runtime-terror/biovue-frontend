import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectionApi = createApi({
  reducerPath: "projectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biovue-ai.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }: any) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Projection"],
  endpoints: () => ({}),
});

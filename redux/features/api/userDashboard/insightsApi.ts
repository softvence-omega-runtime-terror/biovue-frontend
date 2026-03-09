import { baseApi } from "../baseApi";

const insightsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInsights: builder.query({
      query: () => "/insights",
      providesTags: ["Insights"],
    }),
    getFutureInsights: builder.query({
      query: () => "/future-insights",
      providesTags: ["Insights"],
    }),
  }),
});

export const { useGetInsightsQuery, useGetFutureInsightsQuery } = insightsApi;

export default insightsApi;

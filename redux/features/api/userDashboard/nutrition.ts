import { baseApi } from "../baseApi";

export const nutritionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNutritionLogs: builder.query({
      query: () => "/nutrition-logs",
      providesTags: ["Nutrition"],
    }),
    getSingleNutritionLog: builder.query({
      query: (id) => `/nutrition-logs/${id}`,
      providesTags: (result, error, id) => [{ type: "Nutrition", id }],
    }),
    postNutritionLog: builder.mutation({
      query: (body) => ({
        url: "/nutrition-logs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Nutrition"],
    }),
    getNutritionReport: builder.query({
      query: () => "/nutrition-report",
      providesTags: ["Nutrition"],
    }),
  }),
});

export const {
  useGetNutritionLogsQuery,
  useGetSingleNutritionLogQuery,
  usePostNutritionLogMutation,
  useGetNutritionReportQuery,
} = nutritionApi;

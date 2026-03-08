import { baseApi } from "../baseApi";

export const stressLogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStressLogs: builder.query<any, void>({
      query: () => "/stress-logs",
      providesTags: ["Reports"],
    }),
    postStressLog: builder.mutation<any, any>({
      query: (data) => ({
        url: "/stress-logs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reports"],
    }),
    getStressReport: builder.query<any, void>({
      query: () => "/stress-report",
      providesTags: ["Reports"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetStressLogsQuery,
  usePostStressLogMutation,
  useGetStressReportQuery,
} = stressLogApi;

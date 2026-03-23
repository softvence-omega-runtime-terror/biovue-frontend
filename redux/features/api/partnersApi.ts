import { baseApi } from "./baseApi";

export const partnersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => "/partners",
      providesTags: ["Partners" as any],
    }),
  }),
});

export const { useGetPartnersQuery } = partnersApi;

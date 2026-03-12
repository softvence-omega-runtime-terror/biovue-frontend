import { baseApi } from "../baseApi";

export const supportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendedProfessionals: builder.query<any, string | number>({
      query: (userId) => `/recommend/professionals/${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetRecommendedProfessionalsQuery } = supportApi;

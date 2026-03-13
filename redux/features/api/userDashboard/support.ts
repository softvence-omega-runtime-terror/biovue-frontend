import { baseApi } from "../baseApi";

export const supportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendedProfessionals: builder.query<any, string | number>({
      query: (userId) => `/recommend/professionals/${userId}`,
    }),
    getConnectedProfessions: builder.query<any, void>({
      query: () => "/connected-professions",
      providesTags: ["SupportTeam"],
    }),
    connectProfession: builder.mutation<any, { profession_id: number }>({
      query: (body) => ({
        url: "/connect-profession",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SupportTeam"],
    }),
  }),
  overrideExisting: false,
});

export const { 
  useGetRecommendedProfessionalsQuery,
  useGetConnectedProfessionsQuery,
  useConnectProfessionMutation
} = supportApi;

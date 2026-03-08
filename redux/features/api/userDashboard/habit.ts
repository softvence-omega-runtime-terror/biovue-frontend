import { baseApi } from "../baseApi";


export const cardDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCardData: builder.query<any, void>({
      query: () => "/get-card-data",
    //   providesTags: ["CardData"],
    }),
  }),
});

export const { useGetCardDataQuery } = cardDataApi;
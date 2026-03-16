"use client";

import { baseApi } from "../../baseApi";

export interface Projection {
  id: number;
  user_id: number;
  image: string;
  duration: string;
  resolution: string;
  tier: string;
  projection_id: string;
  projection_url: string;
  route: string;
  timeframe: string;
  est_bmi: string;
  est_weight: string;
  expected_changes: string;
  confidence_score: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectionResponse {
  message: string;
  data: Projection;
}

export const projectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestProjection: builder.query<ProjectionResponse, number | string>({
      query: (userId) => ({
        url: `/projection-lifestyle/latest/${userId}`,
        method: "GET",
      }),
      providesTags: ["Projection"],
    }),
  }),
});

export const { useGetLatestProjectionQuery } = projectionApi;

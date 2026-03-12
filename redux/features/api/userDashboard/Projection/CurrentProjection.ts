"use client";

import { baseApi } from "../../baseApi";

export interface ProjectionResponse {
  user_id: string;
  projection_id: string;
  projection_url: string;
  route: string;
  timeframe: string;
  est_bmi: string;
  est_weight: string;
  expected_changes: string[];
  confidence_score: string;
}

export interface ProjectionRequest {
  user_id: number;
}

export const projectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    currentLifestyleProjection: builder.mutation<
      ProjectionResponse,
      ProjectionRequest
    >({
      query: (body) => ({
        url: "/projection/current-lifestyle",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Projection"],
    }),
  }),
});

export const { useCurrentLifestyleProjectionMutation } = projectionApi;

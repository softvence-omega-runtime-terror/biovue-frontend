"use client";

import { projectionApi } from "./projectionApi";

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
  user_id: string;
  image: File;
  duration: string;
  resolution?: string;
  tier?: string;
}

export const projectionApiEndpoints = projectionApi.injectEndpoints({
  endpoints: (builder) => ({
    currentLifestyleProjection: builder.mutation<
      ProjectionResponse,
      ProjectionRequest
    >({
      query: (data) => {
        const formData = new FormData();
        formData.append("user_id", data.user_id);
        formData.append("image", data.image);
        formData.append("duration", data.duration);

        if (data.resolution) formData.append("resolution", data.resolution);
        if (data.tier) formData.append("tier", data.tier);

        return {
          url: "current-lifestyle/",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Projection"],
    }),
  }),
});

export const { useCurrentLifestyleProjectionMutation } = projectionApiEndpoints;

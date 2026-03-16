"use client";

import { baseApi } from "../../baseApi";

export interface SaveProjectionRequest {
  user_id: number | string;
  projection_id?: string;
  projection_url?: string;
  route?: string;
  timeframe?: string;
  est_bmi?: string;
  est_weight?: string;
  expected_changes?: string[];
  confidence_score?: string;
  duration?: string;
  resolution?: string;
  tier?: string;
}

export interface SavedProjection {
  id: number;
  user_id: string;
  image: string | null;
  projection_id: string | null;
  projection_url: string | null;
  route: string | null;
  timeframe: string | null;
  est_bmi: string | null;
  est_weight: string | null;
  expected_changes: string | null;
  confidence_score: string | null;
  created_at: string;
  updated_at: string;
}

export interface SaveProjectionResponse {
  message: string;
  data: SavedProjection;
}

export const saveProjectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    saveCurrentProjection: builder.mutation<
      SaveProjectionResponse,
      SaveProjectionRequest
    >({
      query: (body) => ({
        url: "/projection-lifestyle",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Projection"],
    }),
  }),
});

export const { useSaveCurrentProjectionMutation } = saveProjectionApi;

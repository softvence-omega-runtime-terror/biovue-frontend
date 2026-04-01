import { projectionApi } from "./projectionApi";

export interface ProjectionGalleryResponse {
  user_id: string;
  total_count: number;
  projections: Array<{
    projection_id: string;
    user_id: string;
    timeframe: string;
    resolution: string;
    created_at: string;
    source_image?: string;
    projections: {
      current_lifestyle: {
        projection_url: string;
        route: string;
        est_bmi: string;
        est_weight: string;
        expected_changes: string[];
        confidence_score: number;
      };
      future_goal: {
        projection_url: string;
        route: string;
        est_bmi: string;
        est_weight: string;
        expected_changes: string[];
        confidence_score: number;
      };
    };
    summary: {
      total_latency_sec: number;
      total_cost_usd: number;
      total_token_cost_usd: number;
      total_image_cost_usd: number;
      total_tokens_input: number;
      total_tokens_output: number;
    };
  }>;
}

export const galleryApi = projectionApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjectionGallery: builder.query<ProjectionGalleryResponse, string | number>({
      query: (user_id) => `/projection/gallery/${user_id}/`,
      providesTags: ["Projection"] as any,
    }),
  }),
  overrideExisting: true,
});

export const { useGetProjectionGalleryQuery } = galleryApi;

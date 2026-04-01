import { projectionApi } from "./projectionApi";

export interface IndividualProjection {
  projection_url: string;
  route: string;
  est_bmi: string;
  est_weight: string;
  expected_changes: string[];
  confidence_score: number;
}

export interface CombinedProjectionResponse {
  projection_id: string;
  user_id: string;
  timeframe: string;
  resolution: string;
  created_at: string;
  projections: {
    current_lifestyle: IndividualProjection;
    future_goal: IndividualProjection;
  };
  summary: {
    total_latency_sec: number;
    total_cost_usd: number;
    total_token_cost_usd: number;
    total_image_cost_usd: number;
    total_tokens_input: number;
    total_tokens_output: number;
  };
}

export interface CombinedProjectionRequest {
  user_id: string;
  image: File;
  duration: string;
  resolution?: string;
  use_default_goal?: boolean;
  goal?: string;
  goal_description?: string;
}

export const combinedProjectionApi = projectionApi.injectEndpoints({
  endpoints: (builder) => ({
    combinedProjection: builder.mutation<
      CombinedProjectionResponse,
      CombinedProjectionRequest
    >({
      query: (data) => {
        const formData = new FormData();
        formData.append("user_id", data.user_id);
        formData.append("image", data.image, data.image.name);
        formData.append("duration", data.duration);

        if (data.resolution) formData.append("resolution", data.resolution);
        
        formData.append(
          "use_default_goal",
          String(data.use_default_goal ?? true)
        );

        if (data.goal) formData.append("goal", data.goal);
        if (data.goal_description)
          formData.append("goal_description", data.goal_description);

        return {
          url: "/projection/combined/",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Projection"],
    }),
  }),
  overrideExisting: true,
});

export const { useCombinedProjectionMutation } = combinedProjectionApi;

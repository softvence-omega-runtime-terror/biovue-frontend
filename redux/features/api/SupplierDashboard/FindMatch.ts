"use client";

import { AiApi } from "./AiApi";
import type { User } from "./AllUsers";

export interface MatchedProduct {
  product_id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string | null;
  redirect_url: string;
  match_score: number;
  match_reason: string;
  health_benefits: string[] | null;
  warnings: string[] | null;
}

export interface FindMatchResponse {
  user_id: string;
  supplier_id: string;
  supplier_name: string;
  matched_products: MatchedProduct[];

  recommendation_summary: string;
  profile_completeness: number;
  completeness_warning: string;

  total_products_analysed: number;
  match_quality: string;
}

export interface FindMatchRequest {
  user_id: string;
  supplier_id: string;
  user_data?: Record<string, unknown> | null;
}

/** Plain JSON snapshot for the AI service — avoids 500s from non-serializable or oversized payloads. */
export function buildFindMatchUserPayload(user: User): Record<string, unknown> {
  const goals = Array.isArray(user.target_goals) ? user.target_goals : [];
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    user_type: user.user_type,
    profession_type: user.profession_type ?? null,
    profile_image: user.profile_image ?? null,
    joined_at: user.joined_at,
    target_goals: goals.map((g) => ({
      id: g.id,
      target_weight: g.target_weight,
      weekly_workout_goal: g.weekly_workout_goal,
      daily_step_goal: g.daily_step_goal,
      sleep_target: g.sleep_target,
      water_target: g.water_target ?? null,
      supplement_recommendation: g.supplement_recommendation ?? null,
      start_date: g.start_date,
      end_date: g.end_date,
    })),
  };
}

export const findMatchApi = AiApi.injectEndpoints({
  endpoints: (builder) => ({
    findMatch: builder.mutation<FindMatchResponse, FindMatchRequest>({
      query: (body) => ({
        url: "/recommend/users/find-match/",
        method: "POST",
        body: {
          user_id: body.user_id,
          supplier_id: body.supplier_id,
          ...(body.user_data != null ? { user_data: body.user_data } : {}),
        },
      }),

      invalidatesTags: ["FindMatch"],
    }),

    getSavedMatch: builder.query<FindMatchResponse, FindMatchRequest>({
      query: ({ user_id, supplier_id }) => ({
        url: `/recommend/users/find-match/saved/?user_id=${user_id}&supplier_id=${supplier_id}`,
        method: "GET",
      }),

      providesTags: ["FindMatch"],
    }),
  }),
});

export const { useFindMatchMutation, useGetSavedMatchQuery, useLazyGetSavedMatchQuery } = findMatchApi;

"use client";

import { baseApi } from "../../../baseApi";

export interface TargetGoalRequest {
  user_id: number;
  target_weight: number;
  weekly_workout_goal: number;
  daily_step_goal: number;
  sleep_target: number;
  start_date: string;
  end_date: string;
}

export interface TargetGoalResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    user_id: number;
    target_weight: number;
    weekly_workout_goal: number;
    daily_step_goal: number;
    sleep_target: number;
    is_active: boolean;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
  };
}

export const targetGoalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTargetGoal: builder.mutation<TargetGoalResponse, TargetGoalRequest>({
      query: (body) => ({
        url: "/goals",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Clients"],
    }),
  }),
});

export const { useCreateTargetGoalMutation } = targetGoalApi;

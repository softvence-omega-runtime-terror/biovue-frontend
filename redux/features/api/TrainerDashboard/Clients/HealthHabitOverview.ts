"use client";

import { baseApi } from "../../baseApi";



export interface DashboardMetrics {
  weight: number | null;
  nutrition_quality: number | null;
  steps: number;
  sleep: string | null;
  stress: string | null;
  hydration: number | null;
}

export interface DashboardMetricsResponse {
  success: boolean;
  data: DashboardMetrics;
}

export const healthHabitOverviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardMetrics: builder.query<DashboardMetricsResponse, void>({
      query: () => ({
        url: "/dashboard-metrics",
        method: "GET",
      }),
      providesTags: ["HealthHabitOverview"],
    }),
  }),
});

export const { useGetDashboardMetricsQuery } = healthHabitOverviewApi;

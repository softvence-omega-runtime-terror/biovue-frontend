"use client";

import { baseApi } from "../../baseApi";

// Response types
export interface ScheduleClientProfile {
  user_id: number;
  image: string | null;
}

export interface ScheduleClient {
  id: number;
  name: string;
  image_url: string | null;
  profile: ScheduleClientProfile;
}

export interface ScheduleItem {
  id: number;
  trainer_id: number;
  client_id: number;
  schedule_date: string;
  schedule_time: string;
  check_in_type: string;
  private_note: string;
  status: string;
  created_at: string;
  updated_at: string;
  client: ScheduleClient;
}

export interface GetSchedulesResponse {
  status: string;
  message: string;
  data: ScheduleItem[];
}

// RTK Query endpoint
export const getSchedulesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query<GetSchedulesResponse, string>({
      query: (date: string) => ({
        url: `/calendar-schedules`,
        method: "GET",
        params: { date },
      }),
      providesTags: ["Schedule"],
    }),
  }),
});

export const { useGetSchedulesQuery } = getSchedulesApi;

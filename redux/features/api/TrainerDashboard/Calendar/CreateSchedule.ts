"use client";

import { baseApi } from "../../baseApi";

export interface CreateSchedulePayload {
  client_id: number;
  date: string;
  time: string;
  check_in_type: string;
  private_note: string;
}

export interface CreateScheduleResponse {
  message: string;
}

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSchedule: builder.mutation<
      CreateScheduleResponse,
      CreateSchedulePayload
    >({
      query: (body) => ({
        url: "/schedule-checkin",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Schedule", id: "LIST" }, "Clients"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateScheduleMutation } = scheduleApi;

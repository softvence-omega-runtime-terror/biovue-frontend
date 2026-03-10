"use client";

import { baseApi } from "../baseApi";

export interface User {
  id: number;
  name: string;
  email: string;
  user_type: "Individual" | "Professional";
  profession_type: string | null;
  profile_image: string | null;
  joined_at: string;
}

export interface AllUsersResponse {
  success: boolean;
  data: User[];
}

export const allUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsersForSupplier: builder.query<AllUsersResponse, void>({
      query: () => ({
        url: "/all-users-for-supplyer",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersForSupplierQuery } = allUsersApi;

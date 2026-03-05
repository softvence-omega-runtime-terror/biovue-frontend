import { baseApi } from "./baseApi";

export interface ProfileResponse {
  success: boolean;
  message: string;
  data: any;
}

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUpdateProfile: builder.mutation<ProfileResponse, FormData>({
      query: (formData) => ({
        url: "/profile",
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUpdateProfileMutation } = profileApi;

export default profileApi;

import { baseApi } from "../baseApi";

export interface Notification {
  id: string;
  title: string | null;
  type: string | null;
  message: string;
  created_at: string;
  created_at_formatted: string;
  read_at: string | null;
}

export interface NotificationResponse {
  success: boolean;
  message: string;
  data: Notification[];
}

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<NotificationResponse, void>({
      query: () => "/notification-list-by-user",
      providesTags: ["Notifications"],
    }),
    markAsRead: builder.mutation<any, { notification_id?: string; all?: boolean }>({
      query: () => ({
        url: "/all-notification-mark-as-read",
        method: "GET",
      }),
      invalidatesTags: ["Notifications"],
    }),
    markSingleAsRead: builder.mutation<any, { notification_id: string }>({
      query: (body) => ({
        url: "/mark-single-as-read",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Notifications"],
    }),
    deleteSingleNotification: builder.mutation<any, { notification_id: string }>({
      query: (body) => ({
        url: "/delete-single-notification",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Notifications"],
    }),
    deleteAllNotifications: builder.mutation<any, void>({
      query: () => ({
        url: "/delete-all-notification",
        method: "POST",
      }),
      invalidatesTags: ["Notifications"],
    }),
  }),
});

export const { useGetNotificationsQuery, useMarkAsReadMutation, useMarkSingleAsReadMutation, useDeleteSingleNotificationMutation, useDeleteAllNotificationsMutation } = notificationApi;

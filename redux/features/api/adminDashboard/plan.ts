import { baseApi } from "../baseApi";

interface Plan {
  id: number;
  name: string;
  // extend with other plan fields as needed
  [key: string]: any;
}

export const planApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<Plan[], void>({
      query: () => "/plans",
      providesTags: ["Plans"],
    }),
    getPlan: builder.query<Plan, number>({
      query: (id) => `/plans/${id}`,
      providesTags: (result, error, id) => [{ type: "Plans", id }],
    }),
    createPlan: builder.mutation<Plan, Partial<Plan>>({
      query: (body) => ({
        url: "/plans",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Plans"],
    }),
    updatePlan: builder.mutation<Plan, { id: number; data: Partial<Plan> }>({
      query: ({ id, data }) => ({
        url: `/plans/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Plans"],
    }),
    deletePlan: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/plans/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Plans"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPlansQuery,
  useGetPlanQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = planApi;

export default planApi;

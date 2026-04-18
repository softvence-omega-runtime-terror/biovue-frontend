import { projectionApi } from "./Projection/projectionApi";

export const nutritionAiApi = projectionApi.injectEndpoints({
  endpoints: (builder) => ({
    getAiSuggestedTarget: builder.query<any, string | number>({
      query: (user_id) => `/habits/nutritions/ai-suggested-target/saved/?user_id=${user_id}`,
      providesTags: ["Projection"] as any,
    }),
    updateAiSuggestedTarget: builder.mutation<any, { user_id: string | number }>({
      query: (data) => ({
        url: "/habits/nutritions/ai-suggested-target/",
        method: "POST",
        body: { user_id: data.user_id.toString() },
      }),
      invalidatesTags: ["Projection"] as any,
    }),
    calculateAiNutrition: builder.mutation<any, { user_id: string | number; foods: any[] }>({
      query: (data) => ({
        url: "/habits/nutritions/calculate/",
        method: "POST",
        body: { ...data, user_id: data.user_id.toString() },
      }),
    }),
    generateMeal: builder.mutation<any, { user_id: string | number; target_calorie: number; target_protein: number; target_carbs: number; target_fat: number }>({
      query: (data) => ({
        url: "/habits/nutritions/generate-meal/",
        method: "POST",
        body: { ...data, user_id: data.user_id.toString() },
      }),
    }),
    getSavedMealPlan: builder.query<any, string | number>({
      query: (user_id) => `/habits/nutritions/generate-meal/saved/?user_id=${user_id}`,
      providesTags: ["Projection"] as any,
    }),
    getSavedAiNutrition: builder.query<any, string | number>({
      query: (user_id) => `/habits/nutritions/calculate/saved/?user_id=${user_id}`,
      providesTags: ["Projection"] as any,
    }),
  }),
  overrideExisting: true,
});

export const { 
  useGetAiSuggestedTargetQuery, 
  useUpdateAiSuggestedTargetMutation,
  useCalculateAiNutritionMutation,
  useGenerateMealMutation,
  useGetSavedMealPlanQuery,
  useGetSavedAiNutritionQuery,
} = nutritionAiApi;

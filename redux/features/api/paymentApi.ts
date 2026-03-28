import { baseApi } from "./baseApi";

export interface PaymentProcessResponse {
  success: boolean;
  checkout_url: string;
  session_id: string;
  amount: number;
}

export interface PaymentSummaryResponse {
  success: boolean;
  user: {
    id: number;
    name: string;
    email: string;
  };
  latest_payment: {
    id: number;
    transaction_id: string;
    amount: string;
    currency: string;
    status: string;
    created_at: string;
    updated_at: string;
    plan: {
      id: number;
      name: string;
      price: string;
    };
  };
  payment_history: Array<{
    id: number;
    transaction_id: string;
    amount: string;
    currency: string;
    status: string;
    created_at: string;
    updated_at: string;
    plan: {
      id: number;
      name: string;
      price: string;
    };
  }>;
}

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    processPayment: builder.mutation<PaymentProcessResponse, { plan_id: number; billing: string }>({
      query: (body) => ({
        url: "/payment/process",
        method: "POST",
        body,
      }),
    }),
    getPaymentSummary: builder.query<PaymentSummaryResponse, void>({
      query: () => "/payment/show",
    }),
  }),
  overrideExisting: false,
});

export const { useProcessPaymentMutation, useGetPaymentSummaryQuery } = paymentApi;

export default paymentApi;

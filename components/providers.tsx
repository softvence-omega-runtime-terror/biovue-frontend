"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReduxProvider from "../redux/provider";
import { Toaster } from "sonner";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  React.useEffect(() => {
    if (!recaptchaKey) {
      console.error("reCAPTCHA Error: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing from environment variables.");
    } else {
      console.log("reCAPTCHA: Provider initialized with key:", recaptchaKey.substring(0, 6) + "...");
    }
  }, [recaptchaKey]);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey || ""}
      useRecaptchaNet={true}
      useEnterprise={false}
      container={{
        parameters: {
          badge: "bottomright",
          theme: "light",
        }
      }}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <ReduxProvider>
        {children}
        <Toaster position="top-right" richColors />
      </ReduxProvider>
    </GoogleReCaptchaProvider>
  );
}

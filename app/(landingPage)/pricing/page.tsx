"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Lock, ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingPage = () => {
  const [individualBilling, setIndividualBilling] = useState<"monthly" | "annual">("monthly");
  const [professionalBilling, setProfessionalBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans pb-20">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="BioVue Logo"
            width={120}
            height={60}
            className="w-24 md:w-[120px] object-contain"
          />
        </Link>
        <Link 
          href="/" 
          className="flex items-center gap-2 bg-[#0FA4A9] text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all text-sm group"
        >
          Back To Home
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </header>

      {/* Hero Section */}
      <div className="text-center mt-12 mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2D2E] mb-4">Choose your health journey.</h1>
        <p className="text-[#5F6F73] max-w-2xl mx-auto text-lg leading-relaxed">
          Start with a free AI trial, then unlock deeper insights, progress tracking, and personalized projections.
        </p>
      </div>

      {/* Individual Plans Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <h2 style={{ color: 'var(--Primary-color, #3A86FF)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '34px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px' }} className="mb-6">For Individual</h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-semibold transition-colors", individualBilling === "monthly" ? "text-[#1F2D2E]" : "text-[#94A3B8]")}>Monthly</span>
            <button 
              onClick={() => setIndividualBilling(prev => prev === "monthly" ? "annual" : "monthly")}
              className={cn(
                "relative w-11 h-6 rounded-full transition-colors focus:outline-none p-1",
                individualBilling === "annual" ? "bg-[#3A86FF]" : "bg-[#E2E8F0]"
              )}
            >
              <div className={cn("w-4 h-4 bg-white rounded-full transition-transform shadow-sm", individualBilling === "annual" ? "translate-x-5" : "translate-x-0")} />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-semibold transition-colors", individualBilling === "annual" ? "text-[#1F2D2E]" : "text-[#94A3B8]")}>Annual</span>
              <span className="bg-[#E4EFFF] text-[#3A86FF] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">SAVE 10%</span>
            </div>
          </div>
        </div>

        {/* Individual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* Free Trial */}
          <PricingCard
            title="Free Trial"
            price="0"
            period="for 7 days"
            subtext="Then auto-bills based on selected plan"
            description="Experience BioVue's core AI projections before committing."
            features={[
              { text: "Upload 1 body photo", included: true },
              { text: "1 AI future projection (1-year horizon)", included: true },
              { text: "Personal wellness dashboard", included: true },
              { text: "Basic body stats & trends", included: true },
              { text: "AI improvement suggestions", included: false },
              { text: "Health indicators", included: false },
              { text: "Recommended coaches & clinics", included: false },
              { text: "Achievement badges & Progress reports", included: false },
            ]}
            cta="Start 7-Day Trial"
            active={false}
          />

          {/* Plus */}
          <PricingCard
            title="Plus"
            price="29"
            period="/Month"
            description="See your future and track how your lifestyle is improving."
            features={[
              { text: "Up to 2 AI body projections", included: true },
              { text: "AI-generated health suggestions (Limited)", included: true },
              { text: "Recommended Business", included: true },
              { text: "Achievement badges", included: true },
              { text: "Progress tracking", included: true },
              { text: "\"%\" improved vs baseline", included: true },
              { text: "Recalculated after every photo", included: true },
              { text: "No device sync", included: true, icon: <Lock size={14} className="text-[#94A3B8]" /> },
              { text: "No downloadable reports", included: false, isNegative: true },
            ]}
            cta="Upgrade To Plus"
            active={true}
            ctaColor="bg-[#0FA4A9]"
          />

          {/* Premium */}
          <PricingCard
            title="Premium"
            price="35"
            period="/Month"
            description="Build a complete picture of your future health with our advanced AI, real-world data sync, and long-term forecasting."
            specialFeature={{ label: "EVERYTHING IN PLUS", icon: <Zap size={14} fill="#3A86FF" /> }}
            features={[
              { text: "Up to 4 AI projections", included: true },
              { text: "External fitness tracker sync", included: true },
              { text: "Downloadable progress reports", included: true },
              { text: "Historical trend vs AI projections", included: true },
              { text: "Priority Email support", included: true },
              { text: "Full access AI-generated health suggestions", included: true },
              { text: "Future Health insights (5 year projection)", included: true },
            ]}
            cta="Go Premium"
            active={false}
          />
        </div>
      </section>

      {/* Professional Plans Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--Primary-color, #3A86FF)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '34px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px' }} className="mb-2">Professional Plan</h2>
         <p className="text-[#041228] text-center font-['Roboto'] text-[24px] font-normal leading-[24px] my-6">
  6 month minimum commitment required.
</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-semibold transition-colors", professionalBilling === "monthly" ? "text-[#1F2D2E]" : "text-[#94A3B8]")}>Monthly</span>
            <button 
              onClick={() => setProfessionalBilling(prev => prev === "monthly" ? "annual" : "monthly")}
              className={cn(
                "relative w-11 h-6 rounded-full transition-colors focus:outline-none p-1",
                professionalBilling === "annual" ? "bg-[#3A86FF]" : "bg-[#E2E8F0]"
              )}
            >
              <div className={cn("w-4 h-4 bg-white rounded-full transition-transform shadow-sm", professionalBilling === "annual" ? "translate-x-5" : "translate-x-0")} />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-semibold transition-colors", professionalBilling === "annual" ? "text-[#1F2D2E]" : "text-[#94A3B8]")}>Annual</span>
              <span className="bg-[#E4EFFF] text-[#3A86FF] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">SAVE 10%</span>
            </div>
          </div>
        </div>

        {/* Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {/* Tier 1 */}
          <PricingCard
            compact
            title="Tier 1 Professional"
            capacity="Up to 8 clients"
            price="250"
            period="/Month"
            subtext="7 days free trail"
            features={[
              { text: "Up to 8 client accounts", included: true },
              { text: "16 Projections/month*", included: true },
              { text: "Client progress tracking", included: true },
              { text: "White-label reports", included: true },
              { text: "Email support", included: true },
              { text: "Basic analytics dashboard", included: true },
              { text: "Core body visualization & health insights", included: true },
              { text: "Limited customization", included: true },
            ]}
            cta="Start 7-Day Free Trial"
          />

          {/* Tier 2 */}
          <PricingCard
            compact
            title="Tier 2 Professional"
            capacity="25 clients"
            price="750"
            period="/Month"
            subtext="7 days free trail"
            features={[
              { text: "Up to 25 client accounts", included: true },
              { text: "Up to 50 Projections/month*", included: true },
              { text: "Everything in Tier 1", included: true },
              { text: "Advanced analytics dashboard", included: true },
              { text: "API access", included: true },
              { text: "Priority email support", included: true },
              { text: "Custom branding", included: true },
              { text: "Team collaboration (3 seats)", included: true },
              { text: "Custom branding", included: true },
              { text: "Dedicated account manager", included: false, isNegative: true },
            ]}
            cta="Start 7-Day Free Trial"
            active={true}
            ctaColor="bg-[#0FA4A9]"
          />

          {/* Tier 3 */}
          <PricingCard
            compact
            title="Tier 3 Professional"
            capacity="150 clients"
            price="3500"
            period="/Month"
            subtext="7 days free trail"
            features={[
              { text: "Up to 150 client accounts", included: true },
              { text: "Everything in Tier 2", included: true },
              { text: "Up to 600 Projections/month*", included: true },
              { text: "Priority phone & email support", included: true },
              { text: "Team collaboration (10 seats)", included: true },
              { text: "Quarterly business reviews", included: false, isNegative: true },
              { text: "Dedicated account manager", included: false, isNegative: true },
            ]}
            cta="Start 7-Day Free Trial"
          />

          {/* Enterprise */}
          <PricingCard
            compact
            title="Enterprise"
            capacity="Unlimited clients"
            price="Custom"
            priceSize="text-3xl"
            period=""
            features={[
              { text: "Unlimited client accounts", included: true },
              { text: "Everything in Tier 3", included: true },
              { text: "Dedicated account manager", included: true },
              { text: "Custom SLA agreements", included: true },
              { text: "On-premise deployment option", included: true },
              { text: "Unlimited team seats", included: true },
              { text: "White-glove onboarding", included: true },
              { text: "Custom feature development", included: true },
              { text: "Quarterly business reviews", included: true },
            ]}
            cta="Contact a specialist"
          />
        </div>
      </section>

      {/* Integration Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-[#D9EFEF] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto shadow-sm">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-3xl font-bold text-[#1F2D2E] mb-4">Already have an app or platform?</h2>
            <p className="text-[#5F6F73] text-lg">
              Integrate BioVue's AI projections into your app, platform, or website to deliver real-time health insights to your users.
            </p>
          </div>
          <button className="bg-[#8E53FF] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap">
            Contact For API Pricing
          </button>
        </div>
      </section>

      <footer className="text-center mt-12 mb-8">
        <p className="text-[#5F6F73] text-xs">*Overage rates apply</p>
      </footer>
    </div>
  );
}

const PricingCard = ({ 
  title, 
  capacity, 
  price, 
  period, 
  subtext, 
  description, 
  features, 
  cta, 
  compact, 
  specialFeature,
  priceSize = "text-5xl"
}: any) => {
  return (
    <div className="bg-white rounded-xl p-8 border border-[#E5E9EA] shadow-sm transition-all flex flex-col h-full hover:border-blue-100 hover:shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#3A86FF] mb-2">{title}</h3>
        {capacity && <p className="text-sm font-bold text-[#1F2D2E] mb-4">{capacity}</p>}
        <div className="flex items-baseline gap-1 mb-2">
          <span className={cn("font-bold text-[#1F2D2E]", price === "Custom" ? "text-4xl" : priceSize)}>
            {price !== "Custom" && "$"}
            {price}
          </span>
          {period && <span className="text-[#94A3B8] text-sm font-medium">{period}</span>}
        </div>
        {subtext && <p className="text-xs text-[#5F6F73] font-medium">{subtext}</p>}
      </div>

      {description && <p className="text-[13px] text-[#5F6F73] mb-6 leading-relaxed min-h-[40px]">{description}</p>}

      <div className="flex-1">
        {specialFeature && (
          <div className="flex items-center gap-2 mb-6">
             {specialFeature.icon}
             <span className="text-[10px] font-bold text-[#3A86FF] tracking-wider uppercase">{specialFeature.label}</span>
          </div>
        )}
        <ul className="space-y-4 mb-8">
          {features.map((f: any, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 flex items-center justify-center">
                {f.icon ? f.icon : (
                   f.included ? (
                     <div className="w-[18px] h-[18px] rounded-full bg-[#E4EFFF] flex items-center justify-center">
                       <Check size={12} strokeWidth={3} className="text-[#3A86FF]" />
                     </div>
                   ) : (
                     f.isNegative ? (
                       <div className="w-[18px] h-[18px] flex items-center justify-center">
                          <span className="text-[#94A3B8] text-lg font-medium leading-none">×</span>
                       </div>
                     ) : (
                       <Lock size={16} className="text-[#94A3B8] opacity-60" />
                     )
                   )
                )}
              </div>
              <span className={cn("text-[13px] leading-tight font-medium", f.included ? "text-[#1F2D2E]" : "text-[#94A3B8]")}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/register"
        className="w-full text-center py-3.5 rounded-xl font-bold text-sm bg-[#0FA4A9] text-white hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.3)] shadow-md group"
      >
        {cta}
      </Link>
    </div>
  );
}

export default PricingPage;

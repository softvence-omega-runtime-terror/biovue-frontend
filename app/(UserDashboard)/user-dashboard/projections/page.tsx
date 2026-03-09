"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Activity,
  Zap,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "input" | "loading" | "results";
type TimeHorizon = "6 months" | "1 Years" | "5 Years";

const ProjectionsPage = () => {
  const [step, setStep] = useState<Step>("input");
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>("6 months");
  const [lifestyle, setLifestyle] = useState<"current" | "improved">("current");
  const [progress, setProgress] = useState(0);
  const [resolution, setResolution] = useState<"2k" | "4k">("2k");
  const [quality, setQuality] = useState<"fast" | "ultra">("fast");
  // Loading simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "loading") {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep("results"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleGenerate = () => {
    setStep("loading");
  };

  const renderInputStep = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Column */}
      <div className="space-y-8">
        <div className="space-y-4">
          <Link
            href="/user-dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 transition-all w-fit cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-[#041228]">
            Your Future Projection
          </h1>
          <h2 className="text-xl font-bold text-[#041228]">
            Explore how your current habits may shape your future health.
          </h2>
          <p className="text-[#5F6F73] leading-relaxed max-w-xl">
            BioVue uses your lifestyle data and uploaded photos to create visual
            and data-based future projections under different scenarios. These
            insights help you visualize long-term trends in vitality, body
            composition, and aging markers.
          </p>
        </div>

        {/* Time Horizon Selector */}
        <div className="bg-white rounded-xl p-6 border border-[#3A86FF]/25 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E4EFFF] rounded-lg flex items-center justify-center">
              <Calendar className="text-[#3A86FF]" size={20} />
            </div>
            <span className="font-bold text-[#041228]">
              Choose a time horizon
            </span>
          </div>

          <div className="flex p-1 bg-[#F8FAFF] border border-gray-200 rounded-xl w-full">
            {(["6 months", "1 Years", "5 Years"] as TimeHorizon[]).map(
              (time) => (
                <button
                  key={time}
                  onClick={() => setTimeHorizon(time)}
                  className={cn(
                    "flex-1 py-3 rounded-lg text-sm font-bold transition-all cursor-pointer",
                    timeHorizon === time
                      ? "bg-[#3A86FF]/20 text-[#3A86FF]"
                      : "text-gray-500 hover:text-[#041228]",
                  )}
                >
                  {time}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Lifestyle Options */}
        <div className="bg-white rounded-xl p-6 border border-[#3A86FF]/25 shadow-sm space-y-4">
          <div className="space-y-3">
            {/* Current Lifestyle */}
            <div
              onClick={() => setLifestyle("current")}
              className={cn(
                "flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer",
                lifestyle === "current"
                  ? "border-[#3A86FF] bg-[#F8FAFF]"
                  : "border-gray-50 hover:border-gray-100",
              )}
            >
              <div className="w-10 h-10 bg-[#E4EFFF] rounded-lg flex items-center justify-center shrink-0">
                <Activity className="text-[#3A86FF]" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#041228]">Current Lifestyle</h4>
                <p className="text-xs text-[#5F6F73] mt-1">
                  Projected outcomes based on current habits.
                </p>
              </div>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1",
                  lifestyle === "current"
                    ? "border-[#3A86FF] bg-[#3A86FF]"
                    : "border-gray-300",
                )}
              >
                {lifestyle === "current" && (
                  <CheckCircle2 size={12} className="text-white" />
                )}
              </div>
            </div>

            {/* Improved Lifestyle */}
            <div
              onClick={() => setLifestyle("improved")}
              className={cn(
                "flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer",
                lifestyle === "improved"
                  ? "border-[#3A86FF] bg-[#F8FAFF]"
                  : "border-gray-50 hover:border-gray-100",
              )}
            >
              <div className="w-10 h-10 bg-[#E4EFFF] rounded-lg flex items-center justify-center shrink-0">
                <Zap className="text-[#3A86FF]" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#041228]">Improved Lifestyle</h4>
                <p className="text-xs text-[#5F6F73] mt-1">
                  change goal alignment to &quot;your current goals&quot;
                </p>
              </div>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1",
                  lifestyle === "improved"
                    ? "border-[#3A86FF] bg-[#3A86FF]"
                    : "border-gray-300",
                )}
              >
                {lifestyle === "improved" && (
                  <CheckCircle2 size={12} className="text-white" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Render Settings */}
        {/* Render Settings */}
        <div className="bg-white rounded-xl p-6 border border-[#3A86FF]/25 shadow-sm space-y-6">
          <h3 className="font-bold text-[#041228]">Render Settings</h3>

          {/* Resolution */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#5F6F73]">Resolution</p>

            {/* 2K */}
            <div
              onClick={() => setResolution("2k")}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all",
                resolution === "2k"
                  ? "border-[#3A86FF] bg-[#F8FAFF]"
                  : "border-gray-100 hover:border-gray-200",
              )}
            >
              <span className="font-semibold text-[#041228]">2K</span>

              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  resolution === "2k"
                    ? "border-[#3A86FF] bg-[#3A86FF]"
                    : "border-gray-300",
                )}
              >
                {resolution === "2k" && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>

            {/* 4K PRO */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-semibold text-gray-400">4K</span>
              <span className="text-xs font-semibold text-gray-400">
                Pro user
              </span>
            </div>
          </div>

          {/* Quality */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#5F6F73]">Quality</p>

            {/* Fast */}
            <div
              onClick={() => setQuality("fast")}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all",
                quality === "fast"
                  ? "border-[#3A86FF] bg-[#F8FAFF]"
                  : "border-gray-100 hover:border-gray-200",
              )}
            >
              <span className="font-semibold text-[#041228]">Fast</span>

              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  quality === "fast"
                    ? "border-[#3A86FF] bg-[#3A86FF]"
                    : "border-gray-300",
                )}
              >
                {quality === "fast" && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>

            {/* Ultra PRO */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span className="font-semibold text-gray-400">Ultra</span>
              <span className="text-xs font-semibold text-gray-400">
                Pro user
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div className="bg-white rounded-[24px] overflow-hidden border border-[#3A86FF]/20 flex flex-col items-center p-12 text-center shadow-sm">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
            <Image
              src="/images/auth/body1.png"
              alt="Baseline"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-[#041228] uppercase tracking-wider mb-4">
            VERIFIED BASELINE PHOTO
          </h3>
          <button className="flex items-center gap-2 text-gray-400 font-medium hover:text-gray-600 transition-all cursor-pointer">
            <RotateCcw size={18} />
            Replace
          </button>
          <p className="text-[10px] text-gray-400 mt-6 leading-relaxed bg-[#F8FAFF] py-2 px-4 rounded-lg border border-gray-100">
            Note: For more accurate projections, please upload a photo in a swim
            suit.
          </p>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-[#0FA4A9] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0d8d91] transition-all group cursor-pointer shadow-lg shadow-[#0FA4A9]/20"
        >
          Generate Projection
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );

  const renderLoadingStep = () => (
    <div className="fixed inset-0 z-100 bg-white/40 backdrop-blur-md flex items-center justify-center p-6 overflow-hidden">
      <div className="bg-white rounded-[32px] p-12 max-w-md w-full shadow-2xl border border-gray-100 flex flex-col items-center text-center space-y-8 animate-in zoom-in-95 duration-300">
        {/* Circular Progress */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="#F3F4F6"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="#3A86FF"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 80}
              strokeDashoffset={2 * Math.PI * 80 * (1 - progress / 100)}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <span className="absolute text-4xl font-extrabold text-[#3A86FF]">
            {progress}%
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#041228]">
            Your Future Projection
          </h2>
          <p className="text-[#5F6F73] text-sm">
            Analyzing your 12 biometric markers and sleep history.
          </p>
        </div>

        {/* Linear Progress */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3A86FF] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );

  const renderResultsStep = () => (
    <div className="space-y-12 pb-12 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-[#3A86FF]">
          Projection Results
        </h1>
        <p className="text-gray-500">
          Visualizing your trajectory over the next 5 Years.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Current Lifestyle */}
        <div className="bg-white rounded-[24px] border border-[#3A86FF]/10 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 text-center space-y-6 flex-1">
            <h3 className="text-[#8B5CF6] font-bold text-lg min-h-14 flex items-center justify-center">
              If you continue your current lifestyle without changes for 5 years
            </h3>
            <div className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
              <Image
                src="/images/auth/body1.png"
                alt="Current Projection"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 pt-4">
              {[
                {
                  label: "Timeframe",
                  value: "5 Years",
                  icon: Calendar,
                  color: "text-[#8B5CF6]",
                  bg: "bg-[#F3E8FF]",
                },
                {
                  label: "East. BMI:",
                  value: "40.2",
                  icon: Activity,
                  color: "text-[#10B981]",
                  bg: "bg-[#E1F9F0]",
                },
                {
                  label: "Est. Weight:",
                  value: "264.3 lbs",
                  icon: Zap,
                  color: "text-[#3A86FF]",
                  bg: "bg-[#E4EFFF]",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        item.bg,
                      )}
                    >
                      <item.icon className={item.color} size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#041228]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-left py-6 border-t border-gray-50 space-y-4">
              <h4 className="font-bold text-[#041228]">Expected Changes:</h4>
              <div className="space-y-3">
                {[
                  "Significant weight gain of ~23 kg over 5 years",
                  "Substantial increase in body fat percentage",
                  "Major decrease in muscle tone and strength",
                  "Significantly lower energy levels and chronic fatigue",
                  "Severe reduced mob and flexibility",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#0FA4A9] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-[#5F6F73]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Goal Projection */}
        <div className="bg-white rounded-[24px] border border-[#3A86FF]/10 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 text-center space-y-6 flex-1">
            <h3 className="text-[#8B5CF6] font-bold text-lg min-h-14 flex items-center justify-center">
              Achieving your goal: Lose 40 lbs and reach muscular physique in 5
              years
            </h3>
            <div className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
              <Image
                src="/images/auth/body2.png"
                alt="Goal Projection"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 pt-4">
              {[
                {
                  label: "Timeframe",
                  value: "5 Years",
                  icon: Calendar,
                  color: "text-[#8B5CF6]",
                  bg: "bg-[#F3E8FF]",
                },
                {
                  label: "East. BMI:",
                  value: "25",
                  icon: Activity,
                  color: "text-[#10B981]",
                  bg: "bg-[#E1F9F0]",
                },
                {
                  label: "Est. Weight:",
                  value: "164.4 lbs",
                  icon: Zap,
                  color: "text-[#3A86FF]",
                  bg: "bg-[#E4EFFF]",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        item.bg,
                      )}
                    >
                      <item.icon className={item.color} size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#041228]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-left py-6 border-t border-gray-50 space-y-4">
              <h4 className="font-bold text-[#041228]">Expected Changes:</h4>
              <div className="space-y-3">
                {[
                  "Achieved muscular physique in 5 years",
                  "Optimal BMI of 25.0",
                  "Lost 40 lbs (18.1 kg) of body fat",
                  "Peak fitness level",
                  "Excellent body composition",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#0FA4A9] rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-[#5F6F73]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Actions */}
      <div className="bg-[#E4F4F5] rounded-xl p-6 border border-[#0FA4A9]/20 flex items-start gap-4">
        <AlertCircle className="text-[#1F2D2E] shrink-0" size={20} />
        <p className="text-xs text-[#1F2D2E] leading-relaxed">
          <span className="font-bold">Illustrative projection:</span> Visuals
          show relative change based on statistical modeling, not exact or
          guaranteed outcomes. This interface is for motivational purposes and
          does not constitute medical advice.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="bg-[#0FA4A9] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#0d8d91] transition-all cursor-pointer w-full md:w-auto">
          View insights based on this projection
          <ArrowRight size={20} />
        </button>
        <button
          onClick={() => setStep("input")}
          className="bg-white border border-gray-200 text-[#041228] px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all cursor-pointer w-full md:w-auto"
        >
          <ArrowLeft size={20} />
          Return to Dashboard
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6 md:p-10 container mx-auto">
      {step === "loading" && renderLoadingStep()}
      {step === "input" && renderInputStep()}
      {step === "results" && renderResultsStep()}

      {/* Footer Disclaimer for Input Page */}
      {step === "input" && (
        <div className="mt-12 bg-[#E4F4F5] rounded-xl p-6 border border-[#0FA4A9]/20 flex items-start gap-4">
          <AlertCircle className="text-[#1F2D2E] shrink-0" size={20} />
          <p className="text-[10px] text-[#1F2D2E] leading-relaxed">
            <span className="font-bold uppercase tracking-wider">
              Disclaimer:
            </span>{" "}
            Information and projections provided by BioVue Digital Wellness are
            for informational and illustrative purposes only, reflect relative
            changes rather than exact outcomes, and do not constitute medical
            advice. BioVue Digital Wellness is not liable for decisions or
            outcomes based on this information; users should consult a qualified
            medical professional for medical guidance.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectionsPage;

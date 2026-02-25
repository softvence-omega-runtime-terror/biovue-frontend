"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  User, 
  Ruler, 
  Weight, 
  Activity, 
  MapPin,
  Cigarette,
  GlassWater,
  Footprints,
  Dumbbell,
  Timer,
  Moon,
  Utensils,
  Zap,
  Droplets,
  Target,
  FileText,
  BookOpen,
  Crown
} from "lucide-react";

const OnboardingStepsPage = () => {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  // Form states (simplified for UI demonstration)
  const [formData, setFormData] = useState({
    age: "30",
    sex: "",
    height: "30",
    weight: "70",
    bodyFat: "30",
    location: "Dublin",
    // Step 3
    smoking: "",
    alcohol: "",
    steps: "30",
    workout: "30",
    strength: "2",
    sleep: "7.5",
    diet: "",
    fastFood: "",
    stress: "",
    water: "",
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const progress = step === 1 ? 20 : step === 2 ? 40 : step === 3 ? 60 : 100;

  return (
    <div className="bg-[#F8FAFB]  overflow-hidden">
      {/* Back Arrow - Absolute Top Left (matches other pages) */}
      <div className="absolute top-4  md:top-6 md:left-10 z-10">
        {step === 1 ? (
          <Link
            href="/personalize-journey/onboarding"
            className="w-10 h-10 border border-[rgba(58,134,255,0.2)] rounded-lg flex items-center justify-center hover:bg-white/50 transition-all bg-white shadow-sm"
          >
            <ChevronLeft size={24} className="text-[#041228]" />
          </Link>
        ) : (
          <button
            onClick={prevStep}
            className="w-10 h-10 border border-[rgba(58,134,255,0.2)] rounded-lg flex items-center justify-center hover:bg-white/50 transition-all bg-white shadow-sm cursor-pointer"
          >
            <ChevronLeft size={24} className="text-[#041228]" />
          </button>
        )}
      </div>

      <div className="flex flex-col items-center py-4 px-4 md:py-6">
        {/* Progress Header */}
        <div className="w-full max-w-4xl flex items-center justify-between mb-6">
          <div className="w-10" /> {/* Spacer for back arrow */}
          <div className="flex-1 px-0">
            <div className="flex justify-between items-center mb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <span>STEP {step} OF 4</span>
              <span>{progress}% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3A86FF] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="w-10" />
        </div>

        {/* Content Area */}
      <div className="w-full max-w-4xl mt-4">
        {step === 1 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(58,134,255,0.25)] shadow-sm flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-8 text-center">Before we begin, please review and accept our terms</p>
            
            <div className="w-full space-y-4 bg-[#F8FAFF] rounded-2xl p-4 md:p-6 mb-8 max-h-[500px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <section>
                    <h2 className="text-[#041228] font-bold text-lg mb-2">Educational Use Only</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        BioVue Digital Wellness provides educational visualizations based on lifestyle data and medical research. Our projections are illustrative and not medical advice. Always consult qualified healthcare professionals for medical decisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#041228] font-bold text-lg mb-2">Data Privacy & Security</h2>
                    <ul className="space-y-3">
                        {[
                            "Your health data and photos are stored securely and encrypted",
                            "We comply with GDPR and CCPA privacy regulations",
                            "You can delete all your data at any time from your account settings",
                            "Your data is never shared with third parties without explicit consent"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 text-[#3A86FF] bg-[#E8F1FF] rounded-full p-0.5">
                                    <CheckCircle size={16} />
                                </div>
                                <span className="text-gray-400 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#041228] font-bold text-lg mb-2">AI-Generated Content</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Future body projections are generated using AI technology based on your inputs. Results are estimates and individual outcomes may vary significantly.
                    </p>
                </section>
            </div>

            <label className="w-full flex items-start gap-4 p-5 rounded-2xl border border-[#3A86FF]/10 bg-white cursor-pointer hover:bg-gray-50 transition-all mb-10 group">
                <input 
                    type="checkbox" 
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#3A86FF] focus:ring-[#3A86FF]" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                />
                <div className="flex flex-col gap-1">
                    <span className="text-[#041228] font-bold text-[15px] group-hover:text-[#3A86FF] transition-colors">I understand and agree to the terms above.</span>
                    <span className="text-gray-400 text-[13px]">I acknowledge that BioVue provides educational insights only and not medical advice.</span>
                </div>
            </label>

            <button 
                onClick={nextStep}
                disabled={!agreed}
                className="w-full md:w-auto min-w-[320px] bg-primary text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none cursor-pointer"
            >
                Continue
                <ArrowRight size={22} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(58,134,255,0.25)] shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E8F1FF] rounded-xl flex items-center justify-center text-[#3A86FF]">
                    <BookOpen size={22} />
                </div>
                <h2 className="text-[#041228] text-2xl font-bold">Tell Us a Bit About You</h2>
            </div>
            <p className="text-gray-400 text-[15px] mb-10 ml-12">We'll use this to personalize your experience</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                {/* Age */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Calendar size={18} className="text-[#3A86FF]" />
                        Age <span className="text-red-400">*</span>
                    </label>
                    <input 
                        type="number" 
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 transition-all font-medium"
                        placeholder="30"
                    />
                </div>

                {/* Sex */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <User size={18} className="text-[#3A86FF]" />
                        Sex <span className="text-red-400">*</span>
                    </label>
                    <select 
                        value={formData.sex}
                        onChange={(e) => setFormData({...formData, sex: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 transition-all font-medium appearance-none"
                    >
                        <option value="">Select.....</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/* Height */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Ruler size={18} className="text-[#3A86FF]" />
                        Height <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-4">
                        <input 
                            type="number" 
                            value={formData.height}
                            onChange={(e) => setFormData({...formData, height: e.target.value})}
                            className="flex-1 bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-700 font-medium"
                        />
                        <select className="w-32 bg-[#F8FAFB] border border-gray-100 rounded-xl py-4 px-5 text-gray-500 font-medium">
                            <option>Inch</option>
                            <option>Cm</option>
                        </select>
                    </div>
                </div>

                {/* Weight */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Weight size={18} className="text-[#3A86FF]" />
                        Weight <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-4">
                        <input 
                            type="number" 
                            value={formData.weight}
                            onChange={(e) => setFormData({...formData, weight: e.target.value})}
                            className="flex-1 bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-700 font-medium"
                        />
                        <div className="w-32 bg-[#F8FAFB] border border-gray-100 rounded-xl py-4 px-5 text-gray-300 font-medium flex items-center justify-center">lbs</div>
                    </div>
                </div>

                {/* Body Fat */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Activity size={18} className="text-[#3A86FF]" />
                        Body Fat (Optional)
                    </label>
                    <input 
                        type="number" 
                        value={formData.bodyFat}
                        onChange={(e) => setFormData({...formData, bodyFat: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-700 font-medium"
                    />
                    <p className="text-[11px] text-gray-400 italic">If known, this improves metabolic calculations</p>
                </div>

                {/* Location */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <MapPin size={18} className="text-[#3A86FF]" />
                        Location <span className="text-red-400">*</span>
                    </label>
                    <input 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-4 px-5 text-gray-700 font-medium"
                        placeholder="Dublin"
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={nextStep}
                    className="w-full md:w-auto min-w-[320px] bg-primary text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                >
                    Continue
                    <ArrowRight size={22} />
                </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(58,134,255,0.25)] shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E8F1FF] rounded-xl flex items-center justify-center text-[#3A86FF]">
                    <Crown size={22} />
                </div>
                <h2 className="text-[#041228] text-2xl font-bold">Lifestyle Habits</h2>
            </div>
            <p className="text-gray-400 text-[15px] mb-10 ml-12">Your daily habits shape your future health</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-8">
                {/* Smoking */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Cigarette size={18} className="text-[#3A86FF]" />
                        Smoking Status
                    </label>
                    <select 
                        value={formData.smoking}
                        onChange={(e) => setFormData({...formData, smoking: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="never">Never Smoked</option>
                        <option value="former">Former Smoker</option>
                        <option value="occasional">Occasional</option>
                        <option value="regular">Regular</option>
                    </select>
                </div>

                {/* Alcohol */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <GlassWater size={18} className="text-[#3A86FF]" />
                        Alcohol Consumption
                    </label>
                    <select 
                        value={formData.alcohol}
                        onChange={(e) => setFormData({...formData, alcohol: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="none">None</option>
                        <option value="rarely">Rarely</option>
                        <option value="social">Social / Occasional</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Footprints size={18} className="text-[#3A86FF]" />
                        Daily Steps
                    </label>
                    <input 
                        type="number" 
                        value={formData.steps}
                        onChange={(e) => setFormData({...formData, steps: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-700 font-medium"
                    />
                </div>

                {/* Workout */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Dumbbell size={18} className="text-[#3A86FF]" />
                        Workout Per Week
                    </label>
                    <input 
                        type="number" 
                        value={formData.workout}
                        onChange={(e) => setFormData({...formData, workout: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-700 font-medium"
                    />
                </div>

                {/* Strength */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Zap size={18} className="text-[#3A86FF]" />
                        Strength Training Per Week
                    </label>
                    <input 
                        type="number" 
                        value={formData.strength}
                        onChange={(e) => setFormData({...formData, strength: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-700 font-medium"
                    />
                </div>

                {/* Sleep */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Moon size={18} className="text-[#3A86FF]" />
                        Sleep Hours Per Night
                    </label>
                    <input 
                        type="number" 
                        value={formData.sleep}
                        onChange={(e) => setFormData({...formData, sleep: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-700 font-medium"
                    />
                </div>

                {/* Diet */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Utensils size={18} className="text-[#3A86FF]" />
                        Overall Diet Quality
                    </label>
                    <select 
                        value={formData.diet}
                        onChange={(e) => setFormData({...formData, diet: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>

                {/* Fast Food */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Utensils size={18} className="text-[#3A86FF]" />
                        Fast Food Frequency
                    </label>
                    <select 
                        value={formData.fastFood}
                        onChange={(e) => setFormData({...formData, fastFood: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="never">Never</option>
                        <option value="rarely">Rarely (1x/month)</option>
                        <option value="sometimes">Sometimes (1-2x/week)</option>
                        <option value="often">Often (3-4x/week)</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>

                {/* Stress */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Activity size={18} className="text-[#3A86FF]" />
                        Stress Level
                    </label>
                    <select 
                        value={formData.stress}
                        onChange={(e) => setFormData({...formData, stress: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        <option value="very_high">Very High</option>
                    </select>
                </div>

                {/* Water */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[#041228] font-bold text-sm">
                        <Droplets size={18} className="text-[#3A86FF]" />
                        Water Consumption Per Day
                    </label>
                    <select 
                        value={formData.water}
                        onChange={(e) => setFormData({...formData, water: e.target.value})}
                        className="w-full bg-[#F8FAFF] border border-gray-100 rounded-xl py-3 px-5 text-gray-400 font-medium appearance-none">
                        <option value="">Select.....</option>
                        <option value="less_1L">Less than 1L</option>
                        <option value="1_2L">1-2 Liters</option>
                        <option value="2_3L">2-3 Liters</option>
                        <option value="3L_plus">3+ Liters</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={nextStep}
                    className="w-full md:w-auto min-w-[320px] bg-primary text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                >
                    Continue
                    <ArrowRight size={22} />
                </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(58,134,255,0.25)] shadow-sm">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E8F1FF] rounded-xl flex items-center justify-center text-[#3A86FF]">
                    <Activity size={22} />
                </div>
                <h2 className="text-[#041228] text-2xl font-bold">Your Health Goals</h2>
            </div>
            <p className="text-gray-400 text-[15px] mb-6 ml-12">Define your ideal future to shape your healthy trajectory</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                    { title: "Athletic", desc: "Well-rounded fitness, moderate muscle" },
                    { title: "Toned", desc: "Lean with visible muscle definition" },
                    { title: "Lean", desc: "Slim build, low body fat" },
                    { title: "Muscular", desc: "High muscle mass, strong build" },
                    { title: "Curvy-Fit", desc: "Curves with muscle tone" }
                ].map((goal, i) => (
                    <label key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-[#F8FAFF] cursor-pointer hover:border-[#3A86FF]/30 hover:bg-white transition-all group">
                        <div className="flex flex-col gap-1">
                            <span className="text-[#041228] font-bold text-[15px] group-hover:text-[#3A86FF] transition-colors">{goal.title}</span>
                            <span className="text-gray-400 text-[12px]">{goal.desc}</span>
                        </div>
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#3A86FF] focus:ring-[#3A86FF]" />
                    </label>
                ))}
            </div>

            <div className="space-y-2 mb-4">
                <h3 className="text-[#041228] font-bold text-[15px]">Additional Goals & Notes</h3>
                <textarea 
                    className="w-full bg-[#F8FAFF] border border-gray-100 rounded-2xl p-5 text-gray-700 font-medium min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 transition-all placeholder:text-gray-300"
                    placeholder="Describe how you want to look and feel in the future... (e.g., 'I want to feel energetic, run a 5K, and have visible abs')"
                />
            </div>

            <div className="bg-[#F2F4F7] rounded-2xl p-6 mb-8">
                <p className="text-[#475467] text-sm leading-relaxed font-medium">
                    <span className="font-bold">Next Step:</span> After saving your profile, you'll be able to upload photos and generate AI-powered future body projections on your dashboard.
                </p>
            </div>

            <div className="flex justify-center">
                <Link href="/user-dashboard" className="w-full md:w-auto">
                    <button className="w-full md:w-auto min-w-[320px] bg-primary text-white py-4 px-10 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                        Continue
                        <ArrowRight size={22} />
                    </button>
                </Link>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default OnboardingStepsPage;

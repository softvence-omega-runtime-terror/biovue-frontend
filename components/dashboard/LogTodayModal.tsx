"use client";

import React from "react";
import { 
  X, 
  Weight, 
  Activity, 
  Cigarette, 
  GlassWater, 
  Footprints, 
  Dumbbell, 
  Zap, 
  Moon, 
  Utensils, 
  Droplets, 
  Smartphone,
  Crown
} from "lucide-react";

interface LogTodayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChangeSource: () => void;
  habitData: any;
  setHabitData: (data: any) => void;
}

const LogTodayModal = ({ 
  isOpen, 
  onClose, 
  onChangeSource, 
  habitData, 
  setHabitData 
}: LogTodayModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xl relative">
        {/* Close Button */}
        {/* <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 cursor-pointer z-10"
        >
          <X size={20} />
        </button> */}

        {/* Device Sync Banner */}
        <div className="flex items-center justify-between bg-[#F0F9FF] border border-[#BAE6FD] rounded-t-2xl px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#3A86FF]/10 rounded-lg flex items-center justify-center">
              <Smartphone size={18} className="text-[#3A86FF]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0369A1]">Device Sync Active</p>
              <p className="text-xs text-[#64748B]">Some Data Is Automatically Synced From Your Connected Device.</p>
            </div>
          </div>
          <button
            onClick={onChangeSource}
            className="bg-[#8746E7] hover:bg-[#6D28D9] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Change Source
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-[#E8F1FF] rounded-xl flex items-center justify-center">
              <Crown size={18} className="text-[#3A86FF]" />
            </div>
            <h2 className="text-xl font-bold text-[#041228]">Lifestyle Habits</h2>
          </div>
          <p className="text-gray-400 text-sm mb-6 ml-12">Your daily habits shape your future health</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {/* Weight */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Weight size={16} className="text-[#3A86FF]" /> Weight
              </label>
              <select 
                value={habitData.weight} 
                onChange={e => setHabitData({...habitData, weight: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="150">150 lbs</option>
                <option value="160">160 lbs</option>
                <option value="170">170 lbs</option>
                <option value="180">180 lbs</option>
                <option value="190">190 lbs</option>
                <option value="200">200 lbs</option>
                <option value="210">210 lbs</option>
                <option value="220">220 lbs</option>
              </select>
            </div>

            {/* Body Fat */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Activity size={16} className="text-[#3A86FF]" /> Body Fat (Optional)
              </label>
              <select 
                value={habitData.bodyFat} 
                onChange={e => setHabitData({...habitData, bodyFat: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="35">35%</option>
              </select>
            </div>

            {/* Smoking */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Cigarette size={16} className="text-[#3A86FF]" /> Smoking Status
              </label>
              <select 
                value={habitData.smoking} 
                onChange={e => setHabitData({...habitData, smoking: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="never">Never Smoked</option>
                <option value="former">Former Smoker</option>
                <option value="occasional">Occasional</option>
                <option value="regular">Regular</option>
              </select>
            </div>

            {/* Alcohol */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <GlassWater size={16} className="text-[#3A86FF]" /> Alcohol Consumption
              </label>
              <select 
                value={habitData.alcohol} 
                onChange={e => setHabitData({...habitData, alcohol: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="none">None</option>
                <option value="rarely">Rarely</option>
                <option value="social">Social / Occasional</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
              </select>
            </div>

            {/* Daily Steps */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Footprints size={16} className="text-[#3A86FF]" /> Daily Steps
              </label>
              <input 
                type="number" 
                value={habitData.steps} 
                onChange={e => setHabitData({...habitData, steps: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A86FF]/50" 
              />
            </div>

            {/* Workout */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Dumbbell size={16} className="text-[#3A86FF]" /> Workout Per Week
              </label>
              <input 
                type="number" 
                value={habitData.workout} 
                onChange={e => setHabitData({...habitData, workout: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A86FF]/50" 
              />
            </div>

            {/* Strength */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Zap size={16} className="text-[#3A86FF]" /> Strength Training Per Week
              </label>
              <input 
                type="number" 
                value={habitData.strength} 
                onChange={e => setHabitData({...habitData, strength: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A86FF]/50" 
              />
            </div>

            {/* Sleep */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Moon size={16} className="text-[#3A86FF]" /> Sleep Hours Per Night
              </label>
              <input 
                type="number" 
                value={habitData.sleep} 
                onChange={e => setHabitData({...habitData, sleep: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A86FF]/50" 
              />
            </div>

            {/* Diet Quality */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Utensils size={16} className="text-[#3A86FF]" /> Overall Diet Quality
              </label>
              <select 
                value={habitData.diet} 
                onChange={e => setHabitData({...habitData, diet: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </div>

            {/* Fast Food */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Utensils size={16} className="text-[#3A86FF]" /> Fast Food Frequency
              </label>
              <select 
                value={habitData.fastFood} 
                onChange={e => setHabitData({...habitData, fastFood: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="never">Never</option>
                <option value="rarely">Rarely (1x/month)</option>
                <option value="sometimes">Sometimes (1-2x/week)</option>
                <option value="often">Often (3-4x/week)</option>
                <option value="daily">Daily</option>
              </select>
            </div>

            {/* Stress */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Activity size={16} className="text-[#3A86FF]" /> Stress Level
              </label>
              <select 
                value={habitData.stress} 
                onChange={e => setHabitData({...habitData, stress: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
                <option value="very_high">Very High</option>
              </select>
            </div>

            {/* Water */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#041228] font-semibold text-sm">
                <Droplets size={16} className="text-[#3A86FF]" /> Water Consumption Per Day
              </label>
              <select 
                value={habitData.water} 
                onChange={e => setHabitData({...habitData, water: e.target.value})} 
                className="w-full bg-[#F8FAFF] border border-gray-200 rounded-xl py-3 px-4 text-gray-500 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select.....</option>
                <option value="less_1L">Less than 1L</option>
                <option value="1_2L">1-2 Liters</option>
                <option value="2_3L">2-3 Liters</option>
                <option value="3L_plus">3+ Liters</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={onClose}
              className="bg-[#8746E7] hover:bg-[#6D28D9] text-white font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              Save Today&apos;s Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogTodayModal;

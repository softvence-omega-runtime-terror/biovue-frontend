// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   AreaChart, 
//   Area, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Line
// } from "recharts";
// import { Info, Scale, Activity, Utensils, Moon } from "lucide-react";

// const weightData = [
//   { day: "M", weight: 216 },
//   { day: "T", weight: 213 },
//   { day: "W", weight: 208 },
//   { day: "T", weight: 204 },
//   { day: "F", weight: 215 },
//   { day: "S", weight: 210 },
//   { day: "S", weight: 204 },
// ];

// const activityData = [
//   { day: "M", steps: 2500 },
//   { day: "T", steps: 3200 },
//   { day: "W", steps: 2800 },
//   { day: "T", steps: 3000 },
//   { day: "T", steps: 0 },
//   { day: "F", steps: 0 },
//   { day: "P", steps: 0 },
// ];

// const nutritionData = [
//   { day: "M", protein: 35, carbs: 40, fats: 25 },
//   { day: "T", protein: 30, carbs: 45, fats: 25 },
//   { day: "W", protein: 40, carbs: 35, fats: 25 },
//   { day: "T", protein: 35, carbs: 40, fats: 25 },
//   { day: "F", protein: 30, carbs: 45, fats: 25 },
//   { day: "S", protein: 35, carbs: 40, fats: 25 },
//   { day: "S", protein: 40, carbs: 35, fats: 25 },
// ];

// const sleepData = [
//   { day: "M", hours: 6 },
//   { day: "T", hours: 8 },
//   { day: "W", hours: 7 },
//   { day: "T", hours: 7.5 },
//   { day: "F", hours: 8.5 },
//   { day: "S", hours: 6.5 },
//   { day: "S", hours: 9 },
// ];

// export default function ProgressTrends() {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-medium text-[#111827]">Progress & Trends</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Weight Progress */}
//         <Card className="border-none shadow-xs bg-white">
//           <CardContent className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex gap-3">
//                 <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
//                   <Scale size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-[#111827]">Weight Progress</h3>
//                   <p className="text-[10px] text-[#9CA3AF]">Based on logged body weight</p>
//                   <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <span className="text-xs text-[#6B7280]">Total Progress</span>
//                 <span className="text-xs font-bold text-[#10B981]">-8.0 lbs</span>
//                 <Info size={14} className="text-[#D1D5DB]" />
//               </div>
//             </div>
            
//             <div className="h-50 w-full mt-4">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={weightData}>
//                   <defs>
//                     <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
//                       <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
//                   <XAxis 
//                     dataKey="day" 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     dy={10}
//                   />
//                   <YAxis 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     domain={[200, 220]}
//                     ticks={[204, 209, 214, 217]}
//                   />
//                   <Tooltip />
//                   <Area 
//                     type="monotone" 
//                     dataKey="weight" 
//                     stroke="#10B981" 
//                     strokeWidth={1.5} 
//                     fillOpacity={1} 
//                     fill="url(#weightGradient)" 
//                   />
//                   <Line type="monotone" dataKey={() => 205} stroke="#9CA3AF" strokeDasharray="3 3" dot={false} />
//                 </AreaChart>
//               </ResponsiveContainer>
//               <div className="text-center mt-2">
//                 <span className="text-[10px] font-bold text-[#111827]">weight (lbs)</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Activity Trends */}
//         <Card className="border-none shadow-xs bg-white">
//           <CardContent className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex gap-3">
//                 <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
//                   <Activity size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-[#111827]">Activity Treands</h3>
//                   <p className="text-[10px] text-[#9CA3AF]">Daily movement from logged activity</p>
//                   <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
//                 </div>
//               </div>
//               <Info size={14} className="text-[#D1D5DB]" />
//             </div>
            
//             <div className="h-45 w-full mt-4">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={activityData}>
//                   <defs>
//                     <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
//                       <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
//                   <XAxis 
//                     dataKey="day" 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     dy={10}
//                   />
//                   <YAxis 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     domain={[0, 3600]}
//                     ticks={[0, 900, 1800, 2700, 3600]}
//                   />
//                   <Tooltip />
//                   <Area 
//                     type="monotone" 
//                     dataKey="steps" 
//                     stroke="none" 
//                     fillOpacity={1} 
//                     fill="url(#activityGradient)" 
//                   />
//                   <Line type="monotone" dataKey={() => 1900} stroke="#10B981" strokeDasharray="3 3" dot={false} />
//                 </AreaChart>
//               </ResponsiveContainer>
//               <div className="flex justify-center items-center gap-2 mt-2">
//                 <div className="w-2.5 h-2.5 bg-[#10B98133] rounded-sm"></div>
//                 <span className="text-[10px] font-bold text-[#111827]">Steps</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Nutrition Overview */}
//         <Card className="border-none shadow-xs bg-white">
//           <CardContent className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex gap-3">
//                 <div className="p-2 bg-[#EFF6FF] text-[#3B82F6] rounded-lg h-fit">
//                   <Utensils size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-[#111827]">Nutrition Overview</h3>
//                   <p className="text-[10px] text-[#9CA3AF]">Based on logged meals and nutrition quality</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="h-50 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={nutritionData} barGap={0} barCategoryGap="40%">
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
//                   <XAxis 
//                     dataKey="day" 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     dy={10}
//                   />
//                   <YAxis 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     domain={[0, 100]}
//                     ticks={[0, 20, 40, 60, 80, 100]}
//                     tickFormatter={(val) => `${val}%`}
//                   />
//                   <Tooltip />
//                   <Bar dataKey="protein" stackId="a" fill="#34D399" />
//                   <Bar dataKey="carbs" stackId="a" fill="#60A5FA" />
//                   <Bar dataKey="fats" stackId="a" fill="#FB923C" />
//                   <Line type="monotone" dataKey={() => 65} stroke="#9CA3AF" strokeDasharray="3 3" />
//                 </BarChart>
//               </ResponsiveContainer>
//               <div className="flex justify-center gap-4 mt-2">
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></div>
//                   <span className="text-[8px] font-bold text-[#9CA3AF]">Protein</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]"></div>
//                   <span className="text-[8px] font-bold text-[#9CA3AF]">Carbs</span>
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#FB923C]"></div>
//                   <span className="text-[8px] font-bold text-[#9CA3AF]">Fats</span>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Sleep patterns */}
//         <Card className="border-none shadow-xs bg-white">
//           <CardContent className="p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div className="flex gap-3">
//                 <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
//                   <Moon size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-[#111827]">Sleep patterns</h3>
//                   <p className="text-[10px] text-[#9CA3AF]">Based on logged sleep duration and consistency</p>
//                   <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
//                 </div>
//               </div>
//               <Info size={14} className="text-[#D1D5DB]" />
//             </div>
            
//             <div className="h-50 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={sleepData}>
//                   <defs>
//                     <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
//                       <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
//                   <XAxis 
//                     dataKey="day" 
//                     axisLine={false} 
//                     tickLine={false} 
//                     tick={{fontSize: 10, fill: '#9CA3AF'}} 
//                     dy={10}
//                   />
//                   <YAxis hide domain={[0, 10]} />
//                   <Tooltip />
//                   <Area 
//                     type="monotone" 
//                     dataKey="hours" 
//                     stroke="#10B981" 
//                     strokeWidth={1.5} 
//                     strokeDasharray="3 3"
//                     fillOpacity={1} 
//                     fill="url(#sleepGradient)" 
//                   />
//                   <Line type="monotone" dataKey={() => 7.5} stroke="#9CA3AF" strokeDasharray="3 3" dot={false} />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Line
} from "recharts";
import { Info, Scale, Activity, Utensils, Moon } from "lucide-react";

const weightData = [
  { day: "M", weight: 216 },
  { day: "T", weight: 213 },
  { day: "W", weight: 208 },
  { day: "T", weight: 204 },
  { day: "F", weight: 215 },
  { day: "S", weight: 210 },
  { day: "S", weight: 204 },
];

const activityData = [
  { day: "M", steps: 2500 },
  { day: "T", steps: 3200 },
  { day: "W", steps: 2800 },
  { day: "T", steps: 3000 },
  { day: "T", steps: 0 },
  { day: "F", steps: 0 },
  { day: "P", steps: 0 },
];

const nutritionData = [
  { day: "M", protein: 35, carbs: 40, fats: 25 },
  { day: "T", protein: 30, carbs: 45, fats: 25 },
  { day: "W", protein: 40, carbs: 35, fats: 25 },
  { day: "T", protein: 35, carbs: 40, fats: 25 },
  { day: "F", protein: 30, carbs: 45, fats: 25 },
  { day: "S", protein: 35, carbs: 40, fats: 25 },
  { day: "S", protein: 40, carbs: 35, fats: 25 },
];

const sleepData = [
  { day: "M", hours: 6 },
  { day: "T", hours: 8 },
  { day: "W", hours: 7 },
  { day: "T", hours: 7.5 },
  { day: "F", hours: 8.5 },
  { day: "S", hours: 6.5 },
  { day: "S", hours: 9 },
];

export default function ProgressTrends() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-[#111827]">Progress & Trends</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weight Progress */}
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-3">
                <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
                  <Scale size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Weight Progress</h3>
                  <p className="text-[10px] text-[#9CA3AF]">Based on logged body weight</p>
                  <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#6B7280]">Total Progress</span>
                <span className="text-xs font-bold text-[#10B981]">-8.0 lbs</span>
                <Info size={14} className="text-[#D1D5DB]" />
              </div>
            </div>
            
            <div className="h-50 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weightData}>
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#25CD25" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#25CD25" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    domain={[200, 220]}
                    ticks={[204, 209, 214, 217]}
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#25CD25" 
                    strokeWidth={1.5} 
                    fillOpacity={1} 
                    fill="url(#weightGradient)" 
                  />
                  <Line type="monotone" dataKey={() => 205} stroke="#9CA3AF" strokeDasharray="3 3" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="text-center mt-2">
                <span className="text-[10px] font-bold text-[#111827]">weight (lbs)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Trends */}
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-3">
                <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Activity Treands</h3>
                  <p className="text-[10px] text-[#9CA3AF]">Daily movement from logged activity</p>
                  <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
                </div>
              </div>
              <Info size={14} className="text-[#D1D5DB]" />
            </div>
            
            <div className="h-45 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    domain={[0, 3600]}
                    ticks={[0, 900, 1800, 2700, 3600]}
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="steps" 
                    stroke="none" 
                    fillOpacity={1} 
                    fill="#C8F2C8"
                  />
                  <Line type="monotone" dataKey={() => 1900} stroke="#C8F2C8" strokeDasharray="3 3" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="w-2.5 h-2.5 bg-[#C8F2C8] rounded-sm"></div>
                <span className="text-[10px] font-bold text-[#111827]">Steps</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Overview */}
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-3">
                <div className="p-2 bg-[#EFF6FF] text-[#3B82F6] rounded-lg h-fit">
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Nutrition Overview</h3>
                  <p className="text-[10px] text-[#9CA3AF]">Based on logged meals and nutrition quality</p>
                </div>
              </div>
            </div>
            
            <div className="h-50 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={nutritionData} barGap={0} barCategoryGap="40%">
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    tickFormatter={(val) => `${val}%`}
                  />
                  <Tooltip />
                  <Bar dataKey="protein" stackId="a" fill="#32A26E" />
                  <Bar dataKey="carbs" stackId="a" fill="#66BBE2" />
                  <Bar dataKey="fats" stackId="a" fill="#FFA350" />
                  <Line type="monotone" dataKey={() => 65} stroke="#9CA3AF" strokeDasharray="3 3" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#32A26E]"></div>
                  <span className="text-[8px] font-bold text-[#9CA3AF]">Protein</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#66BBE2]"></div>
                  <span className="text-[8px] font-bold text-[#9CA3AF]">Carbs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFA350]"></div>
                  <span className="text-[8px] font-bold text-[#9CA3AF]">Fats</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sleep patterns */}
        <Card className="border-none shadow-xs bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-3">
                <div className="p-2 bg-[#F0FDFA] text-[#0D9488] rounded-lg h-fit">
                  <Moon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Sleep patterns</h3>
                  <p className="text-[10px] text-[#9CA3AF]">Based on logged sleep duration and consistency</p>
                  <p className="text-[10px] text-[#4F46E5] font-medium mt-1 uppercase">coach - aligned</p>
                </div>
              </div>
              <Info size={14} className="text-[#D1D5DB]" />
            </div>
            
            <div className="h-50 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sleepData}>
                  <defs>
                    <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8F2C8" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.15}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#9CA3AF'}} 
                    dy={10}
                  />
                  <YAxis hide domain={[0, 10]} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#C8F2C8" 
                    strokeWidth={1.5} 
                    strokeDasharray="3 3"
                    fillOpacity={1} 
                    fill="url(#sleepGradient)" 
                  />
                  <Line type="monotone" dataKey={() => 7.5} stroke="#9CA3AF" strokeDasharray="3 3" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

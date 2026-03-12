"use client";

import { useState } from "react";
import { Search, Sparkles, Brain, Image as ImageIcon, MessageSquare, Code, Languages, Mic, Video, Info } from "lucide-react";
import DashboardHeading from "@/components/common/DashboardHeading";
import { Input } from "@/components/ui/input";
import ApiServiceCard from "@/components/AdminDashboard/api-service/ApiServiceCard";
import ApiKeyModal from "@/components/AdminDashboard/api-service/ApiKeyModal";


// Mock AI APIs data
const AI_APIS = [
  {
    id: "gpt-4",
    name: "GPT-4 Vision",
    description: "Multi-modal model that can process both text and images for advanced reasoning and analysis.",
    icon: Brain,
    color: "bg-purple-500",
    status: "Active" as const,
  },
  {
    id: "dall-e-3",
    name: "DALL·E 3",
    description: "State-of-the-art image generation model that converts descriptive text into vivid, high-resolution visuals.",
    icon: ImageIcon,
    color: "bg-blue-500",
    status: "Active" as const,
  },
  {
    id: "whisper",
    name: "Whisper v3",
    description: "Automatic speech recognition (ASR) system that enables robust multi-lingual transcription and translation.",
    icon: Mic,
    color: "bg-teal-500",
    status: "Active" as const,
  },
  {
    id: "claude-3",
    name: "Claude 3 Opus",
    description: "Advanced LLM optimized for complex coding, creative writing, and nuanced conversation with high precision.",
    icon: MessageSquare,
    color: "bg-orange-500",
    status: "Active" as const,
  },
  {
    id: "sora",
    name: "Sora Video",
    description: "Experimental text-to-video model capable of creating realistic and imaginative scenes from prompts.",
    icon: Video,
    color: "bg-rose-500",
    status: "Maintenance" as const,
  },
  {
    id: "gemini-pro",
    name: "Gemini 1.5 Pro",
    description: "Google's most capable model for a wide range of tasks, featuring an massive context window for deep analysis.",
    icon: Sparkles,
    color: "bg-indigo-500",
    status: "Active" as const,
  },
  {
    id: "translation-api",
    name: "Neural Translate",
    description: "Real-time, high-fidelity translation service supporting over 100 languages with context-aware accuracy.",
    icon: Languages,
    color: "bg-cyan-500",
    status: "Active" as const,
  },
  {
    id: "code-llama",
    name: "Code Llama 70B",
    description: "Specialized model for code generation and debugging, supporting multiple programming languages.",
    icon: Code,
    color: "bg-emerald-500",
    status: "Active" as const,
  },
];

export default function ApiServicePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApi, setSelectedApi] = useState<typeof AI_APIS[0] | null>(null);
  const [apiKey, setApiKey] = useState("");

  const filteredApis = AI_APIS.filter((api) =>
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGetKey = (apiId: string) => {
    const api = AI_APIS.find((a) => a.id === apiId);
    if (api) {
      // Mock API Key generation (In a real app, this would check subscription and call backend)
      const mockKey = `bv_${Math.random().toString(36).substring(2, 11)}_${Math.random().toString(36).substring(2, 11)}`;
      setSelectedApi(api);
      setApiKey(mockKey);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen font-inter pb-20">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <DashboardHeading
              heading="AI API Services"
              subheading="Access premium AI capabilities through our unified API ecosystem."
            />
          </div>
          
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#0FA4A9] transition-colors" />
            <Input
              placeholder="Search available models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white border-gray-100 rounded-2xl shadow-sm focus-visible:ring-[#0FA4A9] focus-visible:border-[#0FA4A9] transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#0FA4A9] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-teal-600/20">
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0">
                 <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h2 className="text-2xl font-bold mb-1">Empower Your Workspace</h2>
                 <p className="text-teal-50 text-sm opacity-90 max-w-2xl leading-relaxed">
                   Select an AI model below to generate your unique API key. Remember, your access level depends on your current subscription plan.
                 </p>
              </div>
              <div className="shrink-0">
                 <button className="px-6 py-3 bg-white text-[#0FA4A9] rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg active:scale-95">
                    Upgrade Plan
                 </button>
              </div>
           </div>
           
           {/* Abstract Shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        </div>

        {/* API Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApis.length > 0 ? (
            filteredApis.map((api) => (
              <ApiServiceCard
                key={api.id}
                api={api}
                onGetKey={handleGetKey}
              />
            ))
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-400 bg-white rounded-3xl border border-dashed border-gray-200">
               <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                  <Info className="w-8 h-8" />
               </div>
               <p className="text-lg font-medium">No services match your search</p>
               <button 
                 onClick={() => setSearchQuery("")}
                 className="mt-4 text-[#0FA4A9] font-bold hover:underline"
               >
                 Clear all filters
               </button>
            </div>
          )}
        </div>
      </div>

      {/* API Key Modal */}
      {selectedApi && (
        <ApiKeyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          apiName={selectedApi.name}
          apiKey={apiKey}
        />
      )}
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import FAQSection from "@/components/FAQSection";
import DownloadSection from "@/components/DownloadSection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* This is the container for subsequent sections that will scroll naturally after the hero */}
      <main className="relative bg-landing">
        <FeaturesSection />
        <HowItWorks />
        <ProfessionalsSection />
        <FAQSection />
        <DownloadSection />
      </main>
    </div>
  );
}

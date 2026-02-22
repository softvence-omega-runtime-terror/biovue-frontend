import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* This is the container for subsequent sections that will scroll naturally after the hero */}
      <main className="relative bg-landing">
        <FeaturesSection />
      </main>
    </div>
  );
}

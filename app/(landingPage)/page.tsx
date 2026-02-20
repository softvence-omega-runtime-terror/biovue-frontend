import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* This is the container for subsequent sections that will scroll naturally after the hero */}
      <main className="relative bg-white">
        {/* Future sections go here */}
        <div className="h-screen flex items-center justify-center text-main-text text-2xl">
          Scroll down to see more sections...
        </div>
      </main>
    </div>
  );
}

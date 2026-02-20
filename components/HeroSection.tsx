import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 md:pb-32 overflow-hidden min-h-screen bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Left Decoration - Desktop Only */}
      <div className="hidden lg:block absolute left-4 xl:left-8 top-1/3 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/landing/left.png"
          alt="Decoration Left"
          width={400}
          height={800}
          className="opacity-40 xl:opacity-60 object-contain w-[250px] xl:w-[400px]"
        />
      </div>

      {/* Right Decoration - Desktop Only */}
      <div className="hidden lg:block absolute right-4 xl:right-8 top-1/3 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/landing/right.png"
          alt="Decoration Right"
          width={400}
          height={800}
          className="opacity-40 xl:opacity-60 object-contain w-[250px] xl:w-[400px]"
        />
      </div>

      {/* Badge */}
      <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E9EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs md:text-sm font-medium text-main-text">
        <span className="text-[#D9F500]">✦</span>
        AI-Powered Health Transformation
      </div>

      {/* Heading */}
      <h1 className="max-w-5xl font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[96px] leading-tight md:leading-[94px] font-medium text-main-text mb-6 tracking-tight px-2">
        See Your Future. <br className="hidden sm:block" />
        <span className="text-[#7C5CFF]">Change Your Path.</span>
      </h1>

      {/* Paragraph */}
      <p className="max-w-5xl text-para-text text-base sm:text-lg md:text-[24px] leading-relaxed font-normal mb-10 md:mb-12 px-4">
        Transform your wellness journey with AI-powered body projections.
        See your future self and get personalized insights to achieve your health goals.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto px-6">
        <Link
          href="/start"
          className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.39)]"
        >
          Start your journey
        </Link>
        <Link
          href="/pricing"
          className="w-full sm:w-auto bg-white text-main-text border border-[#E5E9EA] px-6 md:px-10 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
        >
          <span className="text-gray-400">$</span>
          View Pricing
        </Link>
      </div>

      {/* Features */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-main-text font-medium text-sm md:text-base">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          Credit Card Required
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          Free to Start
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

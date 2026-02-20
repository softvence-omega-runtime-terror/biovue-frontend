import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4  pb-32 overflow-hidden min-h-screen ">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Left Decoration */}
      <div className="absolute left-4 top-1/4 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/landing/left.png"
          alt="Decoration Left"
          width={400}
          height={800}
          className="opacity-60 object-contain"
        />
      </div>

      {/* Right Decoration */}
      <div className="absolute right-4 top-1/4 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/landing/right.png"
          alt="Decoration Right"
          width={400}
          height={800}
          className="opacity-60 object-contain"
        />
      </div>

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E9EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-sm font-medium text-main-text">
        <span className="text-[#D9F500]">✦</span>
        AI-Powered Health Transformation
      </div>

      {/* Heading */}
      <h1 className="max-w-5xl font-sans text-[96px] leading-[94px] font-medium text-main-text mb-6 tracking-tight">
        See Your Future. <br />
        <span className="text-[#7C5CFF]">Change Your Path.</span>
      </h1>

      {/* Paragraph */}
      <p className="max-w-5xl text-para-text text-[24px] leading-relaxed font-normal mb-12">
        Transform your wellness journey with AI-powered body projections. <br className="hidden md:block" />
        See your future self and get personalized insights to achieve your health goals.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        <Link
          href="/start"
          className="bg-primary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.39)]"
        >
          Start your journey
        </Link>
        <Link
          href="/pricing"
          className="bg-white text-main-text border border-[#E5E9EA] px-10 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-gray-50 transition-all"
        >
          <span className="text-gray-400">$</span>
          View Pricing
        </Link>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-8 text-main-text font-medium">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          Credit Card Required
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent container mx-auto w-full">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="BioVue Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-6">
        <Link 
          href="/sign-in" 
          className=" text-black font-medium hover:text-primary transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/get-started"
          className="bg-primary text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.39)]"
        >
          Get Started
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

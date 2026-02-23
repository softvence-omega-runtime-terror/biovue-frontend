import { poppins } from "@/app/font";
import Sidebar from "@/components/Sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen bg-[#F4FBFA] ${poppins.className}`}>
      {/* Sidebar - Fixed width container to reserve space on desktop */}
      <div className="hidden md:block w-65 shrink-0" />
      <Sidebar role="user" />

      {/* Right side */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

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
     
      <Sidebar role="user" />

      {/* Right side */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

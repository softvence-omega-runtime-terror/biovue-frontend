import { poppins } from "@/app/font";
import Sidebar from "@/components/Sidebar";
import TrainerNavbar from "@/components/TrainerDashboard/TrainerNavbar";

export default function TrainerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen bg-[#F4FBFA] ${poppins.className}`}>
      {/* Sidebar */}
      <Sidebar role="trainer" />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <TrainerNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

import { poppins } from "@/app/font";
import AdminNavbar from "@/components/AdminDashboard/AdminNavbar";
import Sidebar from "@/components/Sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen bg-[#F4FBFA] ${poppins.className}`}>
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

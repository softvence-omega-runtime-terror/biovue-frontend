import Sidebar from "@/components/Sidebar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import ClientsTable from "./ClientsTable";
import DashboardHeading from "@/components/common/DashboardHeading";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="bg-white p-5">
      <div className="mb-2  flex justify-between items-center">
        <div>
          <DashboardHeading
            heading="Clients"
            subheading=" Based on recent activity and progress trends"
          />
        </div>
        <Link href="/trainer-dashboard/clients">
          <Button variant="link" className="text-[#0FA4A9] cursor-pointer">
            View All <ChevronRight />
          </Button>
        </Link>
      </div>
      <ClientsTable limit={4} />
    </div>
  );
}

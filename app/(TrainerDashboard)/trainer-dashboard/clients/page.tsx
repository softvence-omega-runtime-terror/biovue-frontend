import DashboardHeading from "@/components/common/DashboardHeading";
import ClientsTable from "@/components/TrainerDashboard/overview/ClientsTable";

export default function Clients() {
  return (
    <div>
      <DashboardHeading
        heading="Clients"
        subheading="Manage and monitor your coaching roster"
      />

      <ClientsTable />
    </div>
  );
}

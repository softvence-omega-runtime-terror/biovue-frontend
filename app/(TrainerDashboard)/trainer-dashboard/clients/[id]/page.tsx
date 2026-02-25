
// import ClientDetailsContent from "@/components/TrainerDashboard/Clients/ClientDetailsContent";
// import { clientDetailsData } from "@/components/TrainerDashboard/Clients/ClientDetailsData";
// import { notFound } from "next/navigation";

// export const metadata = {
//   title: "Client Details | Trainer Dashboard",
//   description: "View detailed client information and progress",
// };

// export default function ClientDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const clientDetails = clientDetailsData[params.id];

//   if (!clientDetails) {
//     notFound();
//   }

//   return <ClientDetailsContent clientDetails={clientDetails} />;
// }


import ClientDetailsContent from "@/components/TrainerDashboard/Clients/ClientDetailsContent";
import { clientDetailsData } from "@/components/TrainerDashboard/Clients/ClientDetailsData";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clientDetails = clientDetailsData[id];

  return {
    title: clientDetails ? `${clientDetails.name} | Trainer Dashboard` : "Client Details | Trainer Dashboard",
    description: "View detailed client information and progress",
  };
}

export default async function ClientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clientDetails = clientDetailsData[id];

  if (!clientDetails) {
    notFound();
  }

  return <ClientDetailsContent clientDetails={clientDetails} />;
}

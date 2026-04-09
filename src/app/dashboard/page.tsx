import type { Metadata } from "next";
import { RentalHQDashboard } from "@/components/dashboard/RentalHQDashboard";

export const metadata: Metadata = {
  title: "Rental HQ Dashboard",
  description:
    "Strategic rental management calendar — collections, leasing, maintenance, compliance, and reporting.",
};

export default function DashboardPage() {
  return <RentalHQDashboard />;
}

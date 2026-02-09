import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

const Dashboard = async () => {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <DashboardClient />
    </main>
  );
};

export default Dashboard;

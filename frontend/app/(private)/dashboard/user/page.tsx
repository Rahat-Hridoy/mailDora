import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
import React from "react";

const User = async () => {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <div>User Dashboard</div>;
};

export default User;

import React from 'react'


import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }
  return (
    <main>
      <h1 className='text-3xl mb-3'>Welcome to Dashboard</h1>
    </main>
  )
}

export default Dashboard
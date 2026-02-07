import { auth0 } from "@/lib/auth0";
import Dashboard from "../(private)/dashboard/page";
import Link from "next/link";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <div className="app-container">
      <div className="main-card-wrapper">
        
        <div className="action-card">
          {user ? (
            <div className="logged-in-section">
              <p className="logged-in-message"></p>
              <Dashboard/>
              <Link href="/auth/logout" className="bg-red-200 p-2 rounded-full">Logout</Link>
            </div>
          ) : (
            <>
              <p className="action-text">
                Welcome! Please log in to access your protected content.
              </p>
              <Link href="/auth/login" className="bg-green-300 p-2 rounded-full">Login</Link>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
}
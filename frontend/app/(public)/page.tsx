// import { auth0 } from "@/lib/auth0";
// import Dashboard from "../(private)/dashboard/page";
// import Link from "next/link";

// export default async function Home() {
//   const session = await auth0.getSession();
//   const user = session?.user;

//   return (
//     <div className="app-container">
//       <div className="main-card-wrapper">

//         <div className="action-card">
//           {user ? (
//             <div className="logged-in-section">
//               <p className="logged-in-message"></p>
//               <Dashboard/>
//               <Link href="/auth/logout" className="bg-red-200 p-2 rounded-full">Logout</Link>
//             </div>
//           ) : (
//             <>
//               <p className="action-text">
//                 Welcome! Please log in to access your protected content.
//               </p>
//               <Link href="/auth/login" className="bg-green-300 p-2 rounded-full">Login</Link>

//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  return (
    <main className="p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Welcome to the App</h1>
      <div className="flex gap-4">
        {/* Button 1: Admin Dashboard */}
        <Link
          href="/dashboard/admin"
          className="bg-red-500 p-2 text-white rounded"
        >
          Admin Dashboard
        </Link>

        {/* Button 2: User Dashboard */}
        <Link
          href="/dashboard/user"
          className="bg-green-500 p-2 text-white rounded"
        >
          User Dashboard
        </Link>

        <a href="/auth/login" className="text-gray-500 underline">
          login
        </a>
      </div>
    </main>
  );
}

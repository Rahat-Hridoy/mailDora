import { isUserAdmin } from "../../actions/isUserAdmin";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const isAdmin = await isUserAdmin();

  if (!isAdmin) {
    return redirect("/");
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-red-600">Admin Area</h1>
    </div>
  );
}

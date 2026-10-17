import { redirect } from "next/navigation";
import { countAdmins } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminSetupPage() {
  // If admin already exists, go to login instead of showing setup form
  try {
    const n = await countAdmins();
    if (n > 0) redirect("/admin/login");
  } catch {
    // If DB check fails, still redirect to login
    redirect("/admin/login");
  }
  // Only reached if no admin exists (should not happen now)
  redirect("/admin/login");
}

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminIndex() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role === "admin") redirect("/admin/dashboard");
  redirect("/admin/login");
}

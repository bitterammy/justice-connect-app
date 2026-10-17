import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function getSession() {
  return getServerSession(authOptions);
}

export async function requireUser() {
  const session = await getSession();
  if (!session?.user?.id) return { error: NextResponse.json({ error: "Sign in required." }, { status: 401 }) };
  return { session };
}

export async function requireAdmin() {
  const session = await getSession();
  if (session?.user?.role !== "admin") {
    return { error: NextResponse.json({ error: "Admin access required." }, { status: 403 }) };
  }
  return { session };
}

export function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

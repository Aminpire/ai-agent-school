import { NextResponse } from "next/server";

import { readStore } from "@/lib/data-store";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const userId = String(body.userId || "");

  const session = await getSessionUser();
  if (!session) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const store = await readStore();
  const user = store.users.find((entry) => entry.id === userId || entry.email === session.email);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
}

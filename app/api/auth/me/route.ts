import { NextResponse } from "next/server";

import { getSessionUser } from "@/lib/auth";

export async function GET() {
  const session = await getSessionUser();
  return NextResponse.json({ user: session ?? null });
}

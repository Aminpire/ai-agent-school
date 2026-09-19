import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createSessionToken, getSessionUser } from "@/lib/auth";
import { readStore } from "@/lib/data-store";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (!email || password.length < 6) {
    return NextResponse.json({ error: "Valid email and password are required." }, { status: 400 });
  }

  const store = await readStore();
  const user = store.users.find((entry) => entry.email.toLowerCase() === email);

  if (!user) {
    return NextResponse.json({ error: "Account not found. Please register first." }, { status: 401 });
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createSessionToken({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  });

  const response = NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });

  response.cookies.set("agent_school_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}

export async function GET() {
  const session = await getSessionUser();
  return NextResponse.json({ user: session ?? null });
}

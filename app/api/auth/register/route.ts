import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { createUser, readStore } from "@/lib/data-store";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (!name || !email || password.length < 6) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and password with at least 6 characters." },
      { status: 400 }
    );
  }

  const store = await readStore();
  const existing = store.users.find((user) => user.email.toLowerCase() === email);

  if (existing) {
    return NextResponse.json({ error: "An account already exists for this email." }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({
    name,
    email,
    passwordHash,
    role: "student"
  });

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  }, { status: 201 });
}

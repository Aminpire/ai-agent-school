import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "agent-school-dev-secret-change-me"
);

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: "student" | "admin";
};

export async function createSessionToken(user: SessionUser) {
  return new SignJWT({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function getSessionUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("agent_school_session")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    return {
      id: String(payload.id),
      name: String(payload.name),
      email: String(payload.email),
      role: String(payload.role) as SessionUser["role"]
    } satisfies SessionUser;
  } catch {
    return null;
  }
}

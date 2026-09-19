import { NextResponse } from "next/server";

import { getSessionUser } from "@/lib/auth";
import { readStore, writeStore } from "@/lib/data-store";

export async function POST(request: Request) {
  const session = await getSessionUser();
  if (!session) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const { answers, courseId = "prompt-engineering" } = await request.json();
  const total = 4;
  const correctAnswers = [0, 0, 0, 0];
  const submitted = Array.isArray(answers) ? answers : [];

  let score = 0;
  for (let index = 0; index < total; index += 1) {
    if (submitted[index] === correctAnswers[index]) {
      score += 1;
    }
  }

  const passed = Math.round((score / total) * 100) >= 80;
  const store = await readStore();

  store.examAttempts.push({
    id: `attempt-${Date.now()}`,
    userId: session.id,
    courseId,
    score,
    total,
    passed,
    submittedAt: new Date().toISOString()
  });

  await writeStore(store);

  return NextResponse.json({
    score,
    total,
    passed,
    percent: Math.round((score / total) * 100)
  });
}

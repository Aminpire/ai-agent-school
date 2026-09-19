import { NextResponse } from "next/server";

import { readStore, writeStore } from "@/lib/data-store";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getSessionUser();
  if (!session) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const { courseId } = await request.json();
  if (!courseId) {
    return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
  }

  const store = await readStore();
  const exists = store.enrollments.some(
    (entry) => entry.userId === session.id && entry.courseId === courseId
  );

  if (!exists) {
    store.enrollments.push({
      userId: session.id,
      courseId,
      enrolledAt: new Date().toISOString()
    });
    await writeStore(store);
  }

  return NextResponse.json({ success: true, enrolled: true });
}

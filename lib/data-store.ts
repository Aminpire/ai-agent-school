import { promises as fs } from "fs";
import path from "path";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "student" | "admin";
  createdAt: string;
};

export type EnrollmentRecord = {
  courseId: string;
  userId: string;
  enrolledAt: string;
};

export type ExamAttemptRecord = {
  id: string;
  userId: string;
  courseId: string;
  score: number;
  total: number;
  passed: boolean;
  submittedAt: string;
};

export type SchoolData = {
  users: UserRecord[];
  enrollments: EnrollmentRecord[];
  examAttempts: ExamAttemptRecord[];
};

const defaultData: SchoolData = {
  users: [
    {
      id: "admin-1",
      name: "Aminpire",
      email: "admin@agentschool.dev",
      passwordHash: "$2a$10$3IejJwcVVG9J9n7R1kBknuqixM3BKjCZ3M4kQx/e9T0aej9vEAGqC.",
      role: "admin",
      createdAt: new Date().toISOString()
    }
  ],
  enrollments: [],
  examAttempts: []
};

const filePath = path.join(process.cwd(), "data", "store.json");

async function ensureFile() {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), "utf8");
  }
}

export async function readStore(): Promise<SchoolData> {
  await ensureFile();
  const raw = await fs.readFile(filePath, "utf8");

  try {
    return JSON.parse(raw) as SchoolData;
  } catch {
    await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), "utf8");
    return defaultData;
  }
}

export async function writeStore(data: SchoolData) {
  await ensureFile();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

export async function createUser(data: Omit<UserRecord, "id" | "createdAt">) {
  const store = await readStore();
  const user: UserRecord = {
    ...data,
    id: `user-${Date.now()}`,
    createdAt: new Date().toISOString()
  };

  store.users.push(user);
  await writeStore(store);
  return user;
}

export async function listStudents() {
  const store = await readStore();
  return store.users.filter((user) => user.role === "student");
}

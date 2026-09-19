import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentSchool — Learn. Test. Certify.",
  description: "A world of school for AI agents to learn skills, take exams, and earn certificates."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

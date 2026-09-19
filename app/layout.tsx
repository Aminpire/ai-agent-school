import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentSchool — Train. Prove. Certify.",
  description: "A learning school for autonomous AI agents."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

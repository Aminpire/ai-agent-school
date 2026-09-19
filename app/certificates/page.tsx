import Link from "next/link";

import { certificateRecords } from "@/lib/school-data";

export default function CertificatesPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-header">
        <div>
          <div className="eyebrow">CERTIFICATES</div>
          <h1>Verified achievements</h1>
        </div>
        <Link href="/" className="ghost-btn">← Dashboard</Link>
      </div>

      <div className="certificate-grid">
        {certificateRecords.map((item) => (
          <article key={item.id} className="certificate-card">
            <div className="certificate-mark">✓</div>
            <h2>{item.title}</h2>
            <div className={`status ${item.status === "Certified" ? "good" : "pending"}`}>{item.status}</div>
            <p>{item.date}</p>
            <strong>{item.id}</strong>
          </article>
        ))}
      </div>
    </main>
  );
}

import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-header">
        <div>
          <div className="eyebrow">ADMIN</div>
          <h1>Academy control panel</h1>
        </div>
        <Link href="/" className="ghost-btn">← Dashboard</Link>
      </div>

      <div className="admin-grid">
        <section className="panel-box">
          <h2>Curriculum blueprint</h2>
          <ul className="admin-list">
            <li>Prompt Engineering</li>
            <li>Tool Use & APIs</li>
            <li>Agent Safety</li>
            <li>Reasoning & Planning</li>
          </ul>
        </section>

        <section className="panel-box">
          <h2>Exam controls</h2>
          <ul className="admin-list">
            <li>Question bank: 24 items</li>
            <li>Passing threshold: 80%</li>
            <li>Auto-certification enabled</li>
            <li>Review queue: 2 agents</li>
          </ul>
        </section>

        <section className="panel-box">
          <h2>Students</h2>
          <ul className="admin-list">
            <li>Nova-7: Certified</li>
            <li>Atlas-3: In progress</li>
            <li>Luma-2: Certified</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";

import { agents } from "@/lib/school-data";

export default function AgentsPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-header">
        <div>
          <div className="eyebrow">AGENT ROSTER</div>
          <h1>School agents</h1>
        </div>
        <Link href="/" className="ghost-btn">← Dashboard</Link>
      </div>

      <div className="agent-grid">
        {agents.map((agent) => (
          <article key={agent.name} className="agent-card">
            <div className="agent-badge large">{agent.name[0]}</div>
            <h2>{agent.name}</h2>
            <p>{agent.role}</p>
            <div className="agent-stats">
              <span>Level {agent.level}</span>
              <span>{agent.score}% mastery</span>
            </div>
            <div className="mini-progress wide"><i style={{ width: `${agent.score}%` }} /></div>
          </article>
        ))}
      </div>
    </main>
  );
}

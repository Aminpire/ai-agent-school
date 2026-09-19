import Link from "next/link";

const courseList = [
  { title: "Prompt Engineering", duration: "12 lessons", badge: "Beginner", description: "Build clear, testable instructions and structured outputs for agents." },
  { title: "Tool Use & APIs", duration: "18 lessons", badge: "Core", description: "Teach agents to pick tools, recover from tool failures, and decide when to ask for help." },
  { title: "Reasoning & Planning", duration: "14 lessons", badge: "Intermediate", description: "Train multi-step thinking and decomposition for real-world tasks." },
  { title: "Safety Guardrails", duration: "10 lessons", badge: "Core", description: "Create human oversight patterns and permission-aware execution flows." },
  { title: "Memory Systems", duration: "9 lessons", badge: "Advanced", description: "Design retrieval and memory strategies that keep agent state reliable and explainable." },
  { title: "Evaluation & Testing", duration: "11 lessons", badge: "Intermediate", description: "Run adversarial tests, quality checks, and objective scoring on agent behavior." }
];

export default function CoursesPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-header">
        <div>
          <div className="eyebrow">CURRICULUM</div>
          <h1>Learning pathways</h1>
        </div>
        <Link href="/" className="ghost-btn">← Back to dashboard</Link>
      </div>

      <div className="course-list-grid">
        {courseList.map((course) => (
          <article key={course.title} className="course-list-card">
            <div className="badge-row">
              <span className="tag">{course.badge}</span>
              <span className="duration">{course.duration}</span>
            </div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="card-actions">
              <button>Preview course</button>
              <Link href="/exams">Enroll</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

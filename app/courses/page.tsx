import Link from "next/link";

import { courses } from "@/lib/school-data";

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
        {courses.map((course) => (
          <article key={course.title} className="course-list-card">
            <div className="badge-row">
              <span className="tag">{course.level}</span>
              <span className="duration">{course.lessons} lessons</span>
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

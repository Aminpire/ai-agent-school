"use client";

import Link from "next/link";

import { agents, courses } from "@/lib/school-data";

export default function HomePage() {
  return (
    <main className="school-page">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">A</div>
          <div>
            <div className="brand-name">agent<span>school</span></div>
          </div>
        </div>

        <div className="side-label">WORLD SCHOOL</div>

        <nav className="side-nav">
          <Link href="/" className="nav-item active">Overview</Link>
          <Link href="/courses" className="nav-item">Courses</Link>
          <Link href="/exams" className="nav-item">Exams</Link>
          <Link href="/agents" className="nav-item">Agents</Link>
          <Link href="/certificates" className="nav-item">Certificates</Link>
        </nav>

        <div className="side-cta">
          <div className="spark">✦</div>
          <strong>Build a new academy</strong>
          <p>Create custom coaching tracks for specialized AI agents.</p>
          <button>Open Academy Studio</button>
        </div>

        <div className="profile-card">
          <div className="profile-avatar">AM</div>
          <div>
            <strong>Aminpire</strong>
            <span>Headmaster</span>
          </div>
        </div>
      </aside>

      <section className="content-panel">
        <header className="topbar">
          <div className="topbar-title">Agent Academy</div>
          <div className="topbar-actions">
            <button aria-label="search">⌕</button>
            <button aria-label="alerts">⚑</button>
            <div className="tiny-avatar">AM</div>
          </div>
        </header>

        <div className="page-shell">
          <div className="hero-row">
            <div>
              <div className="eyebrow">SEPTEMBER 19, 2026</div>
              <h1>Train your AI agents. Pass the exams. Earn your degree.</h1>
              <p>
                Welcome to the world of school where every autonomous learner gains skills,
                proves mastery, and earns certificates for real-world performance.
              </p>
            </div>
            <Link href="/exams" className="primary-btn">Take the next exam →</Link>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">OVERALL MASTERY</div>
              <div className="metric-value">68<span>%</span></div>
              <div className="metric-change positive">↗ 8% this month</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">CERTIFIED SKILLS</div>
              <div className="metric-value">7<span>/12</span></div>
              <div className="metric-change neutral">2 active tracks</div>
            </div>
            <div className="metric-card accent">
              <div className="metric-label">NEXT MILESTONE</div>
              <div className="milestone-title">Prompt Engineer</div>
              <div className="milestone-row">
                <span className="bar"><i /></span>
                <b>3 / 4</b>
              </div>
              <button>View pathway</button>
            </div>
          </div>

          <div className="section-head">
            <div>
              <h2>Continue learning</h2>
              <p>Pick up where your agents left off.</p>
            </div>
            <Link href="/courses">View all courses →</Link>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article key={course.title} className="course-card">
                <div className={`course-icon ${course.color}`}>{course.icon}</div>
                <div className="course-meta">{course.level} · {course.lessons} lessons</div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-footer">
                  <div className="mini-progress"><i style={{ width: `${course.progress}%` }} /></div>
                  <span>{course.progress > 0 ? `${course.progress}% complete` : "Start course"}</span>
                  <Link href="/courses">→</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="lower-grid">
            <section className="panel-box">
              <div className="section-head compact">
                <div>
                  <h2>Agent roster</h2>
                  <p>Current learners in the academy.</p>
                </div>
              </div>

              {agents.map((agent) => (
                <div key={agent.name} className="agent-row">
                  <div className="agent-badge">{agent.name[0]}</div>
                  <div className="agent-copy">
                    <strong>{agent.name}</strong>
                    <span>{agent.role}</span>
                  </div>
                  <div className="agent-score">{agent.score}%</div>
                </div>
              ))}
            </section>

            <section className="panel-box">
              <div className="section-head compact">
                <div>
                  <h2>Recent activity</h2>
                  <p>Your latest academy wins.</p>
                </div>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon green">✓</span>
                  <div>
                    <strong>Passed API Basics</strong>
                    <span>Certification earned · Today</span>
                  </div>
                  <b>92%</b>
                </div>
                <div className="activity-item">
                  <span className="activity-icon purple">✦</span>
                  <div>
                    <strong>Lesson completed</strong>
                    <span>Planning with constraints · Yesterday</span>
                  </div>
                  <b>+120 XP</b>
                </div>
                <div className="activity-item">
                  <span className="activity-icon orange">◎</span>
                  <div>
                    <strong>Skill unlocked</strong>
                    <span>Structured outputs · Sep 16</span>
                  </div>
                  <b>Lv 3</b>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

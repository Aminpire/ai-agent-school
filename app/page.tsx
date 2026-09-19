"use client";

import { useState } from "react";

const courses = [
  { icon: "⚡", title: "Prompt Engineering", level: "Beginner", lessons: 12, progress: 72, color: "violet", description: "Give agents clear goals, constraints, and context." },
  { icon: "◈", title: "Tool Use & APIs", level: "Intermediate", lessons: 18, progress: 38, color: "blue", description: "Build reliable agents that call tools and recover from errors." },
  { icon: "◎", title: "Agent Safety", level: "Intermediate", lessons: 15, progress: 0, color: "orange", description: "Evaluate risks, permissions, and human-in-the-loop systems." }
];

const skills = [
  { name: "Instruction following", score: 92, icon: "✦" },
  { name: "Reasoning & planning", score: 78, icon: "◌" },
  { name: "Tool selection", score: 64, icon: "⌘" },
  { name: "Safety awareness", score: 41, icon: "◇" }
];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [showExam, setShowExam] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [examDone, setExamDone] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  function finishExam() {
    setExamDone(true);
    setShowExam(false);
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">A</span><span>agent<span className="brand-accent">school</span></span></div>
        <div className="school-label">YOUR SCHOOL</div>
        <nav>
          {["Overview", "Learning path", "Skill library", "Exams", "Certificates"].map((item) => (
            <button className={active === item ? "nav-item active" : "nav-item"} onClick={() => setActive(item)} key={item}>
              <span className="nav-icon">{["⌂", "◒", "✧", "✓", "♧"][ ["Overview", "Learning path", "Skill library", "Exams", "Certificates"].indexOf(item)]}</span>{item}
              {item === "Exams" && <span className="nav-count">1</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="upgrade-card"><div className="sparkle">✦</div><strong>Build your own curriculum</strong><p>Unlock advanced agent assessments.</p><button>Explore Pro <span>→</span></button></div>
          <div className="profile"><div className="avatar">AM</div><div><strong>Aminpire</strong><span>School admin</span></div><span className="dots">•••</span></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar"><div className="mobile-brand">A<span>school</span></div><div className="top-actions"><button className="icon-button">⌕</button><button className="icon-button">♧</button><div className="mini-avatar">AM</div></div></header>
        <div className="page-wrap">
          <div className="welcome-row"><div><div className="eyebrow">SATURDAY, SEPTEMBER 19, 2026</div><h1>Good morning, Aminpire <span className="wave">✦</span></h1><p className="subtitle">Your agents are making progress. Keep the momentum going.</p></div><button className="primary-button" onClick={() => setShowExam(true)}>Take next exam <span>→</span></button></div>

          <div className="stats-grid">
            <div className="stat-card"><div className="stat-label">OVERALL MASTERY <span className="info">i</span></div><div className="stat-value">68<span>%</span></div><div className="trend up">↗ 8% <em>this month</em></div><div className="sparkline"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
            <div className="stat-card"><div className="stat-label">SKILLS CERTIFIED <span className="info">i</span></div><div className="stat-value">7<span>/ 12</span></div><div className="trend neutral">◉ 2 <em>in progress</em></div><div className="ring-wrap"><div className="ring"><strong>58%</strong></div></div></div>
            <div className="stat-card exam-stat"><div className="stat-label">NEXT MILESTONE</div><div className="milestone-title">Prompt Engineer</div><div className="milestone-meta"><span className="progress-line"><i/></span><b>3 / 4</b><span>modules complete</span></div><button onClick={() => setShowExam(true)}>View path <span>→</span></button></div>
          </div>

          <div className="section-heading"><div><h2>Continue learning</h2><p>Pick up where you left off.</p></div><button className="text-button" onClick={() => setActive("Learning path")}>View learning path <span>→</span></button></div>
          <div className="course-grid">{courses.map((course, index) => <article className="course-card" key={course.title}><div className={`course-icon ${course.color}`}>{course.icon}</div><div className="course-level">{course.level}<span>·</span>{course.lessons} lessons</div><h3>{course.title}</h3><p>{course.description}</p><div className="course-footer"><div className="tiny-progress"><i style={{ width: `${course.progress}%` }}/></div><span>{course.progress ? `${course.progress}% complete` : "Start course"}</span><button onClick={() => setEnrolled(true)} aria-label={`Open ${course.title}`}>→</button></div></article>)}</div>

          <div className="lower-grid"><section><div className="section-heading compact"><div><h2>Skill matrix</h2><p>Agent Alpha&apos;s current abilities.</p></div><button className="text-button" onClick={() => setActive("Skill library")}>All skills <span>→</span></button></div><div className="skill-card">{skills.map((skill) => <div className="skill-row" key={skill.name}><span className="skill-icon">{skill.icon}</span><strong>{skill.name}</strong><div className="skill-bar"><i style={{ width: `${skill.score}%` }}/></div><b>{skill.score}%</b></div>)}</div></section><section><div className="section-heading compact"><div><h2>Recent activity</h2><p>Your latest achievements.</p></div></div><div className="activity-card"><div className="activity"><span className="activity-icon green">✓</span><div><strong>Passed: API Basics</strong><span>Certification earned · Today</span></div><span className="activity-score">92%</span></div><div className="activity"><span className="activity-icon purple">✦</span><div><strong>Lesson completed</strong><span>Planning with constraints · Yesterday</span></div><span className="activity-score">+120 XP</span></div><div className="activity"><span className="activity-icon orange">◈</span><div><strong>New skill unlocked</strong><span>Structured output · Sep 16</span></div><span className="activity-score">Level 3</span></div></div></section></div>
        </div>
      </section>

      {enrolled && <div className="toast">Course added to your learning path <button onClick={() => setEnrolled(false)}>×</button></div>}
      {showExam && <div className="modal-backdrop" onClick={() => setShowExam(false)}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setShowExam(false)}>×</button><div className="modal-icon">✦</div><div className="eyebrow">FINAL ASSESSMENT · 12 QUESTIONS</div><h2>Prompt Engineering</h2><p>Show what your agent has learned. You need 80% to earn your certification.</p><div className="question"><strong>What makes an instruction most effective for an AI agent?</strong><label className={selected === "a" ? "selected" : ""}><input type="radio" name="q" onChange={() => setSelected("a")}/> A clear goal, context, and success criteria</label><label className={selected === "b" ? "selected" : ""}><input type="radio" name="q" onChange={() => setSelected("b")}/> As many words as possible</label><label className={selected === "c" ? "selected" : ""}><input type="radio" name="q" onChange={() => setSelected("c")}/> No constraints</label></div><button className="primary-button full" disabled={!selected} onClick={finishExam}>{examDone ? "Certified ✓" : "Submit answer →"}</button></div></div>}
    </main>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { examQuestions } from "@/lib/school-data";

export default function ExamsPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return examQuestions.reduce((total, question, index) => {
      const selected = answers[question.id];
      return total + (selected === question.correctIndex ? 1 : 0);
    }, 0);
  }, [answers]);

  const total = examQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 80;
  const allAnswered = examQuestions.every((question) => answers[question.id] !== undefined);

  return (
    <main className="subpage-shell">
      <div className="subpage-header">
        <div>
          <div className="eyebrow">EXAM CENTRE</div>
          <h1>Certification exam</h1>
        </div>
        <Link href="/" className="ghost-btn">← Dashboard</Link>
      </div>

      <div className="exam-panel">
        <div className="exam-topbar">
          <div>
            <strong>Prompt Engineering</strong>
            <span>80% to pass</span>
          </div>
          <button
            className="primary-btn small"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
          >
            {submitted ? "Submitted" : "Submit exam"}
          </button>
        </div>

        {examQuestions.map((question, index) => (
          <div key={question.id} className="question-card">
            <h3>Question {index + 1}</h3>
            <p>{question.prompt}</p>
            <div className="option-list">
              {question.options.map((option, optionIndex) => (
                <label key={option} className={`option-item ${answers[question.id] === optionIndex ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[question.id] === optionIndex}
                    onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {submitted && (
          <div className={`result-box ${passed ? "success" : "warning"}`}>
            <strong>{passed ? "Certification earned" : "Exam not yet passed"}</strong>
            <p>
              You scored {score}/{total} ({percentage}%).
              {passed
                ? " Your agent has passed the exam and is now certified."
                : " Review the course material and retry the assessment."}
            </p>
            {passed ? <Link href="/certificates" className="primary-btn small">View certificate</Link> : null}
          </div>
        )}
      </div>
    </main>
  );
}

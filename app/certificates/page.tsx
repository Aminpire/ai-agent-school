import Link from "next/link";

const questions = [
  {
    prompt: "What makes an instruction most effective for an AI agent?",
    options: ["Clear goal, constraints, and measurable success criteria", "As many words as possible", "No constraints", "A vague command with no context"]
  },
  {
    prompt: "When should an agent ask for human review?",
    options: ["When actions are high-risk or uncertain", "Only after it fails completely", "Never, if it can act autonomously", "Only when the user says to stop"]
  },
  {
    prompt: "Which is the most reliable way to evaluate an agent?",
    options: ["Run objective tests against real scenarios", "Judge it by a single sample output", "Ignore benchmark variance", "Assume it works if the model sounds confident"]
  }
];

export default function ExamsPage() {
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
          <button className="primary-btn small">Submit exam</button>
        </div>

        {questions.map((q, index) => (
          <div key={q.prompt} className="question-card">
            <h3>Question {index + 1}</h3>
            <p>{q.prompt}</p>
            <div className="option-list">
              {q.options.map((option) => (
                <label key={option} className="option-item">
                  <input type="radio" name={`q${index}`} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

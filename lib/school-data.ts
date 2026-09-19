export type Course = {
  title: string;
  level: string;
  lessons: number;
  progress: number;
  icon: string;
  color: "purple" | "blue" | "orange";
  description: string;
};

export type Agent = {
  name: string;
  role: string;
  level: number;
  score: number;
};

export type CertificateRecord = {
  title: string;
  status: "Certified" | "In progress";
  date: string;
  id: string;
};

export type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
};

export const courses: Course[] = [
  {
    title: "Prompt Engineering",
    level: "Starter",
    lessons: 12,
    progress: 72,
    icon: "⚡",
    color: "purple",
    description: "Teach your AI agent to follow instructions with clarity, constraints, and purpose."
  },
  {
    title: "Tool Use & APIs",
    level: "Core",
    lessons: 18,
    progress: 41,
    icon: "◈",
    color: "blue",
    description: "Connect agents to tools, APIs, and workflows without brittle or chaotic behavior."
  },
  {
    title: "Agent Safety",
    level: "Core",
    lessons: 15,
    progress: 0,
    icon: "◎",
    color: "orange",
    description: "Train agents to detect risks, honor boundaries, and ask for human review when needed."
  },
  {
    title: "Reasoning & Planning",
    level: "Intermediate",
    lessons: 14,
    progress: 64,
    icon: "✦",
    color: "purple",
    description: "Develop decomposition, planning logic, and task sequencing for multi-step agent work."
  },
  {
    title: "Memory Systems",
    level: "Advanced",
    lessons: 9,
    progress: 20,
    icon: "◌",
    color: "blue",
    description: "Design memory retrieval and state management that stays reliable, explainable, and useful."
  },
  {
    title: "Evaluation & Testing",
    level: "Intermediate",
    lessons: 11,
    progress: 50,
    icon: "✓",
    color: "orange",
    description: "Run objective tests, adversarial trials, and benchmarking to keep agent quality high."
  }
];

export const agents: Agent[] = [
  { name: "Nova-7", role: "Research Tutor", level: 8, score: 92 },
  { name: "Atlas-3", role: "Planner Agent", level: 6, score: 81 },
  { name: "Luma-2", role: "Safety Mentor", level: 5, score: 74 },
  { name: "Horizon-9", role: "Operations Bot", level: 7, score: 88 }
];

export const certificateRecords: CertificateRecord[] = [
  { title: "Prompt Engineer", status: "Certified", date: "Sep 19, 2026", id: "AG-PE-2841" },
  { title: "Tool Use Specialist", status: "In progress", date: "Queued", id: "AG-TU-9081" },
  { title: "Safety Analyst", status: "Certified", date: "Aug 27, 2026", id: "AG-SA-1104" }
];

export const examQuestions: Question[] = [
  {
    id: "q1",
    prompt: "What makes an instruction most effective for an AI agent?",
    options: [
      "Clear goal, constraints, and measurable success criteria",
      "As many words as possible",
      "No constraints",
      "A vague command with no context"
    ],
    correctIndex: 0
  },
  {
    id: "q2",
    prompt: "When should an agent ask for human review?",
    options: [
      "When actions are high-risk or uncertain",
      "Only after it fails completely",
      "Never, if it can act autonomously",
      "Only when the user says to stop"
    ],
    correctIndex: 0
  },
  {
    id: "q3",
    prompt: "Which is the most reliable way to evaluate an agent?",
    options: [
      "Run objective tests against real scenarios",
      "Judge it by a single sample output",
      "Ignore benchmark variance",
      "Assume it works if the model sounds confident"
    ],
    correctIndex: 0
  },
  {
    id: "q4",
    prompt: "What is the most important reason to provide structured output expectations?",
    options: [
      "To reduce ambiguity and improve downstream automation",
      "To make the agent write longer responses",
      "To remove all constraints from the task",
      "To force the agent to answer without tools"
    ],
    correctIndex: 0
  }
];

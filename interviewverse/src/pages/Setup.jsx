// function Setup() {
//   return (
//     <main style={{ padding: "60px 24px", textAlign: "center" }}>
//       <h1>Interview Setup</h1>
//       <p>Next, we will build the role, experience, and difficulty selection.</p>
//     </main>
//   );
// }

// export default Setup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/setup.css";

const roles = [
"Software Developer",
"Frontend Developer",
"Backend Developer",
"Full-Stack Developer",
"Data Analyst",
"Data Scientist",
"Machine Learning Engineer",
"Cybersecurity Analyst",
"UI/UX Designer",
"Product Manager",
"Business Analyst",
"Digital Marketing Executive",
"Human Resources",
"Sales Executive",
"Customer Support",
"Other",
];

const experienceLevels = [
{
name: "Fresher",
description: "Starting your career",
},
{
name: "Entry Level",
description: "0–2 years",
},
{
name: "Intermediate",
description: "2–5 years",
},
{
name: "Experienced",
description: "5+ years",
},
];

const interviewTypes = [
{
name: "Technical",
description: "Technical knowledge and concepts",
icon: "⌘",
},
{
name: "HR",
description: "Introduction and career questions",
icon: "◉",
},
{
name: "Behavioral",
description: "Past experiences and teamwork",
icon: "◇",
},
{
name: "Situational",
description: "Workplace situations and decisions",
icon: "↗",
},
{
name: "Problem-Solving",
description: "Logic, analysis, and reasoning",
icon: "⌕",
},
{
name: "Case Study",
description: "Investigate realistic problems",
icon: "▤",
},
{
name: "Managerial",
description: "Leadership and decision-making",
icon: "♧",
},
{
name: "Mixed",
description: "A combination of interview types",
icon: "✳",
},
];

const difficulties = [
{
name: "Easy",
description: "Build your confidence",
},
{
name: "Medium",
description: "Test your reasoning",
},
{
name: "Hard",
description: "Challenge your limits",
},
];

function Setup() {
const navigate = useNavigate();

const [role, setRole] = useState("Software Developer");
const [customRole, setCustomRole] = useState("");
const [experience, setExperience] = useState("Fresher");
const [interviewType, setInterviewType] = useState("Mixed");
const [difficulty, setDifficulty] = useState("Medium");
const [questionCount, setQuestionCount] = useState(5);
const [error, setError] = useState("");

function handleStartInterview() {
const finalRole =
role === "Other" ? customRole.trim() : role;

```
if (!finalRole) {
  setError("Please enter your target job role.");
  return;
}

const settings = {
  role: finalRole,
  experience,
  interviewType,
  difficulty,
  questionCount,
  mode: "text",
  createdAt: new Date().toISOString(),
};

sessionStorage.setItem(
  "interviewverse_settings",
  JSON.stringify(settings)
);

// Clear any previous interview session before starting a new one.
sessionStorage.removeItem("interviewverse_answers");
sessionStorage.removeItem("interviewverse_feedback");

navigate("/interview");
```

}

return ( <div className="setup-page"> <header className="setup-navbar">
<button
className="setup-brand"
onClick={() => navigate("/")}
aria-label="Go to homepage"
> <span className="brand-icon">I</span> <span>InterviewVerse</span> </button>

```
    <button
      className="setup-back"
      onClick={() => navigate("/")}
    >
      ← Back to home
    </button>
  </header>

  <main className="setup-main">
    <div className="setup-progress">
      <span className="progress-active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="setup-heading">
      <span className="setup-eyebrow">
        LET'S PERSONALISE YOUR EXPERIENCE
      </span>

      <h1>
        Set yourself
        <br />
        <span>up for success.</span>
      </h1>

      <p>
        Tell us what you're preparing for. We'll use your
        preferences to tailor the interview experience.
      </p>
    </div>

    <section className="setup-section">
      <div className="setup-section-heading">
        <div className="setup-section-number">01</div>

        <div>
          <h2>What's your target role?</h2>
          <p>Choose the role you want to prepare for.</p>
        </div>
      </div>

      <label className="setup-label" htmlFor="role">
        TARGET JOB ROLE
      </label>

      <select
        id="role"
        className="setup-select"
        value={role}
        onChange={(event) => {
          setRole(event.target.value);
          setError("");
        }}
      >
        {roles.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {role === "Other" && (
        <input
          className="setup-select custom-role"
          type="text"
          placeholder="Enter your target job role"
          value={customRole}
          onChange={(event) => {
            setCustomRole(event.target.value);
            setError("");
          }}
        />
      )}
    </section>

    <section className="setup-section">
      <div className="setup-section-heading">
        <div className="setup-section-number">02</div>

        <div>
          <h2>What's your experience level?</h2>
          <p>We'll adjust the complexity of the questions.</p>
        </div>
      </div>

      <div className="experience-grid">
        {experienceLevels.map((item) => (
          <button
            type="button"
            key={item.name}
            className={`experience-card ${
              experience === item.name ? "selected" : ""
            }`}
            onClick={() => setExperience(item.name)}
          >
            <span className="selection-indicator">
              {experience === item.name ? "✓" : ""}
            </span>

            <strong>{item.name}</strong>
            <span>{item.description}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="setup-section">
      <div className="setup-section-heading">
        <div className="setup-section-number">03</div>

        <div>
          <h2>Choose your interview type.</h2>
          <p>Focus on a particular skill or mix things up.</p>
        </div>
      </div>

      <div className="interview-type-grid">
        {interviewTypes.map((item) => (
          <button
            type="button"
            key={item.name}
            className={`interview-type-card ${
              interviewType === item.name ? "selected" : ""
            }`}
            onClick={() => setInterviewType(item.name)}
          >
            <div className="type-card-top">
              <span className="type-icon">{item.icon}</span>

              <span className="type-check">
                {interviewType === item.name ? "✓" : ""}
              </span>
            </div>

            <strong>{item.name}</strong>
            <span className="type-description">
              {item.description}
            </span>
          </button>
        ))}
      </div>
    </section>

    <section className="setup-section">
      <div className="setup-section-heading">
        <div className="setup-section-number">04</div>

        <div>
          <h2>Pick your challenge level.</h2>
          <p>Choose how challenging your interview should be.</p>
        </div>
      </div>

      <div className="difficulty-grid">
        {difficulties.map((item) => (
          <button
            type="button"
            key={item.name}
            className={`difficulty-card ${
              difficulty === item.name ? "selected" : ""
            }`}
            onClick={() => setDifficulty(item.name)}
          >
            <span
              className={`difficulty-dot ${item.name.toLowerCase()}`}
            ></span>

            <strong>{item.name}</strong>
            <span>{item.description}</span>

            {difficulty === item.name && (
              <span className="difficulty-check">✓</span>
            )}
          </button>
        ))}
      </div>
    </section>

    <section className="setup-section">
      <div className="setup-section-heading">
        <div className="setup-section-number">05</div>

        <div>
          <h2>How long do you want to practise?</h2>
          <p>Choose the number of main interview questions.</p>
        </div>
      </div>

      <div className="question-count-grid">
        {[5, 10, 15].map((count) => (
          <button
            type="button"
            key={count}
            className={`question-count-card ${
              questionCount === count ? "selected" : ""
            }`}
            onClick={() => setQuestionCount(count)}
          >
            <strong>{count}</strong>
            <span>Questions</span>
            <small>
              {count === 5
                ? "Quick practice"
                : count === 10
                  ? "Standard session"
                  : "Deep practice"}
            </small>
          </button>
        ))}
      </div>
    </section>

    <section className="setup-summary">
      <div className="summary-icon">✦</div>

      <div className="summary-content">
        <strong>Your interview, your rules.</strong>

        <p>
          {role === "Other"
            ? customRole.trim() || "Your selected role"
            : role}
          {" · "}
          {experience}
          {" · "}
          {interviewType}
          {" · "}
          {difficulty}
        </p>

        <span>
          {questionCount} main questions · Text interview
        </span>
      </div>
    </section>

    {error && <p className="setup-error">{error}</p>}

    <div className="setup-actions">
      <button
        className="setup-continue"
        onClick={handleStartInterview}
      >
        Start My Interview <span>→</span>
      </button>

      <p>
        You can practise at your own pace. Your selections will
        be used to personalise this session.
      </p>
    </div>
  </main>

  <footer className="setup-footer">
    <span>INTERVIEWVERSE</span>
    <span>INVESTIGATE. ADAPT. IMPROVE.</span>
    <span>CODEFEST 2026</span>
  </footer>
</div>


);
}

export default Setup;

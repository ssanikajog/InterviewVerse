import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      number: "01",
      title: "Interview Detective",
      description:
        "Investigate realistic workplace problems, examine clues, and explain your reasoning.",
    },
    {
      number: "02",
      title: "Adaptive AI Interviewer",
      description:
        "Answer questions that respond to your performance, understanding, and previous answers.",
    },
    {
      number: "03",
      title: "SecondChance AI",
      description:
        "Improve your answers, compare attempts, and understand exactly where you can improve.",
    },
  ];

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">I</span>
          <span>InterviewVerse</span>
        </div>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <button
            className="nav-button"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard ↗
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              YOUR PERSONAL INTERVIEW SIMULATOR
            </div>

            <h1>
              Don't just prepare.
              <br />
              <span>Learn to think.</span>
            </h1>

            <p className="hero-description">
              Realistic interview scenarios. Adaptive questions. Meaningful
              feedback. Practise your reasoning, improve your answers, and
              build confidence for your next interview.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => navigate("/setup")}
              >
                Start an Interview <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => navigate("/setup")}
              >
                Explore the experience
              </button>
            </div>

            <div className="hero-note">
              <span>✦</span>
              PRACTISE · INVESTIGATE · IMPROVE
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label">
              <span className="live-indicator"></span>
              INTERVIEW SIMULATION
              <span className="case-number">CASE #001</span>
            </div>

            <div className="case-card">
              <div className="case-top">
                <div>
                  <span className="case-category">
                    TECHNICAL INVESTIGATION
                  </span>

                  <h2>The Slow Website</h2>
                </div>

                <div className="case-symbol">↗</div>
              </div>

              <p className="case-description">
                Your website used to load in 2 seconds. Now it takes 8 seconds.
                The server's CPU usage is normal, but database response times
                have increased.
              </p>

              <div className="metric-grid">
                <div className="metric">
                  <span>PREVIOUS LOAD</span>
                  <strong>2.0s</strong>
                </div>

                <div className="metric">
                  <span>CURRENT LOAD</span>
                  <strong className="metric-alert">8.0s</strong>
                </div>

                <div className="metric">
                  <span>CPU STATUS</span>
                  <strong className="metric-normal">Normal</strong>
                </div>

                <div className="metric">
                  <span>DATABASE</span>
                  <strong className="metric-alert">Slow</strong>
                </div>
              </div>

              <div className="question-box">
                <div className="question-icon">?</div>

                <div>
                  <span>YOUR FIRST CHALLENGE</span>
                  <p>
                    What would you investigate first, and why?
                  </p>
                </div>
              </div>

              <div className="visual-footer">
                <span>01 / INVESTIGATE</span>
                <span>ADAPTIVE SCENARIO</span>
              </div>
            </div>

            <div className="floating-badge">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Think beyond answers.</strong>
                <p>Explain your reasoning.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="principles">
          <div>
            <strong>01</strong>
            <span>Real-world scenarios</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Adaptive questioning</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Actionable feedback</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Measurable improvement</span>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-kicker">A BETTER WAY TO PREPARE</span>

            <h2>
              Three features.
              <br />
              <span>One smarter interview.</span>
            </h2>

            <p>
              InterviewVerse brings investigation, adaptive interviewing,
              and improvement into one connected experience.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>

                <div className="feature-arrow">↗</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section" id="how-it-works">
          <div>
            <span className="section-kicker">THE INTERVIEW CYCLE</span>

            <h2>
              From practice
              <br />
              <span>to progress.</span>
            </h2>
          </div>

          <div className="workflow">
            {[
              "Investigate",
              "Adapt",
              "Evaluate",
              "Retry",
            ].map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < 3 && <div className="workflow-line"></div>}
              </div>
            ))}
          </div>

          <button
            className="primary-button"
            onClick={() => navigate("/setup")}
          >
            Begin your first interview →
          </button>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-icon">I</span>
          <span>InterviewVerse</span>
        </div>

        <p>Investigate. Adapt. Improve.</p>

        <span>CODEFEST 2026 · PROJECT PROTOTYPE</span>
      </footer>
    </div>
  );
}

export default Home;
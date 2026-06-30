import styles from "./Approach.module.css";

const steps = [
  { n: "01", title: "Gap Assessment & Strategy Design", desc: "We audit your current environment to identify vulnerabilities, gaps, and opportunities before defining a clear roadmap." },
  { n: "02", title: "Customized Implementation & Automation", desc: "Tailored deployment of technologies and workflows, reducing manual overhead and accelerating time-to-value." },
  { n: "03", title: "Ongoing Optimization & Compliance", desc: "Continuous monitoring, tuning, and compliance readiness to maintain peak performance and regulatory alignment." },
  { n: "04", title: "User Enablement & Continuous Support", desc: "Training, knowledge transfer, and round-the-clock support to ensure your team and systems operate confidently." },
];

export default function Approach() {
  return (
    <section className={`section ${styles.approach}`} id="approach">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="label">Our Approach</span>
            <div className="divider"></div>
            <h2 className="section-title">
              Risk-Aware.<br />Outcome-Driven.
            </h2>
            <p className="section-subtitle">
              At I AM IT Technologies, we believe in more than delivering services — we build resilient, scalable, and secure ecosystems tailored to your business goals. Our structured, four-phase method ensures long-term value and technology alignment.
            </p>
          </div>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.n} className={styles.step}>
                <span className={styles.num}>{s.n}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

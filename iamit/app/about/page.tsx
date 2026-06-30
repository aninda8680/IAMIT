import type { Metadata } from "next";
import styles from "./about.module.css";
import { Target, Telescope } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Global IT & Cybersecurity Solutions | I AM IT Technologies",
  description:
    "Learn about I AM IT Technologies – a global leader in IT services, cybersecurity, and digital transformation, with operations across India, UAE, Qatar, and Oman.",
};

const values = [
  { title: "Integrity", desc: "Ethical practices and transparent relationships with clients and partners." },
  { title: "Innovation", desc: "Leveraging the latest technologies to address modern business needs." },
  { title: "Excellence", desc: "Commitment to high-quality service delivery and continuous improvement." },
  { title: "Partnership", desc: "Building long-term collaborations for mutual success." },
];

const stats = [
  { value: "10+", label: "Years of Industry Experience" },
  { value: "20+", label: "Skilled Team Members" },
  { value: "200+", label: "Projects Successfully Delivered" },
];

const timeline = [
  { year: "2019", title: "Foundation Year", desc: "Established in Hyderabad, India, marking the start of our journey in delivering reliable IT solutions." },
  { year: "2022", title: "Global Establishment", desc: "Expanded internationally with the opening of our regional headquarters in Dubai, UAE." },
  { year: "2023", title: "Global Expansion & Growth", desc: "Achieved double-digit YoY growth and onboarded 25+ new enterprise, government, and semi-government clients." },
  { year: "2024", title: "Team Growth & Recognition", desc: "Expanded the team with 15+ new hires and recognized by CrowdStrike as a Technology Advocate Partner – META Region." },
  { year: "2025", title: "Aspirations & Strategic Collaborations", desc: "Focused on onboarding strategic enterprise clients and deepening alliances with global cybersecurity technology partners." },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className="label">Who We Are</span>
          <h1 className={styles.heroTitle}>A Global IT Partner<br />You Can Trust</h1>
          <p className={styles.heroSub}>
            I AM IT Technologies is a globally recognized IT solutions and services provider, founded in 2019 and headquartered in Hyderabad, India. With a strong regional presence across the UAE, Qatar, and Oman, we specialize in delivering end-to-end technology solutions that enable enterprises to evolve, secure, and scale.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.mvSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><Target size={40} color="var(--accent)" /></div>
              <h2>Our Mission</h2>
              <p>To empower enterprises with innovative, secure, and future-ready IT solutions that drive growth, resilience, and competitive advantage.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><Telescope size={40} color="var(--accent)" /></div>
              <h2>Our Vision</h2>
              <p>To be a trusted technology partner of choice for global organizations navigating digital transformation and cybersecurity challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="label">Our Values</span>
            <div className="divider"></div>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="label">Achievements Over The Years</span>
            <div className="divider"></div>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={t.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineYear}>{t.year}</div>
                  <strong>{t.title}</strong>
                  <p>{t.desc}</p>
                </div>
                <div className={styles.timelineDot}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

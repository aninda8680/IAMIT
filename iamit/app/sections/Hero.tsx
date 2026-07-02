"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Shield, Activity, Globe, Server, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";
import FloatingLines from "../components/FloatingLines";

const slides = [
  {
    headline: "Experience Next-Gen IT Excellence",
    sub: "We help businesses thrive with scalable, secure, and intelligent IT solutions tailored to modern demands.",
  },
  {
    headline: "Your Trusted IT Transformation Partner",
    sub: "Delivering end-to-end technology services that align with your strategy, accelerate growth, and ensure operational excellence.",
  },
  {
    headline: "Global Expertise. Local Support.",
    sub: "Combining regional presence with international standards to deliver consistent, high-impact IT solutions across your operations.",
  },
];

const stats = [
  { value: "25+", label: "Enterprise Clients" },
  { value: "200+", label: "Projects Delivered" },
  { value: "4", label: "Countries" },
  { value: "24/7", label: "GNOC & SOC" },
];

const chips = ["Cloud", "Cybersecurity", "Managed Services", "AI & Data", "Networking", "24/7 SOC"];

const floatingWaves = ["top", "middle", "bottom"];
const floatingGradient = ["#e945f5", "#ffffff", "#e945f5"];

export default function Hero() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <FloatingLines 
          enabledWaves={floatingWaves}
          lineCount={4}
          lineDistance={6}
          bendRadius={8}
          bendStrength={-2}
          interactive={false}
          parallax={true}
          animationSpeed={1}
          linesGradient={floatingGradient}
        />
      </div>
      <div className={styles.orbA} />
      <div className={styles.orbB} />

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            CrowdStrike Technology Advocate Partner · META Region
          </div>

          <div className={styles.slideBox}>
            {slides.map((s, i) => (
              <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}>
                <h1 className={styles.headline}>{s.headline}</h1>
                <p className={styles.sub}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/#services" className="btn-primary">Explore Services →</Link>
            <Link href="/about" className="btn-outline">Who We Are</Link>
          </div>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          <div className={styles.chips}>
            {chips.map((c) => <span key={c} className={styles.chip}>{c}</span>)}
          </div>
        </div>

        <div className={styles.right}>
          {/* Main Dashboard Card */}
          <div className={styles.dashboardCard}>
            <div className={styles.dashHeader}>
              <div className={styles.dashHeaderLeft}>
                <Activity size={16} className={styles.pulseIcon} />
                <span className={styles.dashTitle}>GLOBAL OPERATIONS CENTER</span>
              </div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metric}>
                <Globe size={20} className={styles.metricIcon} />
                <div className={styles.metricData}>
                  <h4>4</h4>
                  <p>Countries</p>
                </div>
              </div>
              <div className={styles.metric}>
                <Server size={20} className={styles.metricIcon} />
                <div className={styles.metricData}>
                  <h4>200+</h4>
                  <p>Projects</p>
                </div>
              </div>
              <div className={styles.metric}>
                <Shield size={20} className={styles.metricIcon} />
                <div className={styles.metricData}>
                  <h4>25+</h4>
                  <p>Enterprise</p>
                </div>
              </div>
              <div className={styles.metric}>
                <Activity size={20} className={styles.metricIcon} />
                <div className={styles.metricData}>
                  <h4>24/7</h4>
                  <p>SOC & NOC</p>
                </div>
              </div>
            </div>

            <div className={styles.securityFeed}>
              <div className={styles.feedHeader}>Live Security Feed</div>
              <div className={styles.feedItem}>
                <span className={styles.threatDot}></span>
                Threats Blocked Today: <span className={styles.highlight}>1,204</span>
              </div>
              <div className={styles.feedItem}>
                <CheckCircle2 size={14} color="#28c840" />
                ISO 27001 Compliance Verified
              </div>
            </div>
          </div>
          
          <div className={styles.decoRing1}></div>
          <div className={styles.decoRing2}></div>
        </div>
      </div>
    </section>
  );
}

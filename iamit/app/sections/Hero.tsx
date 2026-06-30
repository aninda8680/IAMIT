"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import DotField from "../components/DotField";

const slides = [
  {
    headline: "Next-Gen IT Excellence",
    sub: "Scalable, secure, and intelligent IT solutions engineered for the demands of a modern enterprise.",
  },
  {
    headline: "Your IT Transformation Partner",
    sub: "End-to-end technology services aligned with your strategy — accelerating growth and ensuring operational excellence.",
  },
  {
    headline: "Global Expertise. Local Support.",
    sub: "Regional presence backed by international standards — delivering high-impact IT solutions across India, UAE, Qatar & Oman.",
  },
];

const pillars = [
  {
    name: "Cybersecurity",
    desc: "SOC · GNOC · Threat Intelligence",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
      </svg>
    ),
  },
  {
    name: "Cloud & Infrastructure",
    desc: "Migration · Managed Cloud · Hybrid",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.25L5.71 21c3-2.57 8.06-5.35 16.29-3L17 8z" />
        <path d="M10.73 16.27l1.52-1.52A5.98 5.98 0 0110 10c0-3.31 2.69-6 6-6 1.93 0 3.64.91 4.75 2.33l-1.52 1.51A3.99 3.99 0 0016 6c-2.21 0-4 1.79-4 4 0 1.13.47 2.15 1.22 2.88l-1.53 1.53z" />
      </svg>
    ),
  },
  {
    name: "Digital Transformation",
    desc: "ERP · Automation · AI Integration",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "Network & Connectivity",
    desc: "WAN · SD-WAN · Enterprise Networking",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
  },
];

const stats = [
  { value: "25+", label: "Enterprise Clients" },
  { value: "200+", label: "Projects Delivered" },
  { value: "4", label: "Countries" },
  { value: "24/7", label: "GNOC & SOC" },
];

const creds = [
  { icon: "🛡️", text: <><span>CrowdStrike</span> Technology Advocate</> },
  { icon: "🌍", text: <><span>META</span> Region Coverage</> },
  { icon: "⚡", text: <>ISO-aligned <span>Operations</span></> },
  { icon: "🔒", text: <><span>24/7</span> Managed Security</> },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated dot background */}
      <div className={styles.bg}>
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#632a63"
          gradientTo="#7b347b"
          glowColor="rgba(99, 42, 99, 0.15)"
        />
      </div>

      {/* Two-column split */}
      <div className={styles.content}>

        {/* ── LEFT: Headline + CTAs ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulse} />
            CrowdStrike Technology Advocate Partner · META Region
          </div>

          <p className={styles.eyebrow}>I AM IT Technologies</p>

          <div className={styles.slideBox}>
            {slides.map((s, i) => (
              <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}>
                <h1 className={styles.headline}>{s.headline}</h1>
                <p className={styles.sub}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctas}>
            <Link href="/#services" className="btn-primary">Explore Services</Link>
            <Link href="/about" className="btn-outline">Who We Are</Link>
          </div>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Ops Panel ── */}
        <div className={styles.opsPanel}>
          <div className={styles.opsPanelHeader}>
            <span className={styles.opsTitle}>Operations Overview</span>
            <span className={styles.opsLive}>
              <span className={styles.opsLiveDot} />
              LIVE
            </span>
          </div>

          {/* Service pillars */}
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.name} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <div className={styles.pillarText}>
                  <span className={styles.pillarName}>{p.name}</span>
                  <span className={styles.pillarDesc}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stat grid */}
          <div className={styles.panelStats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.panelStat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Credibility bar ── */}
      <div className={styles.credBar}>
        {creds.map((c, i) => (
          <div key={i} className={styles.credItem}>
            <span className={styles.credIcon}>{c.icon}</span>
            <span className={styles.credText}>{c.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

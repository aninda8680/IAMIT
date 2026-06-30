"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import DotField from "../components/DotField";

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
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
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

      <div className={`container ${styles.content}`}>
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
          <Link href="/#services" className="btn-primary">Explore Services</Link>
          <Link href="/about" className="btn-outline">Who We Are</Link>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

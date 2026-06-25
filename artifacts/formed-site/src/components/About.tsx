import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const stats = [
  {
    prefix: "+",
    target: 6,
    suffix: "",
    description: "Anos de experiência em governança, desenvolvimento humano e impacto social",
  },
  {
    prefix: "",
    target: 120,
    suffix: "+",
    description: "Instituições, líderes e organizações apoiados em Angola e na região",
  },
  {
    prefix: "",
    target: 3,
    suffix: "",
    description: "Metodologias próprias desenvolvidas para transformação institucional sustentável",
  },
];

function CountUp({ prefix = "", target, suffix, duration = 1.8 }: { prefix?: string; target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  );
}

export function About() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#F0F0F0", padding: "96px 80px 80px" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* ── Left: label + headline ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5"
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.15em",
              color: "#111111",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            [01] SOBRE NÓS
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 3.8vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#111111",
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              margin: 0,
            }}
          >
            Do diagnóstico ao impacto, desenvolvemos pessoas, instituições e sociedades com governança consciente.
          </h2>
        </motion.div>

        {/* ── Right: stats ───────────────────────────────────── */}
        <div className="lg:w-2/5 flex flex-col">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.target}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: EASE }}
              style={{
                paddingTop: i === 0 ? 0 : 28,
                paddingBottom: i === stats.length - 1 ? 0 : 28,
                borderTop: i === 0 ? "none" : "1px solid #DDDDDD",
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: 1,
                  marginBottom: 10,
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                }}
              >
                <CountUp prefix={stat.prefix} target={stat.target} suffix={stat.suffix} duration={1.6 + i * 0.2} />
              </div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#555555",
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: 280,
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom-left year tag ────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 80,
          fontSize: 11,
          letterSpacing: "0.1em",
          color: "#555555",
          fontWeight: 400,
        }}
      >
        [2019 – 2026]
      </div>

      {/* ── Bottom-centre decorative crosses ───────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.8,
          userSelect: "none",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#E8401C", lineHeight: 1 }}>+</span>
        </div>
      </div>
    </section>
  );
}

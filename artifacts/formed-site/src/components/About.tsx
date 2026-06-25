import React from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const stats = [
  {
    number: "15+",
    description: "Years of experience delivering complex property developments",
  },
  {
    number: "132",
    description: "Residential and mixed-use projects successfully completed",
  },
  {
    number: "37K+",
    description: "Homes built to support growing communities worldwide",
  },
];

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
            [01] ABOUT US
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
            From concept to completion, We deliver small and large scale
            property developments with a focus on high quality, efficiency,
            and impact.
          </h2>
        </motion.div>

        {/* ── Right: stats ───────────────────────────────────── */}
        <div className="lg:w-2/5 flex flex-col">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
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
                {stat.number}
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
        [2018 – 2026]
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
        {/* Row 1: 1 cross */}
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
        </div>
        {/* Row 2: 2 crosses */}
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
        </div>
        {/* Row 3: 3 crosses */}
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 18, color: "#F5A623", lineHeight: 1 }}>+</span>
        </div>
      </div>
    </section>
  );
}

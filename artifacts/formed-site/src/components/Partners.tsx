import React, { useState } from "react";
import { motion } from "framer-motion";

const SECTION_BG = "#EFEFEF";

const PILLARS = [
  { icon: "🏛", name: "Desenvolvimento\nHumano" },
  { icon: "📚", name: "Educação\n& Cultura" },
  { icon: "🏢", name: "Desenvolvimento\nOrganizacional" },
  { icon: "🌍", name: "Impacto Social\n& Sustentabilidade" },
  { icon: "🤝", name: "Governança\n& Cooperação" },
];

function PillarCell({ icon, name, delay }: { icon: string; name: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        padding: "40px 20px",
        borderRight: "1px solid #DDDDDD",
        cursor: "default",
        transition: "background 0.25s ease, box-shadow 0.25s ease",
        background: hovered ? "rgba(245,166,35,0.10)" : "transparent",
        boxShadow: hovered ? "inset 0 0 0 1.5px rgba(245,166,35,0.45)" : "none",
      }}
    >
      <span
        style={{
          fontSize: 32,
          lineHeight: 1,
          filter: hovered ? "drop-shadow(0 0 8px rgba(245,166,35,0.7))" : "none",
          transition: "filter 0.25s ease",
        }}
        aria-hidden
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: hovered ? "#C47F00" : "#111111",
          fontFamily: "'DM Sans', 'Inter', sans-serif",
          textAlign: "center",
          whiteSpace: "pre-line",
          lineHeight: 1.4,
          transition: "color 0.25s ease",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function Partners() {
  return (
    <section style={{ background: SECTION_BG, paddingTop: 96, paddingBottom: 96 }}>

      {/* ── Header ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          paddingLeft: 80,
          paddingRight: 80,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#111111",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          [03] OS NOSSOS PILARES
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 3.8vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#111111",
            letterSpacing: "-0.01em",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          Atuamos sobre 5 pilares estratégicos para gerar impacto institucional real e duradouro.
        </h2>
      </motion.div>

      {/* ── Pillars row ─────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          paddingLeft: 80,
          paddingRight: 80,
          borderTop: "1px solid #DDDDDD",
          borderLeft: "1px solid #DDDDDD",
        }}
      >
        {PILLARS.map((p, i) => (
          <PillarCell
            key={p.name}
            icon={p.icon}
            name={p.name}
            delay={0.08 + i * 0.09}
          />
        ))}
      </div>
    </section>
  );
}

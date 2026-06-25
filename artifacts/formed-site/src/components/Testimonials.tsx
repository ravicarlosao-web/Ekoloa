import React, { useRef } from "react";
import { motion } from "framer-motion";

/* ── Partner logos ───────────────────────────────────────────── */
function FourpointsLogo({ color = "#ffffff" }: { color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="5" cy="5" r="2.5" fill={color} />
        <circle cx="13" cy="5" r="2.5" fill={color} />
        <circle cx="5" cy="13" r="2.5" fill={color} />
        <circle cx="13" cy="13" r="2.5" fill={color} />
      </svg>
      <span style={{ fontSize: 16, fontWeight: 500, color, fontFamily: "'DM Sans','Inter',sans-serif" }}>
        Fourpoints
      </span>
    </div>
  );
}

function CodecraftLogo({ color = "#111111" }: { color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="4" width="6" height="6" fill={color} />
        <rect x="9" y="8" width="6" height="6" fill={color} />
      </svg>
      <span style={{ fontSize: 16, fontWeight: 500, color, fontFamily: "'DM Sans','Inter',sans-serif" }}>
        Codecraft_
      </span>
    </div>
  );
}

/* ── Avatar placeholder ──────────────────────────────────────── */
function Avatar({ initials }: { initials: string }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: "50%", background: "#DDDDDD",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, fontSize: 11, fontWeight: 600, color: "#555555",
      letterSpacing: "0.05em",
    }}>
      {initials}
    </div>
  );
}

/* ── Card types ──────────────────────────────────────────────── */
function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div style={{ width: 360, minWidth: 360, height: 320, background: "#ffffff", padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: 0 }}>
      <div>
        <div style={{ fontSize: 48, lineHeight: 1, color: "#F5A623", marginBottom: 12, fontFamily: "Georgia,serif" }}>"</div>
        <p style={{ fontSize: 17, fontWeight: 400, color: "#111111", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{quote}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={initials} />
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#111111", textTransform: "uppercase" }}>{name}</div>
          <div style={{ fontSize: 11, letterSpacing: "0.10em", color: "#888888", textTransform: "uppercase", marginTop: 2 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, description, logo, bg, textColor, descColor }: {
  stat: string; description: string; logo: React.ReactNode;
  bg: string; textColor: string; descColor: string;
}) {
  return (
    <div style={{ width: 360, minWidth: 360, height: 320, background: bg, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: 0 }}>
      <div>
        <div style={{ fontSize: 56, fontWeight: 400, color: textColor, lineHeight: 1 }}>{stat}</div>
        <div style={{ fontSize: 15, color: descColor, lineHeight: 1.5, marginTop: 12 }}>{description}</div>
      </div>
      {logo}
    </div>
  );
}

/* ── Card data ───────────────────────────────────────────────── */
const ROW1 = [
  <TestimonialCard key="t1" quote="Formed delivered our development on time and to an exceptional standard. Their attention to detail made the entire process seamless." name="James Porter" role="Director, Northfield" />,
  <StatCard key="s1" stat="99%" description="Defect-free handover rate achieved for Stonebridge Estates" logo={<FourpointsLogo color="#111111" />} bg="#F5A623" textColor="#111111" descColor="#333333" />,
  <TestimonialCard key="t2" quote="From planning through to completion, Formed were a reliable and proactive partner on a complex multi-phase project." name="Sarah Mitchell" role="Head of Property, Urbancore" />,
  <StatCard key="s2" stat="99%" description="Defect-free handover rate achieved for Stonebridge Estates" logo={<FourpointsLogo color="#111111" />} bg="#F5A623" textColor="#111111" descColor="#333333" />,
  <TestimonialCard key="t3" quote="Their ability to manage scale without compromising quality sets Formed apart from other contractors we've worked with." name="Daniel Hughes" role="Commercial Manager, Crestview" />,
];

const ROW2 = [
  <StatCard key="s3" stat="£120m" description="Construction value delivered for UrbanCore Developments" logo={<FourpointsLogo color="#ffffff" />} bg="#111111" textColor="#ffffff" descColor="rgba(255,255,255,0.65)" />,
  <TestimonialCard key="t4" quote="Formed delivered our development on time and to an exceptional standard. Their attention to detail made the entire process seamless." name="James Porter" role="Director, Northfield" />,
  <StatCard key="s4" stat="15%" description="Cost savings achieved for Westmark Capital" logo={<CodecraftLogo color="#111111" />} bg="#F5A623" textColor="#111111" descColor="#333333" />,
  <TestimonialCard key="t5" quote="Formed brought structure and clarity to a demanding development schedule while consistently exceeding expectations." name="Michael Grant" role="Operations Director, Summit" />,
  <StatCard key="s5" stat="100%" description="Planning approval success rate for Harbourstone Developments" logo={<FourpointsLogo color="#ffffff" />} bg="#111111" textColor="#ffffff" descColor="rgba(255,255,255,0.65)" />,
];

/* ── Marquee row ─────────────────────────────────────────────── */
function MarqueeRow({ cards, direction }: { cards: React.ReactNode[]; direction: "left" | "right" }) {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={() => { if (rowRef.current) rowRef.current.style.animationPlayState = "paused"; }}
      onMouseLeave={() => { if (rowRef.current) rowRef.current.style.animationPlayState = "running"; }}
    >
      <div
        ref={rowRef}
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ display: "flex", gap: 16, width: "max-content" }}
      >
        {/* Duplicate cards for seamless loop */}
        {cards}{cards}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <section style={{ background: "#EFEFEF", paddingTop: 80, paddingBottom: 80 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", paddingLeft: 80, paddingRight: 80, marginBottom: 60 }}
      >
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.15em", color: "#F5A623", textTransform: "uppercase", marginBottom: 20 }}>
          [05] TESTIMONIALS
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4.2vw, 52px)", fontWeight: 300, lineHeight: 1.2,
          color: "#111111", letterSpacing: "-0.01em",
          fontFamily: "'DM Sans','Inter',sans-serif",
          maxWidth: 900, margin: "0 auto",
        }}>
          We support our clients at every stage, delivering projects that meet goals, timelines, and expectations.
        </h2>
      </motion.div>

      {/* Marquee rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <MarqueeRow cards={ROW1} direction="left" />
        <MarqueeRow cards={ROW2} direction="right" />
      </div>
    </section>
  );
}

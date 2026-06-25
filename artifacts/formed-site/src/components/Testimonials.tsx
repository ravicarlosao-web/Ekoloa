import React, { useRef } from "react";
import { motion } from "framer-motion";

/* ── Ekoloa logo ─────────────────────────────────────────────── */
function EkoloaLogo({ color = "#111111" }: { color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 18, lineHeight: 1, color }}>⬡</span>
      <span style={{ fontSize: 15, fontWeight: 600, color, letterSpacing: "0.08em", fontFamily: "'DM Sans','Inter',sans-serif" }}>
        Ekoloa
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
        <div style={{ fontSize: 48, lineHeight: 1, color: "#E8401C", marginBottom: 12, fontFamily: "Georgia,serif" }}>"</div>
        <p style={{ fontSize: 15, fontWeight: 400, color: "#111111", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{quote}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={initials} />
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#111111", textTransform: "uppercase" }}>{name}</div>
          <div style={{ fontSize: 10, letterSpacing: "0.10em", color: "#888888", textTransform: "uppercase", marginTop: 2 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, description, bg, textColor, descColor }: {
  stat: string; description: string;
  bg: string; textColor: string; descColor: string;
}) {
  const logoColor = bg === "#111111" ? "#ffffff" : "#111111";
  return (
    <div style={{ width: 360, minWidth: 360, height: 320, background: bg, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: 0 }}>
      <div>
        <div style={{ fontSize: 56, fontWeight: 400, color: textColor, lineHeight: 1 }}>{stat}</div>
        <div style={{ fontSize: 14, color: descColor, lineHeight: 1.5, marginTop: 12 }}>{description}</div>
      </div>
      <EkoloaLogo color={logoColor} />
    </div>
  );
}

/* ── Card data ───────────────────────────────────────────────── */
const ROW1 = [
  <TestimonialCard key="t1"
    quote="A Ekoloa trouxe clareza estratégica à nossa organização. A abordagem estruturada e ética transformou a forma como tomamos decisões institucionais."
    name="Carlos Manuel" role="Director Executivo, Instituto Nacional" />,

  <TestimonialCard key="t2"
    quote="O diagnóstico institucional realizado pela Ekoloa foi determinante para identificarmos fragilidades e avançarmos com um plano de governança sólido."
    name="Ana Ferreira" role="Gestora de Programas, Organismo Público" />,

  <StatCard key="s1"
    stat="95%" description="Taxa de satisfação institucional alcançada nos programas de governança implementados"
    bg="#E8401C" textColor="#111111" descColor="#333333" />,

  <TestimonialCard key="t3"
    quote="Do planeamento à implementação, a Ekoloa foi um parceiro confiável e proativo num programa de impacto social de múltiplas fases."
    name="Joaquim Santos" role="Coordenador de Projecto, Ministério" />,

  <StatCard key="s2"
    stat="+120" description="Instituições e líderes apoiados em programas de desenvolvimento organizacional e governança"
    bg="#E8401C" textColor="#111111" descColor="#333333" />,
];

const ROW2 = [
  <StatCard key="s3"
    stat="6+" description="Anos de atuação em governança consciente e transformação institucional em Angola"
    bg="#111111" textColor="#ffffff" descColor="rgba(255,255,255,0.65)" />,

  <TestimonialCard key="t4"
    quote="A Ekoloa trouxe estrutura e rigor a um programa exigente, superando consistentemente as nossas expectativas em termos de impacto."
    name="Marta Lopes" role="Directora de Operações, Organização Social" />,

  <StatCard key="s4"
    stat="3" description="Metodologias próprias desenvolvidas para transformação institucional e impacto social sustentável"
    bg="#E8401C" textColor="#111111" descColor="#333333" />,

  <TestimonialCard key="t5"
    quote="A capacidade da Ekoloa de articular desenvolvimento humano com governança institucional distingue-a de qualquer outra organização com que colaborámos."
    name="Pedro Nkosi" role="Líder Institucional, Sector Público" />,

  <StatCard key="s5"
    stat="100%" description="Taxa de aprovação nos processos de certificação SIGIS acompanhados pela Ekoloa"
    bg="#111111" textColor="#ffffff" descColor="rgba(255,255,255,0.65)" />,
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
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.15em", color: "#E8401C", textTransform: "uppercase", marginBottom: 20 }}>
          [05] TESTEMUNHOS
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4.2vw, 52px)", fontWeight: 300, lineHeight: 1.2,
          color: "#111111", letterSpacing: "-0.01em",
          fontFamily: "'DM Sans','Inter',sans-serif",
          maxWidth: 900, margin: "0 auto",
        }}>
          Apoiamos as nossas instituições parceiras em cada etapa, gerando impacto real, mensurável e sustentável.
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

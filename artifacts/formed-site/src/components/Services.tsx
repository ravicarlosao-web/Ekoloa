import React from "react";
import { motion } from "framer-motion";

const DIVIDER = "1px solid rgba(255,255,255,0.12)";
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASE },
});

const fadeX = (x: number, delay = 0) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: EASE },
});

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.12em",
        color: "#F5A623",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      [{label}]
    </span>
  );
}

function ServiceLabel({ index }: { index: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.12em",
        color: "#F5A623",
        marginBottom: 16,
        textTransform: "uppercase",
      }}
    >
      [{index}]
    </div>
  );
}

export function Services() {
  return (
    <section style={{ background: "#0A0A0A", paddingTop: 100, paddingBottom: 100 }}>

      {/* ── Header ───────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0)}
        style={{ textAlign: "center", marginBottom: 80, paddingLeft: 80, paddingRight: 80 }}
      >
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.15em", color: "#F5A623", textTransform: "uppercase", marginBottom: 20 }}>
          [04] AS NOSSAS ÁREAS
        </div>
        <h2 style={{ fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 300, lineHeight: 1.2, color: "#ffffff", letterSpacing: "-0.01em", fontFamily: "'DM Sans','Inter',sans-serif", margin: 0 }}>
          As áreas em que atuamos
        </h2>
      </motion.div>

      {/* ── Serviço 001 — texto esquerda, imagem direita ─── */}
      <div style={{ display: "flex", alignItems: "center", padding: "72px 80px", gap: 0, position: "relative", borderTop: DIVIDER }}>
        <motion.div {...fadeX(-28, 0)} style={{ flex: 1, paddingRight: 80 }}>
          <ServiceLabel index="001" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#ffffff", lineHeight: 1.2, marginBottom: 20 }}>
            Desenvolvimento Humano & Liderança
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.70)", lineHeight: 1.6, marginBottom: 28, maxWidth: 420 }}>
            Fortalecemos competências individuais e liderança no sector público, promovendo práticas éticas, responsáveis e orientadas ao serviço das comunidades.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["CAPACITAÇÃO INDIVIDUAL", "LIDERANÇA PÚBLICA", "IDENTIDADE INTRÍNSECA", "CULTURA INSTITUCIONAL"].map(t => <Tag key={t} label={t} />)}
          </div>
        </motion.div>
        <motion.div {...fadeX(28, 0.1)} style={{ flexShrink: 0, width: 280, height: 340 }}>
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
            alt="Desenvolvimento Humano & Liderança"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
        </motion.div>
      </div>

      {/* ── Serviço 002 — card branco, lado direito ─────── */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}>
        <div style={{ flex: 1 }} />
        <motion.div {...fadeX(32, 0)} style={{ width: 480, background: "#ffffff", padding: "40px 40px 36px" }}>
          <ServiceLabel index="002" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 20 }}>
            Educação, Cultura & Conhecimento
          </h3>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 24 }}>
            Promovemos a educação e a cultura como vectores estratégicos de desenvolvimento social, apoiando programas educativos e culturais de interesse público.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {["PROGRAMAS EDUCATIVOS", "VALORIZAÇÃO CULTURAL", "CAPACITAÇÃO CIDADÃ", "CONHECIMENTO ESTRUTURADO"].map(t => <Tag key={t} label={t} />)}
          </div>
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80"
            alt="Educação, Cultura & Conhecimento"
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </motion.div>
      </div>

      {/* ── Serviço 003 — card branco, lado esquerdo ────── */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}>
        <motion.div {...fadeX(-32, 0)} style={{ width: 480, background: "#ffffff", padding: "40px 40px 36px" }}>
          <ServiceLabel index="003" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 20 }}>
            Desenvolvimento Organizacional
          </h3>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 24 }}>
            Apoiamos órgãos governamentais e instituições no fortalecimento das suas capacidades organizacionais, liderança e eficiência através do Programa MESS.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {["PROGRAMA MESS", "GESTÃO ESTRATÉGICA", "COORDENAÇÃO INSTITUCIONAL", "DESEMPENHO ORGANIZACIONAL"].map(t => <Tag key={t} label={t} />)}
          </div>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
            alt="Desenvolvimento Organizacional"
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </motion.div>
        <div style={{ flex: 1 }} />
      </div>

      {/* ── Serviço 004 — texto esquerda, imagem direita ─── */}
      <div style={{ display: "flex", alignItems: "center", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}>
        <motion.div {...fadeX(-28, 0)} style={{ flex: 1, paddingRight: 80 }}>
          <ServiceLabel index="004" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#ffffff", lineHeight: 1.2, marginBottom: 20 }}>
            Impacto Social & Sustentabilidade
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.70)", lineHeight: 1.6, marginBottom: 28, maxWidth: 420 }}>
            Concebemos e implementamos projectos sociais alinhados com políticas públicas nacionais e com os Objectivos de Desenvolvimento Sustentável (ODS).
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["PROJECTOS SOCIAIS", "ODS", "POLÍTICAS PÚBLICAS", "SUSTENTABILIDADE"].map(t => <Tag key={t} label={t} />)}
          </div>
        </motion.div>
        <motion.div {...fadeX(28, 0.1)} style={{ flexShrink: 0, width: 350, height: 320 }}>
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
            alt="Impacto Social & Sustentabilidade"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
        </motion.div>
      </div>

      {/* ── Serviço 005 — card branco, lado esquerdo ────── */}
      <div style={{ display: "flex", alignItems: "stretch", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}>
        <motion.div {...fadeX(-32, 0)} style={{ width: 480, background: "#ffffff", padding: "40px 40px 36px" }}>
          <ServiceLabel index="005" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 20 }}>
            Governança & Cooperação Institucional
          </h3>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 24 }}>
            Reforçamos a governação pública, a transparência e a cooperação interinstitucional, promovendo responsabilidade e resultados consistentes para a sociedade.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {["SIGIS", "MONITORIZAÇÃO", "COOPERAÇÃO INTERINSTITUCIONAL", "TRANSPARÊNCIA"].map(t => <Tag key={t} label={t} />)}
          </div>
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80"
            alt="Governança & Cooperação Institucional"
            style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
          />
        </motion.div>
        <div style={{ flex: 1 }} />
      </div>

    </section>
  );
}

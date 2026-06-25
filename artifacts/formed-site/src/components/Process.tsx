import React from "react";
import { motion } from "framer-motion";
import processBgUrl from "@/assets/images/process-card.jpg";

export function Process() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "#F0F0F0", paddingTop: 96, paddingBottom: 80 }}
    >
      {/* ── Section header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 48, paddingLeft: 80, paddingRight: 80 }}
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
          [02] A NOSSA METODOLOGIA
        </div>
        <h2
          style={{
            fontSize: "clamp(36px, 3.8vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#111111",
            letterSpacing: "-0.01em",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            margin: 0,
          }}
        >
          Como trabalhamos consigo
        </h2>
      </motion.div>

      {/* ── Decorative vertical connectors + cards ─────────── */}
      <div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>

        {/* ══ Card 1 — White ══════════════════════════════════ */}
        <div style={{ flex: 1, marginTop: 80, display: "flex", flexDirection: "column" }}>
          {/* Vertical line connector */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
            <div style={{ width: 1, height: 40, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            style={{
              height: 520,
              background: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 44px 52px",
            }}
          >
            {/* SVG architectural grid pattern */}
            <svg
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.07,
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#arch-grid)" />
            </svg>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: "#111111",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                STEP [01]
              </div>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  color: "#111111",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Diagnóstico Institucional
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#555555",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Começamos por compreender a realidade da sua organização, identificar desafios estruturais e definir prioridades estratégicas com clareza e rigor técnico.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══ Card 2 — Dark / image ═══════════════════════════ */}
        <div style={{ flex: 1, marginTop: 0, display: "flex", flexDirection: "column" }}>
          {/* Vertical line connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 1, height: 40, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              height: 620,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 44px 52px",
              backgroundImage: `url(${processBgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.60)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                STEP [02]
              </div>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Cooperação & Implementação
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                As nossas equipas acompanham cada fase do programa com transparência, responsabilidade e foco em resultados institucionais mensuráveis.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══ Card 3 — Yellow ═════════════════════════════════ */}
        <div style={{ flex: 1, marginTop: 40, display: "flex", flexDirection: "column" }}>
          {/* Vertical line connector */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 1, height: 40, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              height: 560,
              background: "#F5A623",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 44px 52px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#111111",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              STEP [03]
            </div>
            <h3
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: "#111111",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Impacto & Certificação
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Entregamos resultados estruturados e permanecemos parceiros de confiança, apoiando a sua organização na certificação SIGIS e no crescimento sustentável.
            </p>
            <div>
              <button
                style={{
                  background: "#FFFFFF",
                  color: "#111111",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  padding: "14px 28px",
                  border: "none",
                  borderRadius: 0,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  outline: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                INICIAR DIÁLOGO
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

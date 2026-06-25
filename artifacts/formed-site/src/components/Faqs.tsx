import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Em que áreas a Ekoloa actua?",
    a: "A Ekoloa actua em 5 pilares estratégicos: Desenvolvimento Humano & Liderança, Educação, Cultura & Conhecimento, Desenvolvimento Organizacional, Impacto Social & Sustentabilidade, e Governança & Cooperação Institucional.",
  },
  {
    q: "A Ekoloa trabalha directamente com governos e instituições públicas?",
    a: "Sim. A Ekoloa é parceira estratégica de governos, ministérios e organismos públicos, apoiando a implementação de programas estruturados de governança, cooperação interinstitucional e desenvolvimento humano.",
  },
  {
    q: "O que é o SIGIS e como funciona a certificação?",
    a: "O SIGIS é o Sistema Integrado de Governança e Impacto Social da Ekoloa. A certificação SIGIS reconhece instituições que demonstram maturidade, compromisso e impacto real nos seus processos de governança e desenvolvimento.",
  },
  {
    q: "Onde a Ekoloa opera?",
    a: "A Ekoloa está sediada em Luanda, Angola, e actua a nível nacional e regional, com visão de expansão para o contexto internacional alinhada aos Objectivos de Desenvolvimento Sustentável.",
  },
  {
    q: "Como a Ekoloa garante o impacto social dos seus programas?",
    a: "Através de metodologias próprias, sistemas de monitorização estruturados e indicadores mensuráveis, a Ekoloa assegura que cada iniciativa gera resultados reais, transparentes e sustentáveis.",
  },
  {
    q: "Como podemos iniciar uma parceria com a Ekoloa?",
    a: "Pode iniciar o diálogo institucional através do nosso formulário de contacto. A Ekoloa analisa e responde a todas as solicitações num prazo máximo de 48 horas úteis.",
  },
];

function AccordionItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div style={{ borderTop: "1px solid #DDDDDD" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "28px 0",
          background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 400, color: "#111111", lineHeight: 1.4, paddingRight: 24 }}>
          {q}
        </span>
        <span style={{ fontSize: 22, fontWeight: 300, color: "#F5A623", flexShrink: 0, lineHeight: 1, transition: "transform 0.25s ease", display: "inline-block", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, paddingBottom: 24, margin: 0 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "#EFEFEF", position: "relative", overflow: "hidden" }}>

      {/* Decorative crosses */}
      <div aria-hidden style={{ position: "absolute", top: 40, right: 48, fontSize: 14, color: "#F5A623", opacity: 0.6, userSelect: "none" }}>+</div>
      <div aria-hidden style={{ position: "absolute", top: 120, right: 80, fontSize: 14, color: "#F5A623", opacity: 0.6, userSelect: "none" }}>+</div>
      <div aria-hidden style={{ position: "absolute", bottom: 60, right: 56, fontSize: 14, color: "#F5A623", opacity: 0.6, userSelect: "none" }}>+</div>

      <div style={{ display: "flex", position: "relative" }}>

        {/* ── Left column ───────────────────────────────────── */}
        <div style={{ width: "35%", padding: "100px 60px 100px 80px", flexShrink: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.15em", color: "#111111", textTransform: "uppercase", marginBottom: 16 }}>
              [06] FAQS
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 300, color: "#111111", lineHeight: 1.2, margin: 0, fontFamily: "'DM Sans','Inter',sans-serif" }}>
              Respondendo às suas questões
            </h2>

            <div style={{ marginTop: 40 }}>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", color: "#111111", textTransform: "uppercase" }}>
                AINDA TEM DÚVIDAS?
              </div>
              <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.6, marginTop: 8, marginBottom: 24 }}>
                Entre em contacto através do nosso formulário e ajudamo-lo a encontrar as respostas certas
              </p>

              {/* Button with yellow left bar */}
              <div style={{ display: "inline-flex", alignItems: "stretch" }}>
                <div style={{ width: 4, background: "#F5A623", flexShrink: 0 }} />
                <button style={{
                  background: "#ffffff", border: "none", padding: "14px 28px",
                  fontSize: 11, letterSpacing: "0.12em", fontWeight: 600, color: "#111111",
                  cursor: "pointer", fontFamily: "'DM Sans','Inter',sans-serif",
                  textTransform: "uppercase", borderRadius: 0,
                }}>
                  ENTRAR EM CONTACTO
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical divider */}
        <div style={{ width: 1, background: "#DDDDDD", flexShrink: 0 }} />

        {/* ── Right column ──────────────────────────────────── */}
        <div style={{ flex: 1, padding: "100px 80px 100px 60px", position: "relative" }}>

          {/* Extra decorative vertical lines */}
          <div aria-hidden style={{ position: "absolute", right: "33%", top: 0, bottom: 0, width: 1, background: "#DDDDDD", opacity: 0.4 }} />
          <div aria-hidden style={{ position: "absolute", right: "8%", top: 0, bottom: 0, width: 1, background: "#DDDDDD", opacity: 0.4 }} />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
            {/* Bottom border */}
            <div style={{ borderTop: "1px solid #DDDDDD" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

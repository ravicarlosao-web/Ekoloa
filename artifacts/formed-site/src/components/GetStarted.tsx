import { motion } from "framer-motion";

export function GetStarted() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "60vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580746738099-b3ec3a906f91?w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.50)",
          zIndex: 0,
        }}
      />

      {/* Horizontal decorative line — lower third */}
      <div
        style={{
          position: "absolute",
          bottom: "33%",
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,255,255,0.15)",
          zIndex: 1,
        }}
      />

      {/* Vertical decorative line — right side */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "28%",
          width: 1,
          background: "rgba(255,255,255,0.10)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        {/* Label */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#E8401C",
            textTransform: "uppercase",
            marginBottom: 16,
            fontFamily: "'DM Sans','Inter',sans-serif",
          }}
        >
          [08] INICIAR DIÁLOGO
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(36px, 4.5vw, 56px)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 700,
            margin: 0,
            fontFamily: "'DM Sans','Inter',sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Explore como a Ekoloa pode transformar a sua instituição e gerar impacto social real.
        </h2>

        {/* CTA Button */}
        <div style={{ display: "flex", marginTop: 36 }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "stretch",
              textDecoration: "none",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            {/* Yellow left bar */}
            <div
              style={{
                width: 4,
                background: "#E8401C",
                flexShrink: 0,
              }}
            />
            {/* Button label */}
            <div
              style={{
                background: "#ffffff",
                color: "#111111",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 32px",
                fontFamily: "'DM Sans','Inter',sans-serif",
                display: "flex",
                alignItems: "center",
              }}
            >
              INICIAR DIÁLOGO INSTITUCIONAL
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

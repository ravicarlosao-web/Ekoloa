import React from "react";

const projects = [
  {
    label: "PROJECTO [001]",
    title: "Consciência Individual à Transformação Sistémica",
    period: "Jan 2026 – Em curso",
    scope: "Desenvolvimento Intrínseco & Governança",
    area: "Impacto Social & Desenvolvimento Humano",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
    zIndex: 1,
  },
  {
    label: "PROJECTO [002]",
    title: "Desenvolvimento Intrínseco como Base da Transformação Social",
    period: "Fev 2026 – Em curso",
    scope: "Metodologia 2I's & Impacto Mensurável",
    area: "Governança Consciente & Organizações",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    zIndex: 2,
  },
  {
    label: "PROJECTO [003]",
    title: "Método 2I's como Motor de Impacto Sustentável",
    period: "Fev 2026 – Em curso",
    scope: "Metodologias Próprias Ekoloa",
    area: "Governança & Cooperação Institucional",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=1200&q=80",
    zIndex: 3,
  },
];

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        zIndex: project.zIndex,
      }}
    >
      {/* Blurred full-screen background — separate element */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          transform: "scale(1.05)",
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.70)",
        }}
      />

      {/* Two-zone grid layout */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "55% 45%",
        }}
      >
        {/* Left zone — all text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "80px",
            paddingTop: "80px",
            paddingRight: "48px",
            paddingBottom: "80px",
            color: "white",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "20px",
            }}
          >
            {project.label}
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "white",
              marginBottom: "32px",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h2>

          {/* Separator */}
          <div
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              margin: "0 0 24px 0",
            }}
          />

          {/* Data fields */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                PERÍODO
              </div>
              <div style={{ fontSize: "16px", color: "white", fontWeight: 400 }}>
                {project.period}
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                ÂMBITO
              </div>
              <div style={{ fontSize: "16px", color: "white", fontWeight: 400 }}>
                {project.scope}
              </div>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                ÁREA
              </div>
              <div style={{ fontSize: "16px", color: "white", fontWeight: 400 }}>
                {project.area}
              </div>
            </div>
          </div>

          {/* Link */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F5A623",
              textDecoration: "none",
              opacity: 1,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            VER PROJECTO COMPLETO ——→
          </a>
        </div>

        {/* Right zone — highlight image only */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "280px",
              height: "480px",
              objectFit: "cover",
              display: "block",
              borderRadius: 0,
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <>
      <div className="projects-container" style={{ position: "relative" }}>
        {projects.map((project) => (
          <ProjectItem key={project.label} project={project} />
        ))}
      </div>

      {/* Final CTA — outside sticky stack */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#1C1C1C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 0",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#F5A623",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          VER TODO O IMPACTO EKOLOA →
        </a>
      </div>
    </>
  );
}

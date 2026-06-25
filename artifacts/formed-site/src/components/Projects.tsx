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
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        zIndex: project.zIndex,
      }}
    >
      {/* Blurred full-screen background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          transform: "scale(1.05)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        className="relative h-full flex items-center"
        style={{ paddingLeft: "80px", paddingRight: "60px" }}
      >
        {/* Left text */}
        <div className="flex-1 flex flex-col text-white max-w-[520px]">
          <div
            className="mb-6 text-white/50"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {project.label}
          </div>

          <h2
            className="font-bold leading-tight mb-14 text-white"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h2>

          <div className="flex flex-col gap-6 mb-14">
            <div className="border-t border-white/15 pt-4">
              <span
                className="block text-white/50 mb-1"
                style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                PERÍODO
              </span>
              <span className="text-white text-lg font-medium">{project.period}</span>
            </div>
            <div className="border-t border-white/15 pt-4">
              <span
                className="block text-white/50 mb-1"
                style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                ÂMBITO
              </span>
              <span className="text-white text-lg font-medium">{project.scope}</span>
            </div>
            <div className="border-t border-b border-white/15 pt-4 pb-4">
              <span
                className="block text-white/50 mb-1"
                style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                ÁREA
              </span>
              <span className="text-white text-lg font-medium">{project.area}</span>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center hover:opacity-70 transition-opacity"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F5A623" }}
          >
            VER PROJECTO COMPLETO ——→
          </a>
        </div>

        {/* Right sharp highlight image */}
        <div
          className="flex-shrink-0 hidden lg:block"
          style={{ width: "420px", height: "480px", overflow: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <>
      {/* Sticky scroll wrapper — total height forces scroll through all 3 */}
      <div style={{ position: "relative" }}>
        {projects.map((project) => (
          <ProjectItem key={project.label} project={project} />
        ))}
      </div>

      {/* Final CTA — outside sticky */}
      <div className="w-full bg-[#1C1C1C] flex justify-center items-center py-20">
        <a
          href="#"
          className="hover:opacity-70 transition-opacity"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#F5A623",
            background: "none",
            border: "none",
          }}
        >
          VER TODO O IMPACTO EKOLOA →
        </a>
      </div>
    </>
  );
}

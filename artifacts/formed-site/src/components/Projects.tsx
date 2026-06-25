import React, { useEffect, useRef } from "react";

const projects = [
  {
    label: "PROJECTO [001]",
    title: "Consciência Individual à Transformação Sistémica",
    period: "Jan 2026 – Em curso",
    scope: "Desenvolvimento Intrínseco & Governança",
    area: "Impacto Social & Desenvolvimento Humano",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
  },
  {
    label: "PROJECTO [002]",
    title: "Desenvolvimento Intrínseco como Base da Transformação Social",
    period: "Fev 2026 – Em curso",
    scope: "Metodologia 2I's & Impacto Mensurável",
    area: "Governança Consciente & Organizações",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  },
  {
    label: "PROJECTO [003]",
    title: "Método 2I's como Motor de Impacto Sustentável",
    period: "Fev 2026 – Em curso",
    scope: "Metodologias Próprias Ekoloa",
    area: "Governança & Cooperação Institucional",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=1200&q=80",
  },
];

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const container = containerRef.current;
      if (!wrapper || !container) return;

      const wrapperTop = wrapper.getBoundingClientRect().top;
      const wrapperHeight = wrapper.offsetHeight;
      const vh = window.innerHeight;

      // Phase 1 — wrapper hasn't reached viewport top yet (Process sticky still covering):
      // keep portfolio hidden below screen
      if (wrapperTop > 0) {
        container.style.transform = "translateY(100%)";
        return;
      }

      // Phase 2 — wrapper has reached top: drive portfolio entry + internal slides

      // Entry: bring the sticky container from translateY(100%) → translateY(0%)
      const containerEntry = Math.max(0, Math.min(1, -wrapperTop / vh));
      const containerY = (1 - containerEntry) * 100;
      container.style.transform = `translateY(${containerY}%)`;

      // Slide stacking: driven by overall progress through the wrapper
      const totalProgress = Math.max(0, Math.min(1,
        -wrapperTop / (wrapperHeight - vh)
      ));

      const slides = slidesRef.current;
      const numSlides = slides.length;

      slides.forEach((slide, index) => {
        if (!slide) return;
        if (index === 0) {
          slide.style.transform = "translateY(0)";
          return;
        }
        const slideProgress = Math.max(0, Math.min(1,
          (totalProgress * numSlides) - index
        ));
        const yPos = (1 - slideProgress) * 100;
        slide.style.transform = `translateY(${yPos}%)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Wrapper: 100vh entry + 100vh per slide = 4×100vh total */}
      <div
        ref={wrapperRef}
        className="portfolio-wrapper"
        style={{
          position: "relative",
          height: "calc(100vh * 4)",
          zIndex: 10,
        }}
      >
        {/* Sticky container — starts off-screen below, JS drives it up */}
        <div
          ref={containerRef}
          className="portfolio-sticky-container"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            transform: "translateY(100%)",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.label}
              ref={(el) => { slidesRef.current[index] = el; }}
              className="project-slide"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                transform: index === 0 ? "translateY(0)" : "translateY(100%)",
                zIndex: index + 1,
                willChange: "transform",
              }}
            >
              {/* Blurred full-screen background */}
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
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.70)" }} />

              {/* Two-zone grid */}
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "55% 45%",
                }}
              >
                {/* Left — text */}
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
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "20px" }}>
                    {project.label}
                  </div>
                  <h2 style={{ fontSize: "50px", fontWeight: 700, lineHeight: 1.1, color: "white", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h2>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", margin: "0 0 24px 0" }} />

                  {[
                    { label: "PERÍODO", value: project.period },
                    { label: "ÂMBITO", value: project.scope },
                    { label: "ÁREA", value: project.area },
                  ].map((field) => (
                    <div key={field.label} style={{ marginBottom: "20px" }}>
                      <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.45)", fontWeight: 400, textTransform: "uppercase", marginBottom: "4px" }}>
                        {field.label}
                      </div>
                      <div style={{ fontSize: "16px", color: "white", fontWeight: 400 }}>
                        {field.value}
                      </div>
                    </div>
                  ))}

                  <a
                    href="#"
                    style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F5A623", textDecoration: "none", marginTop: "12px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    VER PROJECTO COMPLETO ——→
                  </a>
                </div>

                {/* Right — sharp highlight image */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "280px", height: "480px", objectFit: "cover", display: "block", borderRadius: 0, flexShrink: 0 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — outside the sticky wrapper */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#1C1C1C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <a
          href="#"
          style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5A623", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          VER TODO O IMPACTO EKOLOA →
        </a>
      </div>
    </>
  );
}

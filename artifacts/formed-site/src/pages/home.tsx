import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Faqs } from "@/components/Faqs";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-clip font-sans">
      <Navbar />
      <Hero />
      <About />

      {/*
        Bounded wrapper — scopes the sticky to this region only.
        Process: sticky z-index 5 — stays visible and covers the blank portfolio wrapper
                 while the user scrolls through it. Portfolio rises on top (z-index 10).
        Projects: 4×100vh wrapper. JS triggers only when the wrapper itself
                  reaches the viewport top (i.e. after the 100vh Process section).
      */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", zIndex: 5 }}>
          <Process />
        </div>
        <Projects />
      </div>

      <Services />
      <Testimonials />
      <Faqs />
      <Blog />
      <GetStarted />
      <Footer />
    </main>
  );
}

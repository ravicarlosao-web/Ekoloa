import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Partners } from "@/components/Partners";
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

      {/* Methodology scrolls normally — JS watches its bottom edge */}
      <div className="section-methodology" style={{ position: "relative", zIndex: 1 }}>
        <Process />
      </div>

      {/* Portfolio rises from below only after methodology fully exits the screen */}
      <Projects />

      <Partners />
      <Services />
      <Testimonials />
      <Faqs />
      <Blog />
      <GetStarted />
      <Footer />
    </main>
  );
}

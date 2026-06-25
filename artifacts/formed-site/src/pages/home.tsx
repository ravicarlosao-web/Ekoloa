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

      <div style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", zIndex: 5 }}>
          <Process />
        </div>
        <Projects />
      </div>

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

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Projects />
      <Partners />
      <Testimonials />
      <Services />
      <Footer />
    </main>
  );
}

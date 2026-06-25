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

      {/*
        Transition zone: Process acts as a high-z sticky cover over Project 1.
        - 200vh wrapper gives Process a 100vh "hang" window at the top.
        - Projects is pulled up by 100vh so Project 1 sits behind Process during that hang.
        - When the Process wrapper ends, Process slides off the top — revealing Project 1
          already in place beneath it ("coming from above").
        - Project 2 and 3 then rise from below in the normal stacking order.
      */}
      <div style={{ position: "relative" }}>

        {/* Process: sticky at top with z-index 20, clipped to 100vh */}
        <div style={{ height: "200vh" }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              zIndex: 20,
              overflow: "hidden",
            }}
          >
            <Process />
          </div>
        </div>

        {/* Projects: pulled up 100vh to sit behind Process during its hang window */}
        <div style={{ marginTop: "-100vh" }}>
          <Projects />
        </div>

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

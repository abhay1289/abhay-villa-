import dynamic from "next/dynamic";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const Benefits = dynamic(() =>
  import("@/components/Benefits").then((mod) => mod.Benefits),
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => mod.Testimonials),
);

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <Benefits />
      <Projects />
      <Testimonials />
      <Blog />
      <Cta />
      <Footer />
    </main>
  );
}

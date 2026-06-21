import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Team from "./components/Team";

export default function Home() {
  return (
    <main id="top">
      <Hero/>

      {/* TODO: replace with designed About section */}
      <About />
      <Team />

      <Projects/>

      {/* TODO: replace with designed Resources section */}
      <section id="resources" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Resources</h2>
      </section>

      {/* TODO: replace with designed Contact section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </section>
    </main>
  );
}
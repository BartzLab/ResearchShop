import About from "./components/About";
import Contact from "./components/Contact";
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

      {/* TODO: replace with designed Contact section */}
      <Contact/>
    </main>
  );
}
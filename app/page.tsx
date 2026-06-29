import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
  return (
    <main id="top">
      <Hero/>

      {/* TODO: replace with designed About section */}
      <About />
      <div className="overflow-hidden" style={{ backgroundColor: "#660f1a" }}>
        <Team />
      </div>

      {/* TODO: replace with designed Contact section */}
      <Contact/>
    </main>
  );
}
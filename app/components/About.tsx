import Image from "next/image";
import ResearchAreas from "./ResearchAreas";
import ProcessTimeline from "./Processtimeline";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white">
      <div className="w-full relative overflow-hidden">
      <div className="relative w-full aspect-[16/7] min-h-[600px]">
        <Image
        src="/images/people.png"
        alt="Students and researchers collaborating"
        fill
        sizes="100vw"
        className="object-cover object-center"
        />
    </div>

  {/* Cream card — sized to content, centered vertically */}
  <div className="absolute ml-24 inset-y-0 left-0 w-[50%] flex items-center">
    <div className="bg-cream px-12 py-10 shadow-lg">
      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-6">
        <p
          className="text-maroon-dark whitespace-nowrap"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "2rem",
          }}
        >
          Our mission.
        </p>
        <span className="h-px flex-1 bg-maroon-dark/30" />
      </div>

      {/* Headline */}
      <h2
        className="text-maroon-dark leading-[1.05] mb-6"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "4.583rem",
        }}
      >
        Bridging research
        <br />
        &amp; community
      </h2>

      {/* Body */}
      <p className="text-maroon-dark leading-relaxed" style={{ fontSize: "1.5rem" }}>
        We aim to <strong>bridge the gap between academic research and
        community needs</strong>. We connect local community
        organizations, students, and researchers to{" "}
        <strong>address real-world concerns</strong>. We firmly believe
        that our work is <strong>mutually beneficial</strong> to all
        participating members: <strong>students gain hands-on
        experience</strong> in research and community outreach;{" "}
        <strong>community members learn about the scientific
        process</strong> and how it can be used to address the questions
        most relevant to them, and <strong>researchers conduct
        meaningful work</strong> that bolsters the &ldquo;why&rdquo; that
        drives their practice.
      </p>
    </div>
  </div>
</div>

      {/* Research areas block — interactive, own component since it needs client state */}
      <ResearchAreas />

      {/* TODO: next About sections go here as you send more designs */}
      <ProcessTimeline/>
    </section>
  );
}
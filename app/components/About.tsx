import Image from "next/image";
import ResearchAreas from "./ResearchAreas";
import ProcessTimeline from "./Processtimeline";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white">
      <div className="w-full relative overflow-hidden" style={{ height: "700px" }}>
        {/* Full-width photo behind everything */}
        <Image
          src="/images/people.jpeg"
          alt="Students and researchers collaborating"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cream card — top-left aligned, ~72% wide, not full height */}
        <div className="absolute top-12 left-12 w-[58%] bg-cream px-12 pt-10 pb-16">
          {/* "Our mission." + horizontal rule */}
          <div className="flex items-center gap-4 mb-8">
            <p
              className="text-maroon-dark whitespace-nowrap"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "1.833rem",
              }}
            >
              Our mission.
            </p>
            <span className="h-px flex-1 bg-maroon-dark/40" />
          </div>

          {/* Big heading */}
          <h2
            className="text-maroon-dark leading-[1.05] mb-8"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "4.583rem",
            }}
          >
            Bridging research
            <br />
            &amp; community
          </h2>

          {/* Body copy — ~1.17rem matches Canva's ~14px body */}
          <p
            className="text-maroon-dark leading-relaxed"
            style={{ fontSize: "1.17rem" }}
          >
            We aim to{" "}
            <strong>
              bridge the gap between academic research and community needs
            </strong>
            . We connect local community organizations, students, and researchers
            to <strong>address real-world concerns</strong>. We firmly believe
            that our work is <strong>mutually beneficial</strong> to all
            participating members:{" "}
            <strong>students gain hands-on experience</strong> in research and
            community outreach;{" "}
            <strong>
              community members learn about the scientific process
            </strong>{" "}
            and how it can be used to address the questions most relevant to
            them, and <strong>researchers conduct meaningful work</strong> that
            bolsters the &ldquo;why&rdquo; that drives their practice.
          </p>
        </div>
      </div>

      <ResearchAreas />
      <ProcessTimeline />
    </section>
  );
}
import Image from "next/image";
import ResearchAreas from "./ResearchAreas";
import ProcessTimeline from "./Processtimeline";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white">
      <div className="w-full relative overflow-hidden lg:h-175">
        {/* Full-width photo behind everything */}
        <Image
          src="/images/people.jpeg"
          alt="Students and researchers collaborating"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cream card
            - Below lg: relative (normal flow), so the container height
              expands to fit the card. The fill image stretches with it.
            - lg+: absolute overlay, container has fixed h-175. */}
        <div className="relative z-10 m-4 sm:m-8 lg:absolute lg:m-0 lg:top-12 lg:left-12 lg:w-[58%] bg-cream px-5 pt-6 pb-8 sm:px-10 sm:pt-10 sm:pb-12 lg:px-12 lg:pt-10 lg:pb-16">
          {/* "Our mission." + horizontal rule */}
          <div className="flex items-center gap-4 mb-4 sm:mb-6 lg:mb-8">
            <p
              className="text-maroon-dark whitespace-nowrap text-base sm:text-xl lg:text-[1.833rem]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Our mission.
            </p>
            <span className="h-px flex-1 bg-maroon-dark/40" />
          </div>

          {/* Big heading */}
          <h2
            className="text-maroon-dark leading-[1.05] mb-4 sm:mb-6 lg:mb-8 text-2xl sm:text-[2.5rem] md:text-[3rem] lg:text-[4.583rem]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Bridging research
            <br />
            &amp; community
          </h2>

          {/* Body copy */}
          <p
            className="text-maroon-dark leading-relaxed text-xs sm:text-sm lg:text-[1.17rem]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
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
            them, and <strong>researchers conduct meaningful work </strong> that
            bolsters the &ldquo;why&rdquo; that drives their practice.
          </p>
        </div>
      </div>

      <ResearchAreas />
      <ProcessTimeline />
    </section>
  );
}

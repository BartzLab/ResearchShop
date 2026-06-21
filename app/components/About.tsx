import Image from "next/image";
import ResearchAreas from "./ResearchAreas";
import ProcessTimeline from "./Processtimeline";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white">
      {/* Mission block — 40/60 split, cream card on the left, photo on the right.
          The photo box is sized to its own native aspect ratio (1582x886),
          so it's never asked to scale past the resolution it actually has. */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Text card */}
        <div className="w-full md:w-2/5 bg-cream px-12 py-16 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <p
              className="text-maroon-dark whitespace-nowrap mr-10"
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
          <div className="flex flex-col justify-center">
            <h2
                className="text-maroon-dark ml-10 leading-[1.05] mb-8"
                style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "4.6rem",
                }}
            >
                Bridging research
                <br />
                &amp; community
            </h2>

            
            <p className="text-maroon-dark ml-10 leading-relaxed max-w-xl" style={{ fontSize: "1.5rem" }}>
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

        {/* Photo — boxed at its own native aspect ratio (16:9-ish),
            never cropped or upscaled past 1582px source width. */}
        <div className="w-full md:w-3/5 relative aspect-[1582/886]">
          <Image
            src="/images/people.png"
            alt="Students and researchers collaborating"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Research areas block — interactive, own component since it needs client state */}
      <ResearchAreas />

      {/* TODO: next About sections go here as you send more designs */}
      <ProcessTimeline/>
    </section>
  );
}
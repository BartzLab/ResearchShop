import { Users, Calendar, User } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

type Project = {
  name: string;
  organization: string;
  year: string;
  description: string;
  status: "Ongoing" | "Complete";
};

const projects: Project[] = [
  {
    name: "Project name",
    organization: "Community Organization",
    year: "Year",
    description: "Project description",
    status: "Ongoing",
  },
  {
    name: "Project name",
    organization: "Community Organization",
    year: "Year",
    description: "Project description",
    status: "Complete",
  },
  {
    name: "Project name",
    organization: "Community Organization",
    year: "Year",
    description: "Project description",
    status: "Complete",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: "Ongoing" | "Complete" }) {
  return (
    <span
      className="text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full text-gray-600 shrink-0"
      style={{ backgroundColor: "#e0dada" }}
    >
      {status}
    </span>
  );
}

function ProjectCard({ name, organization, year, description, status }: Project) {
  return (
    <div className="bg-white rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h3
          className="text-[#460102] text-lg sm:text-2xl md:text-[1.833rem]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {name}
        </h3>
        <StatusBadge status={status} />
      </div>
      <div className="flex items-center gap-4 sm:gap-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
        <span className="flex items-center gap-2 text-sm sm:text-[1.167rem]" style={{ color: "#660f1a" }}>
          <User size={16} />
          {organization}
        </span>
        <span className="flex items-center gap-2 text-sm sm:text-[1.167rem]" style={{ color: "#660f1a" }}>
          <Calendar size={16} />
          {year}
        </span>
      </div>
      <p
        className="text-sm sm:text-[1.333rem]"
        style={{ fontFamily: "var(--font-dm-sans)", color: "#660f1a" }}
      >
        {description}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#660f1a" }}
    >
      <div className="relative z-10 px-4 py-12 sm:px-8 sm:py-20">
        {/* Divider */}
        <div className="flex items-center gap-4 sm:gap-6 w-full mb-10 sm:mb-20">
          <span className="flex-1 h-px bg-cream/30" />
          <span className="text-cream/50 text-xl sm:text-2xl">✦</span>
          <span className="flex-1 h-px bg-cream/30" />
        </div>

        {/* Two-column on lg+, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left — title + description */}
          <div className="w-full lg:w-64 lg:shrink-0 lg:pt-4">
            <h2
              className="text-cream mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[3.438rem]"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                lineHeight: 1.1,
              }}
            >
              Projects: Ongoing &amp; Complete
            </h2>
            <p
              className="text-cream font-semibold leading-snug text-sm sm:text-base lg:text-[1.125rem]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Explore the projects we are currently working on, as well as those we have completed.
            </p>
          </div>

          {/* Right — project cards */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/20 gap-4 sm:gap-8">
          <p
            className="text-white text-sm sm:text-base sm:max-w-xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Want to know more about how we conducted this research? Wondering about our findings?
          </p>
          <a
            href="https://www.bartzlab.com/copy-of-home"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-3 sm:py-4 rounded-2xl text-sm text-maroon-dark hover:text-maroon bg-[#e0dada] hover:bg-gray-100 transition-colors text-center"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            View our full project archive
          </a>
        </div>
      </div>
    </section>
  );
}

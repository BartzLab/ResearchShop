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
      className="text-sm px-4 py-1 rounded-full text-gray-600 flex-shrink-0"
      style={{ backgroundColor: "#e0dada", fontSize: "1.167rem" }}
    >
      {status}
    </span>
  );
}

function ProjectCard({ name, organization, year, description, status }: Project) {
    return (
      <div className="bg-white rounded-2xl px-8 py-6 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
        <h3
        className="text-[#460102]"
        style={{ fontSize: "1.833rem" }}
        >
        {name}
        </h3>
          <StatusBadge status={status} />
        </div>
        <div className="flex items-center gap-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
        <span className="flex items-center gap-2" style={{ color: "#660f1a", fontSize: "1.167rem" }}>
            <User size={18} />
            {organization}
          </span>
          <span className="flex items-center gap-2" style={{ color: "#660f1a", fontSize: "1.167rem" }}>
            <Calendar size={18} />
            {year}
          </span>
        </div>
        <p style={{ fontFamily: "var(--font-dm-sans)", color: "#660f1a", fontSize: "1.333rem" }}>{description}</p>
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
      <div className="relative z-10 px-8 py-20">
      <div className="flex items-center gap-6 w-full px-8 mb-20">
        <span className="flex-1 h-px bg-cream/20" />
        <span className="text-cream/40 text-lg">✦</span>
        <span className="flex-1 h-px bg-cream/20" />
        </div>
        {/* Two-column layout */}
        <div className="flex gap-16 items-start max-w-6xl mx-auto">
          {/* Left - title + description */}
          <div className="shrink-0 w-64 pt-4">
          <h2
            className="text-cream mb-6"
            style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "3.438rem",
                lineHeight: 1.1,
            }}
            >
            Projects: Ongoing & Complete
            </h2>
            <p className="text-cream font-semibold leading-snug" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.125rem" }}>
            Explore the projects we are currently working on, as well as those we have completed.
            </p>
          </div>

          {/* Right - project cards */}
          <div className="flex-1 flex flex-col gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between max-w-6xl mx-auto mt-16 pt-8 border-t border-cream/20">
        <p className="text-white max-w-xl" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem" }}>
        Want to know more about how we conducted this research? Wondering about our findings?
        </p>
            <a
            href="https://www.bartzlab.com/copy-of-home"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-4 rounded-2xl text-sm text-maroon-dark hover:text-maroon bg-[#e0dada] hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem" }}
            >
                View our full project archive
            </a>
        </div>
      </div>
    </section>
  );
}
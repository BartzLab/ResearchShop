import Image from "next/image";
import { FaLinkedin, FaResearchgate, FaEnvelope } from "react-icons/fa";
import { Calendar, User } from "lucide-react";

// ─── Team Data ────────────────────────────────────────────────────────────────

const shopTeam = [
  {
    name: "Jennifer Bartz",
    role: "Supervisor & Primary Investigator",
    photo: "/images/team/jennifer-bartz.png",
    email: "mailto:jennifer.bartz@mcgill.ca",
    linkedin: "https://www.linkedin.com/in/jennifer-bartz-b87260273/",
    researchgate: "https://www.researchgate.net/profile/Jennifer-Bartz",
  },
  {
    name: "Jade Stobbart",
    role: "Shop Director & Research Coordinator",
    photo: "/images/team/jade-stobbart.png",
    email: "mailto:jade.stobbart@mail.mcgill.ca",
    linkedin: "https://www.linkedin.com/in/jade-stobbart-6ba471192/",
    researchgate: "https://www.researchgate.net/profile/Jade-Stobbart",
  },
  {
    name: "Audrey-Anne Forget",
    role: "Research Advisor & 2026/27 Project lead",
    photo: "/images/team/audrey-anne-forget.png",
    email: "mailto:audrey-anne.forget@mail.mcgill.ca",
    linkedin: "https://www.linkedin.com/in/audrey-anne-forget",
    researchgate: "https://www.researchgate.net/profile/Audrey-Anne-Forget-2",
  },
  {
    name: "Gabriel Ferland",
    role: "Research & administrative assistant",
    photo: "/images/team/gabriel-ferland.png",
    email: "mailto:gabriel.ferland@mail.mcgill.ca",
    linkedin: "https://www.linkedin.com/in/gabriel-ferland-68465b3ba",
    researchgate: null,
  },
];

const cohort2627 = [
  { name: "You!", role: "Graduate Student Project lead" },
  { name: "You!", role: "McGill University Honours Student" },
  { name: "You!", role: "Member of Local Organization" },
];

// ─── Projects Data ────────────────────────────────────────────────────────────

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

// ─── Team Sub-components ──────────────────────────────────────────────────────

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 sm:gap-6 w-full px-4 sm:px-8 md:px-16 mb-8 sm:mb-12">
      <span className="flex-1 h-0.5 bg-cream/30" />
      <span
        className="text-cream whitespace-nowrap text-xl sm:text-2xl md:text-[2.5rem]"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {label}
      </span>
      <span className="flex-1 h-0.5 bg-cream/30" />
    </div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-cream/60 flex items-center justify-center text-cream/80 hover:bg-cream/20 transition-colors text-base font-semibold"
    >
      {children}
    </a>
  );
}

function TeamCard({
  name,
  role,
  photo,
  email,
  linkedin,
  researchgate,
}: {
  name: string;
  role: string;
  photo: string;
  email: string;
  linkedin: string;
  researchgate: string | null;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-50 h-56 sm:w-57.5 sm:h-64.25 md:w-65 md:h-72.5 shrink-0">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 200px, (max-width: 768px) 230px, 260px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-cream mb-1 text-xl sm:text-2xl md:text-[2.083rem]">
          {name}
        </p>
        <p
          className="text-cream/70 leading-snug mb-3 max-w-55 text-sm sm:text-base md:text-[1.666rem]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {role}
        </p>
        <div className="flex items-center justify-center gap-2">
          <SocialIcon href={email} label={`Email ${name}`}>
            <FaEnvelope size={18} />
          </SocialIcon>
          <SocialIcon href={linkedin} label={`${name} on LinkedIn`}>
            <FaLinkedin size={18} />
          </SocialIcon>
          {researchgate && (
            <SocialIcon href={researchgate} label={`${name} on ResearchGate`}>
              <FaResearchgate size={18} />
            </SocialIcon>
          )}
        </div>
      </div>
    </div>
  );
}

function ComingSoonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-50 h-56 sm:w-57.5 sm:h-64.25 md:w-65 md:h-72.5 shrink-0">
        <Image
          src="/images/team/coming-soon.png"
          alt="Coming Soon"
          fill
          sizes="(max-width: 640px) 200px, (max-width: 768px) 230px, 260px"
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <p
          className="text-cream mb-1 text-xl sm:text-2xl md:text-[2.083rem]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {name}
        </p>
        <p
          className="text-cream/70 leading-snug mb-3 max-w-55 text-sm sm:text-base md:text-[1.666rem]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

// ─── Projects Sub-components ──────────────────────────────────────────────────

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

export default function Team() {
  return (
    <section
      id="team"
      className="relative w-full"
      style={{ backgroundColor: "#660f1a" }}
    >
      {/* Blobs — desktop only — span the full section so they bleed into projects */}
      <div className="hidden lg:block absolute -top-100 -left-32 w-200 h-139 pointer-events-none z-0">
        <Image src="/images/blobs/top-left-blob.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="hidden lg:block absolute top-30 -right-185 w-200 h-201.5 pointer-events-none z-0">
        <Image src="/images/blobs/mid-right-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
      </div>
      <div className="hidden lg:block absolute -bottom-40 -left-120 w-175 h-160 pointer-events-none z-0">
        <Image src="/images/blobs/bottom-left-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
      </div>
      <div className="hidden lg:block absolute -bottom-88 -right-110 w-175 h-154.5 pointer-events-none z-0">
        <Image src="/images/blobs/bottom-right-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
      </div>

      {/* Team content — zoom 0.8 applied here only */}
      <div style={{ zoom: 0.8 }}>
        <div className="relative z-10 px-4 pt-12 pb-32 sm:px-8 sm:pt-20 sm:pb-48">
          <h2
            className="text-cream text-center mb-10 sm:mb-16 text-4xl sm:text-5xl lg:text-[5.33rem]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Our team
          </h2>

          <SectionDivider label="Shop team" />
          <div className="flex flex-wrap justify-center gap-6 mb-12 sm:mb-24">
            {shopTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

          <SectionDivider label="2026/27 Cohort" />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {cohort2627.map((member, i) => (
              <ComingSoonCard key={i} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* <div id="projects" className="relative z-10 px-4 py-12 sm:px-8 sm:py-20">
        <div className="flex items-center gap-4 sm:gap-6 w-full mb-10 sm:mb-20">
          <span className="flex-1 h-px bg-cream/30" />
          <span className="text-cream/50 text-xl sm:text-2xl">✦</span>
          <span className="flex-1 h-px bg-cream/30" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="w-full lg:w-64 lg:shrink-0 lg:pt-4">
            <h2
              className="text-cream mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[3.438rem]"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                lineHeight: 1.1,
              }}
            >
              Projects: Ongoing & Complete
            </h2>
            <p
              className="text-cream font-semibold leading-snug text-sm sm:text-base lg:text-[1.125rem]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Explore the projects we are currently working on, as well as those we have completed.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

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
      </div> */}
    </section>
  );
}

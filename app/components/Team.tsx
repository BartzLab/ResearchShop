import Image from "next/image";
import { FaLinkedin, FaResearchgate, FaEnvelope } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const shopTeam = [
  {
    name: "Jennifer Bartz",
    role: "Supervisor & Primary Investigator",
    photo: "/images/team/jennifer-bartz.png",
    email: "#",
    linkedin: "#",
    researchgate: "#",
  },
  {
    name: "Jade Stobbart",
    role: "Shop Director & Research Coordinator",
    photo: "/images/team/jade-stobbart.png",
    email: "#",
    linkedin: "#",
    researchgate: "#",
  },
  {
    name: "Audrey-Anne Forget",
    role: "Research Advisor & 2026/27 Project lead",
    photo: "/images/team/audrey-anne-forget.png",
    email: "#",
    linkedin: "#",
    researchgate: "#",
  },
  {
    name: "Gabriel Ferland",
    role: "Research & administrative assistant",
    photo: "/images/team/gabriel-ferland.png",
    email: "#",
    linkedin: "#",
    researchgate: null,
  },
];

const cohort2627 = [
  { name: "You!", role: "Graduate Student Project lead" },
  { name: "You!", role: "McGill University Honours Student" },
  { name: "You!", role: "Member of Local Organization" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 w-full px-16 mb-12">
      <span className="flex-1 h-[2px] bg-cream/30" />
      <span
        className="text-cream whitespace-nowrap"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "2.5rem",
        }}
      >
        {label}
      </span>
      <span className="flex-1 h-[2px] bg-cream/30" />
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
        className="w-16 h-16 rounded-full border border-cream/60 flex items-center justify-center text-cream/80 hover:bg-cream/20 transition-colors text-base font-semibold"
      >
        {children}
      </a>
    );
  }

function PolaroidFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[400px] h-[400px] flex-shrink-0">
      <div className="absolute inset-0 bg-[#e8dcc8] rounded-sm" />
      <div
        className="absolute border border-[#b8956a] rounded-sm"
        style={{ inset: "6px 6px -6px -6px" }}
      />
      <div className="relative w-full h-full overflow-hidden rounded-sm">
        {children}
      </div>
    </div>
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
      <div className="relative w-[260px] h-[290px] flex-shrink-0">
      <Image
          src={photo}
          alt={name}
          fill
          sizes="260px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-cream mb-1" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "2.083rem" }}>
          {name}
        </p>
        <p className="text-cream/70 leading-snug mb-3 max-w-[220px]" style={{ fontSize: "1.666rem" }}>{role}</p>
        <div className="flex items-center justify-center gap-2">
            <SocialIcon href={email} label={`Email ${name}`}>
                <FaEnvelope size={20} />
            </SocialIcon>
            <SocialIcon href={linkedin} label={`${name} on LinkedIn`}>
                <FaLinkedin size={20} />
            </SocialIcon>
            {researchgate && (
                <SocialIcon href={researchgate} label={`${name} on ResearchGate`}>
                <FaResearchgate size={20} />
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
      <div className="relative w-[260px] h-[290px] flex-shrink-0">
        <Image src="/images/team/coming-soon.png" alt="Coming Soon" fill className="object-cover" />
      </div>
      <div className="text-center">
      <p className="text-cream mb-1" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "2.083rem" }}>
          {name}
        </p>
        <p className="text-cream/70 leading-snug mb-3 max-w-[220px]" style={{ fontSize: "1.666rem" }}>{role}</p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Team() {
  return (
    <section
      id="team"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#660f1a" }}
    >
      {/* ── Blobs — all use fill inside a sized container so Next.js
          serves the right resolution without upscaling. Update w/h below
          after re-exporting each blob at higher res from Canva. ── */}

      {/* Top-left */}
      <div className="absolute -top-100 -left-32 w-[800px] h-[556px] pointer-events-none z-0">
        <Image src="/images/blobs/top-left-blob.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      {/* Mid-right — update w/h once re-exported at larger size */}
      <div className="absolute top-1/4 -right-185 w-[800px] h-[806px] pointer-events-none z-0">
  <Image src="/images/blobs/mid-right-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
</div>

      {/* Bottom-left — update w/h once re-exported at larger size */}
      <div className="absolute -bottom-40 -left-120 w-[700px] h-[640px] pointer-events-none z-0">
  <Image src="/images/blobs/bottom-left-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
</div>

      {/* Bottom-right — update w/h once re-exported at larger size */}
      <div className="absolute -bottom-88 -right-110 w-[700px] h-[618px] pointer-events-none z-0">
  <Image src="/images/blobs/bottom-right-blob.png" alt="" fill sizes="900px" style={{ objectFit: "contain" }} />
</div>

      {/* ── Content ── */}
      <div className="relative z-10 px-8 pt-20 pb-28">
        <h2
          className="text-cream text-center mb-16"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "5.33rem",
          }}
        >
          Our team
        </h2>

        <SectionDivider label="Shop team" />
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {shopTeam.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <SectionDivider label="2026/27 Cohort" />
        <div className="flex flex-wrap justify-center gap-12">
          {cohort2627.map((member, i) => (
            <ComingSoonCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
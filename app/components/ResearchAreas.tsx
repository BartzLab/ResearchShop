"use client";

import { useState } from "react";
import { Heart, Handshake, Users } from "lucide-react";

const researchAreas = [
  {
    label: "Attachment",
    icon: Heart,
    description:
      "Exploring how the inner working model for connection developed during early childhood impacts our social connections and behaviours in adulthood.",
  },
  {
    label: "Prosocial Behaviour",
    icon: Handshake,
    description:
      "Understanding why, how, and in what contexts we seek to help or benefit others (including cooperation, empathy, altruism, and more).",
  },
  {
    label: "Social Connection",
    icon: Users,
    description:
      "Examining social relationships, including how and why we establish and maintain them.",
  },
];

export default function ResearchAreas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="w-full bg-maroon px-4 py-12 sm:px-8 sm:py-20 md:py-24 text-center">
      {/* Heading */}
      <h2
        className="text-cream mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-[3.5rem]"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        Our research areas
      </h2>

      {/* Subhead */}
      <p className="text-cream text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20" style={{ fontFamily: "var(--font-dm-sans)" }}>
        We specialize in three main areas in social psychology research:{" "}
        <strong className="font-bold">attachment</strong>,{" "}
        <strong className="font-bold">prosocial behaviour</strong>, and{" "}
        <strong className="font-bold">social connection</strong>.
      </p>

      {/* Icon row */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 lg:gap-24" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {researchAreas.map((area, index) => {
          const isActive = activeIndex === index;
          const isDimmed = activeIndex !== null && !isActive;
          return (
            <button
              key={area.label}
              type="button"
              onClick={() => handleSelect(index)}
              aria-pressed={isActive}
              className="flex flex-col items-center group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-200 ${
                  isDimmed ? "bg-cream/40 group-hover:bg-cream/70" : "bg-cream"
                }`}
              >
                <area.icon
                  size={40}
                  strokeWidth={1.5}
                  className={isDimmed ? "text-maroon/60" : "text-maroon"}
                />
              </div>
              <p
                className={`font-bold tracking-wide uppercase text-base sm:text-lg leading-snug max-w-[12ch] transition-opacity duration-200 ${
                  isDimmed ? "text-cream opacity-50" : "text-cream opacity-100"
                }`}
              >
                {area.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Info panel */}
      <div className="mt-6 min-h-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {activeIndex === null ? (
          <p className="text-cream text-base sm:text-xl italic opacity-60">
            Click an icon to learn more
          </p>
        ) : (
          <div className="bg-cream rounded-lg px-6 sm:px-10 py-6 sm:py-8 max-w-2xl mx-auto text-left">
            <p className="text-maroon-dark font-bold uppercase tracking-wide text-sm mb-3">
              {researchAreas[activeIndex].label}
            </p>
            <p className="text-maroon-dark text-base sm:text-lg leading-relaxed">
              {researchAreas[activeIndex].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

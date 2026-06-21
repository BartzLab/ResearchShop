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
    // Clicking the active icon again closes the panel; clicking a
    // different icon switches directly to that one.
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="w-full bg-maroon px-8 py-24 text-center">
      {/* Heading — never moves */}
      <h2
        className="text-cream mb-8"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "3.5rem",
        }}
      >
        Our research areas
      </h2>

      {/* Subhead — never moves */}
      <p className="text-cream text-xl leading-relaxed max-w-3xl mx-auto mb-20">
        We specialize in three main areas in social psychology research:{" "}
        <strong className="font-bold">attachment</strong>,{" "}
        <strong className="font-bold">prosocial behaviour</strong>, and{" "}
        <strong className="font-bold">social connection</strong>.
      </p>

      {/* Icon row */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-24">
        {researchAreas.map((area, index) => {
          const isActive = activeIndex === index;
          // Nothing is dimmed until a selection has been made. Once
          // activeIndex is set, every icon except the active one dims.
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
                className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 transition-colors duration-200 ${
                  isDimmed ? "bg-cream/40 group-hover:bg-cream/70" : "bg-cream"
                }`}
              >
                <area.icon
                  size={48}
                  strokeWidth={1.5}
                  className={isDimmed ? "text-maroon/60" : "text-maroon"}
                />
              </div>
              <p
                className={`font-bold tracking-wide uppercase text-lg leading-snug max-w-[12ch] transition-opacity duration-200 ${
                  isDimmed ? "text-cream opacity-50" : "text-cream opacity-100"
                }`}
              >
                {area.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* This single slot holds either the hint text (default) or the
          active area's panel (after a click) — same position either
          way, so the panel never appears far below where you'd expect. */}
      <div className="mt-6 min-h-8">
        {activeIndex === null ? (
          <p className="text-cream text-xl italic opacity-60">
            Click an icon to learn more
          </p>
        ) : (
          <div className="bg-cream rounded-lg px-10 py-8 max-w-2xl mx-auto text-left">
            <p className="text-maroon-dark font-bold uppercase tracking-wide text-sm mb-3">
              {researchAreas[activeIndex].label}
            </p>
            <p className="text-maroon-dark text-lg leading-relaxed">
              {researchAreas[activeIndex].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
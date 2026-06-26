"use client";

import { useState } from "react";

type Role = "student" | "organization" | "other" | null;

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const roles: { value: Role; label: string }[] = [
    { value: "student", label: "Student" },
    { value: "organization", label: "Member of local organization" },
    { value: "other", label: "Other" },
  ];

  const roleLabel = roles.find((r) => r.value === selectedRole)?.label ?? "Not specified";

  function handleSend() {
    const to = "MAP.researchshop@mcgill.ca";
    const subject = encodeURIComponent("Research Shop Inquiry");
    const body = encodeURIComponent(
      `Name: ${name || "Not provided"}\n` +
      `Email: ${email || "Not provided"}\n` +
      `I am a: ${roleLabel}\n\n` +
      `Message:\n${message || "Not provided"}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="w-full bg-cream py-12 px-4 sm:py-20 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

        {/* LEFT — Contact form card */}
        <div
          className="bg-white rounded-2xl border border-maroon-dark px-5 py-6 sm:px-10 sm:py-10"
          style={{ borderWidth: "1.5px" }}
        >
          <h2
            className="text-maroon-dark text-center mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-[2.25rem]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Send Us a Message
          </h2>

          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Name */}
            <div>
              <label className="block text-maroon-dark mb-1 text-sm sm:text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-maroon-dark outline-none text-sm sm:text-base"
                style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#dde0e3" }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-maroon-dark mb-1 text-sm sm:text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-maroon-dark outline-none text-sm sm:text-base"
                style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#dde0e3" }}
              />
            </div>

            {/* Role radio */}
            <div>
              <p className="text-maroon-dark mb-4 text-sm sm:text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                I am a…
              </p>
              <div className="flex justify-between">
                {roles.map(({ value, label }) => {
                  const active = selectedRole === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setSelectedRole(value)}
                      className="flex flex-col items-center gap-2 sm:gap-3 focus:outline-none"
                      style={{ flex: 1 }}
                    >
                      <span
                        className="text-maroon-dark/70 text-center leading-snug flex items-end justify-center text-xs sm:text-[0.9rem]"
                        style={{ fontFamily: "var(--font-dm-sans)", height: "2.5rem" }}
                      >
                        {label}
                      </span>
                      <span
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors shrink-0"
                        style={{ backgroundColor: active ? "#6b1a1a" : "#c8c2ba" }}
                      >
                        {active && <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-cream block" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-maroon-dark mb-1 text-sm sm:text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Message
              </label>
              <textarea
                placeholder="Tell us about your inquiry…"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-maroon-dark/50 outline-none resize-none text-sm sm:text-base"
                style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#dde0e3" }}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSend}
              className="mt-2 w-full hover:cursor-pointer hover:text-white rounded-md bg-maroon-dark text-cream py-3 font-semibold tracking-wide transition-opacity hover:opacity-90 text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* RIGHT — CTA + contact info */}
        <div className="flex flex-col justify-start pt-0 lg:pt-4">
          <p
            className="text-maroon-dark text-center leading-snug mb-4 text-sm sm:text-base lg:text-[1.25rem]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Are you a member of a local organization interested{" "}
            <br className="hidden lg:inline" />
            in how research can benefit your population?{" "}
            <br className="hidden lg:inline" />
            Are you a student interested in joining our team?
          </p>

          <h2
            className="text-maroon-dark text-center mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-[4.167rem]"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: 1,
            }}
          >
            Get in touch!
          </h2>

          <div className="flex justify-center">
            <div className="flex flex-col gap-5 sm:gap-7">
              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d9d3cb] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-maroon-dark font-bold text-sm sm:text-[1.083rem]">Email</p>
                  <a
                    href="mailto:MAP.researchshop@mcgill.ca"
                    className="text-[#ab1f42] text-sm sm:text-[1.083rem] break-words"
                  >
                    MAP.researchshop@mcgill.ca
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d9d3cb] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-maroon-dark font-bold text-sm sm:text-[1.083rem]">Location</p>
                  <p className="text-[#ab1f42] leading-snug text-sm sm:text-[1.083rem]">
                    McGill University<br />
                    Department of Psychology<br />
                    2001 McGill College Avenue<br />
                    Montreal, QC H3A 1G1
                  </p>
                </div>
              </div>

              {/* Lab Website */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d9d3cb] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-maroon-dark font-bold text-sm sm:text-[1.083rem]">Lab Website</p>
                  <a
                    href="https://www.bartzlab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ab1f42] text-sm sm:text-[1.083rem]"
                  >
                    www.bartzlab.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
});

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero() {
  return (
    <section className={`${dmSans.variable} relative w-full h-screen min-h-150 overflow-hidden`}>
      <Image
        src="/images/Homepage.png"
        alt="McGill Arts Building"
        fill
        priority
        className="object-cover object-center"
      />

      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-10">
        {/* Logo */}
        <a href="https://www.bartzlab.com" target="_blank" rel="noopener noreferrer">
        <Image
            src="/images/bartz-lab-logo.png"
            alt="Bartz Lab"
            width={48}
            height={48}
            className="object-contain"
        />
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  inline-block px-10 py-2 rounded-full
                  bg-[#660f1a] text-white
                  text-lg font-semibold tracking-widest
                  hover:bg-[#9b2929] transition-colors duration-200
                "
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* pointer-events-none: this div spans the full screen via inset-0,
          which was silently blocking clicks on the nav sitting above it */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none">
        <p
          className="text-white text-7xl font-light mb-2"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          McGill Attachment &amp; Prosociality
        </p>
        <h1
          className="text-white leading-none text-9xl"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 900,
          }}
        >
          Research Shop
        </h1>
      </div>
    </section>
  );
}
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
});

const navLinks = [
  { label: "ABOUT", href: "#about" },
  //{ label: "PROJECTS", href: "#projects" },
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
        sizes="100vw"
        className="object-cover object-center"
      />

      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5">
        {/* Logo */}
        <a href="https://www.bartzlab.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/bartz-lab-logo.png"
            alt="Bartz Lab"
            width={48}
            height={48}
            className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          />
        </a>

        <ul className="flex items-center gap-1.5 sm:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  inline-block px-3 py-1 sm:px-6 sm:py-1.5 lg:px-10 lg:py-2 rounded-full
                  bg-[#660f1a] text-white
                  text-[11px] sm:text-sm lg:text-lg font-light tracking-widest
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
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none px-6">
        <p
          className="text-white text-sm min-[375px]:text-base min-[425px]:text-xl sm:text-4xl lg:text-7xl font-light mb-2"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          McGill Attachment &amp; Prosociality
        </p>
        <h1
          className="text-white leading-none text-3xl min-[375px]:text-4xl sm:text-6xl md:text-7xl lg:text-9xl"
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
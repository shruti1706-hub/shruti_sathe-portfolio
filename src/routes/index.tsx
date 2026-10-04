import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shruti | Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shruti Sathe, BE Information Technology student (SPPU, Pune) — Java, DSA, Python, React, MySQL. Projects, internships, certifications and contact for software developer placements.",
      },
      { property: "og:title", content: "Shruti | Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "BE IT student at Trinity College of Engineering & Research, Pune. Java, DSA, Python, React, MySQL. Open to software developer placements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PortfolioPage,
});

const EMAIL = "shrutisathe1706@gmail.com";
const GITHUB_URL = "https://github.com/shruti1706-hub";
const LINKEDIN_URL = "https://www.linkedin.com/in/shruti-sathe-25605b298";
const RESUME_URL = "/Shruti_Sathe_IT.pdf";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const ROLES = [
  { title: "Java Developer", emoji: "☕" },
  { title: "Software Developer", emoji: "💻" },
  { title: "Frontend Developer", emoji: "🎨" },
  { title: "AI Enthusiast", emoji: "🤖" },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Java", "C", "Python", "JavaScript"],
  },
  {
    title: "Core & Frontend",
    skills: ["Data Structures & Algorithms", "OOP", "HTML5", "CSS3", "React"],
  },
  {
    title: "Databases & CS Fundamentals",
    skills: ["SQL", "MySQL", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "Eclipse", "VS Code", "Jupyter Notebook"],
  },
];

const PROJECTS = [
  {
    title: "AgroTech",
    subtitle: "AI-Driven Crop Recommendation & Farm Equipment Rental Platform",
    description:
      "A web platform that helps farmers make informed decisions with AI-driven crop recommendations and access farm equipment through an integrated rental system.",
    tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript", "MySQL"],
  },
  {
    title: "Student Management System",
    subtitle: "Java-Based Student Record Management",
    description:
      "A Java application to manage student records efficiently — adding, updating, searching and deleting information — with clean CRUD operations over a MySQL database via JDBC.",
    tech: ["Java", "OOP", "JDBC", "MySQL"],
  },
  {
    title: "Soil Irrigation System",
    subtitle: "IoT-Based Automated Irrigation",
    description:
      "An automated irrigation system using Arduino and soil moisture sensors to monitor soil conditions and control water supply, reducing unnecessary water usage.",
    tech: ["Arduino", "Embedded C/C++", "Sensors", "Relay Module"],
  },
  {
    title: "Web Development Projects",
    subtitle: "Responsive Frontend Builds",
    description:
      "A collection of responsive websites and interfaces built during internships and training — landing pages, component layouts and UI work designed in Figma and built with modern frontend tooling.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
  },
];

const EXPERIENCE = [
  {
    role: "Python Developer Intern",
    org: "Codec Technologies",
    type: "Internship",
    points: [
      "Gained hands-on experience in Python programming and application development.",
      "Worked on debugging, problem-solving, and implementing Python-based solutions.",
    ],
  },
  {
    role: "Full Stack Development with AI",
    org: "EY GDS — Edunet Foundation",
    type: "Internship",
    points: [
      "Gained hands-on experience in frontend and backend development concepts with AI-assisted tools.",
      "Developed skills in web development, debugging, and application problem-solving.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "Divine Tech",
    type: "Internship",
    points: [
      "Designed responsive web interfaces using Figma and frontend development concepts.",
      "Worked on responsive layouts and improved user interface design.",
    ],
  },
  {
    role: "Full Stack Java Development",
    org: "Codec Technologies",
    type: "Training",
    points: [
      "Completed structured training in full stack Java development.",
      "Built practical skills across backend logic, databases and web layers.",
    ],
  },
];

const EDUCATION = [
  {
    title: "B.E. — Information Technology",
    org: "Trinity College of Engineering & Research, Pune",
    detail: "Savitribai Phule Pune University (SPPU) · 2023 – 2027",
    score: "CGPA 8.19 / 10",
    scoreLabel: "Current",
  },
  {
    title: "HSC — Maharashtra State Board",
    org: "Higher Secondary Certificate",
    detail: "2023",
    score: "63.00%",
    scoreLabel: "",
  },
  {
    title: "SSC — Maharashtra State Board",
    org: "Secondary School Certificate",
    detail: "2021",
    score: "91.20%",
    scoreLabel: "",
  },
];

const CERTIFICATIONS = [
  { title: "Programming in Java", issuer: "NPTEL (SWAYAM)" },
  { title: "Full Stack Java Development", issuer: "Codec Technologies" },
  { title: "Full Stack Web Development with AI Tools", issuer: "Edunet Foundation · AICTE · EY" },
  { title: "AI Skills Passport", issuer: "EY · Microsoft" },
  { title: "Python Developer Internship", issuer: "Codec Technologies" },
  { title: "Basics of Data Structures & Algorithms", issuer: "Simplilearn" },
];

const ACHIEVEMENTS = [
  {
    title: "Head of Documentation",
    detail: "Leading documentation for TITAN — the IT Department student body.",
  },
  {
    title: "NPTEL Certified — Programming in Java",
    detail: "Nationally recognized certification through SWAYAM.",
  },
  {
    title: "Certified in Full Stack Java",
    detail: "End-to-end Java development certification from Codec Technologies.",
  },
  {
    title: "Web Development & AI Tools",
    detail: "Certified by Edunet Foundation with AICTE and EY.",
  },
];

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ─────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-accent to-[oklch(0.72_0.17_350)] text-sm font-bold text-accent-foreground">
              S
            </span>
            Shruti&nbsp;<span className="hidden text-muted-foreground sm:inline">| Software Developer</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              download="Shruti_Sathe_IT.pdf"
              className="hidden items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <Download className="size-4" />
              Resume
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              
            </div>
          </nav>
        )}
      </header>

      <main id="home">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* soft radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 70% 20%, oklch(0.62 0.19 292 / 0.12), transparent 70%)",
            }}
          />
          <div className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-24 pt-28 sm:px-8">
            <div className="flex gap-5 sm:gap-8">
              {/* vertical accent line */}
              <div className="flex shrink-0 flex-col items-center">
                <span className="size-5 rounded-full bg-accent" />
                <span className="w-1 flex-1 rounded-full bg-gradient-to-b from-accent to-transparent" />
              </div>
              <div>
                <Reveal>
                  <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-7xl lg:text-8xl">
                    Hi, I'm <span className="text-gradient">Shruti</span>
                  </h1>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground sm:text-2xl">
                    I’m a passionate software developer focused on building scalable applications, solving real-world problems, and creating seamless digital experiences.
                  </p>
                </Reveal>
                
                <Reveal delay={300}>
                  <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-accent" />
                    Pune, Maharashtra, India
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section id="about" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="Introduction" title="Overview." />
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm a final-year Information Technology student at Trinity College of Engineering &amp; Research,
                Pune (SPPU), with a current CGPA of 8.19/10. My core strength is Java, backed by a strong
                foundation in Data Structures &amp; Algorithms, OOP, and database systems. Through internships in
                Python development, full stack development with AI tools, and web development, I've learned to move
                quickly from a problem statement to working, well-structured code. Let's work together to bring
                your ideas to life!
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {ROLES.map((role, i) => (
                <Reveal key={role.title} delay={i * 80}>
                  <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-accent/40">
                    <span className="text-4xl" aria-hidden="true">
                      {role.emoji}
                    </span>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">{role.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section id="skills" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="My Technical Expertise" title="Technologies." />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((group, i) => (
                <Reveal key={group.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section id="projects" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="My Work" title="Projects." />
              <p className="-mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                The following projects showcase my skills and experience through real-world examples of my work —
                from AI-driven web platforms to Java desktop systems and IoT hardware.
              </p>
            </Reveal>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <Reveal key={project.title} delay={(i % 2) * 80}>
                  <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/40">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                          {project.subtitle}
                        </p>
                      </div>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="size-5" />
                      </a>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section id="experience" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="What I Have Done So Far" title="Work Experience." />
            </Reveal>
            <ol className="relative space-y-10 border-l-2 border-accent/25 pl-8 sm:pl-10">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.role + job.org} delay={i * 60}>
                  <li className="relative">
                    <span className="absolute -left-[41px] top-1.5 grid size-4 place-items-center rounded-full bg-accent ring-4 ring-background sm:-left-[49px]" />
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">{job.type}</p>
                      <h3 className="mt-1.5 text-lg font-bold tracking-tight text-foreground">{job.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-muted-foreground">{job.org}</p>
                      <ul className="mt-4 space-y-2">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Education ────────────────────────────────────── */}
        <section id="education" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="My Academic Journey" title="Education." />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
                    <GraduationCap className="size-6 text-accent" />
                    <h3 className="mt-3 text-base font-bold tracking-tight text-foreground">{ed.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{ed.org}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{ed.detail}</p>
                    <p className="mt-auto pt-5">
                      <span className="inline-flex items-baseline gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
                        {ed.score}
                        {ed.scoreLabel && (
                          <span className="text-xs font-normal text-muted-foreground">({ed.scoreLabel})</span>
                        )}
                      </span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ───────────────────────────────── */}
        <section id="certifications" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="Continuous Learning" title="Certifications." />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((cert, i) => (
                <Reveal key={cert.title} delay={(i % 3) * 60}>
                  <div className="flex h-full items-start gap-3.5 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40">
                    <Award className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug text-foreground">{cert.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ─────────────────────────────────── */}
        <section id="achievements" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHead kicker="Beyond Code" title="Achievements." />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {ACHIEVEMENTS.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 60}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Trophy className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <div
                className="rounded-3xl border border-border p-8 sm:p-14"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.24 0.07 292), oklch(0.18 0.05 278) 60%)",
                }}
              >
                <p className="section-kicker">Get in touch</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                  Looking for a developer who learns fast and ships clean code?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-pretty text-muted-foreground sm:text-base">
                  I'm currently open to software developer and Java developer placement opportunities. Based in
                  Pune, Maharashtra — feel free to reach out.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="size-4" />
                    {EMAIL}
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                  >
                    <Github className="size-4" />
                    shruti1706-hub
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                  >
                    <Linkedin className="size-4" />
                    shruti-sathe
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shruti Sathe — Pune, Maharashtra
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

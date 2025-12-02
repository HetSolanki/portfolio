// src/components/Portfolio.tsx
import React, { useEffect, useState } from "react";
import { workExperience, projects, skills } from "./data/portfolioData";

type SectionId = "about" | "work" | "projects" | "skills";

const sections: { id: SectionId; label: string; keyHint: string }[] = [
  { id: "about", label: "About", keyHint: "1" },
  { id: "work", label: "Work", keyHint: "2" },
  { id: "projects", label: "Projects", keyHint: "3" },
  { id: "skills", label: "Skills", keyHint: "4" },
];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<SectionId>("about");

  const emailRef = React.useRef<HTMLAnchorElement>(null);
  const linkedinRef = React.useRef<HTMLAnchorElement>(null);
  const githubRef = React.useRef<HTMLAnchorElement>(null);
  const resumeRef = React.useRef<HTMLAnchorElement>(null);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  // Keyboard shortcuts 1–4 for sections + E/L/G/R for links
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      // Section shortcuts
      if (e.key === "1") scrollTo("about");
      if (e.key === "2") scrollTo("work");
      if (e.key === "3") scrollTo("projects");
      if (e.key === "4") scrollTo("skills");

      // External link shortcuts
      const key = e.key.toLowerCase();
      if (key === "e") emailRef.current?.click();
      if (key === "l") linkedinRef.current?.click();
      if (key === "g") githubRef.current?.click();
      if (key === "r") resumeRef.current?.click();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;
        const id = visible.target.id as SectionId;
        if (sections.some((s) => s.id === id)) setActive(id);
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#d4d4d4] font-mono">
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* Header */}
        <header className="mb-8 md:mb-10">
          <p className="text-green-500 text-sm mb-1">$ whoami</p>
          <h1 className="text-4xl md:text-5xl text-white font-semibold tracking-tight">
            Het Solanki
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-1">
            Full Stack Developer
          </p>
          <p className="text-sm text-gray-500 mt-1">
            India · Open to Remote Work
          </p>

          <div className="flex flex-wrap gap-6 mt-5 text-sm md:text-base text-gray-300">
            <a
              ref={emailRef}
              href="mailto:hetsolanki.work@gmail.com"
              className="hover:text-green-400 transition-colors"
            >
              Email (E)
            </a>
            <a
              ref={linkedinRef}
              href="https://www.linkedin.com/in/het-solanki-119476216/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              LinkedIn (L)
            </a>
            <a
              ref={githubRef}
              href="https://github.com/HetSolanki"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              GitHub (G)
            </a>
            <a
              ref={resumeRef}
              href="https://drive.google.com/file/d/18Rwj_4jgkhdbNjtYuVQ1ztIomUqbO7wG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              Resume (R)
            </a>
          </div>
        </header>

        {/* Terminal-style card */}
        <div className="border border-[#2a2a2a] rounded-2xl overflow-hidden bg-[#050505] shadow-[0_0_40px_rgba(0,0,0,0.75)]">
          {/* macOS style top bar with 3 dots */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#222] bg-[#101010]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-xs text-gray-500">portfolio — bash</p>
            <div className="w-12" />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 px-5 py-3 border-b border-[#1f1f1f] bg-[#070707] text-sm md:text-base">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-2 ${
                  active === s.id
                    ? "text-green-400 font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {s.label}
                <span className="text-[10px] border border-[#333] px-1 rounded text-gray-600">
                  {s.keyHint}
                </span>
              </button>
            ))}
            <span className="ml-auto text-[11px] text-gray-600">
              Shortcuts: 1–4 · E/L/G/R
            </span>
          </div>

          {/* Content */}
          <div className="px-6 py-7 space-y-14 text-[17px] leading-[1.8]">
            {/* About */}
            <section id="about" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-green-400">
                <span className="text-green-500">$</span> about
              </h2>

              <p className="text-gray-200">
                I am a Full-Stack Developer passionate about building modern,
                reliable, and user-friendly web solutions. I focus on creating
                clean, efficient, and scalable applications that help businesses
                grow digitally. From frontend design to backend logic, I ensure
                every project is built with performance, security, and usability
                in mind.
              </p>
            </section>

            {/* Work Experience */}
            <section id="work" className="scroll-mt-28 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-green-400">
                <span className="text-green-500">$</span> work experience
              </h2>

              {workExperience.map((job, i) => (
                <div
                  key={i}
                  className="border-l-2 border-green-700 pl-4 space-y-2"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <p className="text-white text-xl md:text-2xl font-semibold">
                      {job.role}
                    </p>
                    <p className="text-sm text-gray-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500">
                    {job.duration}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-[15px] text-gray-200">
                    {job.responsibilities.map((r, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-green-500 mt-[2px]">›</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-2 text-sm text-gray-400">
                    Tech:{" "}
                    <span className="font-medium">{job.tech.join(" · ")}</span>
                  </p>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section id="projects" className="scroll-mt-28 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-green-400">
                <span className="text-green-500">$</span> projects
              </h2>

              {projects.map((project, i) => (
                <div
                  key={i}
                  className="border border-[#1b1b1b] rounded-xl p-5 md:p-6 bg-[#080808] space-y-3"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                      {project.name}
                    </h3>
                    <div className="flex gap-3 text-sm">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-full border border-green-700 text-green-400 font-medium hover:bg-green-900/30 transition-colors"
                        >
                          Demo
                        </a>
                      )}
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-full border border-[#333] text-gray-200 font-medium hover:bg-[#111] transition-colors"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-200">{project.description}</p>

                  <p className="text-sm text-gray-400">
                    Tech:{" "}
                    <span className="font-medium">
                      {project.tech.join(" · ")}
                    </span>
                  </p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-28 space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-green-400">
                <span className="text-green-500">$</span> skills
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, list]) => (
                  <div
                    key={category}
                    className="p-5 rounded-xl border border-[#1b1b1b] bg-[#080808] space-y-2"
                  >
                    <p className="text-white text-lg font-semibold">
                      {category}
                    </p>
                    <p className="text-sm text-gray-200">{list.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#1c1c1c] pt-4 mt-2 text-xs md:text-sm text-gray-500 flex flex-wrap items-center justify-between gap-2">
              <span>© {new Date().getFullYear()} Het Solanki</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

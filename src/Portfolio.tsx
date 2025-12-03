import React, { useEffect, useState } from "react";
import { workExperience, projects, skills } from "./data/portfolioData";
import { MdLocationOn } from "react-icons/md";
import { ChevronsRight, Link } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPostman,
  SiPython,
  SiGithubactions,
} from "react-icons/si";
import { FaAws as SiAmazonaws } from "react-icons/fa6";

type SectionId = "work" | "projects" | "skills";

const sections: { id: SectionId; keyHint: string; label: string }[] = [
  { id: "work", keyHint: "1", label: "work" },
  { id: "projects", keyHint: "2", label: "projects" },
  { id: "skills", keyHint: "3", label: "skills" },
];

// Skill icons mapping - THIS IS THE OBJECT YOU WERE LOOKING FOR
const skillIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": SiPostman,
  MongoDB: SiMongodb,
  MySQL: SiPostgresql,
  Docker: SiDocker,
  AWS: SiAmazonaws,
  Git: SiGit,
  "Github Actions": SiGithubactions,
};

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<SectionId>("work");

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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      const key = e.key.toLowerCase();

      if (key === "1") scrollTo("work");
      if (key === "2") scrollTo("projects");
      if (key === "3") scrollTo("skills");

      if (key === "e") emailRef.current?.click();
      if (key === "l") linkedinRef.current?.click();
      if (key === "g") githubRef.current?.click();
      if (key === "r") resumeRef.current?.click();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;
        const id = visible.target.id as SectionId;
        if (sections.some((s) => s.id === id)) setActive(id);
      },
      { threshold: 0.25 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#02030a] text-[#d4d4d4] font-mono">
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-wrap gap-6 text-base md:text-xl mb-6">
          <a
            ref={emailRef}
            href="mailto:hetsolanki.work@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <span className="text-green-400">[e]</span> email
          </a>
          <a
            ref={githubRef}
            href="https://github.com/HetSolanki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <span className="text-green-400">[g]</span> github
          </a>
          <a
            ref={linkedinRef}
            href="https://www.linkedin.com/in/het-solanki-119476216/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <span className="text-green-400">[l]</span> linkedin
          </a>
          <a
            ref={resumeRef}
            href="https://drive.google.com/file/d/18Rwj_4jgkhdbNjtYuVQ1ztIomUqbO7wG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <span className="text-green-400">[r]</span> resume
          </a>
        </div>

        <header className="mb-10 md:mb-12">
          <p className="text-green-500 text-sm mb-1">$ whoami</p>
          <h1 className="text-4xl md:text-5xl text-white font-semibold tracking-tight">
            Het Solanki.
          </h1>
          <p className="flex items-center gap-1 text-sm md:text-base text-gray-500 mt-1">
            <MdLocationOn className="text-green-400" size={16} />
            Ahmedabad, India
          </p>

          <p className="text-[15px] md:text-[16px] text-gray-300 mt-5 max-w-2xl leading-relaxed">
            I am a full-stack developer focused on building reliable, modern web
            applications. I enjoy turning ideas into clean, scalable products —
            from APIs and databases to simple, minimal interfaces that feel good
            to use.
          </p>
        </header>

        <div className="border border-[#20242f] rounded-2xl overflow-hidden bg-[#05060f] shadow-[0_0_40px_rgba(0,0,0,0.85)]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#1a1d27] bg-[#090a14]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="text-xs text-gray-500">het@portfolio: ~/site</p>
            <div className="w-12" />
          </div>

          <div className="px-5 py-3 border-b border-[#1a1d27] bg-[#070815]">
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    active === s.id
                      ? "text-green-400 font-semibold"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  <span className="text-[11px] border border-[#333] px-1 rounded text-gray-500">
                    {s.keyHint}
                  </span>
                  <span className="lowercase">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 space-y-16 text-[16px] md:text-[17px] leading-[1.8]">
            <section id="work" className="scroll-mt-28 space-y-6">
              <div className="space-y-1">
                <h2 className="text-[19px] md:text-[26px] font-semibold text-gray-100 flex items-center gap-2">
                  <span className="text-green-400 inline-block">
                    <ChevronsRight size={25} />
                  </span>
                  Work experience
                </h2>
              </div>

              <div className="space-y-6">
                {workExperience.map((job, i) => (
                  <div
                    key={i}
                    className="group border border-[#1c2130] bg-[#050814] px-4 py-4 md:px-5 md:py-5 space-y-2 transition-all duration-300 ease-out hover:border-[#7dff7d] hover:bg-[#050d1b] hover:-translate-y-[3px] hover:shadow-[0_0_30px_rgba(0,255,120,0.18)]"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <div>
                        {"companyUrl" in job && (job as any).companyUrl ? (
                          <a
                            href={(job as any).companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[17px] md:text-[20px] text-gray-100 font-semibold transition-colors group-hover:text-green-300"
                          >
                            <span>{job.company}</span>
                            <span className="opacity-0 group-hover:opacity-100 text-[17px] -translate-y-[1px] transition-opacity duration-200">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <p className="text-[16px] md:text-[20px] text-gray-100 font-semibold transition-colors group-hover:text-green-300">
                            {job.company}
                          </p>
                        )}
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          {job.role} · {job.duration}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-2 space-y-1.5 text-[14px] md:text-[15px] text-gray-200">
                      {job.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-gray-400 group-hover:bg-[#7dff7d] transition-colors" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] md:text-[12px] rounded-full border border-[#2a3245] bg-[#080d1e] px-2.5 py-1 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="scroll-mt-28 space-y-6">
              <div className="space-y-1">
                <h2 className="text-[19px] md:text-[26px] font-semibold text-gray-100 flex items-center gap-2">
                  <span className="text-green-400 inline-block">
                    <ChevronsRight size={25} />
                  </span>
                  Projects
                </h2>
              </div>

              <div className="space-y-5">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="group border border-[#1c2130] bg-[#050814] px-4 py-4 md:px-5 md:py-5 transition-all duration-300 ease-out hover:border-[#7dff7d] hover:bg-[#050d1b] hover:-translate-y-[3px] hover:shadow-[0_0_30px_rgba(0,255,120,0.18)]"
                  >
                    <div className="flex justify-between gap-2 mb-2 items-center">
                      <p className="text-[17px] md:text-[20px] text-gray-100 font-semibold transition-colors group-hover:text-green-300">
                        {project.name}
                      </p>

                      {(project.demo || project.source) && (
                        <a
                          href={project.demo || project.source}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-green-300 transition-colors"
                          aria-label="Open project"
                        >
                          <Link className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-[14px] md:text-[15px] text-gray-200 mb-3">
                      {project.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex flex-wrap gap-2 text-[11px] md:text-[12px] text-gray-200">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-[#272a38] bg-[#090c1a] px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="scroll-mt-28 space-y-6">
              <div className="space-y-1">
                <h2 className="text-[19px] md:text-[26px] font-semibold text-gray-100 flex items-center gap-2">
                  <span className="text-green-400 inline-block">
                    <ChevronsRight size={25} />
                  </span>{" "}
                  Skills
                </h2>
              </div>

              <div className="border border-[#1c2130] bg-[#050814] px-4 py-5 md:px-6 md:py-6 transition-all duration-300 ease-out hover:border-[#7dff7d]/60 hover:bg-[#050d1b]">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4">
                  {Object.entries(skills).map(([category, list]) =>
                    list.map((skill, idx) => {
                      const IconComponent = skillIcons[skill];
                      const randomDelay = Math.random() * 0.3;

                      return (
                        <div
                          key={`${category}-${idx}`}
                          className="group relative flex items-center justify-center aspect-square rounded-lg border border-[#2a3245] bg-[#080d1e] text-gray-300 transition-all duration-200 hover:border-[#7dff7d] hover:bg-[#0a1420] hover:text-green-300 hover:shadow-[0_0_20px_rgba(0,255,120,0.25)] hover:-translate-y-[3px] hover:scale-110 cursor-default"
                          style={{ transitionDelay: `${randomDelay}s` }}
                        >
                          {IconComponent ? (
                            <IconComponent size={25} />
                          ) : (
                            <span className="text-[10px] font-semibold text-center px-1">
                              {skill.slice(0, 3).toUpperCase()}
                            </span>
                          )}
                          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1a1d27] text-[11px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg border border-[#2a3245]">
                            {skill}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </section>

            <footer className="border-t border-[#1a1d27] pt-4 mt-2 text-[11px] md:text-xs text-gray-500 flex flex-wrap items-center justify-center gap-2">
              <span>© {new Date().getFullYear()} Het Solanki</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

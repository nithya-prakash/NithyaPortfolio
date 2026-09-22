"use client";

import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="snap-page container-px mx-auto max-w-6xl py-20 sm:py-28 lg:snap-start"
    >
      <SectionHeading
        eyebrow={t.projectsSection.eyebrow}
        index={t.projectsSection.index}
        title={t.projectsSection.title}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

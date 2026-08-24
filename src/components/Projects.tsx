import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-page container-px mx-auto max-w-6xl py-20 sm:py-28 lg:snap-start"
    >
      <SectionHeading eyebrow="Selected Work" index="02" title="Things I've built end to end." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

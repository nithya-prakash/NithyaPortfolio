"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ProjectVisual from "@/components/ProjectVisual";
import TechIcon from "@/components/TechIcon";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
      >
        <div className="flex h-32 shrink-0 items-center justify-center border-b border-line bg-bg-alt p-6">
          <ProjectVisual index={index} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="font-serif text-2xl text-line-strong transition-colors duration-500 group-hover:text-accent/50">
            {project.number}
          </span>

          <h3 className="mt-2 text-balance text-lg font-semibold tracking-tight text-ink">
            {project.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint"
              >
                <TechIcon name={tech} size={12} />
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex w-fit items-center gap-1.5 pt-5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}

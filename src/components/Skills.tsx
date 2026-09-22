"use client";

import Reveal, { StaggerGroup, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import TechIcon from "@/components/TechIcon";
import { useLanguage } from "@/lib/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const allSkills = Array.from(new Set(t.skills.flatMap((g) => g.items)));

  return (
    <section
      id="skills"
      className="snap-page flex min-h-screen flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.skillsSection.eyebrow}
          index={t.skillsSection.index}
          title={t.skillsSection.title}
        />

        <StaggerGroup className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.map((group) => (
            <motion.div key={group.category} variants={staggerItem}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-ink-faint">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-ink"
                  >
                    <TechIcon name={item} size={12} className="shrink-0 text-ink-soft" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <Marquee items={allSkills} />
      </Reveal>
    </section>
  );
}

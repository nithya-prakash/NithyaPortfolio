"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import HeroCircles from "@/components/HeroCircles";
import { heroFacts, profile } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="snap-page relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:h-screen lg:snap-start lg:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />

      <HeroCircles />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container-px relative mx-auto max-w-6xl"
      >
        <motion.p
          variants={item}
          className="font-script text-2xl text-accent sm:text-3xl"
        >
          Hey there,
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-balance font-serif text-[13vw] font-medium leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m Nithya.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          AI Engineer building intelligent systems that actually work.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          {profile.heroSupport}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft"
        >
          {heroFacts.map((fact, i) => (
            <span key={fact} className="flex items-center gap-2">
              {i !== 0 && <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden />}
              {fact}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s Connect
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={17} />
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-script text-xl text-ink-faint sm:mt-10 sm:text-2xl"
        >
          {profile.signature}
        </motion.p>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-faint transition-colors hover:text-accent sm:bottom-8"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}

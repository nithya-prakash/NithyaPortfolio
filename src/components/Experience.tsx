"use client";

import JourneyTimeline from "@/components/JourneyTimeline";
import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <JourneyTimeline
      id="experience"
      eyebrow={t.experienceSection.eyebrow}
      index={t.experienceSection.index}
      title={t.experienceSection.title}
      entries={t.experience}
    />
  );
}

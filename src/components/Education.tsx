"use client";

import JourneyTimeline from "@/components/JourneyTimeline";
import { useLanguage } from "@/lib/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <JourneyTimeline
      id="education"
      eyebrow={t.educationSection.eyebrow}
      index={t.educationSection.index}
      title={t.educationSection.title}
      entries={t.education}
    />
  );
}

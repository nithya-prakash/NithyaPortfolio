import { experience } from "@/lib/data";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Experience() {
  return (
    <JourneyTimeline
      id="experience"
      eyebrow="Experience"
      index="04"
      title="Where I've worked, what I'm building."
      entries={experience}
    />
  );
}

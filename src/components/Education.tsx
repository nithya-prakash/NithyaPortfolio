import { education } from "@/lib/data";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Education() {
  return (
    <JourneyTimeline
      id="education"
      eyebrow="Education"
      index="03"
      title="Where I've studied."
      entries={education}
    />
  );
}

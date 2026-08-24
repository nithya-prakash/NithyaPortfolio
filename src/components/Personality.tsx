import { personality } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Personality() {
  return (
    <section
      id="personality"
      className="snap-page container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20 sm:py-28 lg:h-screen lg:snap-start lg:py-0"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-3xl" aria-hidden>
          ☕️
        </span>
        <p className="mt-6 text-balance font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          {personality.line1}
        </p>
        <p className="mt-6 text-base text-ink-faint">{personality.line2}</p>
      </Reveal>
    </section>
  );
}

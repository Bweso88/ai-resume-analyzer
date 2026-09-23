import { Award } from "lucide-react";
import { steps, strengths } from "../data/content";
import { LogoMark } from "./Logo";
import { Reveal, SectionTitle } from "./Reveal";

export function Method() {
  return (
    <section id="methodologie" className="relative overflow-hidden bg-plum-950 py-24 text-white">
      <LogoMark className="pointer-events-none absolute -right-24 -bottom-24 w-[28rem] opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle light eyebrow="Notre méthodologie" title="Cinq étapes pour des dispositifs pragmatiques et durables" />
        </Reveal>

        <Reveal>
          <ol className="grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500 font-display text-lg text-gold-300">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-gold-500 to-transparent md:block" />
                  )}
                </div>
                <h3 className="font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-24">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Nos <span className="text-gold">atouts</span>
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <li key={s} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <Award size={22} className="shrink-0 text-amber-brand" />
                <span className="text-white/85">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

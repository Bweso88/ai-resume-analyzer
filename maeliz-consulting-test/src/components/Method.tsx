import { Award } from "lucide-react";
import { steps, strengths } from "../data/content";
import { LogoMark } from "./Logo";
import { Reveal, SectionTitle } from "./Reveal";

export function Method() {
  return (
    <section id="methodologie" className="on-dark relative overflow-hidden bg-plum-950 py-16 text-white md:py-24">
      <LogoMark className="pointer-events-none absolute -right-24 -bottom-24 w-[28rem] opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Notre méthodologie"
            title="Une méthode en cinq étapes"
            lead="Des dispositifs pragmatiques et durables, de l'état des lieux au transfert de compétences."
          />
        </Reveal>

        <Reveal>
          <ol className="grid gap-7 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 md:block">
                <div className="flex items-center gap-3 md:mb-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500 font-display text-lg text-gold-300">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-gold-500 to-transparent md:block" />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-h4 font-medium">{s.title}</h3>
                  <p className="mt-1.5 text-small text-white/75">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-16 md:mt-24">
          <SectionTitle light eyebrow="Pourquoi Maeliz Consulting" title="Nos atouts" className="mb-8 md:mb-10" />
          <ul className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {strengths.map((s) => (
              <li key={s} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:gap-4 md:p-6">
                <Award size={22} className="mt-0.5 shrink-0 text-amber-brand" aria-hidden="true" />
                <span className="text-body text-white/85">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

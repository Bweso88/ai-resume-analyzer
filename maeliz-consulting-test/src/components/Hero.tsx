import { ArrowRight, MapPin } from "lucide-react";
import { cta, hero, site, stats, trustedBy } from "../data/content";
import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 md:pb-20">
      {/* Halo décoratif aux couleurs du logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-plum-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12rem] h-[24rem] w-[24rem] rounded-full bg-amber-brand/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-1.5 text-sm font-medium text-plum-700">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-amber-brand" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-[16ch] font-display text-h1 font-medium text-balance text-plum-900">
            Des archives maîtrisées, <span className="text-plum-600">conformes</span> et{" "}
            <span className="text-gold-600">accessibles</span>
          </h1>
          <p className="mt-6 max-w-[54ch] text-lead text-muted">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-plum-600 px-7 font-medium text-white shadow-lg shadow-plum-600/20 transition hover:bg-plum-700"
            >
              {cta.primary} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#prestations"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-plum-600/40 px-7 font-medium text-plum-700 transition hover:border-plum-600 hover:bg-white"
            >
              {cta.secondary}
            </a>
          </div>
          <p className="mt-7 flex items-center gap-2 text-small text-muted">
            <MapPin size={16} className="shrink-0 text-plum-500" aria-hidden="true" /> Basés à {site.city}, intervenant
            en France et à l'international
          </p>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <LogoMark className="w-full drop-shadow-xl" />
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-5 sm:px-8 md:mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-plum-100 bg-plum-100 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-white p-5 sm:p-6">
              <dt className="mt-1 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="font-display text-[1.75rem] leading-tight font-medium text-plum-600 sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
          <p className="shrink-0 text-sm font-semibold tracking-[0.16em] text-plum-600 uppercase">
            Ils nous font confiance
          </p>
          <p className="text-small text-ink/80">
            {trustedBy.join(" · ")}{" "}
            <a href="#references" className="font-medium whitespace-nowrap text-plum-600 underline-offset-4 hover:underline">
              et d'autres références →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

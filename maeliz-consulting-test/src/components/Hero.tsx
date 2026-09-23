import { ArrowRight, MapPin } from "lucide-react";
import { site, stats } from "../data/content";
import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Halo décoratif aux couleurs du logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-plum-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12rem] h-[24rem] w-[24rem] rounded-full bg-amber-brand/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-1.5 text-sm font-medium text-plum-700">
            <span className="h-2 w-2 rounded-full bg-amber-brand" />
            {site.tagline}
          </p>
          <h1 className="font-display text-4xl leading-tight font-medium text-plum-900 sm:text-5xl lg:text-[3.4rem]">
            Une expertise documentaire au service de la <span className="text-plum-600">performance</span>, de la{" "}
            <span className="text-plum-600">conformité</span> et de la{" "}
            <span className="text-gold-600">sécurisation</span> de l'information
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Conseil, records management, archivage physique et électronique, dématérialisation et formation : nous
            intervenons à chaque étape du cycle de vie de vos documents.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-plum-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-plum-600/25 transition hover:bg-plum-700"
            >
              Parlons de votre projet <ArrowRight size={18} />
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 rounded-full border border-plum-600/30 px-7 py-3.5 font-medium text-plum-700 transition hover:border-plum-600 hover:bg-white"
            >
              Nos prestations
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-plum-500" /> Basés à {site.city} — en France et à l'international
          </p>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <LogoMark className="w-full drop-shadow-xl" />
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-plum-100 bg-plum-100 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-white p-6">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-medium text-plum-600">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

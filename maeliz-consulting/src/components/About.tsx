import { Check, Handshake, Repeat } from "lucide-react";
import { about, mission, partners, team } from "../data/content";
import { Reveal, SectionTitle } from "./Reveal";

export function About() {
  return (
    <section id="a-propos" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Qui sommes-nous" title="Un cabinet d'experts de l'archive et de l'information" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="space-y-5">
            <div className="rounded-2xl border border-plum-100 bg-white p-6">
              <div className="flex items-center gap-3 text-plum-700">
                <Repeat size={20} />
                <h3 className="font-display text-lg font-medium">Reprise des activités d'Archivo</h3>
              </div>
              <p className="mt-3 text-muted">
                Depuis 2024-2025, Maeliz Consulting a repris les activités de la société Archivo, assurant la continuité
                des prestations, des compétences et des références développées depuis de nombreuses années auprès de
                grands comptes, d'établissements publics et d'organisations nationales.
              </p>
            </div>

            <div className="rounded-2xl border border-plum-100 bg-white p-6">
              <div className="flex items-center gap-3 text-plum-700">
                <Handshake size={20} />
                <h3 className="font-display text-lg font-medium">Partenariats stratégiques</h3>
              </div>
              <p className="mt-3 text-muted">
                Avec {partners.join(" et ")}, nous proposons une offre complète : conseil, traitement des archives,
                conservation externalisée, logistique documentaire, gestion des archives physiques et numériques.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {partners.map((p) => (
                  <li key={p} className="rounded-full bg-plum-50 px-3 py-1 text-sm font-medium text-plum-700">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="flex gap-5 rounded-2xl bg-plum-900 p-7 text-white">
              <div
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-brand to-plum-500 font-display text-lg font-medium"
              >
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <h3 className="font-display text-xl font-medium">{m.name}</h3>
                <p className="text-sm font-medium tracking-wide text-gold-300 uppercase">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{m.text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Notre mission" title="Faire de la gestion documentaire un levier de performance" />
            <p className="-mt-4 text-lg leading-relaxed text-muted">{mission.text}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {mission.goals.map((g) => (
              <li key={g} className="flex gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-plum-100">
                <Check size={20} className="mt-0.5 shrink-0 text-amber-brand" strokeWidth={3} />
                <span className="text-ink">{g}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

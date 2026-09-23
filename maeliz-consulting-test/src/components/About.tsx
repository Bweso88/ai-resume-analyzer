import { Check, Handshake, Repeat } from "lucide-react";
import { about, mission, partners, team } from "../data/content";
import { Reveal, SectionTitle } from "./Reveal";

export function About() {
  return (
    <section id="a-propos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <Reveal>
            <SectionTitle eyebrow="Le cabinet" title="Un cabinet expert de l'archive et de l'information" className="mb-6" />
            <div className="max-w-[62ch] space-y-4 text-lead text-muted">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="space-y-4">
            <div className="rounded-2xl border border-plum-100 bg-paper p-6">
              <div className="flex items-center gap-3 text-plum-700">
                <Repeat size={20} aria-hidden="true" />
                <h3 className="font-display text-h4 font-medium">La continuité d'Archivo</h3>
              </div>
              <p className="mt-2 text-small text-muted">
                Depuis 2024-2025, Maeliz Consulting a repris les activités de la société Archivo : mêmes compétences,
                mêmes références auprès de grands comptes et d'établissements publics.
              </p>
            </div>

            <div className="rounded-2xl border border-plum-100 bg-paper p-6">
              <div className="flex items-center gap-3 text-plum-700">
                <Handshake size={20} aria-hidden="true" />
                <h3 className="font-display text-h4 font-medium">Partenariats stratégiques</h3>
              </div>
              <p className="mt-2 text-small text-muted">
                Avec {partners.join(" et ")} : conservation externalisée, logistique documentaire et gestion des
                archives physiques et numériques.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
          {team.map((m) => (
            <article key={m.name} className="flex gap-4 rounded-2xl bg-plum-900 p-6 text-white md:gap-5 md:p-7">
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
                <h3 className="font-display text-h4 font-medium">{m.name}</h3>
                <p className="mt-0.5 text-sm font-medium tracking-wide text-gold-300 uppercase">{m.role}</p>
                <p className="mt-3 text-small text-white/80">{m.text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <SectionTitle eyebrow="Notre mission" title="Vos enjeux, nos engagements" lead={mission.text} className="" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {mission.goals.map((g) => (
              <li key={g} className="flex gap-3 rounded-xl bg-paper p-4 ring-1 ring-plum-100">
                <Check size={20} className="mt-0.5 shrink-0 text-plum-600" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-body text-ink">{g}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

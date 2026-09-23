import { useState } from "react";
import { references, type Sector } from "../data/content";
import { Reveal, SectionTitle } from "./Reveal";

const filters: { value: Sector | "all"; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "public", label: "Secteur public" },
  { value: "private", label: "Secteur privé" },
];

export function References() {
  const [filter, setFilter] = useState<Sector | "all">("all");
  const list = filter === "all" ? references : references.filter((r) => r.sector === filter);
  const featured = list.filter((r) => r.featured);
  const others = list.filter((r) => !r.featured);

  return (
    <section id="references" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <SectionTitle
            className=""
            eyebrow="Références"
            title="Ils nous ont confié leurs archives"
            lead="Grands comptes, établissements publics et institutions nationales, accompagnés par Maeliz Consulting et par l'équipe d'Archivo."
          />
          <div role="group" aria-label="Filtrer les références" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`min-h-11 rounded-full px-4 text-sm font-medium transition ${
                  filter === f.value
                    ? "bg-plum-600 text-white"
                    : "bg-white text-plum-700 ring-1 ring-plum-100 hover:ring-plum-500"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {featured.length > 0 && (
          <>
            <h3 className="sr-only">Missions détaillées</h3>
            <ul className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {featured.map((r) => (
                <li key={r.client} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-plum-100">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-gold-700">{r.period}</p>
                    {r.volume && (
                      <span className="rounded-full bg-plum-50 px-2.5 py-0.5 text-sm font-semibold text-plum-600">
                        {r.volume}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2 font-display text-h4 font-medium text-plum-900">{r.client}</h4>
                  <p className="mt-2 text-small text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {others.length > 0 && (
          <>
            <h3 className="mt-10 mb-4 font-display text-h4 font-medium text-plum-900">Autres références</h3>
            <ul className="grid gap-x-8 border-t border-plum-100 md:grid-cols-2">
              {others.map((r) => (
                <li key={r.client} className="border-b border-plum-100 py-4">
                  <p className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="font-medium text-plum-900">{r.client}</span>
                    <span className="text-sm text-gold-700">{r.period}</span>
                  </p>
                  <p className="mt-1 text-small text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-6 text-sm text-muted">ml : mètres linéaires d'archives traités.</p>
      </div>
    </section>
  );
}

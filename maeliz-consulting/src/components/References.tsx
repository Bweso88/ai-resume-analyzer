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

  return (
    <section id="references" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Références principales" title="Ils nous ont confié leurs archives" />
          <div role="group" aria-label="Filtrer les références" className="mb-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
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

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <li key={r.client} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-plum-100">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-gold-700">{r.period}</p>
                {r.volume && (
                  <span className="rounded-full bg-plum-50 px-2.5 py-0.5 text-xs font-semibold text-plum-600">
                    {r.volume}
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-lg font-medium text-plum-900">{r.client}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">ml : mètres linéaires d'archives traités.</p>
      </div>
    </section>
  );
}

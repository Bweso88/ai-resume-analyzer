import { Archive, FileSearch, FolderTree, GraduationCap, ScanLine, Server, Shredder, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "../data/content";
import { Reveal, SectionTitle } from "./Reveal";

const icons: Record<ServiceIcon, LucideIcon> = {
  audit: FileSearch,
  records: FolderTree,
  physical: Archive,
  scan: ScanLine,
  digital: Server,
  destroy: Shredder,
  training: GraduationCap,
};

export function Services() {
  return (
    <section id="prestations" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle eyebrow="Nos prestations" title="Du conseil à la mise en œuvre, sur tout le cycle de vie des documents" />
        </Reveal>
        <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const warm = i % 2 === 1;
            return (
              <article
                key={s.title}
                className="group rounded-2xl border border-plum-100 bg-paper p-7 transition hover:-translate-y-1 hover:border-plum-500/40 hover:shadow-xl hover:shadow-plum-900/5"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    warm ? "bg-amber-brand/15 text-gold-700" : "bg-plum-100 text-plum-600"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-medium text-plum-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </article>
            );
          })}
          <a
            href="#contact"
            className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-plum-600 to-plum-800 p-7 text-white transition hover:shadow-xl"
          >
            <p className="font-display text-xl font-medium">Un besoin spécifique ?</p>
            <p className="mt-3 text-white/80">
              Chaque mission est adaptée à vos contraintes métiers, réglementaires et calendaires.
            </p>
            <span className="mt-6 font-medium text-gold-100">Demander un diagnostic →</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

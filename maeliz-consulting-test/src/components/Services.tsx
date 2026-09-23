import { Archive, FileSearch, FolderTree, GraduationCap, ScanLine, Server, Shredder, type LucideIcon } from "lucide-react";
import { cta, services, type ServiceIcon } from "../data/content";
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
    <section id="prestations" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Nos prestations"
            title="Nos expertises en gestion documentaire"
            lead="Du conseil à la mise en œuvre, nous intervenons sur tout le cycle de vie de vos documents, papier comme numériques."
          />
        </Reveal>
        <Reveal className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const warm = i % 2 === 1;
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-plum-100 bg-paper p-6 transition duration-200 hover:-translate-y-0.5 hover:border-plum-500/40 hover:shadow-lg hover:shadow-plum-900/5 md:p-7"
              >
                <div
                  aria-hidden="true"
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    warm ? "bg-amber-brand/15 text-gold-700" : "bg-plum-100 text-plum-600"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-h4 font-medium text-plum-900">{s.title}</h3>
                <p className="mt-2 text-small text-muted">{s.text}</p>
              </article>
            );
          })}
          <a
            href="#contact"
            className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-plum-600 to-plum-800 p-6 text-white transition hover:shadow-lg md:p-7"
          >
            <span>
              <span className="block font-display text-h4 font-medium">Un besoin spécifique ?</span>
              <span className="mt-2 block text-small text-white/85">
                Un premier échange permet de cadrer votre projet et vos contraintes.
              </span>
            </span>
            <span className="mt-6 font-medium text-gold-100">
              {cta.diagnostic} <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import { nav, site } from "../data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="on-dark bg-plum-950 py-12 text-white/75">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-3 text-small">{site.tagline}</p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <ul className="grid gap-1 text-small">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-9 items-center hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="text-small not-italic">
          <p>{site.city}</p>
          <a href={`mailto:${site.email}`} className="mt-1 inline-flex min-h-9 items-center hover:text-white">
            {site.email}
          </a>
          {site.phone && <p>{site.phone}</p>}
        </address>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-white/65 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </p>
    </footer>
  );
}

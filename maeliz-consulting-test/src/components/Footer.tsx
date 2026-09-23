import { nav, site } from "../data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-plum-950 py-12 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo light />
          <p className="mt-3 text-sm">{site.tagline}</p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} {site.name} — {site.city}
      </p>
    </footer>
  );
}

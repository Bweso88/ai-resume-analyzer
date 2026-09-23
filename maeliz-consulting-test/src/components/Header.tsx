import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cta, nav } from "../data/content";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="Maeliz Consulting — accueil" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.9375rem] font-medium whitespace-nowrap text-ink">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 transition-colors hover:text-plum-600">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full bg-plum-600 px-5 text-white transition-colors hover:bg-plum-700"
              >
                {cta.primary}
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-plum-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="border-t border-plum-100 lg:hidden">
          <ul className="flex flex-col px-5 py-3 sm:px-8">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-12 items-center text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a
                href="#contact"
                className="flex min-h-12 items-center justify-center rounded-full bg-plum-600 font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {cta.primary}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

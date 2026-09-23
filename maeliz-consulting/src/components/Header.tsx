import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Maeliz Consulting — accueil" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-ink">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-plum-600">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full bg-plum-600 px-5 py-2.5 text-white transition-colors hover:bg-plum-700"
              >
                Nous contacter
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-plum-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="border-t border-plum-100 md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

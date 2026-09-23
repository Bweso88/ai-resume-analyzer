import { useEffect, useRef, type ReactNode } from "react";

/** Fait apparaître son contenu lorsqu'il entre dans la zone visible. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-amber-brand" : "text-plum-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl font-medium sm:text-4xl ${light ? "text-white" : "text-plum-900"}`}>{title}</h2>
    </div>
  );
}

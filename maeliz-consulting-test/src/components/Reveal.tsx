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

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
  className?: string;
};

export function SectionTitle({ eyebrow, title, lead, light = false, className = "mb-10 md:mb-12" }: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p
        className={`mb-3 text-sm font-semibold tracking-[0.16em] uppercase ${light ? "text-amber-brand" : "text-plum-600"}`}
      >
        {eyebrow}
      </p>
      <h2 className={`max-w-[22ch] font-display text-h2 font-medium ${light ? "text-white" : "text-plum-900"}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 max-w-[60ch] text-lead ${light ? "text-white/75" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

/** Emblème du logo, redessiné en SVG à partir du fichier d'origine. */
const PLUM = "#a03369";
const PINK = "#b6457e";
const AMBER = "#f8a51c";
const YELLOW = "#fbb116";

// Chaque triangle : [couleur, points]. Grille isométrique de pas 87,5 × 44.
const triangles: [string, string][] = [
  [PLUM, "361,715 448,759 361,803"],
  [PINK, "361,803 448,759 448,847"],
  [PLUM, "448,759 536,803 448,847"],
  [PINK, "448,847 536,803 536,891"],
  [PLUM, "536,803 623,847 536,891"],
  [PINK, "536,891 623,847 623,936"],
  [PLUM, "536,891 623,936 536,980"],
  [PINK, "448,936 536,891 536,980"],
  [YELLOW, "274,847 361,803 361,891"],
  [AMBER, "361,803 448,847 361,891"],
  [AMBER, "274,847 361,891 274,936"],
  [YELLOW, "274,936 361,891 361,980"],
  [AMBER, "361,891 448,936 361,980"],
  [YELLOW, "361,980 448,936 448,1024"],
  [AMBER, "448,936 536,980 448,1024"],
  [YELLOW, "448,1024 536,980 536,1068"],
];

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="270 711 357 361" className={className} aria-hidden="true">
      {triangles.map(([fill, points]) => (
        <polygon key={points} points={points} fill={fill} stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
      ))}
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-end gap-2.5">
      <LogoMark className="h-10 w-auto" />
      <span className="font-display text-xl leading-none tracking-wide sm:text-2xl">
        <span className={light ? "text-gold-300" : "text-gold-700"}>Maeliz </span>
        <span className={light ? "text-gold" : "text-gold-dark"}>Consulting</span>
      </span>
    </span>
  );
}

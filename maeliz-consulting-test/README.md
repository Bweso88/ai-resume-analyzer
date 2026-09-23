# Maeliz Consulting — environnement de test

> Copie de `../maeliz-consulting` pour expérimenter sans toucher à la version principale.
> Ports dédiés : `npm run dev` → http://localhost:5174 · `npm run preview` → http://localhost:4174.
> Une fois une modification validée ici, la reporter dans `../maeliz-consulting`.
>
> **Audit UI/UX** : voir [`AUDIT-UI-UX.md`](AUDIT-UI-UX.md). Les corrections P0 et P1 y sont appliquées.

Site one-page de Maeliz Consulting (conseil, gestion et traitement des archives).

**Stack :** Vite · React 19 · TypeScript · Tailwind CSS v4 · icônes Lucide · polices Jost et Inter auto-hébergées.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5174)
npm run build     # vérification TypeScript + build de production dans dist/
npm run preview   # prévisualiser le build
```

`dist/` est un site 100 % statique : il se dépose sur n'importe quel hébergement
(OVH, o2switch, Netlify, Vercel, GitHub Pages…), sans PHP ni base de données.

## Structure

```
src/
  data/content.ts      ← tous les textes (prestations, références, équipe…)
  components/          ← une section de la page par composant
  index.css            ← charte graphique (couleurs du logo, polices)
public/                ← favicon et logo
```

Pour modifier un texte ou ajouter une référence, il suffit d'éditer `src/data/content.ts`.

## À compléter avant la mise en ligne

- Coordonnées réelles dans `site` (`src/data/content.ts`) : l'e-mail est provisoire et le téléphone est vide (la ligne s'affiche dès qu'il est renseigné).
- Formulaire de contact : il ouvre actuellement la messagerie du visiteur (`mailto:`). Pour un envoi direct, brancher un service (Formspree, Web3Forms…) ou un petit script PHP sur `handleSubmit` dans `src/components/Contact.tsx`.
- Mentions légales et politique de confidentialité (obligatoires en France).

# AUDIT UI/UX MAELIZ CONSULTING

> **Périmètre** : page d'accueil one-page (`maeliz-consulting/`), analysée le 23/09/2026.
> **Méthode** : captures réelles à 1366, 1024, 800, 768, 430, 390, 375, 360 et 320 px ; tailles, interlignes, nombre de lignes et hauteurs **mesurés dans le navigateur** (styles calculés, Playwright/Chromium) ; contrastes **calculés à partir des couleurs du code** (formule WCAG 2.2), pas estimés depuis une image.
> **Corrections P0 et P1** : appliquées dans `maeliz-consulting-test/` (voir § 15). La version principale n'a pas été modifiée.

---

## 1. Résumé exécutif

1. **Le H1 est trop long et trop haut** : 112 caractères, **6 lignes à 54 px** sur desktop et **7 lignes à 36 px** sur mobile. Le visiteur ne voit ni le sous-titre ni le CTA sans défiler (390 × 844). C'est le défaut n° 1.
2. **Le header casse entre 768 et 1 023 px** (tablette, petits portables) : le logo et « À propos » passent sur 2 lignes et le bouton « Nous contacter » se déforme. Défaut bloquant visible par tous les visiteurs sur iPad.
3. **Les prestations arrivent trop tard** : sur mobile, il faut défiler ~4 600 px (≈ 5,5 écrans) de présentation avant de lire l'offre. Question n° 3 du visiteur (« que proposez-vous ? ») traitée en 4ᵉ position.
4. **La preuve sociale est enterrée** : les 13 références (HAS, Institut de France, BNP Paribas, L'Oréal…) sont l'argument le plus fort du site mais apparaissent en avant-dernière section, en 13 cartes de même poids (≈ 3 000 px sur mobile).
5. **Les CTA sont incohérents** : 4 libellés différents pour la même action (« Nous contacter », « Parlons de votre projet », « Demander un diagnostic », « Envoyer »). Le bouton du header mesure 37 px de haut (< 44 px recommandés).
6. **La page est trop longue sur mobile** : 14 502 px à 390 px (≈ 17 écrans), 16 443 px à 320 px, dû à des paddings desktop (96 px) conservés sur mobile et à des textes longs.
7. **Hiérarchie typographique plate en bas de l'échelle** : H3 à 18 px et textes de cartes à 14 px partout ; les H2 sont longs (jusqu'à 4 lignes à 320 px).
8. **Accessibilité** : bordures de champs quasi invisibles (contraste 1,13:1, minimum 3:1), copyright à 3,75:1 (minimum 4,5:1), pas de messages d'erreur explicites dans le formulaire, focus clavier non stylé.
9. **Deux manques légaux et de contenu bloquent la mise en ligne** : mentions légales et politique de confidentialité absentes (obligatoires en France : LCEN, RGPD) ; e-mail de contact provisoire.

---

## 2. Forces du site

- **Identité forte et cohérente** : emblème géométrique, palette prune / ambre / or déclinée partout, typographie Jost (titres) + Inter (texte) qui évoque la rigueur sans froideur.
- **Ton institutionnel juste** : pas d'effets gadget, aucun superlatif gratuit, un contenu factuel (volumes en mètres linéaires, années, noms de clients).
- **Chiffres clés immédiatement après le Hero**, avec une vraie donnée métier (4,8 km d'archives).
- **Section méthodologie sombre** : rupture de rythme efficace, 5 étapes lisibles, et l'emblème en filigrane est élégant.
- **Références riches** : période + volume + nature de la mission, un niveau de preuve rare sur les sites de cabinets.
- **L'équipe est nommée** avec rôle et parcours (conservateur d'archives, promotion 2010) : forte crédibilité pour un acheteur public.
- **Bases techniques saines** : HTML sémantique (`header`, `nav`, `main`, `section`, `footer`), lien d'évitement, `lang="fr"`, JSON-LD, polices auto-hébergées, `prefers-reduced-motion` respecté, aucun défilement horizontal de 320 à 1366 px.
- **Filtre public/privé** sur les références : pertinent pour un acheteur public qui cherche des pairs.

---

## 3. Problèmes prioritaires

| Priorité | Problème | Impact | Correction |
|---|---|---|---|
| P0 | H1 de 112 caractères : 6 lignes desktop, 7 lignes mobile | Message illisible en 5 s ; CTA sous la ligne de flottaison mobile | H1 réécrit en 49 caractères + `clamp(34px → 56px)`, lh 1.08, max 16ch → 3 lignes |
| P0 | Header cassé de 768 à 1 023 px | Image non professionnelle sur tablette | Navigation desktop à partir de 1 024 px (`lg`), hamburger en dessous, `whitespace-nowrap` |
| P0 | Mentions légales et confidentialité absentes | Non-conformité LCEN / RGPD | Pages à créer avec les données de l'entreprise (SIREN, siège, directrice de publication, hébergeur) — **à fournir par le client** |
| P0 | E-mail de contact provisoire | Demandes perdues | Renseigner `site.email` et `site.phone` — **à fournir par le client** |
| P1 | Prestations en 4ᵉ position | Offre découverte tard, rebond | Ordre : Hero → Expertises → Méthode/Atouts → Références → Cabinet → Contact |
| P1 | Preuve sociale tardive et non hiérarchisée | Confiance construite trop tard | Bandeau « Ils nous font confiance » sous les chiffres + 6 cas détaillés + liste compacte |
| P1 | 4 libellés de CTA, bouton header 37 px | Dilution, zone tactile trop petite | CTA unique « Échanger avec un expert », hauteur 44–48 px |
| P1 | Page mobile de 14 502 px | Fatigue, abandon avant le contact | Paddings mobiles 64 px, copy raccourcie, références compactées → 12 514 px |
| P1 | Pas d'échelle typographique ; H3 18 px, textes 14 px | Hiérarchie plate, confort de lecture | Échelle fluide H1–H4 + small 15 px (voir § 5) |
| P1 | Bordure des champs 1,13:1, copyright 3,75:1 | WCAG 1.4.11 et 1.4.3 non respectés | Bordure `#9b7489` (4:1), copyright blanc 65 % |
| P1 | Formulaire sans messages d'erreur | Échecs silencieux, lecteurs d'écran perdus | Validation avec message sous chaque champ, `aria-invalid`, focus sur la 1ʳᵉ erreur |
| P1 | Menu mobile sans CTA, non fermable au clavier | Conversion mobile, accessibilité | CTA dans le menu, fermeture par Échap, liens de 48 px de haut |

---

## 4. Audit section par section

### 4.1 Header
- **Problème** : navigation desktop affichée dès 768 px alors qu'elle nécessite ~960 px → casse de 768 à 1 023 px. Bouton CTA de 142 × 37 px. Libellés « À propos / Méthodologie » plus longs que nécessaire.
- **Impact UX** : désordre visuel en tablette ; cible tactile < 44 px (WCAG 2.5.8 recommande 24 px minimum, les guidelines Apple/Material 44–48 px).
- **Impact business** : première impression dégradée sur iPad, appareil courant en direction générale.
- **Recommandation (P0)** : hamburger jusqu'à 1 023 px, navigation complète dès 1 024 px ; libellés courts (« Expertises, Méthode, Références, Le cabinet ») dans l'ordre de la page ; CTA 44 px de haut.
- **Exemple** : `<nav className="hidden lg:block">` · `className="inline-flex min-h-11 items-center … whitespace-nowrap"`.

### 4.2 Hero
- **Problème** : H1 de 112 caractères et 3 mots mis en couleur (« performance », « conformité », « sécurisation ») qui se concurrencent. Le sous-titre répète la liste des prestations. CTA de hauteur 52/54 px (incohérentes) ; sur mobile les deux boutons ont des largeurs différentes.
- **Impact UX** : 7 lignes de H1 sur mobile = 330 px de titre ; le CTA principal arrive à ~710 px, sous le premier écran d'un iPhone SE.
- **Impact business** : message « expertise documentaire » générique ; le bénéfice client n'est pas formulé.
- **Recommandation (P0)** : H1 de 40–55 caractères orienté résultat, deux mots en couleur maximum ; sous-titre de 140–160 caractères qui dit *quoi* + *pour qui* ; boutons pleine largeur sur mobile (48 px), côte à côte dès 640 px.
- **Exemple** : voir § 7 (variantes A, B, C).

### 4.3 Chiffres clés
- **Problème** : « FR & Intl » n'est pas un chiffre et affaiblit la rangée ; labels à 14 px.
- **Impact** : légère perte de crédibilité (la 4ᵉ case ressemble à du remplissage).
- **Recommandation (P2)** : remplacer par une donnée vérifiable, p. ex. « 2010 — conservateur d'archives diplômé » ou « 6 versements aux Archives nationales » si le chiffre est confirmé par le client. Chiffres 28 px mobile / 30 px desktop.

### 4.4 Qui sommes-nous
- **Problème** : placée juste après le Hero, 3 paragraphes à 18 px (≈ 90 mots chacun), puis 2 cartes, puis l'équipe, puis la mission : **3 246 px sur mobile**. H2 « Un cabinet d'experts de l'archive et de l'information » sur 3 lignes à 320 px.
- **Impact UX** : le visiteur lit l'histoire du cabinet avant de savoir ce qu'il vend.
- **Impact business** : c'est une section de réassurance, pas d'accroche ; elle doit venir après la preuve.
- **Recommandation (P1)** : déplacer après les références ; 2 paragraphes de 30–40 mots ; cartes Archivo et partenaires résumées en 2 lignes.
- **Exemple** : « Maeliz Consulting accompagne entreprises, collectivités et institutions dans l'organisation de leurs archives et la sécurisation de leur information, en France comme à l'international. »

### 4.5 Notre mission
- **Problème** : H2 « Faire de la gestion documentaire un levier de performance » sur 4 lignes à 320 px ; paragraphe de 55 mots ; icônes « check » ambre à 2,02:1 sur blanc (décoratives, mais peu visibles).
- **Recommandation (P1)** : H2 « Vos enjeux, nos engagements » (27 car.) ; texte de 35 mots ; check en prune `#a03369` (6,6:1).
- **P2** : à terme, transformer ces 6 objectifs en section « Vos enjeux » placée juste après le Hero (voir § 6), formulée du point de vue du client (« Retrouver un document en quelques minutes », « Réduire le risque en cas de contrôle »).

### 4.6 Prestations
- **Problème** : H2 de 71 caractères (« Du conseil à la mise en œuvre, sur tout le cycle de vie des documents ») sur 3–4 lignes mobile ; textes de cartes à 16 px mais sans hiérarchie avec le titre (20 px) ; la carte CTA finale est isolée.
- **Recommandation (P1)** : H2 court et descriptif, la phrase longue devient le chapô ; titres de cartes en H4 18–20 px, texte 15 px ; padding 24 px mobile / 28 px desktop.
- **Exemple** : H2 « Nos expertises en gestion documentaire » + lead « Du conseil à la mise en œuvre, nous intervenons sur tout le cycle de vie de vos documents, papier comme numériques. »
- **P2** : chaque carte pourra pointer vers une page détaillée (/audit-documentaire, /records-management…) quand le site passera en multi-pages (SEO).

### 4.7 Méthodologie
- **Problème** : H2 « Cinq étapes pour des dispositifs pragmatiques et durables » (58 car., 4 lignes à 320 px). Sur mobile, le cercle numéroté occupe une ligne entière au-dessus de chaque étape → 5 × 60 px perdus. Texte à 14 px, blanc 70 %.
- **Recommandation (P1)** : H2 « Une méthode en cinq étapes » ; sur mobile, numéro à gauche du titre (layout en ligne) ; texte 15 px, blanc 75 %.
- **À conserver** : fond prune sombre, filets dorés entre étapes, filigrane de l'emblème.

### 4.8 Nos atouts
- **Problème** : H2 « Nos atouts » sans eyebrow (incohérent avec les autres sections) ; cartes de 24 px de padding sur mobile → 6 cartes = 1 000 px ; la moitié des atouts répète l'équipe et les partenaires.
- **Recommandation (P1)** : eyebrow « Pourquoi Maeliz Consulting » ; padding 16 px mobile / 24 px desktop.
- **P2** : réduire à 4 atouts non redondants avec le reste de la page.

### 4.9 Références
- **Problème** : 13 cartes de même poids (≈ 3 000 px mobile) ; aucune distinction entre les grandes missions (3 km chez BNP Paribas) et les audits ponctuels ; filtres de 36 px de haut ; H3 à 18 px.
- **Impact business** : c'est la section qui convainc un acheteur public ; elle doit être visible tôt et hiérarchisée.
- **Recommandation (P1)** : (1) bandeau de noms sous les chiffres clés ; (2) **6 cas détaillés** avec volume (HAS, SNIA, SEM Plaine Commune, Institut de France, Scouts et Guides de France, BNP Paribas) ; (3) **7 références en liste compacte** ; filtres de 44 px.
- **P2/P3** : logos (avec accord écrit des clients), 2–3 témoignages signés, études de cas détaillées (voir § 8 du plan d'action).

### 4.10 Engagement
- **Problème** : citation de 45 mots en 30 px sur desktop (5 lignes) : trop de poids pour un texte déclaratif.
- **Recommandation (P1)** : 20–24 px (`text-h3`), `text-wrap: balance`.
- **P2** : remplacer par un témoignage client réel, plus crédible qu'une auto-déclaration.

### 4.11 Formulaire de contact
- **Problème** : bordures des champs à 1,13:1 (invisibles pour beaucoup d'utilisateurs) ; validation native du navigateur uniquement ; bouton « Envoyer » peu explicite ; aucune mention sur l'usage des données ; le fonctionnement par `mailto:` n'est pas annoncé ; le message de confirmation affirme que la messagerie « s'ouvre » sans le préciser avant.
- **Recommandation (P1)** : bordure `#9b7489` (4:1), hauteur de champ 48 px, `font-size: 16px` (évite le zoom iOS), messages d'erreur sous les champs reliés par `aria-describedby`, focus sur la première erreur, libellé « Envoyer ma demande », mention « L'envoi ouvre votre messagerie. Vos informations servent uniquement à répondre à votre demande. »
- **P2** : envoi serveur réel (petit script PHP ou service type Formspree) avec page ou message de confirmation.

### 4.12 Footer
- **Problème** : copyright à 3,75:1 ; aucune coordonnée ; pas de lien vers les mentions légales.
- **Recommandation (P1)** : 3 colonnes (identité / navigation / coordonnées), copyright blanc 65 % (≥ 6:1). **P0** : liens « Mentions légales » et « Confidentialité » dès que les pages existent.

---

## 5. Audit typographique

### 5.1 Mesures avant correction

| Élément | 1366 px | 390 px | 320 px | Constat |
|---|---|---|---|---|
| H1 | 54,4 px / lh 68 px (1.25) · **6 lignes** | 36 px / lh 45 px · **7 lignes** | 36 px · 7 lignes | Interligne trop lâche pour un display ; titre trop long |
| H2 | 36 px / lh 40 px · 1–3 lignes | 30 px / lh 36 px · 1–3 lignes | 30 px · **jusqu'à 4 lignes** | Valeurs fixes par palier, wording trop long |
| H3 | 18–20 px / lh 28 px | idem | idem | Interligne 1.4–1.55 trop lâche pour un titre |
| Paragraphe chapô | 18 px / lh 1.625 | 18 px | 18 px | Correct, mais pas d'échelle |
| Texte de carte | 14–16 px | 14 px | 14 px | 14 px trop petit pour des textes de 30+ mots |
| Eyebrow | 14 px, tracking 0,2 em | idem | idem | Correct ; tracking un peu large |
| Bouton | 16 px, 52–54 px de haut | idem | idem | Hauteurs incohérentes |
| Navigation | 14 px | — | — | Un peu petit pour une nav B2B |

### 5.2 Échelle recommandée (appliquée)

| Élément | Desktop (≥ 1280) | Tablet (768) | Mobile (390 / 320) | Line-height | Graisse · tracking · largeur |
|---|---|---|---|---|---|
| **H1** | 56 px | 45 px | 34,5 / 34 px | 1.08 | Jost 500 · −0,015 em · max 16ch · **3 lignes** (4 à 320 px) |
| **H2** | 40 px | 35 px | 28 / 28 px | 1.15 | Jost 500 · −0,01 em · max 22ch · 1–2 lignes (3 max à 320 px) |
| **H3** | 24 px | 22 px | 20 px | 1.25 | Jost 500 · citation d'engagement, titres de sous-blocs |
| **H4** | 20 px | 19 px | 18 px | 1.3 | Jost 500 · titres de cartes, étapes, références |
| **Lead** (chapô) | 19 px | 18 px | 17 px | 1.6 | Inter 400 · max 54–60ch |
| **Body** | 17 px | 16,5 px | 16 px | 1.65 | Inter 400 · max 65ch |
| **Small** | 15 px | 15 px | 15 px | 1.55 | Inter 400 · textes de cartes |
| **Eyebrow / labels** | 14 px | 14 px | 14 px | 1.4 | Inter 600 · majuscules · 0,16 em |
| **Bouton** | 16 px | 16 px | 16 px | 1 | Inter 500 · hauteur 48 px (44 px dans le header) |
| **Navigation** | 15 px | — | 16 px (menu) | 1.4 | Inter 500 · liens mobiles de 48 px de haut |

```css
/* src/index.css — Tailwind v4, utilitaires personnalisés */
@utility text-h1 { font-size: clamp(2.125rem, 1.45rem + 2.9vw, 3.5rem); line-height: 1.08; letter-spacing: -0.015em; }
@utility text-h2 { font-size: clamp(1.75rem, 1.3rem + 1.9vw, 2.5rem);  line-height: 1.15; letter-spacing: -0.01em; }
@utility text-h3 { font-size: clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem); line-height: 1.25; }
@utility text-h4 { font-size: clamp(1.125rem, 1.07rem + 0.25vw, 1.25rem); line-height: 1.3; }
@utility text-lead  { font-size: clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem); line-height: 1.6; }
@utility text-body  { font-size: clamp(1rem, 0.97rem + 0.15vw, 1.0625rem); line-height: 1.65; }
@utility text-small { font-size: 0.9375rem; line-height: 1.55; }
```

**Règle de rédaction des titres** : H1 ≤ 55 caractères, H2 ≤ 40 caractères. Une phrase plus longue devient le chapô (`lead`) sous le titre, pas un titre plus petit.

| Titre avant | Car. | Titre après | Car. | Lignes 390 px |
|---|---|---|---|---|
| Une expertise documentaire au service de la performance, de la conformité et de la sécurisation de l'information | 112 | Des archives maîtrisées, conformes et accessibles | 49 | 7 → 3 |
| Un cabinet d'experts de l'archive et de l'information | 53 | Un cabinet expert de l'archive et de l'information | 50 | 2 → 2 |
| Faire de la gestion documentaire un levier de performance | 58 | Vos enjeux, nos engagements | 27 | 3 → 2 |
| Du conseil à la mise en œuvre, sur tout le cycle de vie des documents | 71 | Nos expertises en gestion documentaire *(+ lead)* | 38 | 3 → 2 |
| Cinq étapes pour des dispositifs pragmatiques et durables | 58 | Une méthode en cinq étapes *(+ lead)* | 26 | 3 → 1 |

---

## 6. Nouvelle architecture de homepage

**Logique** : répondre aux 6 questions du visiteur dans l'ordre où il se les pose — *Qui ? Quoi ? Comment ? Preuves ? Avec qui ? Contact.* Un décideur public ou un directeur juridique veut d'abord vérifier que l'offre correspond à son besoin, puis que d'autres organisations comparables ont fait confiance au cabinet ; l'histoire de l'entreprise vient ensuite, en réassurance.

| # | Section | Rôle | Statut |
|---|---|---|---|
| 1 | **Hero** + chiffres clés + bandeau « Ils nous font confiance » | Qui, quoi, pour qui ; première preuve en < 1 écran | Appliqué (P0/P1) |
| 2 | **Expertises** (7 prestations + carte « Demander un diagnostic ») | Quoi | Remonté (P1) |
| 3 | **Méthode** (5 étapes) + **Atouts** (fond sombre) | Comment / pourquoi nous | Inchangé en position |
| 4 | **Références** (6 cas détaillés + liste compacte) | Preuve | Restructuré (P1) |
| 5 | **Le cabinet** (présentation, Archivo, partenaires, équipe, mission) | Réassurance humaine | Déplacé (P1) |
| 6 | **Engagement** + **Contact** | Conversion | Allégé (P1) |
| 7 | Footer (coordonnées + légal) | — | Enrichi (P1) ; légal en P0 client |

**Évolutions P2** :
- Insérer entre 1 et 2 une section courte **« Vos enjeux »** (4 situations client : « déménagement de siège », « contrôle ou audit réglementaire », « projet GED/SAE », « fonds historique à valoriser ») qui renvoie chacune vers l'expertise correspondante. Elle remplacerait la liste « Notre mission », aujourd'hui redondante.
- **FAQ** (5 questions) avant le contact.

---

## 7. Nouvelle proposition de Hero

### Variante A — très institutionnelle
- **H1** : Conseil et traitement des archives pour les organisations publiques et privées *(80 car. — 4 lignes mobile)*
- **Sous-titre** : Audit, records management, archivage physique et électronique, dématérialisation et formation, de l'état des lieux au versement aux Archives nationales.
- **CTA principal** : Échanger avec un expert · **Secondaire** : Découvrir nos expertises
- ✅ Très clair sur l'activité, excellent pour le SEO (« archives », « organisations publiques »), rassurant pour un acheteur public.
- ❌ Descriptif, peu mémorable ; 80 caractères, à la limite haute ; ressemble à une ligne d'annuaire.

### Variante B — orientée bénéfice client *(appliquée)*
- **H1** : Des archives maîtrisées, conformes et accessibles *(49 car. — 3 lignes mobile, 3 lignes desktop)*
- **Sous-titre** : Nous auditons, organisons et sécurisons vos fonds papier et numériques, de l'audit à la mise en œuvre, pour les organisations publiques et privées.
- **CTA principal** : Échanger avec un expert · **Secondaire** : Découvrir nos expertises
- ✅ Formule le résultat attendu par le client ; reprend les 3 valeurs du titre d'origine (maîtrise ≈ performance, conformité, accessibilité ≈ sécurisation) ; court ; le sous-titre porte la précision métier.
- ❌ Le mot « conseil » disparaît du H1 (il reste dans l'eyebrow, le title et le sous-titre) ; « maîtrisées » est un peu abstrait.

### Variante C — plus premium / mémorable
- **H1** : Votre mémoire documentaire, entre de bonnes mains *(50 car.)*
- **Sous-titre** : Depuis plus de 15 ans, nous organisons, conservons et transmettons les archives des grandes organisations, en toute confidentialité.
- **CTA principal** : Parlons de vos archives · **Secondaire** : Voir nos références
- ✅ Mémorable, humain, évoque la confiance et la confidentialité ; se distingue des concurrents.
- ❌ Ne dit pas explicitement le métier : un visiteur qui arrive par une recherche « records management » doit lire le sous-titre pour comprendre ; plus faible en SEO ; ton plus émotionnel qui peut sembler léger à une DSI.

### Pourquoi B a été appliquée
Le site vise une conversion B2B auprès de décideurs qui scannent en quelques secondes. **B** est le meilleur compromis : elle garde la promesse d'origine (dont elle est une reformulation) tout en divisant sa longueur par 2,3, et laisse au sous-titre le vocabulaire métier nécessaire au SEO. **A** est un bon choix si la majorité du trafic vient d'appels d'offres publics et de recherches très techniques. **C** convient mieux à une campagne de notoriété ou à une page « Le cabinet ». Le choix final dépend de la cible prioritaire du client ; la variante est modifiable dans `src/components/Hero.tsx` et `src/data/content.ts`.

---

## 8. CTA strategy

### Comparaison des libellés

| Libellé | Engagement perçu | Adapté ? | Commentaire |
|---|---|---|---|
| Nous contacter | Neutre | Moyen | Générique ; parle de l'entreprise, pas du visiteur |
| Parler de mon projet | Moyen | Moyen | Suppose un projet déjà défini, ce qui n'est pas toujours le cas en archives |
| **Échanger avec un expert** | Faible, valorisant | **Oui — CTA principal** | Met en avant l'expertise et promet une conversation, pas une vente |
| **Demander un diagnostic** | Moyen, concret | **Oui — contextuel** | Excellent après la liste des prestations (l'audit est la porte d'entrée naturelle) |
| Parlons de vos archives | Faible, chaleureux | Oui — titre | Bon titre de section contact, un peu familier pour un bouton |

### Plan par section (appliqué)

| Section | CTA primaire | CTA secondaire |
|---|---|---|
| Header (desktop et menu mobile) | Échanger avec un expert | — |
| Hero | Échanger avec un expert | Découvrir nos expertises |
| Bandeau de confiance | — | Lien « et d'autres références → » |
| Expertises | Carte « Demander un diagnostic » | — |
| Contact (titre) | « Parlons de vos archives » | — |
| Formulaire | Envoyer ma demande | — |

**Règles** : un seul libellé pour le CTA principal sur toute la page ; bouton plein prune pour le principal, bouton contour pour le secondaire, lien texte pour le tertiaire ; jamais deux boutons pleins côte à côte ; hauteur 48 px (44 px dans le header).

**P2** : bouton flottant « Échanger avec un expert » sur mobile après le Hero ; lien « Parlons de votre projet → » à la fin des références.

---

## 9. Mobile UX

| Largeur | Avant | Après | Écart |
|---|---|---|---|
| 430 px | 14 037 px | 12 023 px | −14 % |
| 390 px | 14 502 px | 12 514 px | −14 % |
| 375 px | 14 823 px | 12 859 px | −13 % |
| 360 px | 15 315 px | 13 171 px | −14 % |
| 320 px | 16 443 px | 14 377 px | −13 % |

Sections les plus longues avant correction (390 px) : Qui sommes-nous 3 246 px, Références 2 976 px, Prestations 2 628 px, Méthodologie 2 301 px.

**Corrections appliquées**
1. **H1** : 36 px / 7 lignes → 34,5 px / lh 1.08 / 3 lignes (4 à 320 px).
2. **H2** : 30 px fixes → 28 px ; aucun H2 au-delà de 3 lignes à 320 px (4 auparavant).
3. **Boutons du Hero** : pleine largeur, 48 px de haut, empilés avec 12 px d'écart.
4. **Paddings de section** : 96 px → 64 px en dessous de 768 px ; gouttières 16 px → 20 px.
5. **Menu hamburger** : bouton 44 × 44 px, liens de 48 px, CTA plein dans le menu, fermeture par Échap.
6. **Méthodologie** : numéro à gauche du titre (gain ≈ 60 px par étape).
7. **Atouts** : padding 24 → 16 px.
8. **Références** : 7 références en liste compacte au lieu de cartes.
9. **Formulaire** : champs de 48 px en 16 px (pas de zoom automatique iOS), bouton pleine largeur.
10. **Texte des cartes** : 14 → 15 px.

**Points à surveiller (P2)**
- 320 px : le H2 « Un cabinet expert de l'archive et de l'information » fait 3 lignes (acceptable) ; le footer passe à 598 px de haut (3 colonnes empilées) → regrouper navigation et coordonnées sur 2 colonnes.
- 430 px : les 4 chiffres clés restent en 2 × 2 ; possibilité de les faire défiler horizontalement si d'autres chiffres sont ajoutés.

---

## 10. Design System

### Couleurs

| Rôle | Token | Valeur | Usage |
|---|---|---|---|
| Principale | `plum-600` | `#a03369` | CTA, liens, eyebrows, accents de titre |
| Principale foncée | `plum-700` / `plum-900` / `plum-950` | `#7d2553` / `#3d1029` / `#2a0b1c` | Hover, titres, fonds sombres |
| Secondaire | `gold-600` / `gold-700` | `#9a6428` / `#8a5a24` | Mot d'accent du H1, dates |
| Accent | `amber-brand` | `#f8a51c` | Pastilles, icônes sur fond sombre **uniquement** (2,0:1 sur blanc) |
| Or clair | `gold-300` / `gold-100` | `#e6d08a` / `#f6ee9b` | Texte d'accent sur fond prune |
| Background | `paper` / blanc | `#fbf8f4` / `#ffffff` | Alternance des sections |
| Texte principal | `ink` | `#231a20` | 16:1 sur `paper` |
| Texte secondaire | `muted` | `#6b5d66` | 5,9:1 sur `paper` |
| Bordure décorative | `plum-100` | `#f7e6ef` | Cartes (décoratif) |
| Bordure fonctionnelle | `plum-300` | `#9b7489` | Champs de formulaire (4:1) |
| Erreur | `red-700` | Tailwind | Messages et bordures d'erreur |

### Typographie
Voir § 5.2. Titres : Jost Variable 500. Texte : Inter Variable 400/500/600.

### Boutons

| Variante | Style | Hover | Focus |
|---|---|---|---|
| Primary | fond `plum-600`, texte blanc, radius 999 px, h 48 px, px 28 px | fond `plum-700`, 200 ms | outline 2 px `plum-600`, offset 3 px (or clair sur fond sombre) |
| Secondary | contour `plum-600` 40 %, texte `plum-700` | contour plein, fond blanc | idem |
| Tertiary | lien texte `plum-600` + flèche | soulignement offset 4 px, flèche +4 px | idem |
| Header | Primary en h 44 px, px 20 px | idem | idem |

### Cartes

| Type | Radius | Bordure | Ombre | Padding |
|---|---|---|---|---|
| Prestation | 16 px | 1 px `plum-100` | aucune → `lg` prune 5 % au hover | 24 px mobile / 28 px desktop |
| Référence | 16 px | ring 1 px `plum-100` | `sm` | 24 px |
| Sur fond sombre | 16 px | 1 px blanc 10 % | aucune | 16 px mobile / 24 px desktop |
| Équipe | 16 px | — | — | 24 px / 28 px |
| Bloc contact | 24 px | ring 1 px `plum-100` | — | 20 px / 40 px |

### Espacements (base 4 px)

| Token | Valeur | Usage type |
|---|---|---|
| 1 | 4 px | écart icône / texte serré |
| 2 | 8 px | écart entre puces, tags |
| 3 | 12 px | eyebrow → H2, gap des listes mobiles |
| 4 | 16 px | titre → paragraphe, gap des cartes mobile |
| 6 | 24 px | padding de carte, gap des cartes desktop |
| 8 | 32 px | gouttière desktop, gap entre blocs |
| 12 | 48 px | titre de section → contenu (desktop) |
| 16 | 64 px | padding vertical de section (mobile) |
| 20 | 80 px | séparation de sous-sections |
| 24 | 96 px | padding vertical de section (desktop) |

### Grille
- Container : **1 152 px** de contenu max (`max-w-6xl`) — conservé, adapté à un site texte ; passage à 1 200 px possible en P3.
- Gouttières : **20 px** mobile, **32 px** tablette/desktop.
- Colonnes : 1 (mobile) → 2 (≥ 640 px) → 3 (≥ 1 024 px) pour les cartes ; 5 pour la méthode (≥ 768 px).
- Largeur de lecture : 54–62ch pour les chapôs, 65ch pour le texte courant.
- Hauteur minimale des éléments tactiles : 44 px (header, filtres), 48 px (boutons, champs, liens du menu).

---

## 11. Accessibilité

### Contrastes (calculés depuis les couleurs du code)

| Couple | Ratio | Seuil | Verdict |
|---|---|---|---|
| Texte `ink` sur `paper` | 16,0:1 | 4,5 | ✅ |
| Texte `muted` sur `paper` / blanc | 5,9 / 6,2:1 | 4,5 | ✅ |
| Blanc sur bouton `plum-600` | 6,6:1 | 4,5 | ✅ |
| `gold-600` (mot du H1) sur `paper` | 4,7:1 | 3 (grand texte) | ✅ |
| Blanc 70 % sur `plum-950` (méthode) | 9,1:1 | 4,5 | ✅ |
| Ambre (eyebrow) sur `plum-950` | 8,9:1 | 4,5 | ✅ |
| **Copyright blanc 40 % sur `plum-950`** | **3,75:1** | 4,5 | ❌ → blanc 65 % (≈ 7:1) ✅ corrigé |
| **Bordure des champs `plum-100` sur blanc** | **1,13:1** | 3 (1.4.11) | ❌ → `#9b7489` 4,0:1 ✅ corrigé |
| Check ambre sur blanc (mission) | 2,0:1 | 3 si informatif | ⚠️ → prune 6,6:1 ✅ corrigé |
| Dégradé or du mot « Consulting » (logo) | variable | exempté (logo) | ℹ️ À vérifier sur le site réel sur écrans peu lumineux |

### Vérifications et corrections
- ✅ **Focus clavier** : outline 2 px prune, offset 3 px, sur tous les éléments ; or clair sur fonds sombres (`.on-dark`). *Corrigé.*
- ✅ **Zones tactiles** : header 44 px, filtres 44 px, boutons et champs 48 px, liens du menu mobile 48 px. *Corrigé.*
- ✅ **Formulaire** : labels visibles et associés, astérisque expliqué, erreurs textuelles sous chaque champ, `aria-invalid` + `aria-describedby`, focus sur la première erreur, statut annoncé via `role="status"`. *Corrigé.*
- ✅ **Menu mobile** : `aria-expanded`, `aria-controls`, fermeture par Échap. *Corrigé.* **P2** : renvoyer le focus sur le bouton à la fermeture et piéger le focus dans le menu ouvert.
- ✅ **Hiérarchie des titres** : un seul H1, H2 par section, H3/H4 cohérents dans les références (H3 masqué « Missions détaillées » + H4 par client). *Corrigé.*
- ✅ **Icônes décoratives** : `aria-hidden="true"`. *Corrigé.*
- ✅ **Mouvement réduit** : `prefers-reduced-motion` désactive les apparitions et le défilement doux (déjà en place).
- ⚠️ **Zoom 200 % / reflow 320 px** : aucun défilement horizontal mesuré à 320 px ; le header fixe occupe 72 px, acceptable. *À vérifier sur le site réel avec le zoom navigateur.*
- ⚠️ **Contenu masqué avant apparition** : les sections sont à `opacity: 0` jusqu'à l'entrée dans l'écran ; sans JavaScript, la page ne s'affiche de toute façon pas (React). **P2** : rendre le contenu visible par défaut et animer seulement si JS est actif.
- ⚠️ **Lecteurs d'écran** : *à tester sur le site réel* avec VoiceOver (iOS/macOS) et NVDA (Windows).

---

## 12. Performance

### Perçue (d'après les captures)
- **Densité** : bonne sur desktop ; excessive sur mobile avant correction (17 écrans). Après : ≈ 15 écrans à 390 px.
- **Poids visuel** : l'emblème du Hero (desktop) et le filigrane de la méthode sont légers et bien dosés. Les halos flous sont discrets.
- **Répétitions** : « 15 ans d'expérience » apparaît 4 fois (chiffres, équipe, atouts, présentation) ; partenaires 3 fois ; Archivo 3 fois. → **P2** : garder une occurrence forte de chaque.
- **Hiérarchie** : nettement améliorée par l'échelle typographique et la distinction cas détaillés / liste.

### À vérifier techniquement (non mesurable depuis des captures)
- **LCP** : l'élément LCP est le H1 (texte) → dépend du chargement de Jost. Vérifier avec Lighthouse / PageSpeed Insights ; envisager `<link rel="preload">` du fichier `jost-latin-wght-normal.woff2` (26 Ko).
- **CLS** : le header fixe et l'absence d'images limitent le risque ; vérifier le décalage lors du passage de la police de repli à Jost (ajouter `size-adjust` si nécessaire).
- **INP** : interactions limitées (menu, filtres, formulaire) ; risque faible, à mesurer en conditions réelles (Chrome UX Report).
- **Images** : seul un PNG de 2000 × 2000 px sert d'image Open Graph → **le convertir en 1200 × 630 px** (format recommandé pour le partage LinkedIn) et le compresser.
- **Polices** : Inter + Jost variables, sous-ensembles latins chargés via `unicode-range` (OK) ; retirer les sous-ensembles cyrillique/grec/vietnamien du build si aucun contenu ne les utilise.
- **JS** : 256 Ko (80 Ko gzip) pour une page statique → **P3** : prérendu statique (SSG) ou passage à Astro pour livrer du HTML sans JS, meilleur LCP et SEO.
- **Animations** : `transform` et `opacity` uniquement (OK, compositées par le GPU).

---

## 13. SEO UX

- **H1** : contient désormais « archives » ; le `<title>` porte « Conseil, gestion et traitement des archives ». Bon alignement.
- **H2 descriptifs** : « Nos expertises en gestion documentaire », « Une méthode en cinq étapes », « Ils nous ont confié leurs archives », « Un cabinet expert de l'archive et de l'information ».
- **Intentions de recherche à couvrir (P2)** : « audit archivistique », « records management entreprise », « tri et classement d'archives », « versement aux Archives nationales », « mise en place GED / SAE », « destruction d'archives sécurisée », « formation archivage ». Une page dédiée par prestation, liée depuis chaque carte.
- **FAQ proposée (P2)**, avec balisage `FAQPage` :
  1. Qu'est-ce que le records management ?
  2. Combien de temps faut-il conserver les documents de mon organisation ?
  3. Comment se déroule un audit documentaire ?
  4. Intervenez-vous sur site, partout en France ?
  5. Comment garantissez-vous la confidentialité de nos archives ?
- **Données structurées** : compléter le JSON-LD `ProfessionalService` (adresse complète, téléphone, `url`, `sameAs` LinkedIn) dès que les coordonnées sont connues.
- **Open Graph** : image 1200 × 630 et URL absolue.
- **Balises à créer** : `<link rel="canonical">`, `robots.txt`, `sitemap.xml` au déploiement.

---

## 14. Copywriting

| Emplacement | Avant | Après | Gain |
|---|---|---|---|
| H1 | Une expertise documentaire au service de la performance, de la conformité et de la sécurisation de l'information | Des archives maîtrisées, conformes et accessibles | Bénéfice client, 49 car. |
| Sous-titre Hero | Conseil, records management, archivage physique et électronique, dématérialisation et formation : nous intervenons à chaque étape du cycle de vie de vos documents. | Nous auditons, organisons et sécurisons vos fonds papier et numériques, de l'audit à la mise en œuvre, pour les organisations publiques et privées. | Verbes d'action + cible |
| Localisation | Basés à Colombes, France — en France et à l'international | Basés à Colombes, France, intervenant en France et à l'international | Phrase complète |
| Présentation | 3 paragraphes, 110 mots | 2 paragraphes, 52 mots | −53 % |
| Archivo | Depuis 2024-2025, Maeliz Consulting a repris les activités de la société Archivo, assurant ainsi la continuité des prestations, des compétences et des références développées depuis de nombreuses années… | Depuis 2024-2025, Maeliz Consulting a repris les activités de la société Archivo : mêmes compétences, mêmes références auprès de grands comptes et d'établissements publics. | Plus direct |
| Mission | Transformer la gestion documentaire en un levier de performance, en garantissant la conformité… (55 mots) | Faire de votre gestion documentaire un levier de performance : une information conforme, fiable et disponible… (32 mots) | Point de vue client |
| Carte CTA | Chaque mission est adaptée à vos contraintes métiers, réglementaires et calendaires. | Un premier échange permet de cadrer votre projet et vos contraintes. | Dit ce qui se passe ensuite |
| Références (chapô) | — | Grands comptes, établissements publics et institutions nationales, accompagnés par Maeliz Consulting et par l'équipe d'Archivo. | Explique l'antériorité des références (2016–2022, période Archivo) |
| Formulaire | Envoyer | Envoyer ma demande | Explicite |

**Points de vigilance** : les références antérieures à 2024 ont été réalisées sous l'enseigne Archivo ; le chapô le précise pour éviter toute ambiguïté vis-à-vis d'un acheteur public. Aucun délai de réponse n'a été promis (« sous 48 h ») : à ajouter seulement si le cabinet s'y engage.

---

## 15. PLAN D'ACTION

### P0 — à faire immédiatement
| # | Action | Statut |
|---|---|---|
| 1 | H1 réécrit (variante B) + taille fluide 34→56 px, lh 1.08, max 16ch | ✅ Appliqué |
| 2 | Header : navigation complète dès 1 024 px, hamburger en dessous | ✅ Appliqué |
| 3 | Mentions légales + politique de confidentialité + liens dans le footer | ⏳ **Données client requises** (SIREN, adresse du siège, directrice de publication, hébergeur) |
| 4 | Coordonnées réelles (`site.email`, `site.phone` dans `content.ts`) | ⏳ **Données client requises** |

### P1 — prochaine itération
| # | Action | Statut |
|---|---|---|
| 5 | Échelle typographique fluide H1–H4, lead, body, small | ✅ Appliqué |
| 6 | H2 raccourcis + chapôs | ✅ Appliqué |
| 7 | Nouvel ordre : Hero → Expertises → Méthode/Atouts → Références → Cabinet → Contact ; menu aligné | ✅ Appliqué |
| 8 | Bandeau « Ils nous font confiance » sous les chiffres clés | ✅ Appliqué |
| 9 | Références : 6 cas détaillés + liste compacte, filtres 44 px | ✅ Appliqué |
| 10 | CTA unique « Échanger avec un expert » ; « Demander un diagnostic » en contextuel ; « Envoyer ma demande » | ✅ Appliqué |
| 11 | Boutons 44/48 px, pleine largeur sur mobile | ✅ Appliqué |
| 12 | Paddings de section 64 px mobile / 96 px desktop, gouttières 20/32 px | ✅ Appliqué |
| 13 | Méthodologie en ligne sur mobile, atouts compacts | ✅ Appliqué |
| 14 | Copy raccourcie (présentation, Archivo, partenaires, mission) | ✅ Appliqué |
| 15 | Contrastes : bordures de champs 4:1, copyright ≥ 4,5:1, check prune | ✅ Appliqué |
| 16 | Focus clavier visible, menu fermable par Échap, CTA dans le menu mobile | ✅ Appliqué |
| 17 | Formulaire : erreurs explicites, `aria-invalid`, focus 1ʳᵉ erreur, mention RGPD, fonctionnement mailto annoncé | ✅ Appliqué |
| 18 | Footer en 3 colonnes avec coordonnées | ✅ Appliqué |

### P2 — optimisation
- Section « Vos enjeux » (4 situations client) à la place de la liste « Notre mission ».
- FAQ (5 questions) + balisage `FAQPage`.
- Envoi du formulaire côté serveur (script PHP ou Formspree) avec confirmation.
- Remplacer « FR & Intl » par un chiffre vérifié.
- Réduire les répétitions (15 ans, partenaires, Archivo).
- Photos professionnelles de l'équipe à la place des initiales.
- Témoignage client signé à la place de la citation d'engagement.
- Focus piégé dans le menu mobile et retour du focus à la fermeture.
- Contenu visible par défaut (animation seulement si JS actif).
- Image Open Graph 1200 × 630.

### P3 — nice-to-have
- Logos clients (avec accord écrit), en niveaux de gris, couleur au survol.
- Études de cas détaillées (contexte → volume → méthode → résultat) sur des pages dédiées.
- Pages par prestation pour le SEO.
- Prérendu statique (SSG/Astro) pour livrer du HTML sans JS.
- Bouton flottant « Échanger avec un expert » sur mobile.
- Micro-interactions complémentaires : compteur discret sur les chiffres clés (une seule fois, désactivé si mouvement réduit), fondu de 150 ms au changement de filtre des références, soulignement animé des liens de navigation.

### Micro-interactions retenues (appliquées ou conservées)
- Boutons : changement de teinte en 200 ms, sans rebond ni ombre portée animée.
- Cartes de prestations : élévation de 2 px (au lieu de 4 px) + ombre prune à 5 %.
- Carte « Demander un diagnostic » : flèche qui avance de 4 px au survol.
- Apparition au défilement : fondu + translation de 16 px, une seule fois, désactivée si `prefers-reduced-motion`.

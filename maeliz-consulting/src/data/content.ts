/**
 * Contenu du site, séparé du balisage.
 * Pour modifier un texte, une prestation ou une référence, c'est ici.
 */

export const site = {
  name: "Maeliz Consulting",
  tagline: "Conseil, gestion et traitement des archives",
  headline:
    "Une expertise documentaire au service de la performance, de la conformité et de la sécurisation de l'information",
  city: "Colombes, France",
  // TODO : renseigner les coordonnées réelles avant la mise en ligne.
  email: "contact@maeliz-consulting.fr",
  phone: "",
};

export const nav = [
  { href: "#a-propos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#methodologie", label: "Méthodologie" },
  { href: "#references", label: "Références" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "15+", label: "années d'expertise en archivistique" },
  { value: "4,8 km", label: "linéaires d'archives traités pour nos références" },
  { value: "13", label: "grands comptes et institutions accompagnés" },
  { value: "FR & Intl", label: "interventions en France et à l'international" },
];

export const about = [
  "Maeliz Consulting accompagne les entreprises, les organisations et les collectivités dans l'optimisation de leur gestion documentaire et la sécurisation de l'information, en contextes nationaux et internationaux.",
  "Spécialisé en conseil, records management, archivage physique et électronique, et formation, le cabinet intervient à chaque étape du cycle de vie des documents, de l'analyse des besoins à la mise en œuvre opérationnelle.",
  "Notre approche combine méthodologie, confidentialité, rigueur opérationnelle et capacité d'adaptation aux contraintes métiers, réglementaires et calendaires propres à chaque client.",
];

export const team = [
  {
    name: "Thérèse Backala",
    role: "Dirigeante",
    text: "Dirige Maeliz Consulting et s'appuie sur une équipe de professionnels expérimentés.",
  },
  {
    name: "Huriel Nganga Loubou",
    role: "Directeur des Opérations",
    text: "Conservateur d'archives (promotion 2010), plus de 15 années d'expérience en archivistique, gestion documentaire et conduite de projets d'archivage auprès d'organismes publics et privés.",
  },
];

export const partners = ["Ofis Technologies", "AGS Records Management"];

export const mission = {
  text: "Transformer la gestion documentaire en un levier de performance, en garantissant la conformité, la fiabilité et la disponibilité de l'information. Nous structurons des dispositifs pragmatiques, alignés sur vos enjeux de gouvernance, de sécurité et d'efficacité opérationnelle.",
  goals: [
    "Sécuriser et valoriser le patrimoine informationnel et documentaire",
    "Améliorer l'accès aux documents et la fluidité des circuits d'information",
    "Maîtriser les durées de conservation et les règles de gestion",
    "Réduire les risques juridiques et opérationnels",
    "Optimiser les espaces, les coûts et les processus de traitement",
    "Réussir la transition numérique et l'industrialisation des pratiques documentaires",
  ],
};

export type ServiceIcon =
  | "audit"
  | "records"
  | "physical"
  | "scan"
  | "digital"
  | "destroy"
  | "training";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: "audit",
    title: "Audit documentaire & conseil",
    text: "Analyse des pratiques existantes, évaluation des besoins, recommandations opérationnelles et définition de la stratégie documentaire.",
  },
  {
    icon: "records",
    title: "Records management",
    text: "Règles de gestion du cycle de vie, plans de classement, calendriers de conservation, procédures d'accès et de communication.",
  },
  {
    icon: "physical",
    title: "Archivage physique",
    text: "Inventaire, tri, dépoussiérage/assainissement, reconditionnement, classement, indexation et préparation à la conservation ou à l'externalisation.",
  },
  {
    icon: "scan",
    title: "Dématérialisation",
    text: "Numérisation de documents, structuration des fichiers, indexation et préparation à l'intégration dans une GED.",
  },
  {
    icon: "digital",
    title: "Archivage électronique",
    text: "Accompagnement au déploiement de solutions GED et SAE afin de garantir intégrité, traçabilité et pérennité.",
  },
  {
    icon: "destroy",
    title: "Destruction sécurisée",
    text: "Organisation des éliminations en fin de durée de conservation, avec un traitement sécurisé et traçable.",
  },
  {
    icon: "training",
    title: "Formation",
    text: "Sensibilisation aux fondamentaux de l'archivage et formations pratiques : tri, classement, indexation, outils de gestion documentaire.",
  },
];

export const steps = [
  {
    title: "Cadrage et diagnostic",
    text: "Analyse du contexte, des flux documentaires, des volumes, des contraintes réglementaires et des besoins métiers.",
  },
  {
    title: "Conception de la solution",
    text: "Définition de l'organisation cible : plan de classement, règles de nommage, calendrier de conservation, niveaux d'accès et modes de traitement.",
  },
  {
    title: "Mise en œuvre opérationnelle",
    text: "Traitement des fonds documentaires : tri, inventaire, reconditionnement, indexation, numérisation ou intégration dans les outils documentaires.",
  },
  {
    title: "Contrôle qualité et sécurisation",
    text: "Vérification de la conformité des opérations, qualité des données d'indexation, confidentialité et traçabilité.",
  },
  {
    title: "Transfert de compétences",
    text: "Formation des équipes et remise de la documentation nécessaire à la continuité des pratiques documentaires.",
  },
];

export const strengths = [
  "Plus de 15 années d'expertise en archivistique et gestion documentaire",
  "Direction opérationnelle assurée par un conservateur d'archives expérimenté",
  "Continuité des savoir-faire et des références de la société Archivo",
  "Partenariats stratégiques avec AGS Records Management et Ofis Technologies pour une offre globale",
  "Expertise reconnue auprès d'organismes publics et privés",
  "Approche fondée sur la qualité, la conformité réglementaire, la confidentialité et l'accompagnement personnalisé",
];

export type Sector = "public" | "private";

export type Reference = {
  client: string;
  period: string;
  sector: Sector;
  /** Volume traité, affiché en badge (ml = mètres linéaires). */
  volume?: string;
  text: string;
};

export const references: Reference[] = [
  {
    client: "Haute Autorité de Santé (HAS)",
    period: "2025 – 2026",
    sector: "public",
    volume: "180 ml",
    text: "Tri et classement des archives ; identification des documents éliminables ; élaboration des instruments de recherche ; préparation et versement aux Archives nationales.",
  },
  {
    client: "Service National d'Ingénierie Aéroportuaire",
    period: "2025 – 2026",
    sector: "public",
    volume: "240 ml",
    text: "Traitement intellectuel et matériel des archives.",
  },
  {
    client: "Cartier",
    period: "2017, 2025",
    sector: "private",
    text: "Dématérialisation de certificats de pierre.",
  },
  {
    client: "SEM Plaine Commune Développement",
    period: "2023 – 2024",
    sector: "public",
    volume: "300 ml",
    text: "Audit documentaire et archivistique, traitement intellectuel et matériel des archives, accompagnement à la mise en place d'une GED.",
  },
  {
    client: "Institut de France",
    period: "2023 – 2024",
    sector: "public",
    volume: "320 ml",
    text: "Classement, tri et récolement des fonds ; réalisation des inventaires ; établissement des bordereaux d'élimination ; préparation des versements aux Archives nationales.",
  },
  {
    client: "Lafarge SA",
    period: "2018 – 2022",
    sector: "private",
    text: "Audit documentaire et archivistique ; traitement des archives ; élaboration des instruments de recherche ; numérisation des dossiers de ressources humaines.",
  },
  {
    client: "Scouts et Guides de France",
    period: "2018 – 2021",
    sector: "private",
    volume: "600 ml",
    text: "Audit archivistique ; traitement des archives ; identification des documents éliminables ; inventaires ; préparation des versements ; déploiement d'un SAE ; déménagement des archives vers le nouveau siège.",
  },
  {
    client: "Groupe BNP Paribas, Archives & Histoire",
    period: "2016 – 2020",
    sector: "private",
    volume: "3 km",
    text: "Traitement intellectuel et matériel des archives multi-supports.",
  },
  {
    client: "L'Oréal",
    period: "2017 – 2020",
    sector: "private",
    text: "Enregistrement des dossiers d'évaluation cosmétoclinique dans Milor.",
  },
  {
    client: "Crédit Agricole SA",
    period: "2018 – 2020",
    sector: "private",
    volume: "90 ml",
    text: "Traitement des archives ; élaboration des instruments de recherche.",
  },
  {
    client: "Groupe Legendre",
    period: "2019",
    sector: "private",
    text: "Audit documentaire et archivistique.",
  },
  {
    client: "ADEME Grand Est",
    period: "2019",
    sector: "public",
    volume: "90 ml",
    text: "Traitement intellectuel et matériel des archives.",
  },
  {
    client: "Veuve Clicquot",
    period: "2018",
    sector: "private",
    text: "Audit documentaire et archivistique.",
  },
];

export const commitment =
  "Maeliz Consulting met son expertise au service de ses clients afin de garantir une gestion durable, sécurisée et conforme de leurs archives, tout en contribuant à la préservation, à l'accessibilité et à la valorisation de leur patrimoine documentaire.";

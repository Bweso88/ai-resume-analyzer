import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Quote, Send } from "lucide-react";
import { commitment, cta, services, site } from "../data/content";
import { Reveal } from "./Reveal";

const field =
  "w-full min-h-12 rounded-xl border border-plum-300 bg-white px-4 py-3 text-base text-ink transition focus:border-plum-600 focus:ring-4 focus:ring-plum-500/15 focus:outline-none aria-[invalid=true]:border-red-700";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(get: (k: string) => string): Errors {
  const errors: Errors = {};
  if (!get("name")) errors.name = "Indiquez votre nom et prénom.";
  if (!get("email")) errors.email = "Indiquez votre adresse e-mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
    errors.email = "L'adresse e-mail semble incomplète (exemple : nom@organisation.fr).";
  if (!get("message")) errors.message = "Décrivez votre besoin en quelques lignes.";
  return errors;
}

/** Message d'erreur relié au champ par aria-describedby. */
function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} className="text-sm font-normal text-red-700">
      {message}
    </span>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // Sans serveur : on ouvre la messagerie du visiteur avec un message pré-rempli.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const found = validate(get);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setSent(false);
      return;
    }
    const subject = `Demande de contact — ${get("need") || "Maeliz Consulting"}`;
    const body = [
      `Nom : ${get("name")}`,
      `Organisation : ${get("company")}`,
      `E-mail : ${get("email")}`,
      `Téléphone : ${get("phone")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <figure className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
            <Quote size={32} className="mx-auto text-amber-brand" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-h3 text-balance text-plum-900">
              {commitment}
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold tracking-[0.2em] text-plum-600 uppercase">
              Notre engagement
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="grid gap-10 overflow-hidden rounded-3xl bg-white p-5 ring-1 ring-plum-100 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-plum-600 uppercase">Contact</p>
            <h2 className="font-display text-h2 font-medium text-plum-900">Parlons de vos archives</h2>
            <p className="mt-4 text-body text-muted">
              Audit, traitement d'un fonds, projet de GED ou de SAE, formation de vos équipes : décrivez-nous votre besoin,
              nous revenons vers vous rapidement.
            </p>
            <ul className="mt-8 space-y-4 text-ink">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-plum-500" /> {site.city}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-plum-500" />
                <a href={`mailto:${site.email}`} className="hover:text-plum-600">
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-plum-500" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-plum-600">
                    {site.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium">
              Nom et prénom *
              <input
                name="name"
                required
                autoComplete="name"
                className={field}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              <FieldError id="name-error" message={errors.name} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Organisation
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              E-mail *
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={field}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <FieldError id="email-error" message={errors.email} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Téléphone
              <input name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
              Votre besoin
              <select name="need" className={field} defaultValue="">
                <option value="">Sélectionnez une prestation</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Autre</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
              Message *
              <textarea
                name="message"
                required
                rows={5}
                className={field}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <FieldError id="message-error" message={errors.message} />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-plum-600 px-7 font-medium text-white transition hover:bg-plum-700 sm:w-auto"
              >
                {cta.submit} <Send size={18} aria-hidden="true" />
              </button>
              {sent && (
                <p role="status" className="text-sm text-muted">
                  Votre messagerie s'est ouverte avec votre demande pré-remplie : il ne reste qu'à l'envoyer.
                </p>
              )}
            </div>
            <p className="text-sm text-muted sm:col-span-2">
              * Champs obligatoires. L'envoi ouvre votre messagerie. Vos informations servent uniquement à répondre à
              votre demande.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

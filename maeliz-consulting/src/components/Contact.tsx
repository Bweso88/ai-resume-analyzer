import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Quote, Send } from "lucide-react";
import { commitment, services, site } from "../data/content";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-xl border border-plum-100 bg-white px-4 py-3 text-ink outline-none transition focus:border-plum-500 focus:ring-4 focus:ring-plum-500/10";

export function Contact() {
  const [sent, setSent] = useState(false);

  // Sans serveur : on ouvre la messagerie du visiteur avec un message pré-rempli.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
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
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <figure className="mx-auto mb-24 max-w-3xl text-center">
            <Quote size={36} className="mx-auto text-amber-brand" />
            <blockquote className="mt-6 font-display text-2xl leading-snug text-plum-900 sm:text-3xl">
              {commitment}
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold tracking-[0.2em] text-plum-600 uppercase">
              Notre engagement
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="grid gap-12 overflow-hidden rounded-3xl bg-paper p-6 ring-1 ring-plum-100 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-plum-600 uppercase">Contact</p>
            <h2 className="font-display text-3xl font-medium text-plum-900 sm:text-4xl">Parlons de vos archives</h2>
            <p className="mt-4 leading-relaxed text-muted">
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

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium">
              Nom et prénom *
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              Organisation
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              E-mail *
              <input name="email" type="email" required autoComplete="email" className={field} />
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
              <textarea name="message" required rows={5} className={field} />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-plum-600 px-7 py-3.5 font-medium text-white transition hover:bg-plum-700"
              >
                Envoyer <Send size={18} />
              </button>
              {sent && (
                <p role="status" className="text-sm text-muted">
                  Votre messagerie s'ouvre avec le message pré-rempli.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

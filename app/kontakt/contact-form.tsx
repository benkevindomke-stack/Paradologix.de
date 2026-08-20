"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Projektanfrage: ${data.get("project") || "Paradologix"}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Unternehmen: ${data.get("company") || "-"}`,
      `Projektbereich: ${data.get("project")}`,
      "",
      "Projektidee:",
      data.get("message"),
    ].join("\n"));
    window.location.href = `mailto:hello@paradologix.de?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>Name<input name="name" autoComplete="name" required placeholder="Wie dürfen wir dich nennen?" /></label>
    <label>E-Mail<input name="email" type="email" autoComplete="email" required placeholder="name@unternehmen.de" /></label>
    <label>Unternehmen <small>optional</small><input name="company" autoComplete="organization" placeholder="Studio, Marke oder Organisation" /></label>
    <label>Worum geht es?<select name="project" defaultValue=""><option value="" disabled>Projektbereich wählen</option><option>Film & Motion Design</option><option>Media Spaces</option><option>Wall Design</option><option>Logo Design</option><option>Etwas anderes</option></select></label>
    <label className="message-field">Erzähl uns mehr<textarea name="message" required rows={5} placeholder="Was soll möglich werden? Kontext, Idee, Ort und grober Zeitrahmen helfen uns weiter." /></label>
    <button type="submit">Anfrage vorbereiten <span>↗</span></button>
    {sent && <p className="form-note">Dein E-Mail-Programm wurde geöffnet. Falls nicht, schreib uns direkt an hello@paradologix.de.</p>}
  </form>;
}

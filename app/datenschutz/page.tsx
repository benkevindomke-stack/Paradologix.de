import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Paradologix",
  description: "Informationen zur Verarbeitung personenbezogener Daten bei Paradologix.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page wrap">
      <nav className="nav"><a className="wordmark" href="/">PARADOLOGIX<span>®</span></a><a href="/">← Zur Startseite</a></nav>
      <section>
        <p className="eyebrow">DATENSCHUTZ</p>
        <h1>Datenschutzerklärung</h1>
        <div className="legal-grid">
          <div><h2>Verantwortlicher</h2><p>Paradologix Studio<br />Inhaber: Ben-Kevin Domke<br />Eschenstraße 1<br />01097 Dresden<br /><a href="mailto:studio@paradologix.com">studio@paradologix.com</a></p></div>
          <div><h2>Hosting</h2><p>Diese Website wird über Vercel gehostet. Beim Aufruf verarbeitet der Hosting-Anbieter technische Zugriffsdaten, etwa IP-Adresse, Zeitpunkt, aufgerufene Seite und Browserdaten, um die Website sicher und zuverlässig bereitzustellen.</p></div>
          <div><h2>Kontakt per E-Mail</h2><p>Die Kontaktformulare öffnen dein E-Mail-Programm; die Nachricht wird erst über deinen E-Mail-Anbieter versendet. Verarbeiten wir deine Anfrage, geschieht dies zur Bearbeitung und Kommunikation über das angefragte Projekt.</p></div>
          <div><h2>Google Fonts</h2><p>Für die Darstellung der Schriftarten werden Google Fonts eingebunden. Dabei kann deine IP-Adresse an Google übermittelt werden. Die Einbindung erfolgt für eine konsistente Gestaltung der Website.</p></div>
          <div><h2>Deine Rechte</h2><p>Du kannst Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch verlangen. Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren.</p></div>
          <div><h2>Keine Analyse- oder Werbetools</h2><p>Auf dieser Website sind derzeit keine eigenen Analyse-, Werbe- oder Social-Media-Tracking-Tools eingebunden.</p></div>
        </div>
        <p className="legal-note">Stand: 20. August 2026. Diese Erklärung beschreibt den aktuellen technischen Stand der Website. Bei späteren Tools, Cookies, Newslettern oder Formular-Backends muss sie vor deren Einsatz ergänzt werden.</p>
      </section>
    </main>
  );
}

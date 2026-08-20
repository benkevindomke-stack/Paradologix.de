import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import "./kontakt.css";

export const metadata: Metadata = {
  title: "Projekt anfragen | Paradologix",
  description: "Starte dein Projekt mit Paradologix - für Film, Medienräume, Wall Design und Identity.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <nav className="contact-nav contact-wrap"><a href="/" className="contact-logo">PARADOLOGIX<sup>®</sup></a><a href="/projekte">Projekte</a><a href="/">← Zur Startseite</a></nav>
    <header className="contact-head contact-wrap"><p><span /> PROJECT INQUIRY</p><h1>Was soll<br /><em>möglich werden?</em></h1><div><p>Erzähl uns von deiner Idee. Wir melden uns mit einem klaren nächsten Schritt zurück.</p><a href="mailto:hello@paradologix.de">hello@paradologix.de ↗</a></div></header>
    <section className="contact-layout contact-wrap"><aside><p>01 / DEIN PROJEKT</p><h2>Eine gute Zusammenarbeit beginnt mit einem guten Gespräch.</h2><ul><li>Film & Motion Design</li><li>Media Spaces & Installationen</li><li>Wall Design & Kunst im Raum</li><li>Logo & Identity Design</li></ul></aside><ContactForm /></section>
    <footer className="contact-footer contact-wrap"><span>PARADOLOGIX · DRESDEN / SACHSEN / EVERYWHERE</span><a href="mailto:hello@paradologix.de">hello@paradologix.de</a></footer>
  </main>;
}

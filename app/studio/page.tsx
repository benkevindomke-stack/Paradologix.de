import type { Metadata } from "next";
import "./studio.css";

export const metadata: Metadata = {
  title: "Studio | Paradologix",
  description: "Paradologix ist ein Creative Media Studio für Film, Medienräume, Wall Design und Identität.",
};

const principles = [
  ["01", "Klarheit vor Lärm", "Jede Form, Bewegung und Oberfläche braucht einen Grund. Wir reduzieren nicht die Idee, sondern das Rauschen um sie herum."],
  ["02", "Technik mit Gefühl", "Digitale Systeme sind für uns kein Selbstzweck. Sie werden dann stark, wenn sie Menschen etwas fühlen, verstehen oder anders sehen lassen."],
  ["03", "Raum für Perspektiven", "Ob Leinwand, Wand, LED-Fläche oder Identität: Wir denken Gestaltung als Einladung, die vertraute Perspektive zu verlassen."],
];

export default function StudioPage() {
  return <main className="studio-page"><nav className="studio-nav studio-wrap"><a href="/" className="studio-logo">PARADOLOGIX<sup>®</sup></a><a href="/projekte">Projekte</a><a href="/kontakt">Projekt starten ↗</a></nav><header className="studio-hero studio-wrap"><p><span /> ABOUT THE STUDIO</p><h1>Wir machen das<br /><em>Vorstellbare sichtbar.</em></h1><div className="studio-object"><i /><i /><b /><small>BERLIN / EVERYWHERE<br />EST. 2026</small></div></header><section className="studio-intro studio-wrap"><p>WAS UNS BEWEGT</p><h2>Paradologix verbindet die Präzision eines Designstudios mit der Neugier eines künstlerischen Labors.</h2><div><p>Wir arbeiten an der Schnittstelle von Film, Raum, Wand und Identität. Dort entstehen visuelle Systeme, die Orientierung geben, Aufmerksamkeit erzeugen und im Gedächtnis bleiben.</p><p>Unsere Arbeit beginnt nicht mit einem Stil, sondern mit einer Frage: Was soll sich für Menschen verändern, wenn sie diese Marke, diesen Raum oder diese Geschichte erleben?</p></div></section><section className="principles studio-wrap">{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</section><section className="studio-fields"><div className="studio-wrap"><p>UNSERE FELDER</p><div><span>Film & Motion Design</span><span>Media Spaces</span><span>Wall Design</span><span>Logo & Identity</span></div></div></section><section className="studio-cta studio-wrap"><p>LET&apos;S MAKE SPACE</p><h2>Eine Idee verdient<br /><em>eine eigene Welt.</em></h2><a href="/kontakt">Projekt anfragen ↗</a></section></main>;
}

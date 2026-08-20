import "./home-draft.css";
import { PortalMenu } from "@/components/portal-menu";

const work = [["ARCHIV / 01", "Visuelle Welten mit räumlicher Wirkung."], ["ARCHIV / 02", "Gestaltung, die Orte in Erlebnisse verwandelt."], ["ARCHIV / 03", "Bewegung und Identität mit eigener Haltung."]];

export default function Home() {
  return <main className="draft-home"><PortalMenu />
    <nav className="draft-nav draft-wrap"><a className="draft-brand" href="#top">PARADOLOGIX<sup>®</sup></a><span className="draft-status">Creative Media Studio / 2026</span><a href="/en">EN ↗</a></nav>
    <section className="draft-hero draft-wrap" id="top"><div><p className="draft-eyebrow"><b />01 — EINE ANDERE PERSPEKTIVE</p><h1 className="draft-title">Make space<br />for the <em>impossible.</em></h1><p className="draft-copy">Wir gestalten visuelle Welten zwischen Film, Raum, Wand und Identität. Präzise konzipiert. Materiell gedacht. Gemacht, um Aufmerksamkeit zu öffnen.</p><a href="#work" className="draft-arrow">Das Portal betreten ↓</a></div><div className="portal-stage" aria-hidden="true"><div className="portal-ring" /><div className="impossible-form" /><p className="portal-data"><b>PORTAL_01</b><br />52.3° / 13.4°<br />MATERIAL / LIGHT / SPACE</p></div></section>
    <div className="draft-index draft-wrap"><span>SCROLL TO EXPLORE</span><span>01 — 04</span></div>
    <section className="draft-section draft-wrap" id="work"><div className="draft-section-head"><p className="draft-eyebrow">AUSGEWÄHLTE PERSPEKTIVEN</p><a className="draft-arrow" href="/projekte">Alle Projekte ↗</a></div><div className="draft-grid">{work.map(([label,title])=><a className="draft-card" href="/projekte" key={label}><p>{label}</p><h3>{title}</h3><span>ÖFFNEN ↗</span></a>)}</div></section>
    <section className="draft-closing"><div className="draft-wrap"><p className="draft-eyebrow"><b />LASS UNS ETWAS ÖFFNEN</p><h2>Eine Idee?<br /><em>Durchgang.</em></h2><a href="/kontakt">Projekt anfragen ↗</a></div></section>
    <footer className="draft-footer draft-wrap"><span>© 2026 PARADOLOGIX</span><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="#top">Nach oben ↑</a></footer>
  </main>;
}

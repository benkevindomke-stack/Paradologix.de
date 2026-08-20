"use client";

import { useState } from "react";

export function PortalMenu() {
  const [open, setOpen] = useState(false);
  return <><button className="portal-menu-toggle" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button><aside className={`portal-menu ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="portal-menu-top"><span>01 — NAVIGATION</span><button onClick={() => setOpen(false)}>Schließen ×</button></div><nav><a href="#work" onClick={() => setOpen(false)}>Projekte <i>01</i></a><a href="#services" onClick={() => setOpen(false)}>Leistungen <i>02</i></a><a href="/studio">Studio <i>03</i></a><a href="/magazin">Journal <i>04</i></a><a href="/kontakt">Projekt starten <i>↗</i></a></nav><p>Film · Raum · Wand · Identität<br />Gestaltet für Perspektivwechsel.</p></aside></>;
}

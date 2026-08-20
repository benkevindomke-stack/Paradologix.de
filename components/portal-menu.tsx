"use client";

import { useState } from "react";

export function PortalMenu() {
  const [open, setOpen] = useState(false);
  return <><style>{`.portal-menu summary{font-size:clamp(38px,7vw,72px);letter-spacing:-.075em;border-bottom:1px solid #ffffff24;padding:12px 0;display:flex;justify-content:space-between;cursor:pointer;list-style:none}.portal-menu summary::-webkit-details-marker{display:none}.portal-submenu{display:grid;padding:8px 0 18px}.portal-submenu a{font:13px 'DM Mono',monospace!important;letter-spacing:.03em!important;border:0!important;padding:9px 0!important;color:#c7cdc2}`}</style><button className="portal-menu-toggle" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button><aside className={`portal-menu ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="portal-menu-top"><span>01 — NAVIGATION</span><button onClick={() => setOpen(false)}>Schließen ×</button></div><nav><a href="/studio">Über uns <i>01</i></a><a href="/kontakt">Kontakt <i>02</i></a><a href="/projekte">Works <i>03</i></a><details><summary>Leistungen <i>04 +</i></summary><div className="portal-submenu"><a href="/leistungen/videoproduktion">Film &amp; Motion Design</a><a href="/leistungen/digital-signage-content">Media Spaces</a><a href="/leistungen/wandmalerei-wanddesign">Wall Design &amp; Malerei</a><a href="/leistungen/logo-design-agentur">Logo &amp; Identity Design</a></div></details><a href="/impressum">Impressum <i>05</i></a></nav><p>Film · Raum · Wand · Identität<br />Gestaltet für Perspektivwechsel.</p></aside></>;
}

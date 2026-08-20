const services = [
  { number: "01", name: "Film & Motion", copy: "Bewegte Bilder mit Haltung — von Imagefilm bis 3D-Visualisierung.", tag: "FMD" },
  { number: "02", name: "Media Spaces", copy: "Licht, Raum und digitale Ebenen für Erlebnisse, die bleiben.", tag: "NMD" },
  { number: "03", name: "Wall Design", copy: "Wände als Perspektivwechsel — handgemalt, räumlich, unverwechselbar.", tag: "WALL" },
  { number: "04", name: "Logo Design", copy: "Identitäten mit Charakter. Entwickelt von Designern, nicht Generatoren.", tag: "ID" },
];

const projects = [
  { kind: "SPATIAL / 01", title: "A room inside a room", color: "violet" },
  { kind: "WALL / 02", title: "The impossible garden", color: "moss" },
  { kind: "MOTION / 03", title: "Matter in motion", color: "amber" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="wordmark" href="#top" aria-label="Paradologix Startseite">PARADOLOGIX<span>®</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#services">Leistungen</a><a href="/studio">Studio</a></div>
        <a className="nav-cta" href="/kontakt">Projekt starten <i>↗</i></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> CREATIVE MEDIA STUDIO</p>
          <h1>Make space<br />for the <em>impossible.</em></h1>
          <p className="lede">Wir entwickeln visuelle Welten zwischen Film, Raum, Wand und Identität — für Marken, Orte und Ideen mit Tiefgang.</p>
          <a className="round-link" href="#work"><b>Entdecke unsere<br />Perspektiven</b><span>↓</span></a>
        </div>
        <div className="portal" aria-hidden="true">
          <div className="portal-glow" /><div className="portal-frame portal-frame-a" /><div className="portal-frame portal-frame-b" />
          <div className="portal-orb" /><div className="portal-label">ENTER<br />ANOTHER<br />DIMENSION</div>
        </div>
        <div className="hero-footer"><span>Scroll to explore</span><span className="line" /><span>01 — 04</span></div>
      </section>

      <section className="statement wrap" id="studio">
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <h2>Eine Welt im Raum.<br /><em>Ein Raum durch eine Welt.</em></h2>
        <p>Paradologix macht Unsichtbares erlebbar. Wir verbinden präzise Planung mit künstlerischer Intuition, digitale Systeme mit haptischer Materialität und klare Kommunikation mit echter Wirkung.</p>
      </section>

      <section className="work-section" id="work">
        <div className="wrap section-head"><p className="eyebrow">SELECTED WORK</p><a href="/projekte">Alle Projekte ansehen <i>↗</i></a></div>
        <div className="project-grid wrap">
          {projects.map((project) => <article className={`project ${project.color}`} key={project.kind}><div className="project-art"><div className="shape one" /><div className="shape two" /><div className="project-cross" /></div><p>{project.kind}</p><h3>{project.title}</h3><span>↗</span></article>)}
        </div>
      </section>

      <section className="services wrap" id="services">
        <div className="section-head"><p className="eyebrow">WHAT WE MAKE</p><p>Vier Disziplinen.<br />Ein Blick nach vorn.</p></div>
        <div className="service-list">
          {services.map((service, index) => {
            const slugs = ["erklaervideo-agentur", "digital-signage-content", "wandmalerei-wanddesign", "logo-design-agentur"];
            return <a href={`/leistungen/${slugs[index]}`} className="service" key={service.number}><span className="service-num">{service.number}</span><h3>{service.name}</h3><p>{service.copy}</p><span className="service-tag">{service.tag}</span><b>↗</b></a>;
          })}
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <p className="eyebrow">LET&apos;S BUILD A WORLD</p>
        <h2>Eine Idee?<br /><em>Öffne das Portal.</em></h2>
        <a href="/kontakt" className="email">Projekt anfragen <span>↗</span></a>
      </section>

      <footer className="footer wrap"><a className="wordmark" href="#top">PARADOLOGIX<span>®</span></a><p>© 2026 Paradologix</p><a href="/impressum">Impressum</a><a href="#top">Nach oben ↑</a></footer>
    </main>
  );
}

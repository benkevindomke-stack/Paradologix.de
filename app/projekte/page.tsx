import type { Metadata } from "next";
import "./projects.css";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekte | Paradologix",
  description: "Konzeptuelle Arbeiten von Paradologix aus Film, Raum, 3D und Identity Design.",
};

export default function ProjectsPage() {
  return <main className="projects-page">
    <nav className="projects-nav projects-wrap"><a href="/" className="projects-logo">PARADOLOGIX<sup>®</sup></a><a href="/#services">Leistungen</a><a href="mailto:studio@paradologix.com">Projekt starten ↗</a></nav>
    <header className="projects-header projects-wrap"><p><span /> SELECTED WORK / CONCEPT STUDIES</p><h1>Andere Welten,<br /><em>mit Absicht.</em></h1><small>Die folgenden Arbeiten sind konzeptionelle Fallstudien und zeigen die gestalterische Richtung von Paradologix.</small></header>
    <section className="projects-grid projects-wrap">{projects.map((project) => <a href={`/projekte/${project.slug}`} className={`project-card ${project.tone}`} key={project.number}><div className="project-visual"><i /><i /><b /></div><div className="project-copy"><p>{project.number} / {project.category.toUpperCase()}</p><h2>{project.title}</h2><span>{project.overview}</span><strong>↗</strong></div></a>)}</section>
    <footer className="projects-footer projects-wrap"><p>HAST DU EIN PROJEKT IM KOPF?</p><a href="mailto:studio@paradologix.com">studio@paradologix.com <span>↗</span></a></footer>
  </main>;
}

import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import "./magazine.css";

export const metadata: Metadata = { title: "Magazin | Paradologix", description: "Perspektiven aus Film, Raum, Wall Design und Identity." };

export default function MagazinePage() {
  return <main className="magazine"><nav className="magazine-nav magazine-wrap"><a href="/" className="magazine-logo">PARADOLOGIX<sup>®</sup></a><span>MAGAZIN</span><a href="/kontakt">Projekt starten ↗</a></nav><header className="magazine-head magazine-wrap"><p><span /> PERSPEKTIVEN AUS DEM STUDIO</p><h1>Wissen mit<br /><em>Weitwinkel.</em></h1><p>Gedanken, Prozesse und praktische Einblicke aus der Welt von Bewegung, Raum und Identität.</p></header><section className="article-grid magazine-wrap">{articles.map((article, index) => <a href={`/magazin/${article.slug}`} className={`article-card tone-${index}`} key={article.slug}><div className="article-art"><i /><b /></div><p>{article.category} · {article.readTime}</p><h2>{article.title}</h2><span>↗</span></a>)}</section></main>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import "../magazine.css";

type PageParams = Promise<{ slug: string }>;
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> { const article = getArticle((await params).slug); return article ? { title: `${article.title} | Paradologix`, description: article.description } : {}; }
export default async function ArticlePage({ params }: { params: PageParams }) { const article = getArticle((await params).slug); if (!article) notFound(); return <main className="article-page"><nav className="magazine-nav magazine-wrap"><a href="/" className="magazine-logo">PARADOLOGIX<sup>®</sup></a><a href="/magazin">← Magazin</a><a href="/kontakt">Projekt starten ↗</a></nav><article className="article-body magazine-wrap"><p className="article-meta">{article.category} · {article.readTime}</p><h1>{article.title}</h1><p className="article-lede">{article.intro}</p><div className="article-rule" />{article.sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2><p>{section.body}</p></div></section>)}<aside><p>DU PLANST EIN ÄHNLICHES PROJEKT?</p><a href="/kontakt">Projekt anfragen ↗</a></aside></article></main>; }

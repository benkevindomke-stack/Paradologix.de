import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import "./service.css";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: `${service.seoTitle} | Paradologix`, description: service.description } : {};
}

export default async function ServicePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const faqs = [
    { question: `Für welche Projekte eignet sich ${service.label}?`, answer: `${service.label} ist sinnvoll, wenn eine Idee nicht nur gezeigt, sondern klar, eigenständig und mit Haltung erlebbar werden soll. Wir entwickeln Umfang und Format aus Ziel, Kontext und gewünschter Wirkung.` },
    { question: "Wie beginnt eine Zusammenarbeit?", answer: "Mit einem unverbindlichen Gespräch zu Ausgangslage, Ziel, Zeitrahmen und Budget. Daraus leiten wir einen nachvollziehbaren Projektumfang und die nächsten Schritte ab." },
    { question: "Was kostet ein Projekt?", answer: "Der Aufwand richtet sich nach Konzept, Produktionsumfang, technischen Anforderungen und gewünschtem Ergebnis. Nach dem Erstgespräch erhältst du eine transparente Einschätzung oder ein passendes Angebot." },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: service.label, description: service.description, provider: { "@type": "ProfessionalService", name: "Paradologix", url: "https://paradologix.de" }, areaServed: "Deutschland" },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return <main className={`service-page ${service.color}`}>
    <nav className="service-nav service-wrap"><a className="service-wordmark" href="/">PARADOLOGIX<sup>®</sup></a><a href="/#services">← Alle Leistungen</a><a href="#contact">Projekt starten ↗</a></nav>
    <section className="service-hero service-wrap">
      <div><p className="service-kicker"><span /> {service.number} / {service.group}</p><h1>{service.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1></div>
      <div className="service-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core" /><p>{service.label}<br />PARADOLOGIX / 2026</p></div>
    </section>
    <section className="service-intro service-wrap"><p className="service-overline">{service.seoTitle}</p><h2>{service.intro}</h2><p className="service-description">{service.description}</p></section>
    <section className="service-detail service-wrap"><div><p className="service-overline">WAS WIR LIEFERN</p><ol>{service.deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div><div><p className="service-overline">SUCHTHEMEN</p><div className="keyword-list">{service.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div><p className="process-copy">Jedes Projekt beginnt mit einem präzisen Blick auf Kontext, Ziel und Wirkung. Danach entsteht eine eigene visuelle Logik - klar genug für die Botschaft, offen genug für Überraschung.</p></div></section>
    <section className="service-faq service-wrap"><p className="service-overline">HÄUFIGE FRAGEN</p>{faqs.map((faq, index) => <details key={faq.question}><summary><span>0{index + 1}</span>{faq.question}<b>+</b></summary><p>{faq.answer}</p></details>)}</section>
    <section className="service-cta service-wrap" id="contact"><p className="service-overline">MAKE SPACE FOR IT</p><h2>Erzähl uns, was<br /><em>möglich werden soll.</em></h2><a href="/kontakt">Projekt anfragen <span>↗</span></a></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  </main>;
}

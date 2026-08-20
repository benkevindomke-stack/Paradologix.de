import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { englishServices, getEnglishService } from "@/lib/services-en";
import "../../../leistungen/[slug]/service.css";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return englishServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const service = getEnglishService(slug);
  return service ? { title: `${service.seoTitle} | Paradologix`, description: service.description, alternates: { canonical: `/en/services/${service.slug}` } } : {};
}

export default async function EnglishServicePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const service = getEnglishService(slug);
  if (!service) notFound();

  return <main className={`service-page ${service.color}`}>
    <nav className="service-nav service-wrap"><a className="service-wordmark" href="/en">PARADOLOGIX<sup>®</sup></a><a href="/en/#services">← All services</a><a href="#contact">Start a project ↗</a></nav>
    <section className="service-hero service-wrap"><div><p className="service-kicker"><span /> {service.number} / {service.group}</p><h1>{service.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1></div><div className="service-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core" /><p>{service.label}<br />PARADOLOGIX / 2026</p></div></section>
    <section className="service-intro service-wrap"><p className="service-overline">{service.seoTitle}</p><h2>{service.intro}</h2><p className="service-description">{service.description}</p></section>
    <section className="service-detail service-wrap"><div><p className="service-overline">WHAT WE DELIVER</p><ol>{service.deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div><div><p className="service-overline">SEARCH TOPICS</p><div className="keyword-list">{service.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div><p className="process-copy">Every project starts with a precise view of context, intent and impact. From there, a visual logic emerges - clear enough for the message and open enough for surprise.</p></div></section>
      <section className="service-cta service-wrap" id="contact"><p className="service-overline">MAKE SPACE FOR IT</p><h2>Tell us what<br /><em>could become real.</em></h2><a href="mailto:studio@paradologix.com">studio@paradologix.com <span>↗</span></a></section>
  </main>;
}

export type Service = {
  slug: string;
  number: string;
  group: string;
  label: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  keywords: string[];
  deliverables: string[];
  color: string;
};

export const services: Service[] = [
  {
    slug: "videoproduktion",
    number: "01",
    group: "Film & Motion Design",
    label: "Videoproduktion",
    title: "Bewegte Bilder.\nKlare Haltung.",
    seoTitle: "Videoproduktion Dresden & Sachsen für Marken mit Haltung",
    description: "Videoproduktion für Marken, Produkte und Räume - von der ersten Idee bis zum finalen Film.",
    intro: "Wir verbinden Strategie, Regie und Gestaltung zu Filmen, die nicht nur Aufmerksamkeit erzeugen, sondern eine Perspektive hinterlassen.",
    keywords: ["Videoproduktion Dresden", "Videoproduktion Sachsen", "Filmproduktion"],
    deliverables: ["Konzept & Regie", "Produktion & Dreh", "Schnitt & Postproduktion", "Sounddesign & Ausspielung"],
    color: "blue",
  },
  {
    slug: "imagefilm-produktion",
    number: "02",
    group: "Film & Motion Design",
    label: "Imagefilm",
    title: "Eine Marke.\nEine Geschichte.",
    seoTitle: "Imagefilm Produktion für Marken mit Geschichte",
    description: "Imagefilme, die Unternehmen, Menschen und Marken in eine spürbare Erzählung übersetzen.",
    intro: "Ein guter Imagefilm erklärt nicht nur, wer Sie sind. Er macht erfahrbar, warum Ihre Marke relevant ist.",
    keywords: ["Imagefilm Produktion", "Unternehmensfilm", "Corporate Film"],
    deliverables: ["Story & Dramaturgie", "Casting & Produktion", "Film & Fotografie", "Postproduktion & Formate"],
    color: "amber",
  },
  {
    slug: "erklaervideo-agentur",
    number: "03",
    group: "Film & Motion Design",
    label: "Erklärvideo",
    title: "Komplexes wird\nspürbar klar.",
    seoTitle: "Erklärvideo Agentur für Marken mit Bewegung",
    description: "Erklärvideos, die Haltung zeigen - strategisch gedacht, visuell präzise und leicht zu verstehen.",
    intro: "Wir verdichten Ideen, Produkte und Prozesse zu Geschichten, die sofort verständlich sind und lange nachwirken.",
    keywords: ["Erklärvideo Agentur", "Motion Design", "2D & 3D Animation"],
    deliverables: ["Strategie & Konzept", "Storyboard", "Illustration & Animation", "Sounddesign & Finalisierung"],
    color: "lime",
  },
  {
    slug: "wandmalerei-wanddesign",
    number: "04",
    group: "Wall Design",
    label: "Wandmalerei & Wanddesign",
    title: "Wände werden\nzu Welten.",
    seoTitle: "Wandmalerei & Wanddesign für Räume mit Wirkung",
    description: "Individuelle Wandgestaltung, die Räume verändert - von grafischer Wandmalerei bis zur anamorphischen Illusion.",
    intro: "Wir denken Wandflächen nicht als Grenze, sondern als Einladung. Für Markenräume, öffentliche Orte und private Welten.",
    keywords: ["Wandmalerei", "Wanddesign", "Graffiti Auftrag"],
    deliverables: ["Raum- & Farbkonzept", "Entwurf & Visualisierung", "Ausführung vor Ort", "Anamorphose & Illusion"],
    color: "violet",
  },
  {
    slug: "3d-visualisierung",
    number: "05",
    group: "Film & Motion Design",
    label: "3D-Visualisierung",
    title: "Noch nicht da.\nSchon erlebbar.",
    seoTitle: "3D-Visualisierung & Produktvisualisierung mit Charakter",
    description: "Fotorealistische 3D-Visualisierung für Produkte, Räume und architektonische Ideen.",
    intro: "Wir machen Vorstellbares sichtbar. Mit Licht, Material und Perspektive entstehen Bilder, die Entscheidung und Begehren auslösen.",
    keywords: ["3D-Visualisierung", "Produktvisualisierung", "CGI Studio"],
    deliverables: ["Creative Direction", "3D Modelling", "Material & Lighting", "Still & Motion Renderings"],
    color: "amber",
  },
  {
    slug: "logo-design-agentur",
    number: "06",
    group: "Identity Design",
    label: "Logo Design",
    title: "Eine Form.\nEine Haltung.",
    seoTitle: "Logo Design Agentur - Logo erstellen lassen",
    description: "Unverwechselbare Logos und visuelle Identitäten, entwickelt von Designern statt Generatoren.",
    intro: "Ein Zeichen ist der kürzeste Weg zu einer Idee. Wir entwickeln Identitäten, die eine Marke auf den Punkt bringen.",
    keywords: ["Logo erstellen lassen", "Logo Design Agentur", "Firmenlogo erstellen"],
    deliverables: ["Markenpositionierung", "Logoentwicklung", "Farb- & Typografiesystem", "Brand Guidelines"],
    color: "silver",
  },
  {
    slug: "digital-signage-content",
    number: "07",
    group: "New Media Design",
    label: "Digital Signage",
    title: "Content, der\nRäume aktiviert.",
    seoTitle: "Digital Signage Content für LED-Wände und Videowalls",
    description: "Motion und 3D-Content für LED-Wände, Videowalls, Messen und interaktive Displays.",
    intro: "Wir geben digitalen Flächen eine eigene Schwerkraft - mit Content, der Passant:innen stoppt und Räume in Bewegung bringt.",
    keywords: ["Digital Signage Content", "Videowall", "LED-Wand Content"],
    deliverables: ["Format- & Contentstrategie", "Motion Design", "3D Content", "Ausspielungsadaption"],
    color: "blue",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

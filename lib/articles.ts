export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "was-kostet-ein-erklaervideo",
    category: "Film & Motion",
    title: "Was kostet ein Erklärvideo?",
    description: "Kosten, Faktoren und Prozess für ein professionelles Erklärvideo.",
    readTime: "5 MIN. LESEZEIT",
    intro: "Ein gutes Erklärvideo ist nicht einfach eine Animation. Es ist die konzentrierte Form einer Idee - und sein Budget hängt vor allem davon ab, wie präzise diese Idee entwickelt wird.",
    sections: [
      { heading: "Wofür man eigentlich bezahlt", body: "Konzeption, Skript und Storyboard schaffen die Grundlage. Illustration, Animation, Sprecher:in und Sounddesign geben ihr Form. Je klarer die Aufgabe, desto gezielter kann der Aufwand in Wirkung übersetzt werden." },
      { heading: "Die wichtigsten Kostenfaktoren", body: "Stil, Länge, Animationsaufwand, Anzahl der Sprachversionen und die Qualität des Ausgangsmaterials bestimmen das Budget. Ein präzise entwickeltes Video kann dabei mehr leisten als mehrere austauschbare Assets." },
      { heading: "Der richtige Start", body: "Nicht mit der gewünschten Sekundenlänge beginnen, sondern mit dem Ziel: Was soll nach dem Video klarer, anders oder möglich sein? Daraus entsteht ein Format, das wirklich passt." },
    ],
  },
  {
    slug: "wandmalerei-planen-ablauf-kosten",
    category: "Wall Design",
    title: "Wandmalerei planen: Ablauf & Kosten",
    description: "So wird aus einer Wandfläche ein individuelles Gestaltungskonzept.",
    readTime: "6 MIN. LESEZEIT",
    intro: "Wandmalerei verändert nicht nur Oberflächen. Sie verändert, wie ein Raum gelesen wird - und beginnt deshalb immer mit einem Blick auf den Ort.",
    sections: [
      { heading: "Der Raum ist Teil des Entwurfs", body: "Licht, Blickachsen, Material, Nutzung und Architektur entscheiden mit. Erst wenn diese Ebenen zusammenspielen, wird aus einem Motiv ein raumgreifendes Erlebnis." },
      { heading: "Vom Entwurf zur Ausführung", body: "Nach einem gemeinsamen Briefing entstehen Entwürfe und Visualisierungen. Sie machen Wirkung, Farbwelt und Perspektive vor der Umsetzung greifbar - besonders bei großformatigen und anamorphischen Arbeiten." },
      { heading: "Was den Aufwand bestimmt", body: "Fläche, Untergrund, Zugänglichkeit, Detailgrad und Vorbereitung vor Ort prägen das Budget. Eine gute Planung schafft Transparenz und verhindert, dass eine starke Idee in der Umsetzung Kompromisse machen muss." },
    ],
  },
  {
    slug: "3d-visualisierung-einsatzbereiche",
    category: "3D & CGI",
    title: "3D-Visualisierung: Einsatzbereiche für Marken",
    description: "Wann 3D-Visualisierung Produkte, Räume und Kampagnen besonders stark macht.",
    readTime: "4 MIN. LESEZEIT",
    intro: "3D-Visualisierung zeigt nicht nur etwas, das noch nicht existiert. Sie macht Material, Licht und Perspektive zu einem eigenen Argument.",
    sections: [
      { heading: "Produkte mit Präsenz", body: "Für Produkte, die noch im Prototypenstadium sind oder unter perfektem Licht erscheinen sollen, ist CGI ein präzises Werkzeug. Varianten, Details und Bewegungen bleiben vollständig steuerbar." },
      { heading: "Räume vor dem ersten Spatenstich", body: "Architektur, Retail und Ausstellungen werden verständlicher, wenn Menschen sie schon vor der Realisierung erleben können. Visualisierung wird so Teil von Entscheidungsprozessen." },
      { heading: "Ein System statt eines einzelnen Bildes", body: "Der größte Wert entsteht, wenn Still Renderings, Bewegtbild, Social Assets und digitale Flächen aus einer gemeinsamen 3D-Welt entwickelt werden." },
    ],
  },
  {
    slug: "logo-erstellen-lassen-prozess",
    category: "Identity Design",
    title: "Logo erstellen lassen: Der Prozess",
    description: "Wie ein professionelles Logo von der Positionierung bis zum System entsteht.",
    readTime: "5 MIN. LESEZEIT",
    intro: "Ein Logo ist kein dekorativer Abschluss. Es ist eine konzentrierte Entscheidung darüber, wie eine Marke in Erinnerung bleiben soll.",
    sections: [
      { heading: "Zuerst die Haltung", body: "Bevor Formen entstehen, muss klar werden, wofür eine Marke steht, wen sie erreicht und welche Unterscheidung wirklich relevant ist. Das schafft ein Zeichen mit Substanz." },
      { heading: "Von der Form zum System", body: "Ein starkes Logo funktioniert nicht isoliert. Farbe, Typografie, Abstände und Anwendungen geben ihm im Alltag Konsistenz - vom kleinen Avatar bis zur großen Fläche." },
      { heading: "Warum nicht der Generator", body: "Werkzeuge können Varianten erzeugen. Sie treffen aber keine strategische Entscheidung und entwickeln keine visuelle Haltung. Genau dort beginnt die Arbeit eines Designstudios." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

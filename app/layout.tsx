import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paradologix — Creative Media Studio",
  description: "Film, Medienräume, Wall Design und Identity für Marken, die mehr Raum einnehmen wollen.",
  metadataBase: new URL("https://paradologix.de"),
  openGraph: {
    title: "Paradologix — Creative Media Studio",
    description: "Film, Medienräume, Wall Design und Identity für Marken, die mehr Raum einnehmen wollen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Paradologix",
              url: "https://paradologix.de",
              description: "Creative Media Studio für Film, Medienräume, Wall Design und Identity.",
              areaServed: ["Deutschland", "International"],
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}

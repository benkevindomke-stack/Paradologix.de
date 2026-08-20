import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paradologix — Creative Media Studio",
  description: "Creative Media Studio aus Dresden für Film, Medienräume, Wall Design und Identity in ganz Sachsen.",
  metadataBase: new URL("https://paradologix.de"),
  openGraph: {
    title: "Paradologix — Creative Media Studio",
    description: "Creative Media Studio aus Dresden für Film, Medienräume, Wall Design und Identity in ganz Sachsen.",
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
              description: "Creative Media Studio aus Dresden für Film, Medienräume, Wall Design und Identity in ganz Sachsen.",
              address: { "@type": "PostalAddress", addressLocality: "Dresden", addressCountry: "DE" },
              areaServed: ["Dresden", "Sachsen", "Deutschland", "International"],
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}

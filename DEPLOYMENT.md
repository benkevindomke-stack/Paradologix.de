# Deployment: GitHub, Vercel und Domains

## 1. GitHub

1. In GitHub ein neues leeres Repository anlegen, zum Beispiel `paradologix`.
2. Den Inhalt dieses Ordners in das Repository pushen.
3. Keine `.env`-Dateien, `node_modules` oder `.next` committen - sie sind bereits ignoriert.

## 2. Vercel

1. In Vercel **Add New → Project** wählen.
2. Das GitHub-Repository `paradologix` importieren.
3. Framework-Vorgabe **Next.js** unverändert lassen.
4. Deploy auslösen. Jeder spätere Push nach `main` erzeugt automatisch ein neues Deployment.

## 3. Domains

In Vercel unter **Settings → Domains** beide Domains hinterlegen:

- `paradologix.de` und optional `www.paradologix.de`
- `paradologix.com` und optional `www.paradologix.com`

Die Middleware ordnet die Domains anschließend automatisch zu:

| Domain | Sprache | Beispiel |
| --- | --- | --- |
| `paradologix.de` | Deutsch | `/leistungen/erklaervideo-agentur` |
| `paradologix.com` | Englisch | `/services/explainer-video-agency` |

In der DNS-Verwaltung die von Vercel angezeigten Records setzen. Vercel stellt danach TLS/HTTPS automatisch bereit.

## 4. Vor Livegang ersetzen

- `hello@paradologix.de` mit der bestätigten Kontaktadresse
- Konzeptstudien durch echte Referenzen, Fotos und Projekttexte
- Platzhalter für Impressum und Datenschutz durch finale Rechtstexte
- Optional die Werte aus `.env.example`, sobald das Sanity-CMS verbunden wird

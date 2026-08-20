export type EnglishService = {
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

export const englishServices: EnglishService[] = [
  { slug: "video-production", number: "01", group: "Film & Motion Design", label: "Video Production", title: "Moving images.\nClear perspective.", seoTitle: "Video production Berlin for brands with perspective", description: "Video production for brands, products and spaces - from the first idea to the finished film.", intro: "We bring strategy, direction and craft together in films that do more than catch attention: they leave a perspective behind.", keywords: ["Video production Berlin", "Film production", "Motion design"], deliverables: ["Concept & direction", "Production & shoot", "Editing & post-production", "Sound design & delivery"], color: "blue" },
  { slug: "corporate-film-production", number: "02", group: "Film & Motion Design", label: "Corporate Film", title: "One brand.\nOne story.", seoTitle: "Corporate film production for brands with a story to tell", description: "Corporate films that turn companies, people and brands into stories you can feel.", intro: "A strong corporate film does not merely explain who you are. It makes clear why your brand matters.", keywords: ["Corporate film production", "Brand film", "Company video"], deliverables: ["Story & structure", "Casting & production", "Film & photography", "Post-production & formats"], color: "amber" },
  { slug: "explainer-video-agency", number: "03", group: "Film & Motion Design", label: "Explainer Video", title: "Complex ideas.\nClearly felt.", seoTitle: "Explainer video agency for brands in motion", description: "Explainer videos with a clear point of view - strategically shaped and visually precise.", intro: "We turn ideas, products and processes into stories that are understood at once and remembered long after.", keywords: ["Explainer video agency", "Motion design", "2D & 3D animation"], deliverables: ["Strategy & concept", "Storyboarding", "Illustration & animation", "Sound design & delivery"], color: "lime" },
  { slug: "mural-artist", number: "04", group: "Wall Design", label: "Murals & Wall Design", title: "Walls become\nworlds.", seoTitle: "Mural artist and wall design for spaces with impact", description: "Custom murals and wall design that transform spaces - from graphic painting to anamorphic illusion.", intro: "We see walls not as boundaries but as invitations. For branded spaces, public places and private worlds.", keywords: ["Mural artist", "Wall design", "Commissioned graffiti"], deliverables: ["Spatial & colour concept", "Design & visualisation", "On-site execution", "Anamorphosis & illusion"], color: "violet" },
  { slug: "3d-visualization", number: "05", group: "Film & Motion Design", label: "3D Visualisation", title: "Not built yet.\nAlready tangible.", seoTitle: "3D visualisation and product visualisation with character", description: "Photorealistic 3D visualisation for products, spaces and architectural ideas.", intro: "We make what can be imagined visible. Light, material and perspective become images that create desire and clarity.", keywords: ["3D visualisation", "Product visualisation", "CGI studio"], deliverables: ["Creative direction", "3D modelling", "Material & lighting", "Still & motion rendering"], color: "amber" },
  { slug: "logo-design-agency", number: "06", group: "Identity Design", label: "Logo Design", title: "One shape.\nOne position.", seoTitle: "Logo design agency for distinctive identities", description: "Distinctive logos and visual identities, developed by designers rather than generators.", intro: "A mark is the shortest route to an idea. We develop identities that bring a brand into sharp focus.", keywords: ["Logo design agency", "Custom logo design", "Brand identity design"], deliverables: ["Brand positioning", "Logo development", "Colour & type system", "Brand guidelines"], color: "silver" },
  { slug: "digital-signage-content", number: "07", group: "New Media Design", label: "Digital Signage", title: "Content that\nactivates space.", seoTitle: "Digital signage content for LED walls and videowalls", description: "Motion and 3D content for LED walls, videowalls, exhibitions and interactive displays.", intro: "We give digital surfaces their own gravity - with content that stops people and sets spaces in motion.", keywords: ["Digital signage content", "Videowall content", "LED wall animation"], deliverables: ["Format & content strategy", "Motion design", "3D content", "Delivery adaptations"], color: "blue" },
];

export function getEnglishService(slug: string) {
  return englishServices.find((service) => service.slug === slug);
}

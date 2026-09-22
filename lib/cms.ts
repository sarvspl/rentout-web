/**
 * Website content, read from the RentOut backend's public CMS endpoint.
 *
 * The site must render even when the backend is down or not yet seeded, so
 * every failure falls back to the shipped copy in content/site.ts rather than
 * throwing: a marketing page with slightly stale wording beats a 500.
 */
import {
  hero as fallbackHero,
  nav as fallbackNav,
  stats as fallbackStats,
  services as fallbackServices,
  franchise as fallbackFranchise,
  cities as fallbackCities,
  about as fallbackAbout,
  faq as fallbackFaq,
  testimonials as fallbackTestimonials,
  newsletter as fallbackNewsletter,
  footer as fallbackFooter,
} from "@/content/site";

const API_URL = (process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1").replace(/\/$/, "");

/**
 * Read fresh on every request: an administrator who saves a change expects to
 * see it on the site straight away, not after a cache window. If this ever
 * costs too much, the upgrade is on-demand revalidation from the admin save,
 * not a blind timer.
 */
const CACHE_MODE = "no-store" as const;

export type NavLink = { label: string; href: string };

export type HeroContent = {
  eyebrow: string;
  titleLines: { text: string; accent: boolean }[][];
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badge: string[];
  imageUrl: string;
  imageUrls: string[];
  slides: number;
  pins: { label: string; left: number; top: number }[];
};

export type StatsContent = {
  /** Plain text; `accentPhrases` are the parts drawn in the brand orange. */
  headline: string;
  accentPhrases: string[];
  figures: { value: string; label: string }[];
};

export type ServiceItem = { icon: string; title: string; subtitle: string };

export type FranchisePlan = {
  tier: string;
  name: string;
  scope: string;
  price: string;
  priceNote: string;
  commission: string;
  image: string;
  features: string[];
};

export type FranchiseContent = {
  eyebrow: string;
  title: string;
  body: string;
  plans: FranchisePlan[];
};


export type CityTile = {
  name: string;
  caption: string;
  image: string;
  span: number;
  row: number;
};

export type CitiesContent = {
  title: string;
  subtitle: string;
  linkLabel: string;
  linkHref: string;
  rows: CityTile[][];
};

export type AboutStep = { title: string; body: string };
export type AboutImage = { src: string; ratio: string; column: number };

export type AboutContent = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  steps: AboutStep[];
  images: AboutImage[];
};

export type FaqItem = { id: string; question: string; answer: string };
export type FaqContent = { title: string; items: FaqItem[] };

export type NewsletterContent = {
  title: string;
  placeholder: string;
  ctaLabel: string;
  note: string;
  image: string;
};

export type FooterSocial = { platform: string; url: string };
export type FooterLink = { label: string; href: string };

export type FooterContent = {
  blurb: string;
  logo: string;
  linksTitle: string;
  phone: string;
  email: string;
  copyright: string;
  socials: FooterSocial[];
  legalLinks: FooterLink[];
};

export type Testimonial = { name: string; role: string; avatar: string; quote: string };
export type TestimonialsContent = { title: string; subtitle: string; items: Testimonial[] };

export type SiteContent = {
  navLinks: NavLink[];
  hero: HeroContent;
  stats: StatsContent;
  services: ServiceItem[];
  franchise: FranchiseContent;
  cities: CitiesContent;
  about: AboutContent;
  faq: FaqContent;
  testimonials: TestimonialsContent;
  newsletter: NewsletterContent;
  footer: FooterContent;
};

/** The shipped copy, in the shape the components expect. */
export const fallbackContent: SiteContent = {
  navLinks: fallbackNav.map((item) => ({ label: item.label, href: item.href })),
  hero: {
    eyebrow: fallbackHero.eyebrow,
    titleLines: fallbackHero.titleLines,
    body: fallbackHero.body,
    primaryCta: fallbackHero.primaryCta,
    secondaryCta: fallbackHero.secondaryCta,
    badge: fallbackHero.badge,
    imageUrl: "/img/hero-collage.png",
    imageUrls: fallbackHero.imageUrls,
    slides: fallbackHero.imageUrls.length,
    pins: fallbackHero.pins,
  },
  stats: {
    headline: fallbackStats.headline.map((part) => part.text).join(""),
    accentPhrases: fallbackStats.headline.filter((part) => part.accent).map((part) => part.text),
    figures: fallbackStats.figures,
  },
  services: fallbackServices,
  franchise: {
    eyebrow: fallbackFranchise.eyebrow,
    title: fallbackFranchise.title,
    body: fallbackFranchise.body,
    plans: fallbackFranchise.plans.map((plan) => ({ ...plan, image: plan.image })),
  },
  cities: {
    title: fallbackCities.title,
    subtitle: fallbackCities.subtitle,
    linkLabel: fallbackCities.linkLabel,
    linkHref: "#categories",
    rows: fallbackCities.rows.map((row) =>
      row.map((city) => ({
        name: city.name,
        caption: city.count,
        image: city.image,
        span: city.span,
        row: 1,
      })),
    ),
  },
  about: {
    title: fallbackAbout.title,
    body: fallbackAbout.body.join(" "),
    ctaLabel: fallbackAbout.cta,
    ctaHref: "#contact",
    steps: fallbackAbout.steps.map((step) => ({ title: step.title, body: step.body })),
    images: [
      ...fallbackAbout.gallery.columnOne.map((image) => ({ src: image.src, ratio: image.ratio, column: 1 })),
      ...fallbackAbout.gallery.columnTwo.map((image) => ({ src: image.src, ratio: image.ratio, column: 2 })),
      ...fallbackAbout.gallery.columnThree.map((image) => ({ src: image.src, ratio: image.ratio, column: 3 })),
    ],
  },
  faq: {
    title: fallbackFaq.title,
    items: [...fallbackFaq.columnOne, ...fallbackFaq.columnTwo].map((item) => ({
      id: item.id,
      question: item.question,
      answer: fallbackFaq.answer,
    })),
  },
  testimonials: {
    title: fallbackTestimonials.title,
    subtitle: fallbackTestimonials.subtitle,
    items: fallbackTestimonials.items.map((item) => ({
      name: item.name,
      role: item.role,
      avatar: item.avatar,
      quote: item.quote,
    })),
  },
  newsletter: {
    title: fallbackNewsletter.title,
    placeholder: fallbackNewsletter.placeholder,
    ctaLabel: fallbackNewsletter.cta,
    note: fallbackNewsletter.note,
    image: "/img/mailbox.png",
  },
  footer: {
    blurb: fallbackFooter.blurb,
    logo: "/img/logo.png",
    linksTitle: "Quick Links",
    phone: fallbackFooter.contact.phone,
    email: fallbackFooter.contact.email,
    copyright: fallbackFooter.copyright,
    socials: fallbackFooter.socials.map((platform) => ({ platform, url: "#contact" })),
    legalLinks: fallbackFooter.legal.map((label) => ({ label, href: "#contact" })),
  },
};

type ApiHero = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine2Accent: string;
  body: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  badgeLine1?: string;
  badgeLine2?: string;
  imageUrl: string;
  imageUrls?: string[];
  slideCount: number;
  pins?: { label: string; leftPercent: number; topPercent: number }[];
};

function toHeroContent(hero: ApiHero): HeroContent {
  // The headline is two lines, the second ending in the orange accent word.
  const secondLine = [
    ...(hero.titleLine2 ? [{ text: `${hero.titleLine2} `, accent: false }] : []),
    ...(hero.titleLine2Accent ? [{ text: hero.titleLine2Accent, accent: true }] : []),
  ];
  const imageUrls = Array.isArray(hero.imageUrls) && hero.imageUrls.length > 0
    ? hero.imageUrls.filter(Boolean)
    : [hero.imageUrl].filter(Boolean);
  const badge = [hero.badgeLine1, hero.badgeLine2].filter((line): line is string => Boolean(line));

  return {
    eyebrow: hero.eyebrow,
    titleLines: [[{ text: hero.titleLine1, accent: false }], ...(secondLine.length ? [secondLine] : [])],
    body: hero.body,
    primaryCta: { label: hero.primaryCtaLabel, href: hero.primaryCtaHref },
    secondaryCta: { label: hero.secondaryCtaLabel, href: hero.secondaryCtaHref },
    badge,
    imageUrl: imageUrls[0] ?? hero.imageUrl,
    imageUrls,
    slides: Math.max(1, imageUrls.length),
    pins: (hero.pins ?? []).map((pin) => ({
      label: pin.label,
      left: Number(pin.leftPercent),
      top: Number(pin.topPercent),
    })),
  };
}


type ApiCity = {
  name: string;
  caption: string;
  imageUrl: string;
  span: number;
  row: number;
};

/** Tiles arrive as one ordered list carrying their row number; group them. */
function toCitiesContent(section: {
  title: string;
  subtitle: string;
  linkLabel: string;
  linkHref: string;
  cities: ApiCity[];
}): CitiesContent {
  const byRow = new Map<number, CityTile[]>();
  for (const city of section.cities ?? []) {
    const tile: CityTile = {
      name: city.name,
      caption: city.caption,
      image: city.imageUrl,
      span: city.span,
      row: city.row,
    };
    const row = byRow.get(city.row) ?? [];
    row.push(tile);
    byRow.set(city.row, row);
  }

  return {
    title: section.title,
    subtitle: section.subtitle,
    linkLabel: section.linkLabel,
    linkHref: section.linkHref,
    rows: [...byRow.entries()].sort((a, b) => a[0] - b[0]).map(([, tiles]) => tiles),
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const response = await fetch(`${API_URL}/public/cms`, { cache: CACHE_MODE });
    if (!response.ok) return fallbackContent;

    const payload = await response.json();
    const data = payload?.data;
    if (!data?.hero) return fallbackContent;

    const navLinks = Array.isArray(data.navLinks) && data.navLinks.length > 0
      ? data.navLinks.map((link: NavLink) => ({ label: link.label, href: link.href }))
      : fallbackContent.navLinks;

    return {
      navLinks,
      hero: toHeroContent(data.hero),
      stats: data.stats
        ? {
            headline: data.stats.headline,
            accentPhrases: data.stats.accentPhrases ?? [],
            figures: (data.stats.figures ?? []).map((figure: { value: string; label: string }) => ({
              value: figure.value,
              label: figure.label,
            })),
          }
        : fallbackContent.stats,
      services:
        Array.isArray(data.services) && data.services.length > 0
          ? data.services.map((item: ServiceItem) => ({
              icon: item.icon,
              title: item.title,
              subtitle: item.subtitle,
            }))
          : fallbackContent.services,
      franchise: data.franchise
        ? {
            eyebrow: data.franchise.eyebrow,
            title: data.franchise.title,
            body: data.franchise.body,
            plans: (data.franchise.plans ?? []).map(
              (plan: Omit<FranchisePlan, "image"> & { imageUrl: string }) => ({
                tier: plan.tier,
                name: plan.name,
                scope: plan.scope,
                price: plan.price,
                priceNote: plan.priceNote,
                commission: plan.commission,
                image: plan.imageUrl,
                features: plan.features ?? [],
              }),
            ),
          }
        : fallbackContent.franchise,
      cities: data.cities?.cities?.length ? toCitiesContent(data.cities) : fallbackContent.cities,
      about: data.about
        ? {
            title: data.about.title,
            body: data.about.body,
            ctaLabel: data.about.ctaLabel,
            ctaHref: data.about.ctaHref,
            steps: (data.about.steps ?? []).map((step: AboutStep) => ({
              title: step.title,
              body: step.body,
            })),
            images: (data.about.images ?? []).map(
              (image: { imageUrl: string; ratio: string; column: number }) => ({
                src: image.imageUrl,
                ratio: image.ratio,
                column: image.column,
              }),
            ),
          }
        : fallbackContent.about,
      faq: data.faq?.items?.length
        ? {
            title: data.faq.title,
            items: data.faq.items.map((item: FaqItem) => ({
              id: item.id,
              question: item.question,
              answer: item.answer,
            })),
          }
        : fallbackContent.faq,
      testimonials: data.testimonials?.items?.length
        ? {
            title: data.testimonials.title,
            subtitle: data.testimonials.subtitle,
            items: data.testimonials.items.map(
              (item: { name: string; role: string; avatarUrl: string; quote: string }) => ({
                name: item.name,
                role: item.role,
                avatar: item.avatarUrl,
                quote: item.quote,
              }),
            ),
          }
        : fallbackContent.testimonials,
      newsletter: data.newsletter
        ? {
            title: data.newsletter.title,
            placeholder: data.newsletter.placeholder,
            ctaLabel: data.newsletter.ctaLabel,
            note: data.newsletter.note,
            image: data.newsletter.imageUrl,
          }
        : fallbackContent.newsletter,
      footer: data.footer
        ? {
            blurb: data.footer.blurb,
            logo: data.footer.logoUrl,
            linksTitle: data.footer.linksTitle,
            phone: data.footer.phone,
            email: data.footer.email,
            copyright: data.footer.copyright,
            socials: (data.footer.socials ?? []).map((social: FooterSocial) => ({
              platform: social.platform,
              url: social.url,
            })),
            legalLinks: (data.footer.legalLinks ?? []).map((link: FooterLink) => ({
              label: link.label,
              href: link.href,
            })),
          }
        : fallbackContent.footer,
    };
  } catch {
    // Backend unreachable: ship the page with the built-in copy.
    return fallbackContent;
  }
}

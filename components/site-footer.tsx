import {
  footer as fallbackFooter,
  newsletter as fallbackNewsletter,
  nav as fallbackNav,
} from "@/content/site";
import type { FooterContent, NavLink, NewsletterContent } from "@/lib/cms";
import { MailIcon, PhoneIcon, socialIcons } from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter({
  navLinks,
  newsletter,
  content,
}: {
  navLinks?: NavLink[];
  newsletter?: NewsletterContent;
  content?: FooterContent;
}) {
  // The same links an administrator manages for the header, so the footer can
  // never drift out of step with the site's real sections.
  const links = navLinks?.length ? navLinks : fallbackNav;
  const footer: FooterContent = content ?? {
    blurb: fallbackFooter.blurb,
    logo: "/img/logo.png",
    linksTitle: "Quick Links",
    phone: fallbackFooter.contact.phone,
    email: fallbackFooter.contact.email,
    copyright: fallbackFooter.copyright,
    socials: fallbackFooter.socials.map((platform) => ({ platform, url: "#contact" })),
    legalLinks: fallbackFooter.legal.map((label) => ({ label, href: "#contact" })),
  };

  const card: NewsletterContent = newsletter ?? {
    title: fallbackNewsletter.title,
    placeholder: fallbackNewsletter.placeholder,
    ctaLabel: fallbackNewsletter.cta,
    note: fallbackNewsletter.note,
    image: "/img/mailbox.png",
  };

  return (
    <section id="contact" className="rounded-t-[124px] bg-sky pt-[50px] lg:pt-[80px]">
      <div className="shell">
        {/* Newsletter card, overlapping the peach panel below it. */}
        <div className="relative z-10 mx-auto max-w-[900px] rounded-[20px] bg-royal px-5 py-8 sm:px-8 lg:px-[48px] lg:py-[42px]">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-6">
            <div className="relative mx-auto h-[180px] w-[180px] lg:absolute lg:-top-[90px] lg:left-[-10px] lg:h-[340px] lg:w-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.image} alt="" className="h-full w-full object-contain" />
            </div>

            <div className="lg:col-start-2">
              <h2 className="max-w-[420px] text-[18px] font-semibold leading-[1.35] text-white lg:text-[22px]">
                {card.title}
              </h2>

              <div className="mt-4">
                <NewsletterForm placeholder={card.placeholder} ctaLabel={card.ctaLabel} />
              </div>

              <p className="mt-4 max-w-[300px] text-[12px] leading-[1.55] text-white/80">
                {card.note}
              </p>
            </div>
          </div>
        </div>

        {/* Footer panel */}
        <div className="-mt-[50px] rounded-[40px] bg-peach shadow-[0_20px_40px_rgba(0,0,0,0.10)] px-5 pb-8 pt-[80px] sm:px-8 lg:-mt-[60px] lg:px-[60px] lg:pb-[32px] lg:pt-[100px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
            <div>
              <p className="max-w-[300px] text-[14px] leading-[1.6] text-ink/85">{footer.blurb}</p>
              <div className="mt-5 flex items-center gap-4">
                {footer.socials.map((social) => {
                  // An unknown platform key must not crash the footer.
                  const Icon = socialIcons[social.platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={`${social.platform}-${social.url}`}
                      href={social.url}
                      aria-label={social.platform}
                      className="text-ink transition-opacity hover:opacity-70"
                    >
                      <Icon className="h-[16px] w-[16px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-24 gap-y-8 lg:gap-x-32">
              <div>
                <p className="text-[14px] font-semibold text-ink">{footer.linksTitle}</p>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <a href={link.href} className="text-[13.5px] text-ink/75 hover:text-ink">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-ink">Contact</p>
                <ul className="mt-3 space-y-2.5">
                  <li>
                    <a
                      href={`tel:${footer.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[13.5px] text-ink/75 hover:text-ink"
                    >
                      <PhoneIcon className="h-[15px] w-[15px] text-royal" />
                      {footer.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${footer.email}`}
                      className="flex items-center gap-2 text-[13.5px] text-ink/75 hover:text-ink"
                    >
                      <MailIcon className="h-[15px] w-[15px] text-royal" />
                      {footer.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={footer.logo}
            alt="RentOut"
            className="mt-8 h-[64px] w-[64px] object-contain"
          />

          <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-ink/70">{footer.copyright}</p>
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
              {footer.legalLinks.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <a href={item.href} className="text-[13px] text-ink/70 hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[28px]" />
    </section>
  );
}

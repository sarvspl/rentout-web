import Image from "next/image";
import { footer, newsletter } from "@/content/site";
import { MailIcon, PhoneIcon, socialIcons } from "@/components/icons";

export function SiteFooter() {
  return (
    <section id="contact" className="rounded-t-[124px] bg-sky pt-[50px] lg:pt-[80px]">
      <div className="shell">
        {/* Newsletter card, overlapping the peach panel below it. */}
        <div className="relative z-10 mx-auto max-w-[900px] rounded-[20px] bg-royal px-5 py-8 sm:px-8 lg:px-[48px] lg:py-[42px]">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-6">
            <div className="relative mx-auto h-[180px] w-[180px] lg:absolute lg:-top-[90px] lg:left-[-10px] lg:h-[340px] lg:w-[340px]">
              <Image
                src="/img/mailbox.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 180px, 340px"
                className="object-contain"
              />
            </div>

            <div className="lg:col-start-2">
              <h2 className="max-w-[420px] text-[18px] font-semibold leading-[1.35] text-white lg:text-[22px]">
                {newsletter.title}
              </h2>

              <form className="mt-4 flex max-w-[420px] items-center gap-2 rounded-full bg-[#5d86ea] p-1">
                <span className="grid h-[36px] w-[36px] shrink-0 place-items-center text-white/80">
                  <MailIcon className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder={newsletter.placeholder}
                  aria-label={newsletter.placeholder}
                  className="h-[36px] min-w-0 flex-1 bg-transparent text-[13px] text-white placeholder:text-white/80 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-[36px] shrink-0 rounded-full bg-white px-5 text-[13px] font-medium text-ink transition-colors hover:bg-white/90"
                >
                  {newsletter.cta}
                </button>
              </form>

              <p className="mt-4 max-w-[300px] text-[12px] leading-[1.55] text-white/80">
                {newsletter.note}
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
                {footer.socials.map((name) => {
                  const Icon = socialIcons[name];
                  return (
                    <a
                      key={name}
                      href="#contact"
                      aria-label={name}
                      className="text-ink transition-opacity hover:opacity-70"
                    >
                      <Icon className="h-[16px] w-[16px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[14px] font-semibold text-ink">{column.title}</p>
                  <ul className="mt-3 space-y-2">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#contact" className="text-[13.5px] text-ink/75 hover:text-ink">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <p className="text-[14px] font-semibold text-ink">Contact</p>
                <ul className="mt-3 space-y-2.5">
                  <li>
                    <a
                      href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-[13.5px] text-ink/75 hover:text-ink"
                    >
                      <PhoneIcon className="h-[15px] w-[15px] text-royal" />
                      {footer.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${footer.contact.email}`}
                      className="flex items-center gap-2 text-[13.5px] text-ink/75 hover:text-ink"
                    >
                      <MailIcon className="h-[15px] w-[15px] text-royal" />
                      {footer.contact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Image
            src="/img/logo.png"
            alt="RentOut"
            width={240}
            height={240}
            className="mt-8 h-[64px] w-[64px] object-contain"
          />

          <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-ink/70">{footer.copyright}</p>
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
              {footer.legal.map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-[13px] text-ink/70 hover:text-ink">
                    {item}
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

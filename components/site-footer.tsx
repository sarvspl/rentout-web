import Image from "next/image";
import { footer, newsletter } from "@/content/site";
import { MailIcon, PhoneIcon, socialIcons } from "@/components/icons";

export function SiteFooter() {
  return (
    <section id="contact" className="rounded-t-[48px] bg-sky pt-[70px] lg:pt-[110px]">
      <div className="shell">
        {/* Newsletter card, overlapping the peach panel below it. */}
        <div className="relative z-10 mx-auto max-w-[1260px] rounded-[26px] bg-royal px-6 py-10 sm:px-10 lg:px-[60px] lg:py-[56px]">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
            <div className="relative mx-auto h-[220px] w-[220px] lg:absolute lg:-top-[120px] lg:left-[-30px] lg:h-[450px] lg:w-[450px]">
              <Image
                src="/img/mailbox.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 220px, 450px"
                className="object-contain"
              />
            </div>

            <div className="lg:col-start-2">
              <h2 className="max-w-[460px] text-[22px] font-semibold leading-[1.35] text-white lg:text-[28px]">
                {newsletter.title}
              </h2>

              <form className="mt-6 flex max-w-[460px] items-center gap-2 rounded-full bg-[#5d86ea] p-1.5">
                <span className="grid h-[42px] w-[42px] shrink-0 place-items-center text-white/80">
                  <MailIcon className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  required
                  placeholder={newsletter.placeholder}
                  aria-label={newsletter.placeholder}
                  className="h-[42px] min-w-0 flex-1 bg-transparent text-[14px] text-white placeholder:text-white/85 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-[42px] shrink-0 rounded-full bg-white px-6 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
                >
                  {newsletter.cta}
                </button>
              </form>

              <p className="mt-5 max-w-[330px] text-[13px] leading-[1.6] text-white/85">
                {newsletter.note}
              </p>
            </div>
          </div>
        </div>

        {/* Footer panel */}
        <div className="-mt-[70px] rounded-[40px] bg-peach px-6 pb-10 pt-[110px] sm:px-10 lg:-mt-[80px] lg:px-[80px] lg:pb-[40px] lg:pt-[140px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="max-w-[330px] text-[15px] leading-[1.6] text-ink/85">{footer.blurb}</p>
              <div className="mt-6 flex items-center gap-5">
                {footer.socials.map((name) => {
                  const Icon = socialIcons[name];
                  return (
                    <a
                      key={name}
                      href="#contact"
                      aria-label={name}
                      className="text-ink transition-opacity hover:opacity-70"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footer.columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[16px] font-semibold">{column.title}</p>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#contact" className="text-[15px] text-ink/80 hover:text-ink">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <p className="text-[16px] font-semibold">Contact</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2.5 text-[15px] text-ink/80 hover:text-ink"
                    >
                      <PhoneIcon className="h-[18px] w-[18px] text-royal" />
                      {footer.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${footer.contact.email}`}
                      className="flex items-center gap-2.5 text-[15px] text-ink/80 hover:text-ink"
                    >
                      <MailIcon className="h-[18px] w-[18px] text-royal" />
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
            width={360}
            height={360}
            className="mt-12 h-[90px] w-[90px] object-contain"
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-ink/75">{footer.copyright}</p>
            <ul className="flex flex-wrap items-center gap-6">
              {footer.legal.map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-[14px] text-ink/75 hover:text-ink">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[40px]" />
    </section>
  );
}

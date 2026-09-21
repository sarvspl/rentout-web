import { serviceIcons } from "@/components/icons";
import { services } from "@/content/site";

export function ServiceBar() {
  return (
    <section className="bg-lavender">
      <div className="shell grid grid-cols-1 gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-[28px]">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon];
          return (
            <div
              key={service.title}
              className={
                index === 0
                  ? "flex items-center gap-3.5 lg:pr-6"
                  : "flex items-center gap-3.5 lg:border-l lg:border-[#d9d5ef] lg:pl-6 lg:pr-6"
              }
            >
              <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-brand text-white lg:h-[60px] lg:w-[60px]">
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </span>
              <span>
                <span className="block text-[15px] font-semibold leading-tight text-ink lg:text-[16px]">
                  {service.title}
                </span>
                <span className="mt-0.5 block text-[13px] text-ink/70 lg:text-[14px]">
                  {service.subtitle}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

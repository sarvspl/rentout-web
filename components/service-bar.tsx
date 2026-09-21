import { serviceIcons } from "@/components/icons";
import { services } from "@/content/site";

export function ServiceBar() {
  return (
    <section className="bg-lavender">
      <div className="shell grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-[38px]">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon];
          return (
            <div
              key={service.title}
              className={
                index === 0
                  ? "flex items-center gap-5 lg:pr-8"
                  : "flex items-center gap-5 lg:border-l lg:border-[#d9d5ef] lg:pl-10 lg:pr-8"
              }
            >
              <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-brand text-white lg:h-[88px] lg:w-[88px]">
                <Icon className="h-7 w-7 lg:h-9 lg:w-9" />
              </span>
              <span>
                <span className="block text-[19px] font-medium leading-tight lg:text-[22px]">
                  {service.title}
                </span>
                <span className="mt-1 block text-[15px] text-ink/70 lg:text-[18px]">
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

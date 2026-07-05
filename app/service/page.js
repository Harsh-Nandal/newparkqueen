import PageHero from "@/components/sections/PageHero";
import Amenities from "@/components/sections/Amenities";
import Offers from "@/components/sections/Offers";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AMENITIES } from "@/lib/data/amenities";
import { SITE } from "@/lib/data/site";

const HIGHLIGHTS = AMENITIES.slice(0, 6);

const STATS = [
  { value: "4k+", label: "Rooms Served" },
  { value: "200+", label: "Facilities" },
  { value: "2k", label: "Clients" },
  { value: "150+", label: "Staff" },
];

export const metadata = {
  title: "Services",
  description: `Guest services and hotel amenities at ${SITE.name}, Rohtak.`,
  alternates: { canonical: "/service" },
};

export default function ServicePage() {
  return (
    <>
      <PageHero title="Services" subtitle="Est. Rohtak, Haryana" image="/images/home/NDS_5001.jpg" />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.label} delay={(i % 6) * 0.08} className="flex flex-col items-center gap-3 border border-line px-4 py-8 text-center">
                <item.icon className="h-7 w-7 text-gold" />
                <span className="font-body text-[11px] uppercase tracking-[0.16em] text-navy">{item.label}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Amenities />

      <section className="relative isolate overflow-hidden py-20 text-ivory">
        <div className="absolute inset-0 -z-10 bg-navy-deep" />
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="text-center">
                <b className="block font-display text-[30px] font-medium text-gold-soft">{stat.value}</b>
                <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.2em] text-ivory/70">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Offers />
    </>
  );
}

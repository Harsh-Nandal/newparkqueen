import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { DINING_INTRO, DINING_VENUES, DINING_HOURS } from "@/lib/data/dining";
import { SITE } from "@/lib/data/site";

export const metadata = {
  title: "Dining",
  description: `Queen Restaurant, Rooftop Restaurant and Bar & Lounge at ${SITE.name}, Rohtak.`,
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return (
    <>
      <PageHero title="Dining Experience" subtitle="Est. Rohtak, Haryana" image="/images/dining/NDS_5117.jpg" />

      <section className="py-24 text-center">
        <Container>
          <Reveal>
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.42em] text-gold">
              {DINING_INTRO.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[70ch] text-[16px] text-grey">{DINING_INTRO.description}</p>
          </Reveal>
        </Container>
      </section>

      {DINING_VENUES.map((venue, i) => (
        <section key={venue.slug} className={`py-20 ${i % 2 === 1 ? "bg-ivory" : ""}`}>
          <Container
            className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal className="relative aspect-16/11 overflow-hidden shadow-luxury">
              <Image src={venue.image} alt={venue.name} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <h2 className="mb-4.5 font-serif text-[clamp(24px,2.6vw,34px)] font-medium leading-[1.3] text-navy">
                  {venue.name}
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mb-6 text-[15px] text-grey">{venue.description}</p>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  {venue.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-gold/50 px-4 py-2 font-body text-[10.5px] uppercase tracking-[0.18em] text-navy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-navy-deep py-24 text-ivory">
        <Container>
          <SectionHeading
            dark
            eyebrow="Plan Your Visit"
            title={
              <>
                Dining
                <br />
                Hours
              </>
            }
          />
          <div className="grid grid-cols-1 gap-px border border-line-light bg-line-light sm:grid-cols-3">
            {DINING_HOURS.map((venue, i) => (
              <Reveal key={venue.name} delay={i * 0.1} className="bg-navy-deep px-7 py-9">
                <h3 className="mb-4 font-display text-sm font-medium uppercase tracking-[0.2em] text-gold-soft">
                  {venue.name}
                </h3>
                <ul className="space-y-2 text-[13.5px] text-ivory/72">
                  {venue.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

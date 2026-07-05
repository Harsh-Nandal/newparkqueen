import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ROOMS, ROOM_POLICY } from "@/lib/data/rooms";
import { SITE } from "@/lib/data/site";

export const metadata = {
  title: "Rooms & Tariff",
  description: `Explore rooms and suites at ${SITE.name}, Rohtak — tariff, amenities and photos for every room category.`,
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero title="Rooms & Tariff" subtitle="Est. Rohtak, Haryana" />

      <section className="py-27.5">
        <Container>
          <SectionHeading
            eyebrow="Tariff"
            title={
              <>
                Room Tariff
                <br />
                &amp; Policies
              </>
            }
          />
          <Reveal className="overflow-x-auto border border-line">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-navy text-ivory">
                  <th className="px-6 py-4 font-display text-[11px] font-medium uppercase tracking-[0.2em]">Room</th>
                  <th className="px-6 py-4 font-display text-[11px] font-medium uppercase tracking-[0.2em]">Count</th>
                  <th className="px-6 py-4 font-display text-[11px] font-medium uppercase tracking-[0.2em]">Single</th>
                  <th className="px-6 py-4 font-display text-[11px] font-medium uppercase tracking-[0.2em]">Double</th>
                </tr>
              </thead>
              <tbody>
                {ROOMS.map((room, i) => (
                  <tr key={room.slug} className={i % 2 === 0 ? "bg-white" : "bg-ivory"}>
                    <td className="px-6 py-4 font-serif text-[16px] text-navy">{room.name}</td>
                    <td className="px-6 py-4 text-[14px] text-grey">{room.count}</td>
                    <td className="px-6 py-4 text-[14px] text-navy">₹{room.priceSingle.toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 text-[14px] text-navy">₹{room.priceDouble.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={0.12} className="mt-6 max-w-[70ch] text-[13px] text-grey">
            <p className="mb-3">{ROOM_POLICY.validity}</p>
            <ul className="list-disc space-y-1.5 pl-5">
              {ROOM_POLICY.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {ROOMS.map((room, i) => (
        <section
          key={room.slug}
          id={room.slug}
          className={`scroll-mt-24 py-24 ${i % 2 === 1 ? "bg-ivory" : ""}`}
        >
          <Container
            className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal className="grid grid-cols-2 gap-4">
              {room.images.map((src, idx) => (
                <div
                  key={src}
                  className={`relative aspect-3/4 overflow-hidden shadow-luxury ${
                    idx === 0 ? "translate-y-6" : ""
                  }`}
                >
                  <Image src={src} alt={room.name} fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover" />
                </div>
              ))}
            </Reveal>
            <div>
              <Reveal>
                <span className="font-body text-[11px] font-medium uppercase tracking-[0.42em] text-gold">
                  {room.count === 1 ? "Only One Available" : `${room.count} Rooms Available`}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 mb-4.5 font-serif text-[clamp(24px,2.6vw,34px)] font-medium leading-[1.3] text-navy">
                  {room.name}
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mb-5 text-[15px] text-grey">{room.longDescription}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mb-6 flex flex-wrap gap-x-8 gap-y-2 font-serif text-lg text-navy">
                  <span>
                    ₹{room.priceSingle.toLocaleString("en-IN")}{" "}
                    <em className="font-body text-[10.5px] not-italic uppercase tracking-[0.2em] text-grey">
                      single
                    </em>
                  </span>
                  <span>
                    ₹{room.priceDouble.toLocaleString("en-IN")}{" "}
                    <em className="font-body text-[10.5px] not-italic uppercase tracking-[0.2em] text-grey">
                      double
                    </em>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {room.amenities.map((amenity) => (
                    <span key={amenity} className="flex items-center gap-2 text-[13px] text-navy">
                      <span className="h-1 w-1 flex-none rounded-full bg-gold" aria-hidden="true" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

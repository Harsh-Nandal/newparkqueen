import Image from "next/image";
import Link from "next/link";
import { FaBed, FaUtensils, FaMartiniGlassCitrus, FaChampagneGlasses, FaChalkboardUser, FaBuilding, FaSquareParking } from "react-icons/fa6";
import { TbPresentation } from "react-icons/tb";
import PageHero from "@/components/sections/PageHero";
import Amenities from "@/components/sections/Amenities";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FACILITIES } from "@/lib/data/facilities";
import { SITE } from "@/lib/data/site";

const ICONS = {
  bed: FaBed,
  utensils: FaUtensils,
  martini: FaMartiniGlassCitrus,
  presentation: TbPresentation,
  champagne: FaChampagneGlasses,
  chalkboard: FaChalkboardUser,
  building: FaBuilding,
  parking: FaSquareParking,
};

export const metadata = {
  title: "Facilities",
  description: `Rooms, dining, banquets, conference halls and parking at ${SITE.name}, Rohtak.`,
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero title="Hotel Facilities" subtitle="Est. Rohtak, Haryana" />

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Everything You Need"
            title={
              <>
                Our
                <br />
                Facilities
              </>
            }
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((facility, i) => {
              const Icon = ICONS[facility.icon];
              return (
                <Reveal key={facility.title} delay={(i % 4) * 0.1} as="article" className="group relative overflow-hidden shadow-luxury">
                  <Link href={facility.href} className="block">
                    <div className="relative aspect-4/3">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                      <Icon className="absolute top-4 left-4 h-6 w-6 text-gold" />
                    </div>
                    <div className="border border-t-0 border-line bg-white px-5.5 py-5.5">
                      <h3 className="mb-2 font-display text-[13px] font-medium uppercase tracking-[0.18em] text-navy">
                        {facility.title}
                      </h3>
                      <p className="text-[12.5px] text-grey">{facility.description}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Amenities />
    </>
  );
}

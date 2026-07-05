import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { AMENITIES } from "@/lib/data/amenities";

export default function Amenities() {
  return (
    <section id="amenities" className="py-27.5">
      <Container>
        <SectionHeading
          eyebrow="In Every Room"
          title={
            <>
              Room
              <br />
              Amenities
            </>
          }
          description="Carefully chosen amenities and facilities, available in all forty rooms — so everything you need is already waiting for you."
        />
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <Reveal
                key={amenity.label}
                delay={(i % 4) * 0.08}
                className="flex items-center gap-4 bg-white px-6.5 py-7.5 transition-colors duration-400 hover:bg-ivory"
              >
                <Icon className="h-5.5 w-5.5 flex-none stroke-[1.4] text-gold" />
                <span className="font-body text-[11px] font-normal uppercase tracking-[0.22em] text-navy">
                  {amenity.label}
                </span>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="py-27.5">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative aspect-[4/5] overflow-hidden shadow-luxury">
          <Image
            src="/images/home/buildingimage.png"
            alt="The ParkQueen Hotel facade"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.42em] text-gold">
              Welcome
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-4 mb-5 font-serif text-[clamp(26px,2.8vw,38px)] font-medium leading-[1.3] text-navy">
              Welcome to The ParkQueen Hotel &amp; Resort&rsquo;s, Rohtak
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mb-4 text-[15px] text-grey">
              When it comes to hotels in Rohtak, The ParkQueen Hotel is in a class of
              its own — a style-plus-home experience with stunning interiors, thoughtful
              design, and service that makes every guest feel at home. From our
              Executive, Superior and Queen rooms to our Presidential Suite, each
              category is furnished with premium comfort and five-star amenities. Add
              to that our banquet facilities, conference spaces, and the city&rsquo;s
              newest restaurant &amp; bar, and everything about us is built to
              complement our guests.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mb-4 text-[15px] text-grey">
              Synonymous with the words comfort, grandeur, and excellence, we at
              ParkQueen provide unmatched and heartfelt services round the clock to
              ensure that your needs are met at all times — personalized, professional
              guest services and genuine hospitality.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="mt-2 flex items-center gap-6">
              <span className="h-px w-14 bg-gold" aria-hidden="true" />
              <Button href="/about">Read More</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

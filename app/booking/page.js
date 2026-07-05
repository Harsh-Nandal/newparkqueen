import PageHero from "@/components/sections/PageHero";
import BookingForm from "@/components/sections/BookingForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT, SITE } from "@/lib/data/site";

export const metadata = {
  title: "Book Your Stay",
  description: `Send a booking enquiry to ${SITE.name}, Rohtak — check-in, check-out, guests and room type.`,
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <PageHero title="Book Your Stay" subtitle={SITE.tagline} />

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <BookingForm />
          </Reveal>
          <Reveal delay={0.1} className="border border-line bg-ivory px-7 py-9">
            <h3 className="mb-4 font-display text-[13px] font-medium uppercase tracking-[0.2em] text-navy">
              Prefer to Call?
            </h3>
            <p className="mb-5 text-[14px] text-grey">
              Our reservations team is available to help you plan your stay directly.
            </p>
            <ul className="space-y-2">
              {CONTACT.roomPhones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="font-serif text-lg text-navy hover:text-gold">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-grey">
              Check-in: {CONTACT.checkIn} · Check-out: {CONTACT.checkOut}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

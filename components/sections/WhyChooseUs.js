import Link from "next/link";
import { FaUtensils, FaWifi, FaMartiniGlassCitrus, FaBed } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const REASONS = [
  {
    icon: FaUtensils,
    title: "Fresh & Delectable Meals",
    text: "Our ParkQueen restaurant serves all three meals daily — a rich spread of North Indian delicacies, continental fare, and special seasonal menus crafted by our expert chefs.",
    href: "/dining",
  },
  {
    icon: FaWifi,
    title: "Stay Connected",
    text: "Stay updated with our premium high-speed Wi-Fi available throughout the hotel — in rooms, lobbies, dining areas, and banquet halls — keeping you connected at all times.",
    href: "/facilities",
  },
  {
    icon: FaMartiniGlassCitrus,
    title: "Feel Your Best",
    text: "Unwind at our elegant Bar & Lounge or enjoy a refreshing drink from our in-room service available round the clock.",
    href: "/dining",
  },
  {
    icon: FaBed,
    title: "Better Sleep Quality",
    text: "Our premium bedding, soundproofed rooms, and carefully curated room amenities ensure a tranquil, restful night.",
    href: "/rooms",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-deep py-27.5 text-ivory">
      <Container>
        <SectionHeading
          dark
          eyebrow="The Difference"
          title={
            <>
              Why Choose
              <br />
              The ParkQueen
            </>
          }
          description="Refinement and creativity intertwine with dreamlike comfort — heartfelt services round the clock, ensuring all your needs are met in an instant."
        />
        <div className="grid grid-cols-1 gap-px border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 0.12}
              className="bg-navy-deep px-8.5 py-12 transition-colors duration-500 hover:bg-[#0D2344]"
            >
              <reason.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 mb-3 font-display text-sm font-medium uppercase tracking-[0.22em] text-gold-soft">
                {reason.title}
              </h3>
              <p className="mb-4 text-[13.5px] text-ivory/66">{reason.text}</p>
              <Link
                href={reason.href}
                className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/80 hover:text-gold-soft"
              >
                Learn More →
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Hero from "@/components/sections/Hero";
import InfoBar from "@/components/sections/InfoBar";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Dining from "@/components/sections/Dining";
import Events from "@/components/sections/Events";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Amenities from "@/components/sections/Amenities";
import Testimonials from "@/components/sections/Testimonials";
import Offers from "@/components/sections/Offers";
import InstagramFeed from "@/components/sections/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import { CONTACT, SITE } from "@/lib/data/site";

export const metadata = {
  title: "Home",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/images/hero.png`,
  telephone: CONTACT.phones[0],
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.addressLines[0],
    addressLocality: "Rohtak",
    addressRegion: "Haryana",
    postalCode: "124001",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <Hero />
      <InfoBar />
      <MarqueeStrip />
      <About />
      <WhyChooseUs />
      <Rooms />
      <Dining />
      <Events />
      <Amenities />
      <Testimonials />
      <Offers />
      <GalleryPreview />
      <InstagramFeed />
      <LocationMap />
    </>
  );
}

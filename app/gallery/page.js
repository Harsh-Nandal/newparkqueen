import PageHero from "@/components/sections/PageHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/data/site";

export const metadata = {
  title: "Gallery",
  description: `Photo gallery of rooms, dining, banquets and the exterior of ${SITE.name}, Rohtak.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Est. Rohtak, Haryana" />
      <section className="py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}

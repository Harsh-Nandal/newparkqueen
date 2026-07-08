import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { GALLERY_PREVIEW } from "@/lib/data/gallery";

export default function GalleryPreview({
  items = GALLERY_PREVIEW,
  eyebrow = "A Closer Look",
  title = (
    <>
      Moments at
      <br />
      The ParkQueen
    </>
  ),
  description = "A glimpse into the rooms, restaurants and banquets that make every stay and every celebration unforgettable.",
  showButton = true,
}) {
  return (
    <section className="py-27.5">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid grid-flow-dense grid-cols-2 gap-4.5 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.image}
              delay={(i % 4) * 0.1}
              className={`group relative overflow-hidden shadow-luxury ${
                i === 0 ? "aspect-square md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-square"
              }`}
            >
              <Link href="/gallery" className="absolute inset-0 z-10" aria-label={`View ${item.caption} in the full gallery`} />
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-navy-deep/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-[11px] uppercase tracking-[0.22em] text-ivory">
                  {item.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        {showButton ? (
          <div className="mt-11 text-center">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/data/gallery";

export default function GalleryGrid({ images = GALLERY_IMAGES, categories = GALLERY_CATEGORIES }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? images : images.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-11 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`border px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
              active === category
                ? "border-gold bg-gold text-navy-deep"
                : "border-line text-navy hover:border-gold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4.5 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <div key={item.image} className="group relative aspect-square overflow-hidden shadow-luxury">
            <Image
              src={item.image}
              alt={item.caption}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/65 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div>
                <span className="block font-display text-[11px] uppercase tracking-[0.2em] text-ivory">
                  {item.caption}
                </span>
                <span className="block font-body text-[10px] uppercase tracking-[0.18em] text-gold-soft">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

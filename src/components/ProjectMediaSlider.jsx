import { useState } from "react";
import { ArrowLeft } from "./Icons";

function isVideo(src) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

function SlideMedia({ src, name, active }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={name}
      />
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  );
}

export default function ProjectMediaSlider({ media, name }) {
  const items = media?.length ? media : [];
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy/5 shadow-soft">
      <div className="aspect-[4/3] w-full lg:aspect-[5/4] lg:min-h-[420px]">
        <SlideMedia src={items[index]} name={name} active />
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="السابق"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-white shadow-gold transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="التالي"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-white shadow-gold transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </button>
        </>
      )}
    </div>
  );
}

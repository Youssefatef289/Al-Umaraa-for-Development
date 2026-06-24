import { cn } from "@/lib/utils";

/**
 * زوج صور بارتفاع موحّد — Grid + aspect-ratio (بدون ارتفاعات ثابتة عشوائية).
 */
export default function AboutImagePair({
  images,
  altBase = "",
  className = "",
}) {
  const [left, right] = images;

  return (
    <div className={cn("about-image-pair", className)} dir="ltr">
      <div className="about-image-pair__cell">
        <img
          src={left}
          alt={altBase ? `${altBase} — 1` : ""}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="about-image-pair__cell">
        <img
          src={right}
          alt={altBase ? `${altBase} — 2` : ""}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

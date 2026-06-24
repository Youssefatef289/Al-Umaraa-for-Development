import { useMemo } from "react";
import { cn } from "@/lib/utils";

export function FlipText({
  className,
  children,
  duration = 2.2,
  delay = 0,
  loop = true,
  separator = " ",
  together = false,
}) {
  const words = useMemo(
    () => children.split(separator).filter(Boolean),
    [children, separator]
  );

  return (
    <div
      className={cn(
        "flip-text-wrapper inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIndex) => {
        let calculatedDelay = delay;
        if (!together && words.length > 1) {
          const normalizedIndex = wordIndex / (words.length - 1);
          const sineValue = Math.sin(normalizedIndex * (Math.PI / 2));
          calculatedDelay = sineValue * (duration * 0.25) + delay;
        }

        return (
          <span
            key={`${word}-${wordIndex}`}
            className="flip-word inline-block"
            style={{
              "--flip-duration": `${duration}s`,
              "--flip-delay": `${calculatedDelay}s`,
              "--flip-iteration": loop ? "infinite" : "1",
              transformStyle: "preserve-3d",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export default FlipText;

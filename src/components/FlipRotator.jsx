import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FlipRotator({
  items,
  className,
  interval = 3800,
  flipMs = 500,
}) {
  const list = items?.length ? items : [""];
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("show");

  useEffect(() => {
    if (list.length <= 1) return undefined;

    let swapTimer;
    let resetTimer;

    const cycle = setInterval(() => {
      setPhase("hide");

      swapTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % list.length);
        setPhase("enter");

        resetTimer = setTimeout(() => setPhase("show"), flipMs);
      }, flipMs);
    }, interval);

    return () => {
      clearInterval(cycle);
      clearTimeout(swapTimer);
      clearTimeout(resetTimer);
    };
  }, [list.length, interval, flipMs]);

  return (
    <span
      className={cn(
        "flip-rotator inline-block",
        phase === "hide" && "flip-rotator-hide",
        phase === "enter" && "flip-rotator-enter",
        className
      )}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {list[index]}
    </span>
  );
}

export default FlipRotator;

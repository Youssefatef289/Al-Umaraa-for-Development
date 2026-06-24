import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  speed = 55,
  className = "",
  showCursor = true,
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;
        hasPlayed.current = true;

        let i = 0;
        setDisplayed("");
        setDone(false);

        timer = setInterval(() => {
          i += 1;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(timer);
            setDone(true);
          }
        }, speed);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {showCursor && (
        <span
          className={`typewriter-cursor ${done ? "is-done" : ""}`}
          aria-hidden
        >
          |
        </span>
      )}
    </span>
  );
}

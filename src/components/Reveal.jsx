import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

// غلاف بسيط لإظهار العناصر تدريجيًا عند التمرير
export default function Reveal({
  children,
  variants = fadeUp,
  className = "",
  as = "div",
  delay = 0,
  amount,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={amount ? { once: true, amount } : viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

import { useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  {
    question: "ما أنواع الوحدات المتاحة لدى الأمراء؟",
    answer:
      "نوفر وحدات سكنية متنوعة تشمل شققًا في الأبراج وفلل مستقلة بمساحات وتشطيبات مختلفة تناسب احتياجات العائلات والمستثمرين.",
  },
  {
    question: "هل توجد أنظمة سداد مرنة؟",
    answer:
      "نعم، نوفر خطط سداد متعددة تشمل الدفع على أقساط مريحة أو خصومات عند السداد الكاش، ويتم تحديد التفاصيل حسب كل مشروع.",
  },
  {
    question: "كيف يمكنني حجز معاينة لوحدة؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب أو نموذج التواصل في الموقع، وسيقوم فريق المبيعات بترتيب موعد المعاينة في أقرب وقت.",
  },
  {
    question: "أين تقع مشاريع الشركة؟",
    answer:
      "مشاريعنا موزعة في بني سويف وأهناسيا والحمرايا وعدة أحياء سكنية، مع مواقع استراتيجية قريبة من الخدمات والمحاور الرئيسية.",
  },
  {
    question: "هل الوحدات تُسلَّم بتشطيب كامل؟",
    answer:
      "نعم، جميع مشاريعنا تتميز بتشطيبات عالية الجودة وفق معايير دقيقة في التصميم والتنفيذ مع الالتزام بمواعيد التسليم.",
  },
];

export function FaqAccordion({
  items = DEFAULT_ITEMS,
  title = "الأسئلة الشائعة",
  variant = "default",
  className,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onDark = variant === "on-dark";

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full text-right", className)} {...props}>
      {title && (
        <h3
          className={cn(
            "mb-6 font-display text-2xl font-extrabold sm:text-3xl",
            onDark ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h3>
      )}

      <ul className="m-0 w-full list-none p-0">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={item.question}
              className={cn(
                "relative w-full border-b transition-all duration-300 ease-in last:border-b-0",
                onDark ? "border-white/15" : "border-navy/10",
                isActive && (onDark ? "border-white/25" : "border-navy/15")
              )}
            >
              <button
                type="button"
                className={cn(
                  "relative m-0 flex min-h-[60px] w-full cursor-pointer flex-row items-center justify-between gap-4 px-4 py-4 text-right text-base outline-none transition-colors duration-200 md:text-lg",
                  "border-r-[6px] md:border-r-[10px]",
                  isActive
                    ? onDark
                      ? "border-r-gold bg-white/10 font-semibold text-white"
                      : "border-r-gold bg-gold/10 font-semibold text-navy"
                    : onDark
                      ? "border-r-white/20 bg-transparent text-white/80 hover:border-r-gold/70 hover:bg-white/5 hover:text-white"
                      : "border-r-navy/15 bg-transparent text-navy/65 hover:border-r-gold/60 hover:bg-gold/5 hover:text-navy"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-light leading-none",
                    isActive
                      ? "bg-gold text-white"
                      : onDark
                        ? "bg-white/10 text-white/85"
                        : "bg-navy/5 text-navy/70"
                  )}
                  aria-hidden
                >
                  {isActive ? "−" : "+"}
                </span>
                <span className="flex-1">{item.question}</span>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p
                    className={cn(
                      "px-4 pb-5 pr-6 text-sm leading-relaxed sm:text-base",
                      onDark ? "text-white/75" : "text-navy/70"
                    )}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;

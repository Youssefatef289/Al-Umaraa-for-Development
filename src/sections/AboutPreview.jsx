import { motion } from "framer-motion";
import AboutImagePair from "@/components/AboutImagePair";
import { slideRight, slideLeft } from "@/lib/motion";
import { site } from "@/data/site";

const paragraphs = [
  `${site.fullName} شركة رائدة في مجال التطوير العقاري بمحافظة بني سويف، تأسست على أسس من الخبرة والمصداقية، وتعمل على تقديم حلول سكنية وتجارية تلبي تطلعات العملاء وتفوق توقعاتهم في كل مشروع.`,
  "نمتلك خبرة واسعة في تطوير المشاريع السكنية والتجارية والإدارية، من الأبراج السكنية الفاخرة إلى الفلل المتكاملة، مع التزام صارم بأعلى معايير الجودة في التصميم والتنفيذ والتسليم في الموعد المحدد.",
  "يعمل لدينا فريق من المهندسين والمتخصصين المحترفين، ونحرص على بناء علاقات طويلة الأمد مع عملائنا وشركائنا، لنكون الشريك الموثوق الذي يصنع مجتمعات سكنية تعيد تعريف الحياة العصرية.",
];

const aboutImages = ["/about-us-01.webp", "/about-us-02.webp"];

export default function AboutPreview() {
  return (
    <section className="section bg-white">
      <div
        className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        dir="ltr"
      >
        {/* النص — يسار */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-right"
          dir="rtl"
        >
          <p className="text-sm font-medium text-navy/45">من نحن</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-snug text-navy sm:text-4xl lg:text-[2.35rem]">
            قصة مبنية على المصداقية
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-[2] text-navy/70 sm:text-[0.95rem]">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </motion.div>

        {/* الصور — يمين */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutImagePair images={aboutImages} altBase={site.nameShort} />
        </motion.div>
      </div>
    </section>
  );
}

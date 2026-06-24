import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/blog";
import { staggerContainer, scaleIn } from "@/lib/motion";
import { Clock, ArrowLeft } from "@/components/Icons";

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <PageTransition>
      <PageHeader
        title="المدونة العقارية"
        subtitle="مقالات ونصائح في عالم العقار والاستثمار من خبراء الأمراء."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ to: "/", label: "الرئيسية" }, { label: "المدونة" }]}
      />

      <section className="section">
        <div className="container-x">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid overflow-hidden rounded-3xl border border-navy/10 bg-ink-card/60 md:grid-cols-2"
          >
            <div className="relative aspect-video overflow-hidden md:aspect-auto">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-navy">
                مقال مميّز
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-3 flex items-center gap-3 text-xs text-navy/55">
                <span className="font-bold text-gold">{featured.category}</span>
                <span>•</span>
                <span>{featured.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-navy text-balance sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-navy/65">
                {featured.excerpt}
              </p>
              <button type="button" className="btn-outline btn-sm mt-6 w-fit">
                اقرأ المقال
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </motion.article>

          {/* Grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((post) => (
              <motion.article
                key={post.slug}
                variants={scaleIn}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-ink-card/60 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-gold backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-navy/50">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/60">
                    {post.excerpt}
                  </p>
                  <button type="button" className="btn-outline btn-sm mt-5 w-fit">
                    اقرأ المزيد
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

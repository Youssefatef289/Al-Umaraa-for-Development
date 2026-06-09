import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Home, ArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="flex min-h-[80vh] items-center justify-center px-5 pt-20">
        <div className="text-center">
          <p className="font-display text-[7rem] font-extrabold leading-none text-gold-gradient sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
            عذرًا، الصفحة غير موجودة
          </h1>
          <p className="mx-auto mt-4 max-w-md text-navy/60">
            الصفحة التي تبحث عنها قد تكون حُذفت أو تغيّر عنوانها.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              <Home className="h-4 w-4" />
              العودة للرئيسية
            </Link>
            <Link to="/projects" className="btn-outline">
              تصفّح المشاريع
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

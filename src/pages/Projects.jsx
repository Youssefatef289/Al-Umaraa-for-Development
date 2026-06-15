import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ProjectShowcase from "@/sections/ProjectShowcase";
import CTA from "@/sections/CTA";
import { portfolioProjects } from "@/data/portfolio";

export default function Projects() {
  return (
    <PageTransition>
      <PageHeader
        title="مشاريعنا العقارية"
        subtitle="اكتشف مجموعتنا المتكاملة من المشاريع السكنية والتجارية والإدارية."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ to: "/", label: "الرئيسية" }, { label: "المشاريع" }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <ProjectShowcase projects={portfolioProjects} />
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}

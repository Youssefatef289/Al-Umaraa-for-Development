export const site = {
  name: "الأمراء للتطوير العقاري",
  nameShort: "الأمراء",
  nameEn: "Al-Umaraa Development",
  fullName: "شركة الأمراء للاستثمار والتطوير العقاري",
  tagline: "نصنع مجتمعات سكنية تعيد تعريف الحياة العصرية",
  description:
    "شركة الأمراء للاستثمار والتطوير العقاري — رواد في تطوير المشاريع السكنية والتجارية والإدارية الفاخرة، نمزج بين التصميم العصري وأعلى معايير الجودة لنبني مجتمعات متكاملة.",
  whatsapp: "201040919668",
  whatsappPhone: "01040919668",
  phone: "01212449044",
  phoneHref: "tel:+201212449044",
  email: "info@al-umaraa.com",
  address: "شرق النيل - امام البنك الاهلي, Beni Suef, Egypt",
  mapHref:
    "https://www.bing.com/maps/search?q=%D8%B4%D8%B1%D9%82+%D8%A7%D9%84%D9%86%D9%8A%D9%84+-+%D8%A7%D9%85%D8%A7%D9%85+%D8%A7%D9%84%D8%A8%D9%86%D9%83+%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A,Beni+Suef,Egypt&cp=29.075300%7E31.098250&lvl=15.2",
  mapEmbed:
    "https://www.google.com/maps?q=29.075300,31.098250&output=embed",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const whatsappLink = (message) => {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/projects", label: "المشاريع" },
  { to: "/blog", label: "المدونة" },
  { to: "/contact", label: "تواصل معنا" },
];

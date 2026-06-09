export const site = {
  name: "الأمراء للتطوير العقاري",
  nameShort: "الأمراء",
  nameEn: "Al-Umaraa Development",
  fullName: "شركة الأمراء للاستثمار والتطوير العقاري",
  tagline: "نصنع مجتمعات سكنية تعيد تعريف الحياة العصرية",
  description:
    "شركة الأمراء للاستثمار والتطوير العقاري — رواد في تطوير المشاريع السكنية والتجارية والإدارية الفاخرة، نمزج بين التصميم العصري وأعلى معايير الجودة لنبني مجتمعات متكاملة.",
  // ✏️ غيّر الرقم برقم الواتساب الفعلي بصيغة دولية (بدون + أو 00)
  whatsapp: "201000000000",
  phone: "+20 100 000 0000",
  phoneHref: "tel:+201000000000",
  email: "info@al-umaraa.com",
  address: "التجمع الخامس، القاهرة الجديدة، مصر",
  // إحداثيات الموقع للخريطة (مثال: القاهرة الجديدة)
  mapEmbed:
    "https://www.google.com/maps?q=New+Cairo,+Egypt&output=embed",
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

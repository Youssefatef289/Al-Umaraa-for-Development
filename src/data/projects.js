import { portfolioProjects } from "./portfolio";

export const categories = [
  { key: "all", label: "الكل" },
  { key: "residential", label: "سكني" },
  { key: "commercial", label: "تجاري" },
  { key: "administrative", label: "إداري" },
  { key: "construction", label: "تحت الإنشاء" },
];

export const categoryLabels = {
  residential: "سكني",
  commercial: "تجاري",
  administrative: "إداري",
  construction: "تحت الإنشاء",
};

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const legacyProjects = [
  {
    slug: "royal-residence",
    name: "رويال ريزيدنس",
    category: "residential",
    location: "التجمع الخامس، القاهرة الجديدة",
    progress: 65,
    deliveryYear: "2027",
    short: "مجمع سكني فاخر بإطلالات بانورامية على المساحات الخضراء.",
    description:
      "رويال ريزيدنس وجهة سكنية متكاملة تجمع بين الرفاهية والخصوصية والموقع المتميز. وحدات واسعة بتشطيبات راقية ومساحات خضراء تحيط بالمبنى، على بعد دقائق من المحاور الرئيسية والخدمات.",
    cover: img("photo-1545324418-cc1a3fa10c00"),
    gallery: [
      img("photo-1545324418-cc1a3fa10c00"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600585154340-be6161a56a0c"),
    ],
    building: { floors: 12, unitsPerFloor: 4, totalUnits: 48, area: "8,500 م²" },
    features: [
      "حمام سباحة وجيم متكامل",
      "أمن وحراسة على مدار الساعة",
      "جراج تحت الأرض",
      "مساحات خضراء واسعة",
      "أنظمة منزل ذكي",
      "مولّد كهرباء احتياطي",
    ],
    payment: [
      { name: "الباقة الأولى", down: "10%", years: "6 سنوات" },
      { name: "الباقة الثانية", down: "15%", years: "8 سنوات" },
      { name: "الكاش", down: "خصم 25%", years: "دفعة واحدة" },
    ],
  },
  {
    slug: "the-gardens",
    name: "ذا جاردنز",
    category: "construction",
    location: "الشيخ زايد، الجيزة",
    progress: 35,
    deliveryYear: "2028",
    short: "كمبوند سكني محاط بالحدائق ووحدات بمساحات متنوعة.",
    description:
      "ذا جاردنز مشروع سكني متكامل يوفّر توازنًا بين العمران والطبيعة. عمارات متوسطة الارتفاع موزعة على مساحات خضراء شاسعة وممرات للمشي، مع منطقة خدمات ومحلات تجارية تخدم السكان.",
    cover: img("photo-1512917774080-9991f1c4c750"),
    gallery: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1600210492493-0946911123ea"),
      img("photo-1600573472550-8090b5e0745e"),
    ],
    building: { floors: 7, unitsPerFloor: 6, totalUnits: 126, area: "22,000 م²" },
    features: [
      "نادٍ اجتماعي",
      "مسارات للجري والدراجات",
      "منطقة ألعاب للأطفال",
      "بحيرات صناعية",
      "حدائق خاصة للأدوار الأرضية",
      "بوابات إلكترونية",
    ],
    payment: [
      { name: "الباقة الأولى", down: "5%", years: "7 سنوات" },
      { name: "الباقة الثانية", down: "10%", years: "10 سنوات" },
      { name: "الكاش", down: "خصم 30%", years: "دفعة واحدة" },
    ],
  },
  {
    slug: "marina-towers",
    name: "مارينا تاورز",
    category: "residential",
    location: "العلمين الجديدة، الساحل الشمالي",
    progress: 80,
    deliveryYear: "2026",
    short: "أبراج سكنية بإطلالة مباشرة على البحر بتشطيبات فندقية.",
    description:
      "مارينا تاورز رمز الفخامة على ساحل البحر المتوسط، حيث تطل جميع الوحدات على مياه البحر الفيروزية. تجربة إقامة فندقية على مدار العام مع خدمات متكاملة وكونسيرج وصالات استقبال أنيقة.",
    cover: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1567496898669-ee935f5f647a"),
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1600585154526-990dced4db0d"),
    ],
    building: { floors: 18, unitsPerFloor: 5, totalUnits: 90, area: "12,000 م²" },
    features: [
      "شاطئ خاص",
      "مارينا لليخوت",
      "سبا ومركز عافية",
      "مطاعم ومقاهي",
      "مسابح إنفينيتي",
      "خدمة كونسيرج 24/7",
    ],
    payment: [
      { name: "الباقة الأولى", down: "20%", years: "5 سنوات" },
      { name: "الباقة الثانية", down: "25%", years: "6 سنوات" },
      { name: "الكاش", down: "خصم 20%", years: "دفعة واحدة" },
    ],
  },
  {
    slug: "downtown-square",
    name: "داون تاون سكوير",
    category: "administrative",
    location: "العاصمة الإدارية الجديدة",
    progress: 100,
    deliveryYear: "2024",
    short: "مشروع متعدد الاستخدامات يجمع السكن والمكاتب والمحلات.",
    description:
      "داون تاون سكوير مشروع متكامل في قلب العاصمة الإدارية الجديدة، يوفّر بيئة عمل وسكن وتسوّق في مكان واحد. تم تسليمه بالكامل ويضم وحدات سكنية عصرية ومساحات إدارية مرنة وممشى تجاري نابض بالحياة.",
    cover: img("photo-1486406146926-c627a92ad1ab"),
    gallery: [
      img("photo-1486406146926-c627a92ad1ab"),
      img("photo-1493397212122-2b85dda8d3f7"),
      img("photo-1497366754035-f200968a6e72"),
      img("photo-1497366811353-6870744d04b2"),
      img("photo-1504384308090-c894fdcc538d"),
    ],
    building: { floors: 10, unitsPerFloor: 8, totalUnits: 160, area: "18,500 م²" },
    features: [
      "ممشى تجاري",
      "أنظمة ذكية متكاملة",
      "مواقف متعددة الطوابق",
      "قاعات اجتماعات مشتركة",
      "موقع مركزي",
      "إنترنت فائق السرعة",
    ],
    payment: [
      { name: "الباقة الأولى", down: "15%", years: "5 سنوات" },
      { name: "الباقة الثانية", down: "20%", years: "7 سنوات" },
      { name: "الكاش", down: "خصم 18%", years: "دفعة واحدة" },
    ],
  },
  {
    slug: "green-valley",
    name: "جرين فالي",
    category: "residential",
    location: "مدينتي، القاهرة الجديدة",
    progress: 50,
    deliveryYear: "2027",
    short: "فلل وتاون هاوس وسط طبيعة خضراء مع خصوصية تامة.",
    description:
      "جرين فالي مشروع راقٍ من الفلل والتاون هاوس مصمم لعشاق الهدوء والخصوصية. تخطيط منخفض الكثافة محاط باللاندسكيب والمسطحات المائية، وكل وحدة بحديقتها الخاصة ومساحات معيشة واسعة.",
    cover: img("photo-1600585154340-be6161a56a0c"),
    gallery: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1600566752355-35792bedcfea"),
      img("photo-1600210491369-e753d80a41f3"),
      img("photo-1600573472592-401b489a3cdc"),
    ],
    building: { floors: 2, unitsPerFloor: 1, totalUnits: 64, area: "30,000 م²" },
    features: [
      "كثافة سكنية منخفضة",
      "بحيرات ومسطحات مائية",
      "نادٍ خاص بالسكان",
      "أمن متكامل",
      "حدائق خاصة",
      "مسارات مشاة",
    ],
    payment: [
      { name: "الباقة الأولى", down: "10%", years: "8 سنوات" },
      { name: "الباقة الثانية", down: "15%", years: "10 سنوات" },
      { name: "الكاش", down: "خصم 22%", years: "دفعة واحدة" },
    ],
  },
  {
    slug: "central-park-mall",
    name: "سنترال بارك مول",
    category: "commercial",
    location: "مدينة نصر، القاهرة",
    progress: 100,
    deliveryYear: "2023",
    short: "مركز تجاري وإداري حيوي بموقع متميز ومساحات مرنة.",
    description:
      "سنترال بارك مول مشروع تجاري وإداري متكامل تم تسليمه ويعمل بكامل طاقته. مساحات تجارية وإدارية متنوعة تناسب العلامات التجارية الكبرى والشركات الناشئة، بكثافة زيارات عالية وموقع حيوي.",
    cover: img("photo-1441986300917-64674bd600d8"),
    gallery: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1567958451986-2de427a4a0be"),
      img("photo-1581417478175-a9ef18f210c2"),
      img("photo-1604719312566-8912e9227c6a"),
      img("photo-1555529669-e69e7aa0ba9a"),
    ],
    building: { floors: 6, unitsPerFloor: 20, totalUnits: 120, area: "15,000 م²" },
    features: [
      "كثافة زيارات عالية",
      "مواقف واسعة",
      "أنظمة أمان حديثة",
      "صيانة دورية",
      "واجهات عرض زجاجية",
      "تكييف مركزي",
    ],
    payment: [
      { name: "الباقة الأولى", down: "25%", years: "4 سنوات" },
      { name: "الباقة الثانية", down: "30%", years: "5 سنوات" },
      { name: "الكاش", down: "خصم 15%", years: "دفعة واحدة" },
    ],
  },
];

export const projects = [...portfolioProjects, ...legacyProjects];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

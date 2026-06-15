const paymentPlans = [
  { name: "الباقة الأولى", down: "10%", years: "6 سنوات" },
  { name: "الباقة الثانية", down: "15%", years: "8 سنوات" },
  { name: "الكاش", down: "خصم 20%", years: "دفعة واحدة" },
];

function createPortfolio({
  slug,
  file,
  name,
  location,
  short,
  description,
  floors = 8,
  units = 32,
}) {
  const video = `/projects/${file}`;
  return {
    slug,
    name,
    category: "residential",
    location,
    progress: 100,
    deliveryYear: "تم التسليم",
    portfolio: true,
    short,
    description,
    coverVideo: video,
    cover: video,
    gallery: [video],
    building: {
      floors,
      unitsPerFloor: 4,
      totalUnits: units,
      area: "—",
    },
    features: [
      "تشطيبات عالية الجودة",
      "تصميم عصري عملي",
      "موقع استراتيجي",
      "بنية تحتية متكاملة",
      "تنفيذ وفق معايير السلامة",
      "تسليم في الموعد المحدد",
    ],
    payment: paymentPlans,
  };
}

export const portfolioProjects = [
  createPortfolio({
    slug: "al-umaraa-tower-ahnasia",
    file: "al-umaraa-tower-ahnasia.mp4",
    name: "برج الأمراء",
    location: "أهناسيا، بني سويف",
    short: "برج سكني فاخر في أهناسيا بتصميم عصري وتشطيبات راقية.",
    description:
      "برج الأمراء في أهناسيا أحد أبرز أعمالنا السابقة، يقدّم وحدات سكنية متنوعة بمواصفات عالية الجودة وموقع استراتيجي قريب من الخدمات الأساسية. تم تنفيذ المشروع وفق أعلى معايير البناء والسلامة.",
    floors: 10,
    units: 40,
  }),
  createPortfolio({
    slug: "al-safwa-tower-ahnasia",
    file: "al-safwa-tower-ahnasia.mp4",
    name: "برج الصفوة",
    location: "أهناسيا، بني سويف",
    short: "برج سكني متميز في أهناسيا بواجهة أنيقة ومساحات معيشة عملية.",
    description:
      "برج الصفوة في أهناسيا مشروع سكني متكامل يعكس خبرتنا في تطوير الأبراج السكنية ببني سويف، مع جودة تنفيذ عالية واهتمام بكل التفاصيل من التشطيب وحتى التسليم.",
    floors: 8,
    units: 32,
  }),
  createPortfolio({
    slug: "al-huda-tower-ahnasia",
    file: "al-huda-tower-ahnasia.mp4",
    name: "برج الهدى",
    location: "أهناسيا، بني سويف",
    short: "برج سكني راقٍ يوفّر بيئة معيشية هادئة ومريحة.",
    description:
      "برج الهدى في أهناسيا يجمع بين التصميم العصري والراحة العائلية، مع وحدات متنوعة المساحات وتشطيبات فاخرة تلائم مختلف احتياجات السكن.",
    floors: 9,
    units: 36,
  }),
  createPortfolio({
    slug: "al-mohandes-tower-al-hamraya",
    file: "al-mohandes-tower-al-hamraya.mp4",
    name: "برج المهندس",
    location: "الحمرايا، بني سويف",
    short: "برج سكني في الحمرايا بتصميم هندسي متقن.",
    description:
      "برج المهندس في الحمرايا يمثل نموذجًا للبناء الدقيق والتنفيذ المحترف، مع وحدات سكنية عملية وموقع حيوي قريب من المرافق والخدمات.",
    floors: 8,
    units: 30,
  }),
  createPortfolio({
    slug: "al-sukaria-tower-al-hamraya",
    file: "al-sukaria-tower-al-hamraya.mp4",
    name: "برج السكرية",
    location: "الحمرايا، بني سويف",
    short: "برج سكني عصري في منطقة الحمرايا.",
    description:
      "برج السكرية مشروع سكني متكامل في الحمرايا، يتميز بواجهة أنيقة ومساحات داخلية مدروسة بعناية لتوفير تجربة سكن مريحة وعملية.",
    floors: 7,
    units: 28,
  }),
  createPortfolio({
    slug: "moaz-tower-al-hamraya",
    file: "moaz-tower-al-hamraya.mp4",
    name: "برج معاذ",
    location: "الحمرايا، بني سويف",
    short: "برج سكني متميز بموقع استراتيجي في الحمرايا.",
    description:
      "برج معاذ في الحمرايا يقدّم وحدات سكنية بمواصفات عالية، مع اهتمام بالتفاصيل المعمارية والتشطيبات التي تعكس جودة تنفيذ الأمراء للتطوير العقاري.",
    floors: 8,
    units: 32,
  }),
  createPortfolio({
    slug: "hussein-tower-al-hamraya",
    file: "hussein-tower-al-hamraya.mp4",
    name: "برج حسين",
    location: "الحمرايا، بني سويف",
    short: "برج سكني أنيق في قلب الحمرايا.",
    description:
      "برج حسين أحد مشاريعنا المنجزة في الحمرايا، يجمع بين التصميم العملي والتشطيبات الراقية في بيئة سكنية هادئة ومنظمة.",
    floors: 7,
    units: 28,
  }),
  createPortfolio({
    slug: "villa-269-al-azhar",
    file: "villa-269-al-azhar.mp4",
    name: "فيلا 269",
    location: "حي الأزهر، بني سويف",
    short: "فيلا سكنية فاخرة في حي الأزهر.",
    description:
      "فيلا 269 في حي الأزهر مشروع سكني خاص يتميز بتصميم أنيق ومساحات معيشة واسعة، مع تشطيبات عالية الجودة وخصوصية تامة.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-307-al-azhar",
    file: "villa-307-al-azhar.mp4",
    name: "فيلا 307",
    location: "حي الأزهر، بني سويف",
    short: "فيلا عصرية بتصميم راقٍ في حي الأزهر.",
    description:
      "مشروع فيلا 307 في حي الأزهر يقدّم حلًا سكنيًا متميزًا للعائلات الباحثة عن الراحة والجودة، مع تنفيذ دقيق لكل مراحل البناء والتشطيب.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-43-premium-al-azhar",
    file: "villa-43-premium-al-azhar.mp4",
    name: "فيلا 43 المتميزة",
    location: "حي الأزهر، بني سويف",
    short: "فيلا متميزة بتشطيبات فاخرة في حي الأزهر.",
    description:
      "فيلا 43 المتميزة في حي الأزهر تتميز بتصميم استثنائي ومساحات داخلية رحبة، مع اهتمام بأدق تفاصيل التشطيب والجودة.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-212-first-district",
    file: "villa-212-first-district.mp4",
    name: "فيلا 212",
    location: "الحي الأول، بني سويف",
    short: "فيلا سكنية أنيقة في الحي الأول.",
    description:
      "مشروع فيلا 212 في الحي الأول يوفّر بيئة سكنية هادئة مع تصميم عصري ومساحات خضراء محيطة، مناسبة للعائلات.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-39-fifth-district",
    file: "villa-39-fifth-district.mp4",
    name: "فيلا 39",
    location: "الحي الخامس، بني سويف",
    short: "فيلا راقية في الحي الخامس.",
    description:
      "فيلا 39 في الحي الخامس مشروع سكني خاص يجمع بين الخصوصية والأناقة، مع تشطيبات متكاملة وجودة بناء عالية.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-653-fourth-district",
    file: "villa-653-fourth-district.mp4",
    name: "فيلا 653",
    location: "الحي الرابع، بني سويف",
    short: "فيلا عصرية في الحي الرابع.",
    description:
      "فيلا 653 في الحي الرابع تقدّم مساحات معيشة مريحة وتصميمًا عمليًا يلبّي احتياجات الحياة العائلية بمعايير جودة متميزة.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villa-741-fourth-district",
    file: "villa-741-fourth-district.mp4",
    name: "فيلا 741",
    location: "الحي الرابع، بني سويف",
    short: "فيلا فاخرة في الحي الرابع.",
    description:
      "فيلا 741 في الحي الرابع مشروع سكني أنيق يتميز بموقع مميز وتشطيبات راقية، مع اهتمام بكل تفاصيل الراحة والخصوصية.",
    floors: 2,
    units: 1,
  }),
  createPortfolio({
    slug: "villas-721-719-717-fourth",
    file: "villas-721-719-717-fourth.mp4",
    name: "فلل 721 - 719 - 717",
    location: "الحي الرابع، بني سويف",
    short: "مجموعة فلل سكنية متكاملة في الحي الرابع.",
    description:
      "مشروع فلل 721 و719 و717 في الحي الرابع يقدّم حلولًا سكنية متنوعة ضمن تخطيط منظم، مع جودة بناء وتشطيبات تعكس خبرة الشركة.",
    floors: 2,
    units: 3,
  }),
  createPortfolio({
    slug: "zohra-project",
    file: "zohra-project.mp4",
    name: "مشروع زهرة",
    location: "بني سويف",
    short: "مشروع سكني متميز يحمل اسم زهرة.",
    description:
      "مشروع زهرة أحد أعمالنا السابقة في بني سويف، يجمع بين التصميم العصري والتنفيذ الدقيق لتقديم تجربة سكنية راقية ومريحة.",
    floors: 6,
    units: 24,
  }),
];

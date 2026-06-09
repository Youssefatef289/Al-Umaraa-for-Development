# الأمراء للتطوير العقاري — موقع فاخر (Vite + React)

موقع عقاري فاخر بثيم داكن سينمائي، مبني بـ **Vite + React + Tailwind CSS + Framer Motion** مع دعم كامل للعربية (RTL) وأنيميشن سلس مدفوع بالتمرير (Scroll Animations) و Parallax.

A luxury real estate website (dark cinematic theme) built with Vite + React + Tailwind CSS + Framer Motion, full Arabic RTL support, scroll-driven animations and parallax.

## ✨ المميزات

- 🎬 **Hero** بخلفية فيديو + Parallax عند التمرير
- 🌊 أنيميشن ظهور تدريجي لكل قسم (fade / slide / scale / stagger)
- 🃏 بطاقات بتأثير **3D Tilt** عند تمرير الماوس
- 📊 عدّادات أرقام متحركة (Animated Counters)
- 🧭 **Navbar** ثابت بتأثير Glassmorphism عند التمرير
- 🔄 انتقالات سلسة بين الصفحات (Page Transitions)
- 🟢 أزرار عائمة: واتساب + اتصال + العودة للأعلى
- 📱 متجاوب بالكامل + Lazy loading للصور والصفحات

## 🗂️ الصفحات

- **الرئيسية**: Hero فيديو، إحصائيات، من نحن، لماذا نحن، المشاريع، الرؤية والرسالة، CTA
- **من نحن**: Timeline تفاعلي مدفوع بالتمرير + القيم
- **المشاريع**: Grid مع فلترة (سكني/تجاري/إداري/تحت الإنشاء)
- **تفاصيل المشروع**: معرض صور، Progress Bar، المميزات، أنظمة السداد، خريطة، نموذج حجز
- **المدونة**: تصميم Magazine حديث
- **تواصل معنا**: نموذج بـ Validation + بيانات + خريطة

## 🚀 التشغيل

```bash
npm install
npm run dev
```

ثم افتح http://localhost:3000

### للإنتاج

```bash
npm run build
npm run preview
```

## ⚙️ التخصيص

- بيانات الشركة (الاسم، **رقم الواتساب**، الهاتف، السوشيال) في: `src/data/site.js`
- المشاريع في: `src/data/projects.js`
- المقالات في: `src/data/blog.js`
- الألوان والخطوط في: `tailwind.config.js`

> ⚠️ مهم: غيّر `whatsapp` في `src/data/site.js` برقمك الفعلي بصيغة دولية (مثال: `201000000000`).

## 🎥 ملاحظة عن فيديو الهيرو

الفيديو `public/hero.mp4` حجمه كبير (~121MB) — يفضّل **ضغطه** إلى أقل من 10MB لتحسين سرعة التحميل، مثلاً عبر:

```bash
ffmpeg -i hero.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf "scale=1280:-2" public/hero.mp4
```

## 🏗️ الهيكل

```
src/
  components/   مكوّنات قابلة لإعادة الاستخدام
  sections/     أقسام الصفحة الرئيسية
  pages/        الصفحات
  hooks/        hooks مخصصة
  data/         البيانات (site, projects, blog)
  lib/          متغيّرات الأنيميشن
public/         logo.png + hero.mp4
```

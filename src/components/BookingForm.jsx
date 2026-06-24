import { useState } from "react";
import { Check, ArrowLeft } from "./Icons";
import { site, whatsappLink } from "@/data/site";

const initial = { name: "", phone: "", email: "", message: "" };

export default function BookingForm({ projectName = "", compact = false }) {
  const [values, setValues] = useState({
    ...initial,
    message: projectName ? `أرغب في حجز معاينة لمشروع ${projectName}` : "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "الاسم مطلوب";
    else if (values.name.trim().length < 3) e.name = "الاسم قصير جدًا";

    if (!values.phone.trim()) e.phone = "رقم الهاتف مطلوب";
    else if (!/^[0-9+\s-]{8,15}$/.test(values.phone.trim()))
      e.phone = "رقم هاتف غير صحيح";

    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "بريد إلكتروني غير صحيح";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text =
      `طلب جديد عبر الموقع%0A` +
      `الاسم: ${values.name}%0A` +
      `الهاتف: ${values.phone}%0A` +
      (values.email ? `البريد: ${values.email}%0A` : "") +
      (projectName ? `المشروع: ${projectName}%0A` : "") +
      `الرسالة: ${values.message}`;
    window.open(whatsappLink(decodeURIComponent(text)), "_blank");
    setSent(true);
    setValues(initial);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field
        label="الاسم الكامل"
        name="name"
        value={values.name}
        onChange={onChange}
        error={errors.name}
        placeholder="اكتب اسمك"
        required
      />
      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <Field
          label="رقم الهاتف"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={onChange}
          error={errors.phone}
          placeholder="01xxxxxxxxx"
          required
        />
        <Field
          label="البريد الإلكتروني"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
          placeholder="example@mail.com"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy/80">
          رسالتك
        </label>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          value={values.message}
          onChange={onChange}
          placeholder="أخبرنا كيف يمكننا مساعدتك..."
          className="w-full resize-none rounded-xl border border-navy/10 bg-ink-soft px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <button type="submit" className="btn-gold w-full">
        {sent ? (
          <>
            <Check className="h-4 w-4" strokeWidth={2.5} />
            تم الإرسال بنجاح
          </>
        ) : (
          <>
            إرسال الطلب
            <ArrowLeft className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-navy/40">
        سيتم تحويلك إلى واتساب لإتمام الطلب مباشرة مع فريق المبيعات.
      </p>
    </form>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-navy/80">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ink-soft px-4 py-3 text-sm text-navy placeholder:text-navy/35 transition-colors focus:outline-none focus:ring-1 ${
          error
            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500"
            : "border-navy/10 focus:border-gold focus:ring-gold"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

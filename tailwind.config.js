/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ثيم أبيض فاخر — أعيد تعريف ink لقيم فاتحة لتنقلب كل الخلفيات تلقائيًا
        ink: {
          DEFAULT: "#ffffff", // الخلفية الأساسية (أبيض)
          soft: "#f4f6fb", // أقسام فاتحة
          card: "#ffffff", // البطاقات
        },
        navy: {
          DEFAULT: "#0b1f3a",
          soft: "#13294d",
          light: "#1d3b66",
          muted: "#5a6b85",
        },
        // البرتقالي الأساسي للهوية (نفس لون اللوجو)
        gold: {
          DEFAULT: "#D5710C",
          light: "#f08a28",
          dark: "#b35d08",
        },
      },
      fontFamily: {
        sans: ["Tajawal", "system-ui", "sans-serif"],
        display: ["Cairo", "Tajawal", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 24px 50px -24px rgba(11,31,58,0.22)",
        soft: "0 12px 32px -18px rgba(11,31,58,0.18)",
        gold: "0 16px 40px -14px rgba(213,113,12,0.4)",
        glow: "0 0 0 1px rgba(213,113,12,0.18), 0 18px 50px -20px rgba(213,113,12,0.22)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#f08a28 0%,#D5710C 45%,#b35d08 100%)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(29,59,102,0.10) 0%, rgba(255,255,255,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 6s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

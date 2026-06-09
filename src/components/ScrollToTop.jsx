import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// يعيد التمرير لأعلى الصفحة عند تغيير المسار
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

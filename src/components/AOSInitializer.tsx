"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
export default function AOSInitializer() {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 300,
      duration: 1000,
    });
  }, []);

  // 🔥 Jab bhi route (pathname) change hoga, AOS ko refresh karo
  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
      console.log("AOS refreshed for route:", pathname);
    }, 100); //
  }, [pathname]);

  return null; // ye component kuch render nahi karega, sirf initialize karega
}

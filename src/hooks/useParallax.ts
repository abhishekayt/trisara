"use client";

import { useEffect, useRef, useState } from "react";

/**
 * High-performance luxury parallax hook using requestAnimationFrame
 * @param speed Movement speed ratio (e.g. 0.12 for gentle drift)
 */
export function useParallax(speed = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Respect accessibility settings
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const calculateParallax = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if visible or approaching viewport
      if (rect.bottom >= -150 && rect.top <= windowHeight + 150) {
        const centerY = rect.top + rect.height / 2;
        const screenCenterY = windowHeight / 2;
        // Calculate offset: negative when above center, positive when below
        const delta = (centerY - screenCenterY) * speed;
        setOffset(delta);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateParallax);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    calculateParallax();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { ref, offset };
}

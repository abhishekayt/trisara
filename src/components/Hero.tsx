"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useParallax } from "@/hooks/useParallax";

interface HeroProps {
  onOpenConcierge?: () => void;
}

export default function Hero({ onOpenConcierge }: HeroProps = {}) {
  const { ref: parallaxRef, offset } = useParallax(0.08);

  return (
    <section
      className="relative bg-[#1e140f] border-b border-[#c5a059]/15 overflow-hidden"
      id="home"
    >
      {/* 1. Base Luxury Atmosphere */}
      <div className="absolute inset-0 bg-[#1e140f] bg-jaali-dark pointer-events-none select-none" />

      {/* 2. Direct Model Visual: Sits grandly on the right with subtle parallax drift */}
      <div
        ref={parallaxRef}
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[60%] lg:w-[56%] xl:w-[52%] 2xl:w-[48%] h-full pointer-events-none select-none z-10 overflow-hidden flex items-start justify-end"
      >
        <div
          className="relative w-full h-[112%] -top-[6%] max-w-[1200px] ml-auto transition-transform duration-100 ease-out"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
        >
          <Image
            src="/images/Gemini_Generated_Image_3tluil3tluil3tlu.png"
            alt="Trisara Heritage Model"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-[center_top] sm:object-[right_top]"
          />

          {/* Left Edge Seamless Gradient Blend into Dark Luxury Canvas */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-[#1e140f] via-[#1e140f]/60 to-transparent pointer-events-none" />

          {/* Top & Bottom Atmosphere Vignettes */}
          <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#1e140f]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#1e140f] via-[#1e140f]/80 to-transparent pointer-events-none" />

          {/* Mobile Scrim: Soft directional darkening on mobile screens so text is crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e140f] via-[#1e140f]/80 to-transparent sm:hidden pointer-events-none" />
        </div>
      </div>

      {/* 3. Left Hero Content Column: Staggered Museum Reveal */}
      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] 2xl:min-h-[850px] flex items-center relative z-20">
        <div className="w-full sm:w-[52%] lg:w-[48%] px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-28">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl space-y-5 sm:space-y-6">
            {/* Top Accent Tagline */}
            <ScrollReveal delay={100} distance={16}>
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-8 sm:w-10 bg-[#c5a059]/60" />
                <span className="text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#c5a059] font-medium font-sans">
                  TRISARA JEWELLERY
                </span>
              </div>
            </ScrollReveal>

            {/* Main Editorial Headline */}
            <ScrollReveal delay={250} distance={24}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[68px] xl:text-[76px] leading-[1.08] text-[#f8f4ee] font-normal tracking-tight">
                Timeless<br />
                Elegance,<br />
                In Every Detail.
              </h1>
            </ScrollReveal>

            {/* Editorial Narrative */}
            <ScrollReveal delay={400} distance={20}>
              <p className="text-[#cfc3b3] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-md font-light tracking-wide font-sans">
                A celebration of heritage, artistry and enduring beauty. Trisara brings you
                jewellery that transcends time.
              </p>
            </ScrollReveal>

            {/* Royal Emblem Divider: 4-petal Mark + Horizontal Line */}
            <ScrollReveal delay={550} distance={16}>
              <div className="pt-2 sm:pt-4 flex items-center space-x-4">
                <div className="w-5 h-5 relative shrink-0">
                  <Image
                    src="/images/trisara_emblem_clean.png"
                    alt="Trisara Royal Emblem"
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
                <span className="h-[1px] w-16 sm:w-20 bg-[#c5a059]/50" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

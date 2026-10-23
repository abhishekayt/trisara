"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function QuoteSection() {
  const { ref: parallaxRef, offset } = useParallax(0.12);

  return (
    <section
      className="relative bg-[#ede4d8] border-b border-[#4a2e1d]/15 overflow-hidden"
      id="quote-traditions"
    >
      {/* Left Visual Column: Model Wearing Gold Jhumka with Living Parallax */}
      <div
        ref={parallaxRef}
        className="absolute left-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[48%] xl:w-[50%] h-full pointer-events-none select-none overflow-hidden z-10"
      >
        <div
          className="relative w-full h-[116%] -top-[8%] transition-transform duration-100 ease-out"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
        >
          <Image
            src="/images/post_9.png"
            alt="Woman wearing Trisara handcrafted antique gold jhumka earrings"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-[25%_center] sm:object-[32%_center]"
            priority
          />

          {/* Seamless Right Edge Feather into Light Cream Linen Canvas */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 lg:w-56 bg-gradient-to-l from-[#ede4d8] via-[#ede4d8]/85 to-transparent pointer-events-none" />

          {/* Top & Bottom Ambient Vignettes */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#ede4d8]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#ede4d8]/40 to-transparent pointer-events-none" />

          {/* Mobile Scrim: Soft directional lightening so text is perfectly legible on small phones */}
          <div className="absolute inset-0 bg-[#ede4d8]/80 sm:hidden pointer-events-none" />
        </div>
      </div>

      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] xl:min-h-[520px] flex items-center justify-end relative z-20">
        {/* Right Content Column: Museum Staggered Reveal */}
        <div className="w-full sm:w-[50%] lg:w-[50%] xl:w-[50%] px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20 ml-auto">
          <div className="max-w-lg lg:max-w-xl space-y-6 sm:space-y-8">
            {/* The Signature Quote */}
            <ScrollReveal delay={150} distance={24}>
              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] leading-[1.22] text-[#362114] font-normal tracking-tight">
                “Some traditions<br />
                are meant to be worn.”
              </blockquote>
            </ScrollReveal>

            {/* Brand Signature: Royal Emblem + TRISARA Wordmark */}
            <ScrollReveal delay={350} distance={16}>
              <div className="flex items-center space-x-3.5 pt-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 relative shrink-0">
                  <Image
                    src="/images/footer_emblem_dark.png"
                    alt="Trisara Royal Emblem"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <span className="font-serif text-xs sm:text-sm tracking-[0.26em] uppercase text-[#4a2e1d] font-normal">
                  TRISARA
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

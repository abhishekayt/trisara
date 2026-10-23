"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ValuePillars() {
  const pillars = [
    {
      title: "Heritage Inspired",
      desc: "Rooted in India's rich legacy.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path d="M12 21c-4-4-7-8.5-7-12a7 7 0 1114 0c0 3.5-3 8-7 12z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 14a5 5 0 005-5M12 14a5 5 0 01-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Handcrafted by Artisans",
      desc: "Skilled hands, timeless quality.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V4.5a1.5 1.5 0 113 0v7m0-7a1.5 1.5 0 013 0v7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Premium Materials",
      desc: "Gold, precious stones & natural elements.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path d="M12 2l8 8-8 12L4 10l8-8z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10h16M8.5 4.5L12 10l3.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Timeless Appeal",
      desc: "Designed for generations.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-[#1e140f] text-[#f6efe6] border-t border-b border-[#c5a059]/20 py-12 sm:py-16 overflow-hidden"
      id="pillars"
    >
      {/* Client's Official Luxury Jali Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14] select-none"
        style={{
          backgroundImage: "url(/images/trisara_pattern.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "680px auto",
        }}
      />

      {/* Subtle Ambient Vignettes for Smooth Section Transition */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#1e140f]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#1e140f]/60 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#c5a059]/25 text-center">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={idx * 120} distance={20}>
              <div
                className="px-4 sm:px-6 py-6 sm:py-2 flex flex-col items-center space-y-2.5 sm:space-y-3 group"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#c5a059] group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-medium tracking-wide text-[#f8f4ee]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#cfc3b3] max-w-[200px] leading-relaxed font-light font-sans">
                  {pillar.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

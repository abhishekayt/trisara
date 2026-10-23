"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, Award, ShieldCheck, MapPin } from "lucide-react";

export default function Heritage() {
  const [lineageModalOpen, setLineageModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative bg-[#ede4d8] border-b border-[#c5a059]/25 overflow-hidden"
        id="heritage"
      >
        {/* Client's Official Luxury Jali Pattern Overlay behind text */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14] select-none"
          style={{
            backgroundImage: "url(/images/trisara_pattern_bronze.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "680px auto",
          }}
        />

        {/* Left Visual Column: Handcrafted Antique Jhumka Anchored to True Viewport Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[48%] xl:w-[50%] h-full pointer-events-none select-none overflow-hidden z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/story_jhumka_hq.jpg"
              alt="Trisara Handcrafted Antique Gold Jhumka on Carved Wood"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[30%_center] sm:object-[45%_center]"
              priority
            />

            {/* Seamless Right Edge Feather into Light Cream Pattern Background */}
            <div className="absolute inset-y-0 right-0 w-28 sm:w-44 lg:w-64 bg-gradient-to-l from-[#ede4d8] via-[#ede4d8]/85 to-transparent pointer-events-none" />

            {/* Top & Bottom Ambient Vignettes */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#ede4d8]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#ede4d8]/60 to-transparent pointer-events-none" />

            {/* Mobile Scrim: Soft directional darkening on mobile screens so text is always crystal clear */}
            <div className="absolute inset-0 bg-[#ede4d8]/80 sm:hidden pointer-events-none" />
          </div>
        </div>

        <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] xl:min-h-[620px] flex items-center justify-end relative z-20">
          {/* Right Content Column */}
          <div className="w-full sm:w-[52%] lg:w-[50%] px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20 ml-auto">
            <div className="max-w-xl lg:max-w-lg xl:max-w-xl space-y-5 sm:space-y-6">
              {/* Tagline */}
              <div className="flex items-center space-x-3">
                <span className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#9e8571] font-sans font-medium">
                  OUR STORY
                </span>
                <span className="h-[1px] w-8 sm:w-10 bg-[#9e8571]/40" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-[#362114] leading-[1.12] font-normal tracking-tight">
                A Legacy<br />
                of Craftsmanship.
              </h2>

              {/* Editorial Narrative */}
              <div className="space-y-4 text-[#6e5a4d] text-sm sm:text-base leading-relaxed max-w-lg font-light font-sans">
                <p>
                  Trisara Jewellers was founded with a vision to preserve India&apos;s rich jewellery heritage
                  while creating timeless pieces for the modern woman.
                </p>
                <p>
                  Our journey is rooted in tradition, guided by artisanship and driven by a deep
                  commitment to quality, authenticity and elegance.
                </p>
              </div>

              {/* Learn More Action with Royal Emblem & Arrow */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setLineageModalOpen(true)}
                  className="inline-flex items-center space-x-3 text-[#7a5035] hover:text-[#4a2e1d] transition-all duration-300 group cursor-pointer focus:outline-none"
                  aria-label="Learn more about Trisara heritage"
                >
                  <div className="w-5 h-5 relative shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/trisara_emblem_bronze.png"
                      alt="Trisara Royal Emblem"
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif italic text-base sm:text-lg tracking-wide">
                    Learn More
                  </span>
                  <span className="h-[1px] w-14 sm:w-20 bg-[#7a5035]/60 group-hover:w-28 group-hover:bg-[#7a5035] transition-all duration-300" />
                  <span className="text-sm font-light transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Lineage Modal */}
      {lineageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160d09]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#fbf7f2] text-[#2c1a10] border border-[#c5a059]/40 rounded-[2px] shadow-2xl p-6 sm:p-10 overflow-hidden">
            <button
              onClick={() => setLineageModalOpen(false)}
              className="absolute top-5 right-5 text-[#7a5035] hover:text-[#362114] p-2 focus:outline-none transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8b624a] font-medium font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Ancestral Lineage • Jodhpur, Rajasthan</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2a170d] font-normal leading-snug">
                The Heritage of Soni Bhanwarlal Somdev Arya
              </h3>

              <div className="h-[1px] w-16 bg-[#c5a059]" />

              <div className="space-y-4 text-xs sm:text-sm text-[#5a4639] leading-relaxed font-sans font-light">
                <p>
                  Guided by the venerated goldsmith lineage of <strong className="font-medium text-[#2a170d]">Soni Bhanwarlal Somdev Arya</strong>,
                  Trisara Jewellers stands upon a foundation of ancestral Rajasthani jewellery mastery. Under the visionary stewardship of
                  Proprietor <strong className="font-medium text-[#2a170d]">Rahul Soni</strong>, the atelier transforms imperial Marwar design
                  traditions into heirloom jewels fit for contemporary royalty.
                </p>
                <p>
                  Every Trisara creation is handcrafted by master artisans using time-honored techniques — from intricate Polki jadau
                  and Kundan setting to pure 22K hallmarked gold filigree.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="flex items-center space-x-2.5 p-3 bg-[#ede4d8]/60 border border-[#c5a059]/30 rounded-[2px]">
                  <Award className="w-4 h-4 text-[#8b624a] shrink-0" />
                  <span className="text-[#362114]">BIS Hallmark Certified 100% Gold</span>
                </div>
                <div className="flex items-center space-x-2.5 p-3 bg-[#ede4d8]/60 border border-[#c5a059]/30 rounded-[2px]">
                  <ShieldCheck className="w-4 h-4 text-[#8b624a] shrink-0" />
                  <span className="text-[#362114]">Certified Natural Gemstones</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#c5a059]/20 text-[11px] text-[#7a6455]">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8b624a]" />
                  <span>Karni Nagar, Sector F, Basni / Kudi, Jodhpur</span>
                </div>
                <span className="font-serif italic text-xs text-[#8b624a]">Gold for Generations</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

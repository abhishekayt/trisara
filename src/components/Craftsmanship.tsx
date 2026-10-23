"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, Hammer, Flame, Gem, CheckCircle2 } from "lucide-react";

export default function Craftsmanship() {
  const [atelierModalOpen, setAtelierModalOpen] = useState(false);

  const techniques = [
    {
      title: "Jadau & Kundan",
      subtitle: "24K Pure Gold Foil Setting",
      desc: "Setting uncut natural polki diamonds into 24K refined gold foils using intricate lac-core setting techniques passed down across royal generations.",
      icon: Gem,
    },
    {
      title: "Nakshi Repoussé",
      subtitle: "Hand-Embossed High Relief",
      desc: "Ancient sculptural art where master artisans emboss divine mythological deities, florals and royal peacocks into solid 22K gold sheets.",
      icon: Hammer,
    },
    {
      title: "Imperial Meenakari",
      subtitle: "Vibrant Rajasthani Enameling",
      desc: "Mineral and gemstone powders delicately fused onto engraved gold surfaces in high-temperature kilns, creating jewel-toned reverse surfaces.",
      icon: Flame,
    },
  ];

  return (
    <>
      <section
        className="relative bg-[#ede4d8] border-b border-[#c5a059]/25 overflow-hidden"
        id="craftsmanship"
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

        {/* Left Visual Column: Artisanal Masterpiece Anchored to True Viewport Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[48%] xl:w-[50%] h-full pointer-events-none select-none overflow-hidden z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/craftsmanship_post7.png"
              alt="Trisara Master Handcrafted Gold Jewellery Craftsmanship"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[35%_center] sm:object-[45%_center]"
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
                  CRAFTSMANSHIP
                </span>
                <span className="h-[1px] w-8 sm:w-10 bg-[#9e8571]/40" />
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-[#362114] leading-[1.12] font-normal tracking-tight">
                More Than Jewellery.<br />
                It&apos;s an Art.
              </h2>

              {/* Editorial Narrative */}
              <div className="space-y-4 text-[#6e5a4d] text-sm sm:text-base leading-relaxed max-w-lg font-light font-sans">
                <p>
                  Each piece of Trisara is carefully handcrafted by skilled artisans in our Jodhpur atelier,
                  blending centuries-old Marwar techniques with intricate detailing.
                </p>
                <p>
                  The result is jewellery that carries stories — of ancestral hands, sacred artistry and
                  heirloom beauty meant to be cherished across generations.
                </p>
              </div>

              {/* Artisan Highlights Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                {techniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#fbf7f2]/80 border border-[#c5a059]/30 rounded-[2px] space-y-1"
                  >
                    <span className="block font-serif text-xs sm:text-[13px] font-medium text-[#362114]">
                      {tech.title}
                    </span>
                    <span className="block text-[10px] text-[#8b654e] font-sans font-light">
                      {tech.subtitle}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button: Royal Emblem + Explore Artistry → */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setAtelierModalOpen(true)}
                  className="inline-flex items-center space-x-3 text-[#7a5035] hover:text-[#4a2e1d] transition-all duration-300 group cursor-pointer focus:outline-none"
                  aria-label="Explore Trisara artisanal craftsmanship techniques"
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
                    Explore Artistry
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

      {/* Craftsmanship Atelier Modal */}
      {atelierModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160d09]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#fbf7f2] text-[#2c1a10] border border-[#c5a059]/40 rounded-[2px] shadow-2xl p-6 sm:p-10 overflow-hidden">
            <button
              onClick={() => setAtelierModalOpen(false)}
              className="absolute top-5 right-5 text-[#7a5035] hover:text-[#362114] p-2 focus:outline-none transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8b624a] font-medium font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Master Goldsmithing Techniques</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2a170d] font-normal leading-snug">
                The Sacred Arts of Trisara
              </h3>

              <div className="h-[1px] w-16 bg-[#c5a059]" />

              <div className="space-y-4">
                {techniques.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#ede4d8]/60 border border-[#c5a059]/30 rounded-[2px] space-y-1.5"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Icon className="w-4 h-4 text-[#8b624a]" />
                        <h4 className="font-serif text-base sm:text-lg text-[#2a170d] font-medium">
                          {t.title}
                        </h4>
                        <span className="text-[10px] text-[#8b624a] uppercase tracking-wider font-sans">
                          • {t.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5a4639] leading-relaxed font-sans font-light">
                        {t.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#c5a059]/20 text-[11px] text-[#7a6455] font-sans">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8b624a]" />
                  <span>100% Certified 22K/24K Gold &amp; Natural Polki</span>
                </div>
                <span className="font-serif italic text-xs text-[#8b624a]">Atelier Jodhpur</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

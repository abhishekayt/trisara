"use client";

import React from "react";
import Image from "next/image";

export default function MasterShowcase() {
  const showcaseItems = [
    {
      title: "The Trisara Presentation Chest",
      subtitle: "Bespoke Heirloom Casket & Presentation",
      src: "/assets/visual_5.png",
      desc: "Our bespoke heirloom casket with antique brass lock and custom compartments, crafted to preserve high jewellery for generations.",
      span: "lg:col-span-8",
    },
    {
      title: "Heirloom Bridal Flatlay",
      subtitle: "Heritage Kundan, Polki & Natural Pearls",
      src: "/assets/visual_1.png",
      desc: "Masterpieces arranged over traditional silks, capturing the timeless splendour of royal Indian nuptials.",
      span: "lg:col-span-4",
    },
    {
      title: "Handcrafted Packaging",
      subtitle: "Artisanal Wooden Jewellery Box",
      src: "/assets/visual_4.png",
      desc: "Every Trisara acquisition is presented in handcrafted wooden packaging created to accompany heirloom pieces.",
      span: "lg:col-span-4",
    },
    {
      title: "The Heritage Choker Suite",
      subtitle: "Royal Polki, Rubies & Gold Kadas",
      src: "/assets/visual_2.png",
      desc: "Luminous polki choker adorned with royal rubies, matched with traditional gold kadas and jhumkas.",
      span: "lg:col-span-8",
    },
  ];

  return (
    <section className="relative bg-[#160d09] py-16 sm:py-20 lg:py-28 border-b border-[#c5a059]/20" id="showcase">
      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 space-y-3 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="h-[1px] w-6 sm:w-8 bg-[#c5a059]" />
              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#c5a059] font-medium font-sans">
                Atelier Portfolio
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#f8f4ee] font-normal">
              Heirlooms of the House
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#cfc3b3] max-w-md font-light leading-relaxed font-sans">
            Every ornament created by Trisara is conceived as a work of timeless art, accompanied by
            artisanal packaging and verified hallmarking credentials.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} group relative aspect-[4/3] sm:aspect-[16/10] bg-[#1e140f] rounded-[2px] overflow-hidden border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all duration-500 shadow-xl`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160d09] via-[#160d09]/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#dec388] font-light font-sans">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#f8f4ee] font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#cfc3b3] line-clamp-2 max-w-xl font-light font-sans opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

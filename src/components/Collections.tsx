"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

interface CollectionItem {
  id: string;
  title: string;
  label: string;
  image: string;
  tagline: string;
  category: "earrings" | "necklaces" | "temple";
  description: string;
  details: string[];
}

export default function Collections() {
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const collections: CollectionItem[] = [
    {
      id: "earrings",
      title: "Earrings",
      label: "Earrings",
      image: "/images/collection_earrings_hq.jpg",
      tagline: "Antique Jhumkas, Chandbalis & Royal Studs",
      category: "earrings",
      description:
        "From majestic handcrafted tiered jhumkas to imperial chandbalis and chandelier drops, our earrings capture the imperial grace of Marwar royalty.",
      details: [
        "22 Karat Certified Hallmarked Gold",
        "Natural Uncut Polki Diamonds & Rubies",
        "Handcrafted Micro-Filigree & Jali Beads",
        "Custom Earring Backing for Balanced Wear",
      ],
    },
    {
      id: "necklaces",
      title: "Necklaces",
      label: "Necklaces",
      image: "/images/collection_necklaces_hq.jpg",
      tagline: "Heritage Chokers & Layered Rani Haars",
      category: "necklaces",
      description:
        "Intricate craftsmanship, luminous stones, emerald accents, and cascading pearls — crafted for timeless occasions.",
      details: [
        "22 Karat Certified Hallmarked Gold",
        "Natural Emerald Accents & Cascading Pearls",
        "Intricate Handcrafted Heritage Setting",
        "Matching Ornate Jhumkis & Maang Tikka",
      ],
    },
    {
      id: "temple-jewellery",
      title: "Temple Jewellery",
      label: "Temple Jewellery",
      image: "/images/collection_temple_hq.jpg",
      tagline: "Divine Nakshi & Goddess Lakshmi Masterpieces",
      category: "temple",
      description:
        "Sacred motifs sculpted in solid gold by master craftsmen. Featuring embossed Goddess Lakshmi medallions, divine peacocks, and solid gold kadas passed down across generations.",
      details: [
        "Sculptural High-Relief Nakshi Repoussé Art",
        "Solid Antique Finish 22K Gold",
        "Kasu & Temple Coin Tiered Haram Necklaces",
        "BIS Hallmarked for 100% Purity Authenticity",
      ],
    },
  ];

  return (
    <>
      <section
        className="relative bg-[#1e140f] text-[#f6efe6] py-16 sm:py-20 lg:py-24 border-b border-[#c5a059]/15 overflow-hidden"
        id="collections"
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

        {/* Ambient Top & Bottom Vignettes for smooth section transitions */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1e140f] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1e140f] to-transparent pointer-events-none" />

        <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Tagline with Gold Divider Line */}
              <div className="flex items-center space-x-3">
                <span className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#c5a059] font-sans font-medium">
                  OUR COLLECTIONS
                </span>
                <span className="h-[1px] w-8 sm:w-10 bg-[#c5a059]/50" />
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-[#f8f4ee] leading-[1.12] font-normal tracking-tight">
                Timeless Pieces.<br />
                Endless Stories.
              </h2>

              {/* Editorial Description */}
              <p className="text-[#cfc3b3] text-sm sm:text-base leading-relaxed max-w-md font-light font-sans">
                From temple jewellery to contemporary classics, our collections celebrate the
                artistry, culture and elegance of Indian jewellery — designed for the modern woman.
              </p>

              {/* Explore Collections CTA with Royal Emblem & Arrow */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setSelectedItem(collections[0])}
                  className="inline-flex items-center space-x-3 text-[#dec388] hover:text-[#f8f4ee] transition-all duration-300 group cursor-pointer focus:outline-none"
                  aria-label="Explore Trisara Collections"
                >
                  <div className="w-5 h-5 relative shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/trisara_emblem_clean.png"
                      alt="Trisara Royal Emblem"
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif italic text-base sm:text-lg tracking-wide text-[#dec388] group-hover:text-[#f8f4ee] transition-colors">
                    Explore Collections
                  </span>
                  <span className="h-[1px] w-14 sm:w-20 bg-[#c5a059]/60 group-hover:w-28 group-hover:bg-[#c5a059] transition-all duration-300" />
                  <span className="text-sm font-light text-[#c5a059] group-hover:text-[#f8f4ee] transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: 3 Category Portrait Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {collections.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group cursor-pointer flex flex-col bg-[#1a110c]/80 border border-[#c5a059]/25 hover:border-[#c5a059]/70 rounded-[1px] overflow-hidden shadow-xl transition-all duration-300 transform sm:hover:-translate-y-1.5"
                  >
                    {/* Top Photograph Container */}
                    <div className="w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#160d09] relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a110c] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    </div>

                    {/* Bottom Label Panel: Matching Reference Design */}
                    <div className="px-4 py-3 sm:py-3.5 bg-[#170e0a]/90 border-t border-[#c5a059]/15 flex items-center justify-between">
                      <span className="font-serif text-sm sm:text-base text-[#f5efe6] group-hover:text-[#c5a059] transition-colors font-normal tracking-wide">
                        {item.label}
                      </span>
                      <span className="text-xs text-[#c5a059] group-hover:translate-x-1.5 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox / Atelier Modal for Collection Details */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden bg-[#1a110c] border border-[#c5a059]/40 outline outline-1 outline-[#c5a059]/20 -outline-offset-4 rounded-[2px] shadow-2xl text-[#f6efe6]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Client Pattern Watermark in Modal Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08] select-none"
              style={{
                backgroundImage: "url(/images/trisara_pattern.png)",
                backgroundRepeat: "repeat",
                backgroundSize: "480px auto",
              }}
            />

            {/* Top Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#160d09]/90 text-[#ece2d0] hover:text-[#c5a059] border border-[#c5a059]/30 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 relative z-10">
              {/* Left Column: Photograph with subtle gradient */}
              <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[280px] sm:min-h-[420px] bg-[#160d09]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a110c]/80 via-transparent to-transparent opacity-60 sm:opacity-40" />

                {/* Subtle Floating Provenance Tag */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1 bg-[#1a110c]/85 backdrop-blur-sm border border-[#c5a059]/25 text-[10px] sm:text-[11px] text-[#dec388] tracking-widest uppercase font-serif">
                  House of Trisara
                </div>
              </div>

              {/* Right Column: Editorial Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category Switcher Controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#c5a059]/15">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 relative shrink-0">
                        <Image
                          src="/images/trisara_emblem_clean.png"
                          alt="Trisara Royal Emblem"
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-[#c5a059] font-medium font-sans">
                        Collection Showcase
                      </span>
                    </div>

                    {/* Prev / Next Arrows */}
                    <div className="flex items-center space-x-1.5 mr-6 sm:mr-8">
                      <button
                        onClick={() => {
                          const idx = collections.findIndex((c) => c.id === selectedItem.id);
                          const prev = (idx - 1 + collections.length) % collections.length;
                          setSelectedItem(collections[prev]);
                        }}
                        className="w-6 h-6 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#dec388] hover:text-[#f8f4ee] hover:border-[#c5a059] transition-colors focus:outline-none"
                        aria-label="Previous collection item"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          const idx = collections.findIndex((c) => c.id === selectedItem.id);
                          const next = (idx + 1) % collections.length;
                          setSelectedItem(collections[next]);
                        }}
                        className="w-6 h-6 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#dec388] hover:text-[#f8f4ee] hover:border-[#c5a059] transition-colors focus:outline-none"
                        aria-label="Next collection item"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#f8f4ee] font-normal leading-tight">
                      {selectedItem.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-sm text-[#dec388] mt-1.5">
                      {selectedItem.tagline}
                    </p>
                  </div>

                  {/* Editorial Narrative */}
                  <p className="text-xs sm:text-[13px] text-[#cfc3b3] leading-relaxed font-light font-sans pt-1">
                    {selectedItem.description}
                  </p>

                  {/* Royal Slogan Whisper */}
                  <div className="pt-2 flex items-center space-x-2.5 text-[11px] text-[#dec388]/80 font-serif italic">
                    <span className="h-[1px] w-6 bg-[#c5a059]/40" />
                    <span>“Where every jewel carries the essence of timeless beauty.”</span>
                  </div>
                </div>

                {/* Actions: Refined Antique Gold WhatsApp Button + Close */}
                <div className="pt-3 border-t border-[#c5a059]/15 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`https://wa.me/919414195407?text=${encodeURIComponent(
                      `Hello Trisara Jewellers, I would like to inquire about the ${selectedItem.title} collection.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#c5a059] via-[#dec388] to-[#c5a059] hover:from-[#d4af37] hover:to-[#f0d69e] text-[#1e140f] py-3 px-4 rounded-[1px] text-xs uppercase tracking-[0.18em] font-medium font-sans transition-all duration-300 shadow-md group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#1e140f]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="border border-[#c5a059]/30 hover:border-[#c5a059] hover:bg-[#c5a059]/10 px-4 py-3 text-xs uppercase tracking-wider text-[#cfc3b3] hover:text-[#f8f4ee] font-sans transition-colors rounded-[1px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

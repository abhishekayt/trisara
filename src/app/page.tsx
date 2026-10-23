"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Collections from "@/components/Collections";
import Craftsmanship from "@/components/Craftsmanship";
import ValuePillars from "@/components/ValuePillars";
import MasterShowcase from "@/components/MasterShowcase";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import ConciergeModal from "@/components/ConciergeModal";

export default function Home() {
  const [conciergeOpen, setConciergeOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenConcierge={() => setConciergeOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenConcierge={() => setConciergeOpen(true)} />
        <Heritage />
        <Collections />
        <Craftsmanship />
        <MasterShowcase />
        <QuoteSection />
        <ValuePillars />
      </main>
      <Footer onOpenConcierge={() => setConciergeOpen(true)} />

      <ConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
      />
    </div>
  );
}

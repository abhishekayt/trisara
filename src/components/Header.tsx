"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

interface HeaderProps {
  onOpenConcierge?: () => void;
}

export default function Header({ onOpenConcierge }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible if mobile drawer is active
      if (mobileMenuOpen) {
        setVisible(true);
        return;
      }

      setScrolled(currentScrollY > 20);

      // Within top 60px, always stay visible
      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 6) {
        // Scrolling down -> slide up out of view
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 6) {
        // Scrolling up -> slide down into view
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "Our Story", href: "#heritage", active: false },
    { label: "Collections", href: "#collections", active: false },
    { label: "Craftsmanship", href: "#craftsmanship", active: false },
  ];

  return (
    <>
      <header
        className={`w-full border-b transition-transform duration-300 ease-in-out sticky top-0 z-50 ${
          visible ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } ${
          scrolled
            ? "border-[#c5a059]/25 bg-[#160e0a]/96 backdrop-blur-md shadow-lg shadow-black/40"
            : "border-[#c5a059]/15 bg-[#1a110c]/92 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 h-[72px] sm:h-[76px] flex items-center justify-between">
          {/* Mobile Menu Button (Left on Mobile) */}
          <div className="flex md:hidden items-center flex-1 justify-start">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#e6ded6] hover:text-[#c5a059] p-2 -ml-2 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* 1. Primary Navigation Links (Desktop Left Column) */}
          <nav className="hidden md:flex flex-1 items-center justify-start space-x-7 lg:space-x-9 text-[13px] lg:text-sm font-serif tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 group ${
                  link.active
                    ? "text-[#f8f4ee] font-medium"
                    : "text-[#cfc3b3] hover:text-[#c5a059]"
                }`}
              >
                {link.label}
                {link.active ? (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#c5a059]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            ))}
          </nav>

          {/* 2. Official Brand Logo (Mathematically Centered) */}
          <div className="shrink-0 flex items-center justify-center">
            <a
              href="#home"
              className="flex items-center justify-center cursor-pointer group py-1"
              aria-label="Trisara Jewellers Home"
            >
              <div className="h-10 sm:h-11 w-auto aspect-[688/530] relative group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/trisara_header_logo.png"
                  alt="Trisara Royal Jewellers"
                  fill
                  sizes="(max-width: 640px) 50px, 65px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* 3. Right Column: Contact Us & WhatsApp Direct Redirect */}
          <div className="flex-1 flex items-center justify-end">
            <a
              href="https://wa.me/919414195407?text=Hello%20Trisara%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-3 cursor-pointer group py-1 focus:outline-none"
              title="Contact Us on WhatsApp (+91-9414195407)"
            >
              <span className="h-[1px] w-8 lg:w-10 bg-[#c5a059]/40 group-hover:w-12 group-hover:bg-[#c5a059] transition-all duration-300" />
              <span className="font-serif italic text-xs lg:text-[13px] tracking-wider text-[#c5a059]/90 group-hover:text-[#dec388] transition-colors">
                Contact Us
              </span>
            </a>

            {/* Mobile Contact WhatsApp Icon */}
            <a
              href="https://wa.me/919414195407?text=Hello%20Trisara%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden text-[#c5a059] hover:text-[#dec388] p-2 -mr-2 focus:outline-none transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#160d09]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 pt-20 md:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex justify-between items-center pb-4 border-b border-[#c5a059]/15">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-medium font-sans">
              Navigation
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#ece2d0] hover:text-[#c5a059] p-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-8 space-y-6 text-center">
            <div className="flex flex-col space-y-5 text-xl tracking-[0.2em] uppercase font-serif">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 border-b border-[#c5a059]/10 transition-colors ${
                    link.active ? "text-[#c5a059]" : "text-[#f5efe6] hover:text-[#c5a059]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919414195407?text=Hello%20Trisara%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 border border-[#c5a059] bg-[#c5a059]/10 text-[#f3ece2] hover:bg-[#c5a059] hover:text-[#1e140f] text-xs uppercase tracking-[0.25em] font-sans transition-all duration-300"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#c5a059]/20 text-center text-xs text-[#cfc3b3]">
            <p className="text-[#dec388] font-serif italic text-base">“Timeless Elegance”</p>
            <p className="text-[11px] font-light">Plot No 1, Karni Nagar, Sector F, Basni / Kudi, Jodhpur</p>
          </div>
        </div>
      )}
    </>
  );
}
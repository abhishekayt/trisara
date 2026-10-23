"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

interface FooterProps {
  onOpenConcierge?: () => void;
}

export default function Footer({ onOpenConcierge }: FooterProps = {}) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#heritage" },
    { name: "Collections", href: "#collections" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Contact", href: "#contact", isAction: true },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/trisarajewellers",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#f3ebe1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#f3ebe1] fill-current" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#f3ebe1] fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#f3ebe1] fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="relative bg-[#f2e6d7] text-[#4a2e1d] pt-10 sm:pt-14 pb-8 sm:pb-10 border-t border-[#4a2e1d]/20 overflow-hidden"
      id="footer"
    >
      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* 1. TOP ROW: Brand Identity (Left) | Navigation Links (Center-Right) | Social Icons (Far Right) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 sm:pb-12 border-b border-[#4a2e1d]/15 gap-8 lg:gap-4">
          {/* Left: Trisara Brand Lockup */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 relative shrink-0">
              <Image
                src="/images/footer_emblem_dark.png"
                alt="Trisara Royal Emblem"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl text-[#362114] tracking-[0.24em] uppercase font-normal leading-tight">
                TRISARA
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#5c3e2e] tracking-[0.32em] uppercase font-medium mt-0.5 leading-tight">
                JEWELLERS
              </span>
              <span className="font-serif italic text-xs text-[#7a5035] mt-1 leading-tight">
                By Soni Bhanwarlal Somdev Arya
              </span>
            </div>
          </div>

          {/* Right Group: Nav Links + Social Roundels */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-12">
            {/* Navigation Menu Links */}
            <nav className="flex flex-wrap items-center gap-5 sm:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.isAction && onOpenConcierge) {
                      e.preventDefault();
                      onOpenConcierge();
                    }
                  }}
                  className="font-serif text-sm sm:text-base text-[#4a2e1d] hover:text-[#7a5035] transition-colors tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Roundels */}
            <div className="flex items-center space-x-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Trisara on ${item.name}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4a2e1d] hover:bg-[#683f27] flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. MIDDLE ROW: Fort Illustration (Left) | Contact Details (Center) | Brand Quote & Credentials (Right) */}
        <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Architectural Mehrangarh Fort Skyline Illustration (Desktop) */}
          <div className="hidden md:flex md:col-span-4 items-center justify-start">
            <div className="relative w-full max-w-[420px] aspect-[2400/710] select-none pointer-events-none">
              <Image
                src="/images/footer_fort_user.png"
                alt="Mehrangarh Fort Jodhpur - Trisara Heritage"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain object-left-bottom mix-blend-multiply"
                priority
              />
            </div>
          </div>

          {/* Center: Contact Details with Icons (Fort Watermark Background on Small Screens) */}
          <div className="relative md:col-span-4 text-xs sm:text-[13px] text-[#4a2e1d] font-sans font-normal leading-relaxed overflow-hidden py-2 md:py-0">
            {/* Mobile-Only Fort Background Behind Footer Details */}
            <div className="md:hidden absolute right-0 bottom-0 w-full max-w-[360px] aspect-[2400/710] pointer-events-none select-none opacity-30 z-0">
              <Image
                src="/images/footer_fort_user.png"
                alt=""
                fill
                sizes="(max-width: 768px) 360px"
                className="object-contain object-right-bottom mix-blend-multiply"
              />
            </div>

            {/* Details Content Layer */}
            <div className="relative z-10 space-y-3 sm:space-y-3.5">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#7a5035] shrink-0 mt-0.5" />
                <p>
                  Plot No 1, Karni Nagar, Sector F, Kudi / Basni,<br />
                  Jodhpur, Rajasthan 342005
                </p>
              </div>

              {/* Phone / WhatsApp Concierge */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#7a5035] shrink-0" />
                <a
                  href="tel:+919414195407"
                  className="hover:text-[#7a5035] hover:underline transition-colors"
                >
                  +91-9414195407 (Direct / WhatsApp Concierge)
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#7a5035] shrink-0" />
                <a
                  href="mailto:rahul@trisarajewellers.com"
                  className="hover:text-[#7a5035] hover:underline transition-colors"
                >
                  rahul@trisarajewellers.com
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-[#7a5035] shrink-0" />
                <a
                  href="https://www.trisarajewellers.com"
                  className="hover:text-[#7a5035] hover:underline transition-colors"
                >
                  www.trisarajewellers.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Brand Quote */}
          <div className="md:col-span-4 flex flex-col justify-center md:items-end text-left md:text-right">
            {/* 2-line Quote */}
            <p className="font-serif italic text-base sm:text-lg lg:text-[20px] text-[#362114] leading-[1.4] max-w-sm">
              “Timeless elegance is not just a style,<br />
              it’s a legacy.”
            </p>
          </div>
        </div>

        {/* 3. BOTTOM ROW: Copyright, Regulatory Compliance & Developer Credit */}
        <div className="pt-6 border-t border-[#4a2e1d]/15 flex flex-col lg:flex-row items-center justify-between gap-3.5 text-[11px] sm:text-xs text-[#6e574b]">
          <div>
            <span>© 2025 Trisara Jewellers. All rights reserved.</span>
          </div>

          {/* Statutory Regulatory Accreditations */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[#5c3e2e] font-sans">
            <span>
              <span className="text-[#7a5035]">BIS Hallmark:</span>{" "}
              <span className="font-mono font-medium text-[#362114]">HM/C-8490099325</span>
            </span>
            <span className="text-[#c5a059]">•</span>
            <span>
              <span className="text-[#7a5035]">GSTIN:</span>{" "}
              <span className="font-mono font-medium text-[#362114]">08IQXPS7794J1Z7</span>
            </span>
          </div>

          <p className="font-sans">
            Designed &amp; Developed By{" "}
            <a
              href="https://adiyogitechnosoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#362114] font-medium hover:text-[#7a5035] underline underline-offset-2 decoration-[#c5a059]/60 hover:decoration-[#7a5035] transition-colors"
            >
              Adiyogi Technosoft Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
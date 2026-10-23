"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Phone, Send, CheckCircle2 } from "lucide-react";

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConciergeModal({ isOpen, onClose }: ConciergeModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Bridal Kundan-Polki",
    date: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `*Trisara Atelier Appointment Request*\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nPreferred Date: ${formData.date || "As soon as possible"}\nNotes: ${formData.message || "None"}`;
    window.open(`https://wa.me/919414195407?text=${encodeURIComponent(waText)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#1e140f] border border-[#c5a059]/40 rounded-[2px] p-5 sm:p-8 text-[#ece2d0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-[#a89987] hover:text-[#c5a059] p-1.5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 sm:py-10 space-y-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#f8f4ee]">Appointment Requested</h3>
            <p className="text-xs text-[#cfc3b3] max-w-xs mx-auto leading-relaxed">
              Thank you for connecting with Trisara Jewellers. Our private concierge will be in
              touch with you shortly on WhatsApp.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#c5a059] text-[#1e140f] px-6 py-2.5 text-xs uppercase tracking-wider font-medium rounded-[1px]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-medium">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Contact Trisara Jewellers</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f8f4ee] font-normal mt-1">
                Connect with Our Atelier
              </h3>
              <p className="text-xs text-[#cfc3b3] font-light mt-1">
                Where every jewel carries the essence of timeless beauty. Connect directly with proprietor Rahul Soni and our Jodhpur team.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dec388] mb-1">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Gayatri Rathore"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#160d09] border border-[#c5a059]/30 rounded-[1px] px-3.5 py-2.5 text-sm sm:text-xs text-[#f5efe6] placeholder-[#6b5849] focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dec388] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    placeholder="+91 94141 95407"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#160d09] border border-[#c5a059]/30 rounded-[1px] px-3.5 py-2.5 text-sm sm:text-xs text-[#f5efe6] placeholder-[#6b5849] focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dec388] mb-1">
                    Collection Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#160d09] border border-[#c5a059]/30 rounded-[1px] px-3 py-2.5 text-sm sm:text-xs text-[#f5efe6] focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Bridal Kundan-Polki">Bridal Kundan-Polki</option>
                    <option value="Heritage Necklaces">Heritage Necklaces</option>
                    <option value="Temple Gold Jewellery">Temple Gold Jewellery</option>
                    <option value="Haathi Motifs & Earrings">Haathi Motifs &amp; Earrings</option>
                    <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dec388] mb-1">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#160d09] border border-[#c5a059]/30 rounded-[1px] px-3.5 py-2.5 text-sm sm:text-xs text-[#f5efe6] focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#dec388] mb-1">
                  Special Notes or Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements or occasion..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#160d09] border border-[#c5a059]/30 rounded-[1px] px-3.5 py-2 text-sm sm:text-xs text-[#f5efe6] placeholder-[#6b5849] focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#c5a059] hover:bg-[#dec388] text-[#1e140f] py-3.5 sm:py-3 px-4 rounded-[1px] text-xs uppercase tracking-wider font-medium transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm on WhatsApp</span>
              </button>

              <a
                href="tel:+919414195407"
                className="inline-flex items-center justify-center space-x-2 border border-[#c5a059]/40 hover:border-[#c5a059] text-[#ece2d0] py-3.5 sm:py-3 px-4 rounded-[1px] text-xs uppercase tracking-wider font-light transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call Atelier</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

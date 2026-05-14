import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Layout3() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8fbff] relative w-full overflow-hidden py-24" style={{ minHeight: "900px" }}>
      {/* Background Accents */}
      <div className="absolute bg-[rgba(29,140,248,0.05)] blur-[120px] right-[-100px] rounded-full size-[600px] top-[-100px] pointer-events-none" />
      <div className="absolute bg-[rgba(219,234,254,0.3)] blur-[100px] left-[-200px] rounded-full size-[500px] bottom-[-100px] pointer-events-none" />

      <div className="relative mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Content Side */}
          <div className="flex-1 space-y-8 self-start">
            <div className="inline-flex items-center gap-2 bg-[#eff6ff] border-[#dbeafe] border-[0.889px] px-4 py-2 rounded-full">
              <div className="bg-[#1d8cf8] opacity-[0.67] rounded-full size-2" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[#1d8cf8] text-[12px] tracking-[1.5px] uppercase">Schedule a demo</span>
            </div>

            <h2
              className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#383838] text-[48px] leading-[1.1]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >Schedule Your DemoToday ! </h2>

            <div className="space-y-6">
              <p className="font-['Roboto:Regular',sans-serif] text-[#555] text-lg leading-relaxed">Get actionable intelligence to identify emerging opportunities and risks proactively, and make better business decisions.</p>
              <p className="font-['Roboto:Regular',sans-serif] text-[#555] text-lg leading-relaxed">
                The Intellizence AI-powered market intelligence platform provides timely, contextual, and actionable intelligence through curated news signals and datasets. Stay ahead by staying informed!
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <p className="font-['Roboto:Regular',sans-serif] text-[#383838] text-[18px] leading-relaxed italic"><span className=""><span className=""><span className="font-normal">“ I personally check Intellizence nearly every day and am amazed by how often I find things that are relevant for our business such as customer M&A or new executive announcements that can lead to risks, new opportunities or even just an occasion to deepen our relationship. "</span></span></span></p>
              <div className="flex items-center gap-3">
                <p className="font-['Roboto:Bold',sans-serif] font-bold text-[#383838] text-[16px] italic">Nick Meta, <span className="font-normal text-[#64748b]">CEO of GainSight</span></p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full max-w-[540px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-[40px] shadow-[0px_32px_64px_-16px_rgba(29,140,248,0.12)] border border-[#f0f7ff]"
            >
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="bg-[#eff6ff] rounded-full size-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="size-10 text-[#1d8cf8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#383838]">Request Sent!</h3>
                  <p className="text-[#666]">We've received your request. Check your inbox to activate your trial.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">First Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John"
                        className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1] hover-input-focus"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Last Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Doe"
                        className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Your Email</label>
                    <input
                      required
                      type="email"
                      placeholder="support@figmamake.com"
                      className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1] hover-input-focus"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Company Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1] hover-input-focus"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Preferred Date</label>
                      <input
                        required
                        type="date"
                        className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all text-[#64748b]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">Preferred Time</label>
                      <input
                        required
                        type="time"
                        className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all text-[#64748b]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider ml-1 text-[#383838]">how Intellizence can help you?</label>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={2}
                      className="w-full px-5 py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1d8cf8]/20 focus:border-[#1d8cf8] transition-all placeholder:text-[#cbd5e1] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1d8cf8] text-white font-bold py-5 rounded-2xl shadow-[0px_12px_24px_-8px_rgba(29,140,248,0.5)] hover:bg-[#1a7ee0] hover:shadow-[0px_16px_32px_-8px_rgba(29,140,248,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group hover-lift hover-glow"
                  >
                    Get Started
                    <Send className="size-4 transition-transform group-hover:translate-x-1 hover-icon-bounce" />
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
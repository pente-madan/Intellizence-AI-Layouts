import React, { useState } from "react";
import { CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Layout3() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-br from-[#f8fbff] via-[#eff6ff] to-[#dbeafe] relative w-full overflow-hidden pt-20 pb-8" style={{ minHeight: "600px" }}>
      {/* Enhanced Background Accents */}
      <div className="absolute bg-[rgba(29,140,248,0.08)] blur-[150px] right-[-150px] rounded-full size-[700px] top-[-150px] pointer-events-none" />
      <div className="absolute bg-[rgba(219,234,254,0.4)] blur-[120px] left-[-250px] rounded-full size-[600px] bottom-[-150px] pointer-events-none" />
      <div className="absolute bg-[rgba(29,140,248,0.03)] blur-[100px] left-[50%] rounded-full size-[400px] top-[50%] pointer-events-none" />

      <div className="relative mx-auto px-6 max-w-[1400px]">
        
        {/* CTA-Focused Header Section */}
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d8cf8] to-[#0ea5e9] text-white px-6 py-3 rounded-full shadow-lg"
          >
            <Zap className="size-4" />
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[13px] tracking-[1.2px] uppercase">Ready to Transform Your Business?</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#383838] text-[56px] leading-[1.1] max-w-[900px] mx-auto"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Take the Last Step: Experience Intellizence Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Roboto:Regular',sans-serif] text-[#555] text-xl leading-relaxed max-w-[700px] mx-auto"
          >
            Join thousands of businesses making smarter decisions with AI-powered market intelligence. Choose your path forward.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center">

          {/* CTA Button */}
          <div className="flex items-center justify-center">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="bg-gradient-to-br from-[#1d8cf8] to-[#0ea5e9] rounded-full size-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="size-12 text-white" />
                  </div>
                  <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#383838] text-3xl">
                    Demo Scheduled!
                  </h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-[#666] text-lg">
                    We've received your request. Our team will contact you shortly to confirm your demo.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => { setIsSubmitted(false); }}
                      className="text-[#1d8cf8] font-bold hover:underline"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Single CTA Button */
                <button
                  type="button"
                  className="bg-[#1d8cf8] flex items-center justify-center gap-2 px-[32px] py-[20px] rounded-[12px] cursor-pointer transition-all duration-200 ease-out hover:bg-[#1772cc] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1d8cf8]/40 active:translate-y-0 group"
                >
                  <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[24px] text-[18px] text-white whitespace-nowrap">
                    Schedule a Demo
                  </p>
                  <ArrowRight className="size-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              )}
          </div>

        </div>
      </div>
    </div>
  );
}

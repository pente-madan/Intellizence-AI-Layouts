import React, { useState } from "react";
import { CheckCircle2, Zap, ArrowRight, Sparkles, Clock, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

export function Layout4() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-br from-[#f8fbff] via-white to-[#eff6ff] relative w-full overflow-hidden py-24 flex items-center justify-center" style={{ minHeight: "700px" }}>
      {/* Enhanced Background Accents */}
      <div className="absolute bg-[rgba(29,140,248,0.06)] blur-[140px] right-[50px] rounded-full size-[700px] top-[-120px] pointer-events-none" />
      <div className="absolute bg-[rgba(219,234,254,0.4)] blur-[100px] left-[-100px] rounded-full size-[600px] bottom-[-120px] pointer-events-none" />
      
      <div className="relative mx-auto px-6 max-w-[720px]">
        
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d8cf8] to-[#0ea5e9] text-white px-6 py-2.5 rounded-full ring-2 ring-[#1d8cf8]/20">
                  <Sparkles className="size-4 text-white" strokeWidth={2.5} />
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[11px] tracking-[1px] uppercase">14-Day Free Trial</span>
                </div>
              </motion.div>

              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#1d8cf8]/40 via-[#0ea5e9]/20 to-[#1d8cf8]/30 shadow-[0px_30px_90px_0px_rgba(0,0,0,0.12)]">
                <div className="relative bg-white/70 backdrop-blur-2xl rounded-[30px] overflow-hidden">
                
                {/* Card Background Accents */}
                <div className="absolute bg-[rgba(239,246,255,0.7)] blur-[100px] right-[-80px] rounded-full size-[300px] top-[-80px] pointer-events-none" />
                <div className="absolute bg-[rgba(29,140,248,0.05)] blur-[80px] left-[-60px] rounded-full size-[250px] bottom-[-60px] pointer-events-none" />
                
                <div className="relative px-14 pt-16 pb-12 space-y-10">
                  {/* Header Section */}
                  <div className="text-center space-y-5">
                    <h2 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#1a1a1a] text-[40px] leading-[1.15] tracking-[-0.02em]">
                      Start Your Free Trial
                    </h2>
                    
                    <p className="font-['Roboto:Regular',sans-serif] text-[#555] text-[17px] leading-[1.65] max-w-[500px] mx-auto">
                      Experience the full power of AI-driven market intelligence. No credit card required, cancel anytime.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="space-y-3.5 pt-6 border-t border-gray-200/60 flex flex-col items-center">
                    <div className="flex items-center gap-3.5 group/item">
                      <div className="bg-[#1d8cf8]/10 rounded-full p-1.5 group-hover/item:bg-[#1d8cf8]/15 transition-colors">
                        <CheckCircle2 className="size-4 text-[#1d8cf8]" strokeWidth={2.5} />
                      </div>
                      <span className="font-['Roboto:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">Instant access to all premium features</span>
                    </div>
                    <div className="flex items-center gap-3.5 group/item">
                      <div className="bg-[#1d8cf8]/10 rounded-full p-1.5 group-hover/item:bg-[#1d8cf8]/15 transition-colors">
                        <Shield className="size-4 text-[#1d8cf8]" strokeWidth={2.5} />
                      </div>
                      <span className="font-['Roboto:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">No payment method required to start</span>
                    </div>
                    <div className="flex items-center gap-3.5 group/item">
                      <div className="bg-[#1d8cf8]/10 rounded-full p-1.5 group-hover/item:bg-[#1d8cf8]/15 transition-colors">
                        <Star className="size-4 text-[#1d8cf8]" strokeWidth={2.5} />
                      </div>
                      <span className="font-['Roboto:Regular',sans-serif] text-[#555] text-[15px] leading-[1.5]">Cancel anytime with just one click</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-[#1d8cf8] to-[#0ea5e9] flex items-center justify-center gap-3 px-10 py-6 rounded-[14px] cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-[#1d8cf8]/40 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] group relative overflow-hidden"
                    >
                      {/* Button Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <p className="relative font-['Poppins:Medium',sans-serif] leading-[24px] text-[19px] text-white font-semibold whitespace-nowrap">
                        Start Free Trial
                      </p>
                      <ArrowRight className="relative size-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2.5} />
                    </button>
                    
                    <p className="text-center font-['Roboto:Regular',sans-serif] text-[#888] text-[13px]">
                      No credit card required • Full access for 14 days
                    </p>
                  </div>

                  {/* Social Proof */}
                  <div className="relative bg-gradient-to-r from-[#eff6ff] to-[#dbeafe]/50 rounded-[18px] p-5 text-center border border-[#1d8cf8]/10">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="size-8 rounded-full bg-gradient-to-br from-[#1d8cf8] to-[#0ea5e9] ring-2 ring-white flex items-center justify-center">
                          <Star className="size-4 text-white" fill="white" strokeWidth={0} />
                        </div>
                        <div className="size-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#1d8cf8] ring-2 ring-white flex items-center justify-center">
                          <Star className="size-4 text-white" fill="white" strokeWidth={0} />
                        </div>
                        <div className="size-8 rounded-full bg-gradient-to-br from-[#1d8cf8] to-[#0ea5e9] ring-2 ring-white flex items-center justify-center">
                          <Star className="size-4 text-white" fill="white" strokeWidth={0} />
                        </div>
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] text-[#1d8cf8] text-[14px] font-semibold">
                        Join 5,000+ companies using Intellizence
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[32px] shadow-[0px_30px_90px_0px_rgba(0,0,0,0.12)] overflow-hidden border border-white/60 px-14 py-16">
              {/* Success Background Accents */}
              <div className="absolute bg-[rgba(16,185,129,0.1)] blur-[100px] right-[-60px] rounded-full size-[250px] top-[-60px] pointer-events-none" />
              <div className="absolute bg-[rgba(5,150,105,0.08)] blur-[80px] left-[-60px] rounded-full size-[220px] bottom-[-60px] pointer-events-none" />
              
              <div className="relative text-center space-y-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full size-28 mx-auto shadow-2xl shadow-[#10b981]/30 ring-8 ring-[#10b981]/10"
                >
                  <CheckCircle2 className="size-14 text-white" strokeWidth={2.5} />
                </motion.div>
                
                <div className="space-y-4">
                  <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#1a1a1a] text-[44px] leading-[1.15] tracking-[-0.02em]">
                    Trial Activated!
                  </h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-[#555] text-[18px] leading-[1.65] max-w-[480px] mx-auto">
                    Welcome to Intellizence! Check your email for login credentials and get started in minutes.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#d1fae5] to-[#a7f3d0] rounded-[18px] p-5 border border-[#10b981]/20">
                  <p className="font-['Roboto:Regular',sans-serif] text-[#059669] text-[15px] font-semibold">
                    🎉 Your 14-day free trial is now active
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => { setIsSubmitted(false); }}
                    className="text-[#1d8cf8] font-['Roboto:Regular',sans-serif] font-semibold text-[15px] hover:underline transition-all"
                  >
                    Start Another Trial
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

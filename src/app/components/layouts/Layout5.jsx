import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Layout5() {
  const points = [
    {
      title: "Real-time Signals",
      description: "Monitor over 100+ critical event signals including M&A, funding, and leadership changes."
    },
    {
      title: "AI-Powered Curation",
      description: "Proprietary NLP engine filters noise to deliver high-fidelity, actionable intelligence."
    },
    {
      title: "Seamless Integration",
      description: "Connect intelligence directly into your CRM, Slack, or existing workflows."
    }
  ];

  return (
    <div className="bg-white relative w-full overflow-hidden py-24">
      {/* Background decoration matching previous layouts */}
      <div className="absolute bg-[rgba(239,246,255,0.4)] blur-[120px] right-[-100px] rounded-full size-[500px] top-[10%] pointer-events-none" />

      <div className="relative mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full lg:max-w-[560px]"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#1d8cf8]/10 rounded-[40px] blur-2xl transition-all duration-500 group-hover:bg-[#1d8cf8]/15" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/50">
                <ImageWithFallback
                  src="https://res.cloudinary.com/drhyerkn7/image/upload/v1778745314/ChatGPT_Image_May_14_2026_01_24_44_PM_epckzg.png"
                  alt="Market Intelligence Dashboard"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#eff6ff] border-[#dbeafe] border-[0.889px] px-4 py-2 rounded-full"
            >
              <div className="bg-[#1d8cf8] opacity-[0.67] rounded-full size-2" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[#1d8cf8] text-[12px] tracking-[1.5px] uppercase">Market Leader</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#383838] text-[48px] leading-[1.1]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >Market Intelligence</motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-['Roboto:Regular',sans-serif] text-[#555] text-lg leading-relaxed max-w-[540px]"
              >Stay informed about emerging industry trends & issues, disruptions, macro-economic indicators, and Government & Regulatory policy changes in a rapidly changing business environment.&nbsp;&nbsp;Make fact-based, objective, and timely decisions.            </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-x-8 gap-y-6"
            >
              {[
                { left: "CXOs", right: "Market Intelligence" },
                { left: "Corporate Strategy", right: "Competitive Intelligence" },
                { left: "Innovation", right: "Market Research" }
              ].map((row, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3 group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="size-5 text-[#1d8cf8] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-['Roboto:Bold',sans-serif] font-bold text-[#383838] text-[16px]">
                      {row.left}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="size-5 text-[#1d8cf8] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-['Roboto:Bold',sans-serif] font-bold text-[#383838] text-[16px]">
                      {row.right}
                    </h3>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                type="button"
                className="bg-[#1d8cf8] px-8 py-4 rounded-xl text-white font-bold text-[16px] transition-all duration-300 hover:bg-[#1a7ee0] hover:shadow-lg hover:shadow-[#1d8cf8]/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group hover-lift hover-glow"
              >
                Schedule a demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 hover-icon-bounce" />
              </button>
              <button
                type="button"
                className="border-2 border-[#1d8cf8] px-8 py-4 rounded-xl text-[#1d8cf8] font-bold text-[16px] transition-all duration-300 hover:bg-[#eff6ff] hover:-translate-y-0.5 active:translate-y-0 hover-lift"
              >
                Start a free trial
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
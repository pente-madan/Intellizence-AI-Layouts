import React from "react";
import { Zap, Database, CheckCircle2, ArrowRight, Sparkles, Box, ShieldCheck, ZapOff } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Layout6() {
  const signalPointers = [
    "Proprietary NLP monitoring of 10,000+ sources",
    "Real-time alerts for executive & leadership changes",
    "Detection of stealth-mode project launches",
    "Social sentiment & viral brand momentum tracking"
  ];

  const datasetPointers = [
    "Deep technographic stack analysis for 5M+ companies",
    "Verified B2B contact data with 95%+ accuracy",
    "Historical growth & headcount trend analysis",
    "Global firmographics across 200+ countries"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white overflow-hidden border-t border-gray-100">
      <div className="flex flex-col lg:flex-row relative">

        {/* Decorative Divider (Desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-gray-200 to-transparent z-20 -translate-x-1/2" />

        {/* Left Side: New Signals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex-1 relative flex flex-col p-8 lg:p-16 xl:p-24 bg-white overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-50/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -left-24 size-96 bg-blue-100/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-4 py-1.5 rounded-full shadow-xs">
              <Zap className="size-4 text-[#1d8cf8] fill-[#1d8cf8]/10" />
              <span className="font-bold text-[#1d8cf8] text-[12px] tracking-[0.1em] uppercase font-['Inter',sans-serif]">Intelligence Stream</span>
            </motion.div>

            {/* Heading & Description */}
            <div className="space-y-6">
              <motion.h2 variants={itemVariants} className="text-[44px] lg:text-[52px] font-bold text-black leading-[1.05] font-['Open_Sans',sans-serif] tracking-tight">
                New Signals
              </motion.h2>
              <motion.p variants={itemVariants} className="text-[#666] text-lg lg:text-xl leading-relaxed max-w-[540px] font-['Roboto',sans-serif]">
                Stay ahead of the market with AI-driven event detection. Transform noise into high-fidelity signals that drive your next strategic move.
              </motion.p>
            </div>

            {/* Pointers List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-y-4 py-2">
              {signalPointers.map((pointer, idx) => (
                <div key={idx} className="flex items-start gap-3 group hover-list-slide">
                  <div className="mt-1 flex-shrink-0 size-6 rounded-lg bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-blue-200 transition-colors">
                    <Sparkles className="size-3.5 text-[#1d8cf8] hover-icon-bounce" />
                  </div>
                  <span className="text-[#444] text-[15px] font-['Roboto',sans-serif] leading-tight group-hover:text-black transition-colors">
                    {pointer}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex pt-2">
              <button className="group relative bg-[#1d8cf8] px-8 py-4 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0 hover-lift hover-glow">
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 hover-icon-bounce" />
                </span>
              </button>
            </motion.div>

            {/* Visual Enhancement: Image Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              className="relative mt-12 group"
            >

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/80 bg-white">

              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Datasets */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex-1 relative flex flex-col p-8 lg:p-16 xl:p-24 bg-[#1d8cf8] overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute bottom-0 right-0 w-full h-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 size-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full shadow-sm">
              <Database className="size-4 text-white fill-white/10" />
              <span className="font-bold text-white text-[12px] tracking-[0.1em] uppercase font-['Inter',sans-serif]">Data Repository</span>
            </motion.div>

            {/* Heading & Description */}
            <div className="space-y-6">
              <motion.h2 variants={itemVariants} className="text-[44px] lg:text-[52px] font-bold text-white leading-[1.05] font-['Open_Sans',sans-serif] tracking-tight">
                Deep Datasets
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-[540px] font-['Roboto',sans-serif]">
                Access a multi-dimensional vault of company data. From tech stacks to financial health, our datasets provide the foundation for precision targeting.
              </motion.p>
            </div>

            {/* Pointers List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-y-4 py-2">
              {datasetPointers.map((pointer, idx) => (
                <div key={idx} className="flex items-start gap-3 group hover-list-slide">
                  <div className="mt-1 flex-shrink-0 size-6 rounded-lg bg-white/10 shadow-sm flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors">
                    <Box className="size-3.5 text-white hover-icon-bounce" />
                  </div>
                  <span className="text-white/90 text-[15px] font-['Roboto',sans-serif] leading-tight group-hover:text-white transition-colors">
                    {pointer}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="flex pt-2">
              <button className="group relative bg-white px-8 py-4 rounded-2xl text-[#1d8cf8] font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 hover-lift">
                <span className="relative flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 hover-icon-bounce" />
                </span>
              </button>
            </motion.div>

            {/* Visual Enhancement: Image Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="relative mt-12 group"
            >


            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trust Micro-Interactions */}

    </section>
  );
}
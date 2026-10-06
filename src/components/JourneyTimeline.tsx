import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowUpRight, CheckCircle } from 'lucide-react';
import { TIMELINE } from '../data/timeline';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-tech-grid relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>06 — VERIFIED MILESTONES &amp; JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ENGINEERING TIMELINE
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            From algorithmic procedural engines to planetary digital twins and autonomous agent systems.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Beacon Node */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full border-2 bg-[#090c14] group-hover:scale-125 transition-transform duration-200"
                style={{ borderColor: item.categoryColor }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.categoryColor }}
                />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-[#0d111a] border border-white/10 group-hover:border-sky-500/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                      {item.year} {item.quarter ? `• ${item.quarter}` : ''}
                    </span>
                    <span
                      className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold"
                      style={{
                        borderColor: `${item.categoryColor}40`,
                        color: item.categoryColor,
                        backgroundColor: `${item.categoryColor}15`
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>{item.link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400/90 mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    KEY DELIVERABLES:
                  </span>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs font-mono text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

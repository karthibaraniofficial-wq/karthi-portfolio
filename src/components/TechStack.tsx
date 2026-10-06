import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Globe, Layers, Server, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

interface TechStackProps {
  onPlayClick?: () => void;
}

export const TechStack: React.FC<TechStackProps> = ({ onPlayClick }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const activeCategory =
    SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="stack" className="py-24 bg-tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-400 text-xs font-mono tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>04 — VERIFIED TECHNICAL FABRIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ENGINEERING STACK
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Modular, typed, and battle-tested across production web applications, multimodal pipelines, and high-concurrency async services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-white/[0.08] pb-4">
          {SKILL_CATEGORIES.map(cat => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onPlayClick?.();
                  setActiveCategoryId(cat.id);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-lg shadow-sky-500/20'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8 flex items-center justify-between">
          <div className="text-xs sm:text-sm font-mono text-slate-300">
            <strong className="text-sky-300 font-semibold">{activeCategory.title}:</strong>{' '}
            {activeCategory.description}
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ALL SKILLS AUDITED</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCategory.skills.map((skill, sIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sIdx * 0.05 }}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors font-mono">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">
                    PRODUCTION USE CASE
                  </span>
                  <p className="text-xs text-slate-300 font-mono mt-1 leading-relaxed">
                    {skill.useCase}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>STATUS: {skill.experience}</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>VERIFIED</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

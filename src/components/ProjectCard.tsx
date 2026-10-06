import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, Cpu, Check } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onPlayClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPlayClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (type: Project['statusType']) => {
    switch (type) {
      case 'live':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'competition':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'active':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'research':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <motion.div
      id={`project-${project.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#0c1017] border border-white/10 hover:border-sky-500/40 p-6 lg:p-7 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-sky-950/30"
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              {project.sysId}
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span
            className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold flex items-center space-x-1.5 ${getStatusColor(
              project.statusType
            )}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Project Title & Tagline */}
        <div className="mt-5">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-sky-400/90 mt-1">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mt-5 py-3 border-y border-white/[0.06]">
          {project.metrics.map((metric, mIdx) => (
            <div key={mIdx} className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">
                {metric.label}
              </span>
              <span className="text-xs font-mono font-bold text-slate-200 mt-0.5 block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Architecture Highlights Toggle */}
        <div className="mt-4">
          <button
            onClick={() => {
              onPlayClick?.();
              setIsExpanded(prev => !prev);
            }}
            className="flex items-center justify-between w-full text-left py-1 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
          >
            <span className="flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>{isExpanded ? 'Hide Architecture Specs' : 'View Architecture Specs'}</span>
            </span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-3 pt-3 border-t border-white/[0.06] space-y-2"
              >
                {project.architectureHighlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs font-mono text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Area: Tags & Action Links */}
      <div className="mt-6 pt-5 border-t border-white/[0.07]">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-[10px] font-mono text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LIVE APP"
              className="inline-flex items-center justify-center space-x-2 flex-1 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-sky-500/20"
            >
              <span>Launch Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="px-3 py-2 text-[11px] font-mono text-slate-500 italic">
              Production Stage
            </div>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

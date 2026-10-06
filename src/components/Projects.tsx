import React, { useState, useMemo } from 'react';
import { Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onPlayClick?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onPlayClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI / Autonomous Agents', 'Geospatial & 3D', 'Systems & Tools'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 bg-tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>02 — ACTIVE SYSTEMS REGISTRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              Verified production platforms, planetary simulations, and autonomous agent systems.
              Engineered with strict types, deterministic contracts, and observable telemetry.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  onPlayClick?.();
                  setActiveCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onPlayClick={onPlayClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';

export const AboutIdentity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'dimensions'>('philosophy');

  const dimensions = [
    { name: 'Multimodal AI & VLMs', rating: 95, metric: 'Gemini 2.0 Live / SAR Fusion' },
    { name: 'Full-Stack Architecture', rating: 96, metric: 'TypeScript 5.9 / FastAPI Async' },
    { name: '3D Graphics & Shaders', rating: 90, metric: 'Three.js / 60 FPS GLSL' },
    { name: 'Autonomous Agent DAGs', rating: 94, metric: 'Deterministic SLA Routing' },
    { name: 'Systems & Telemetry', rating: 92, metric: 'Linux Sandboxes / WebSockets' },
    { name: 'Procedural Simulation', rating: 88, metric: 'Godot 4 / Deterministic Physics' }
  ];

  const tenets = [
    {
      num: '01',
      title: 'Deterministic Over Chaotic',
      desc: 'LLMs require explicit mathematical and physical boundary guardrails. In EarthMind, thermodynamic laws prevent runaway unphysical hallucinations.'
    },
    {
      num: '02',
      title: 'Observable by Default',
      desc: 'If telemetry is not streaming, you are operating blind. Every system logs latency, confidence scores, and raw scene provenance IDs.'
    },
    {
      num: '03',
      title: 'Built for Production',
      desc: 'Ambition without verified deployment is only speculation. Every system featured here is active, verified with HTTP 200 checks, and running on edge infrastructure.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#080b12] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-wider mb-4">
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span>DEVELOPER IDENTITY &amp; CORE TENETS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHO I AM
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            I engineer AI-powered systems at the intersection of machine intelligence, real-time 3D graphics, and resilient full-stack architecture.
            My work focuses on turning complex technical problems—such as cross-spectral satellite radar fusion and autonomous municipal triage—into dependable, production-grade applications.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-2 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'philosophy'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            ENGINEERING TENETS
          </button>
          <button
            onClick={() => setActiveTab('dimensions')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'dimensions'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            TECHNICAL DIMENSIONS
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'philosophy' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tenets.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-sky-400/40 block mb-2">
                    {t.num}
                  </span>
                  <h3 className="text-base font-bold text-white font-mono">{t.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>CORE PRINCIPLE</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dimensions.map((dim, dIdx) => (
              <div
                key={dIdx}
                className="p-4 rounded-2xl bg-[#0c101a] border border-white/10 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-white font-bold">{dim.name}</span>
                  <span className="text-sky-300 font-semibold">{dim.rating}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden mb-2">
                  <div
                    style={{ width: `${dim.rating}%` }}
                    className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400">{dim.metric}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

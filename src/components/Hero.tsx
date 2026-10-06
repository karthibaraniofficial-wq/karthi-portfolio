import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Globe, Cpu, Eye, Network, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCommandPalette: () => void;
  onPlayClick?: () => void;
}

interface CoreNode {
  id: string;
  name: string;
  label: string;
  tag: string;
  x: number; // percentage (-50 to 50 relative to center)
  y: number;
  icon: React.ReactNode;
  specs: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommandPalette, onPlayClick }) => {
  const [activeNode, setActiveNode] = useState<CoreNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const tiltY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const nodes: CoreNode[] = [
    {
      id: 'gemini',
      name: 'Gemini 2.0 Live',
      label: 'MULTIMODAL VOICE & VLM',
      tag: 'LOW-LATENCY COGNITION',
      x: 0,
      y: -130,
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
      specs: 'Bidirectional audio streams & VLM spatial coordinate grounding'
    },
    {
      id: 'vision',
      name: 'Computer Vision',
      label: 'CV & HAZARD GRADING',
      tag: 'OPENCV + CONVNET',
      x: -160,
      y: -60,
      icon: <Eye className="w-4 h-4 text-indigo-400" />,
      specs: 'Automated 1-10 severity index, pavement fracture detection'
    },
    {
      id: 'agents',
      name: 'Autonomous DAGs',
      label: 'AGENT DISPATCH CORE',
      tag: 'PYDANTIC SCHEMAS',
      x: 160,
      y: -60,
      icon: <Network className="w-4 h-4 text-emerald-400" />,
      specs: '6-Agent isolated event loop with dynamic SLA calculation'
    },
    {
      id: 'geospatial',
      name: 'Geospatial Radar',
      label: 'SAR & OPTICAL FUSION',
      tag: 'SENTINEL-1/2 + NISAR',
      x: -150,
      y: 90,
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      specs: 'All-weather monsoon cloud penetration & Turf.js spatial bounds'
    },
    {
      id: 'engine',
      name: 'Three.js 60FPS',
      label: 'PLANETARY DIGITAL TWIN',
      tag: 'GLSL RAYLEIGH SHADERS',
      x: 150,
      y: 90,
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      specs: 'Atmospheric light scattering, day/night terminators, cloud layers'
    },
    {
      id: 'guardrails',
      name: 'Biophysical Laws',
      label: 'DETERMINISTIC GUARD',
      tag: 'ENERGY CONSERVATION',
      x: 0,
      y: 140,
      icon: <ShieldCheck className="w-4 h-4 text-teal-400" />,
      specs: 'Thermodynamic bounds preventing unphysical AI hallucinations'
    }
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glow spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Header Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 text-center z-10">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wide mb-6 backdrop-blur-md shadow-sm shadow-sky-950"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM KERNEL // VERSION 2026.4</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">PLANETARY &amp; DEFENSE AI</span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white font-sans max-w-5xl mx-auto"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
            KARTHIKEYAN M
          </span>
        </motion.h1>

        {/* Sub-identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 flex items-center justify-center space-x-2 text-sm sm:text-base font-mono font-medium text-sky-400 tracking-wider uppercase"
        >
          <span>AI / ML DEVELOPER</span>
          <span className="text-slate-600">•</span>
          <span>FULL-STACK BUILDER</span>
          <span className="text-slate-600">•</span>
          <span>PRODUCT CREATOR</span>
        </motion.div>

        {/* Core Directive */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Building intelligent systems that turn ambitious ideas into verified production products.
          Specialized in multimodal foundation models, autonomous agent DAGs, and 3D geospatial digital twins.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={onPlayClick}
            data-cursor="PROJECTS"
            className="group relative inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold text-sm hover:bg-sky-400 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
          >
            <span>Explore Selected Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#flagship"
            onClick={onPlayClick}
            data-cursor="FLAGSHIP"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-white/10 hover:border-sky-500/40 transition-all duration-200 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-sky-400" />
            <span>EarthMind Architecture</span>
          </a>

          <button
            onClick={() => {
              onPlayClick?.();
              onOpenCommandPalette();
            }}
            data-cursor="EXECUTE"
            className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono border border-white/10 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>Open Command [⌘K]</span>
          </button>
        </motion.div>
      </div>

      {/* Interactive AI Core Visualization */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: 1000
        }}
        className="relative max-w-4xl mx-auto w-full my-12 px-4 flex items-center justify-center min-h-[380px] z-10"
      >
        {/* SVG Neural Connections */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-250 -200 500 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Lines from Central Core to each satellite node */}
          {nodes.map(node => (
            <g key={node.id}>
              <line
                x1="0"
                y1="0"
                x2={node.x}
                y2={node.y}
                stroke="url(#lineGrad)"
                strokeWidth={activeNode?.id === node.id ? 2.5 : 1.2}
                strokeDasharray="4 4"
                className="transition-all duration-300"
              />
              {/* Animated particle pulse along line */}
              <circle
                r={activeNode?.id === node.id ? 3 : 2}
                fill="#38bdf8"
                filter="url(#glow)"
              >
                <animateMotion
                  path={`M 0 0 L ${node.x} ${node.y}`}
                  dur={`${3 + Math.abs(node.x) * 0.01}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Central subtle radial rings */}
          <circle cx="0" cy="0" r="42" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeDasharray="3 3" />
        </svg>

        {/* Central "AI CORE" Orb */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="group relative flex items-center justify-center w-28 h-28 rounded-full bg-[#0d121f] border-2 border-sky-400/50 shadow-2xl shadow-sky-500/25 backdrop-blur-xl cursor-pointer"
          >
            {/* Pulsing glow halo */}
            <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl animate-pulse" />

            <div className="relative text-center p-2 z-10">
              <Cpu className="w-6 h-6 text-sky-400 mx-auto mb-1 group-hover:rotate-45 transition-transform duration-500" />
              <span className="block text-[11px] font-mono font-bold text-white tracking-widest uppercase">
                AI CORE
              </span>
              <span className="block text-[8px] font-mono text-sky-400 uppercase tracking-tight">
                SYNCHRONIZED
              </span>
            </div>
          </motion.div>
        </div>

        {/* Satellite Nodes */}
        {nodes.map(node => {
          const isSelected = activeNode?.id === node.id;
          return (
            <motion.div
              key={node.id}
              style={{
                position: 'absolute',
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setActiveNode(node);
                onPlayClick?.();
              }}
              onMouseLeave={() => setActiveNode(null)}
              className="z-20 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  isSelected
                    ? 'bg-sky-950/90 border-sky-400 shadow-lg shadow-sky-500/30'
                    : 'bg-[#0f1422]/80 border-white/10 hover:border-sky-500/40 text-slate-300'
                }`}
              >
                <div className="p-1 rounded bg-white/5">{node.icon}</div>
                <div className="text-left">
                  <div className="text-[11px] font-mono font-semibold tracking-tight text-white flex items-center space-x-1">
                    <span>{node.name}</span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">
                    {node.tag}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Active Node Floating Spec Card (If hovered) */}
      <div className="max-w-md mx-auto w-full px-4 min-h-[52px] z-10">
        {activeNode ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/40 backdrop-blur-xl text-center shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2 text-xs font-mono text-sky-300 font-bold">
              <span>NODE: {activeNode.name}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400">{activeNode.label}</span>
            </div>
            <p className="text-[11px] text-slate-300 font-mono mt-0.5">{activeNode.specs}</p>
          </motion.div>
        ) : (
          <div className="text-center text-[11px] font-mono text-slate-400">
            [ HOVER ANY NEURAL NODE TO INSPECT LIVE ARCHITECTURE SUBSYSTEM ]
          </div>
        )}
      </div>

      {/* Bottom Live System Telemetry HUD Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 z-10">
        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-semibold">TELEMETRY HUD:</span>
            <span className="text-emerald-400">NOMINAL</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span>MODEL: <strong className="text-slate-200">GEMINI-2.0-LIVE</strong></span>
            <span>SHADERS: <strong className="text-slate-200">60 FPS WEBGL</strong></span>
            <span>AGENTS: <strong className="text-slate-200">6 DAG ACTIVE</strong></span>
            <span>LATENCY: <strong className="text-sky-400">18ms</strong></span>
          </div>
          <div className="text-right text-slate-400 hidden md:block">
            SIH26167 // SCIENCE EXPO 2026 // PRODUCTION LIVE
          </div>
        </div>
      </div>
    </section>
  );
};

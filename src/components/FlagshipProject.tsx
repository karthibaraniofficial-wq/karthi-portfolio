import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, Cpu, Zap, Activity, CheckCircle, Database, Layers } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ArchNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  specs: {
    inputs: string;
    processing: string;
    outputs: string;
    guardrail: string;
    latency: string;
  };
}

export const FlagshipProject: React.FC = () => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(2);
  const [simRunning, setSimRunning] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  const archNodes: ArchNode[] = [
    {
      id: 'sources',
      step: '01',
      title: 'DATA SOURCES',
      subtitle: 'Multi-Sensor Planetary Ingestion',
      icon: <Database className="w-5 h-5 text-sky-400" />,
      specs: {
        inputs: 'Copernicus Sentinel-1/2, NOAA SST, ISRO-NASA NISAR L-band & S-band',
        processing: 'Radiometric calibration, cloud masking, coordinate re-projection (EPSG:4326)',
        outputs: 'Normalized biophysical spectral tensors (NDVI, NDWI, Backscatter dB)',
        guardrail: 'Schema validation rejecting corrupted HDF5/GeoTIFF raster frames',
        latency: '34ms stream ingestion'
      }
    },
    {
      id: 'ingestion',
      step: '02',
      title: 'INGESTION & COGNITION',
      subtitle: 'FastAPI Stream Preprocessing',
      icon: <Activity className="w-5 h-5 text-indigo-400" />,
      specs: {
        inputs: 'Continuous sensor feeds + operator natural voice queries',
        processing: 'Audio buffering, temporal downsampling (LTTB algorithm), tensor slicing',
        outputs: 'Low-latency token stream and spatial coordinate bounding tuples',
        guardrail: 'Rate limiting and connection health heartbeat monitors',
        latency: '18ms buffer processing'
      }
    },
    {
      id: 'orchestrator',
      step: '03',
      title: 'AI ORCHESTRATOR',
      subtitle: 'DAG Dispatcher & Agent Routing',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      specs: {
        inputs: 'Preprocessed spatial vectors and conversational operator intents',
        processing: 'Decoupled DAG traversal routing between climate, SAR radar, and atmospheric agents',
        outputs: 'Structured execution plan with dynamic SLA timeout budgets',
        guardrail: 'Deterministic fallback policies preventing unhandled microservice hangs',
        latency: '42ms traversal'
      }
    },
    {
      id: 'model-layer',
      step: '04',
      title: 'MODEL LAYER',
      subtitle: 'Google Gemini 2.0 Live & VLMs',
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      specs: {
        inputs: 'Context window with multi-spectral embeddings & biophysical telemetry',
        processing: 'Bidirectional low-latency voice synthesis & vision-language region grounding',
        outputs: 'Conversational audio response + localized geospatial perturbation deltas',
        guardrail: 'Grounding check against verifiable Copernicus raster coordinates',
        latency: '< 180ms conversational roundtrip'
      }
    },
    {
      id: 'validation',
      step: '05',
      title: 'VALIDATION & LAWS',
      subtitle: 'Thermodynamic Guardrails',
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      specs: {
        inputs: 'Generated simulation parameters (Delta T, albedo changes, heat fluxes)',
        processing: 'Conservation of energy solvers: Stefan-Boltzmann equilibrium & ocean thermal inertia',
        outputs: 'Clamped, mathematically consistent physical delta vectors',
        guardrail: 'Rejects 100% of runaway unphysical temperature/radiative hallucinations',
        latency: '12ms numerical check'
      }
    },
    {
      id: 'interface',
      step: '06',
      title: '3D TWIN INTERFACE',
      subtitle: 'Three.js 60 FPS GLSL Shaders',
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      specs: {
        inputs: 'Validated perturbation deltas + operator camera viewpoints',
        processing: 'Real-time GLSL fragment shaders: Rayleigh/Mie scattering & cloud deck shifts',
        outputs: 'Photorealistic planetary twin rendered at sustained 60 FPS in browser',
        guardrail: 'Adaptive level-of-detail (LOD) degradation for mobile GPUs',
        latency: '16.6ms per frame (60 FPS)'
      }
    }
  ];

  const simulations = [
    {
      title: 'Simulate +1.8°C Ocean Warming Anomaly',
      desc: 'Evaluate coral reef bleaching alerts across Great Barrier Reef with radiative flux constraints.',
      run: () => {
        setSimRunning(true);
        setSimOutput(null);
        setTimeout(() => {
          setSimOutput(
            `[EARTHMIND COGNITION ENGINE]\n` +
            `› Ingesting NOAA OISST v2.1 sea-surface temperature anomalies (+1.82°C detected)\n` +
            `› Gemini 2.0 Live: Assessing thermal stress index (Degree Heating Weeks: 8.4 DHW)\n` +
            `› Thermodynamic Guardrail: Radiative flux equilibrium verified (ΔQ = 4.2 W/m² ocean heat uptake)\n` +
            `› Three.js Shader Dispatch: Updating sea-surface thermal gradient texture & marine heatwave layer\n` +
            `› STATUS: 60 FPS Digital Twin rendered. Alert level: CRITICAL_BLEACHING_PROBABILITY_87%`
          );
          setSimRunning(false);
        }, 1200);
      }
    },
    {
      title: 'Monsoon Radar Swath Flood Grounding',
      desc: 'Fuse Sentinel-1 SAR backscatter with optical base to penetrate 95% cloud cover.',
      run: () => {
        setSimRunning(true);
        setSimOutput(null);
        setTimeout(() => {
          setSimOutput(
            `[EARTHMIND COGNITION ENGINE]\n` +
            `› Ingesting Copernicus Sentinel-1 C-Band SAR VV/VH polarization\n` +
            `› Cloud Penetration: 100% optical cloud cover bypassed via microwave radar\n` +
            `› Specular backscatter dip: -22.4dB mapped across 318 km² low-lying delta\n` +
            `› Spatial Bounding: Bounding polygon registered at [26.182°N, 91.748°E]\n` +
            `› STATUS: Verified inundated acreage dispatched to emergency responder HUD.`
          );
          setSimRunning(false);
        }, 1200);
      }
    }
  ];

  const activeNode = archNodes[selectedNodeIndex];

  return (
    <section id="flagship" className="relative py-24 bg-[#0a0d14] border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>01 — FLAGSHIP ARCHITECTURE DEEP-DIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              EARTHMIND
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              Planetary Environmental Intelligence Operating System &amp; 3D Digital Twin.
              Featured in <strong>Science Expo 2026 Edition</strong> and deployed live on Vercel.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <a
              href="https://earthmind.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LIVE APP"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-semibold text-xs tracking-wider uppercase hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/karthibaraniofficial-wq/EARTHMIND"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="SOURCE"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repo</span>
            </a>
          </div>
        </div>

        {/* Narrative Grid: Problem -> Architecture -> AI Engine -> Result */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">
              01 // THE PROBLEM
            </span>
            <h3 className="text-sm font-bold text-white mt-1">Fragmented Earth Data &amp; AI Hallucinations</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Standard planetary viewers lack physical modeling, while generic LLMs hallucinate impossible thermodynamic reactions when operators ask what-if climate questions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
              02 // THE ARCHITECTURE
            </span>
            <h3 className="text-sm font-bold text-white mt-1">Deterministic Data &amp; Shader Loop</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Decouples multimodal perception from 3D WebGL rendering through an immutable validation barrier enforcing conservation of energy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">
              03 // THE AI ENGINE
            </span>
            <h3 className="text-sm font-bold text-white mt-1">Google Gemini 2.0 Live Voice Copilot</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Natural conversational dialog with sub-180ms latency. Operators can speak naturally to query regional temperature shifts, sea ice levels, or radar swaths.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              04 // THE RESULT
            </span>
            <h3 className="text-sm font-bold text-white mt-1">60 FPS Planetary Digital Twin</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Photorealistic Rayleigh and Mie atmospheric scattering shaders running at a sustained 60 FPS directly inside the browser.
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Pipeline */}
        <div className="rounded-3xl bg-[#07090f] border border-white/10 p-6 lg:p-8 overflow-hidden shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
                SYSTEM PIPELINE TOPOLOGY
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any architecture node below to inspect payload contracts, guardrails, and latencies.
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE VERIFIED CONTRACTS</span>
            </div>
          </div>

          {/* Architecture Horizontal Steps */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
            {archNodes.map((node, index) => {
              const isSelected = selectedNodeIndex === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(index)}
                  className={`relative p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-sky-950/80 border-sky-400 shadow-lg shadow-sky-500/20'
                      : 'bg-white/[0.02] border-white/10 hover:border-sky-500/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      {node.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-black/40">{node.icon}</div>
                  </div>
                  <h4 className="text-xs font-mono font-bold text-white tracking-tight leading-tight">
                    {node.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-1 line-clamp-1">
                    {node.subtitle}
                  </p>
                  {isSelected && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-sky-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Node Spec Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-black/60 border border-sky-500/30 backdrop-blur-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-white/10 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    {activeNode.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                        STEP {activeNode.step}
                      </span>
                      <h3 className="text-lg font-bold text-white font-mono">{activeNode.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{activeNode.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs font-mono">
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-slate-500 mr-2">LATENCY:</span>
                    <span className="text-sky-300 font-bold">{activeNode.specs.latency}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>POLICY ENFORCED</span>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-1">
                    INPUT CONTRACTS &amp; INGESTION
                  </span>
                  <span className="text-slate-200">{activeNode.specs.inputs}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-1">
                    INTERNAL PROCESSING LOGIC
                  </span>
                  <span className="text-slate-200">{activeNode.specs.processing}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider mb-1">
                    OUTPUT SCHEMA &amp; DISPATCH
                  </span>
                  <span className="text-slate-200">{activeNode.specs.outputs}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                  <span className="text-emerald-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
                    DETERMINISTIC GUARDRAILS
                  </span>
                  <span className="text-emerald-200">{activeNode.specs.guardrail}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Simulation Sandbox */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  INTERACTIVE SIMULATION SANDBOX
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Execute sample real-world planetary anomalies to observe the full architecture loop in action.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {simulations.map((sim, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => sim.run()}
                    disabled={simRunning}
                    className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono transition-all disabled:opacity-50"
                  >
                    ▶ {sim.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulation Terminal Window */}
            {(simRunning || simOutput) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-xl bg-black border border-sky-500/30 font-mono text-xs text-sky-400 overflow-x-auto shadow-inner"
              >
                {simRunning ? (
                  <div className="flex items-center space-x-2 text-slate-400">
                    <span className="w-3 h-3 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
                    <span>Executing biophysical simulation pipeline and testing guardrails...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">
                    {simOutput}
                  </pre>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, Terminal, Play } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/lab';

interface AILabProps {
  onPlayClick?: () => void;
}

export const AILab: React.FC<AILabProps> = ({ onPlayClick }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(LAB_EXPERIMENTS[0].id);
  const [selectedInputIdx, setSelectedInputIdx] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeOutput, setActiveOutput] = useState<any>(LAB_EXPERIMENTS[0].sampleInputs[0].simulatedOutput);

  const currentExp = LAB_EXPERIMENTS.find(e => e.id === selectedExpId) || LAB_EXPERIMENTS[0];

  const handleSelectExp = (id: string) => {
    onPlayClick?.();
    setSelectedExpId(id);
    setSelectedInputIdx(0);
    const exp = LAB_EXPERIMENTS.find(e => e.id === id);
    if (exp) {
      setActiveOutput(exp.sampleInputs[0].simulatedOutput);
    }
  };

  const handleRunSample = (idx: number) => {
    onPlayClick?.();
    setSelectedInputIdx(idx);
    setIsRunning(true);
    setTimeout(() => {
      setActiveOutput(currentExp.sampleInputs[idx].simulatedOutput);
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="ai-lab" className="py-24 bg-[#090c13] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-400 text-xs font-mono tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>03 — EXPERIMENTAL RESEARCH WORKBENCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              AI LAB
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              Applied intelligence laboratory investigating multi-agent orchestration DAGs, cross-spectral SAR fusion, and biophysical guardrails.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-slate-500 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>RESEARCH ENVIRONMENT: ISOLATED KERNEL</span>
          </div>
        </div>

        {/* Experiment Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {LAB_EXPERIMENTS.map(exp => {
            const isSelected = exp.id === selectedExpId;
            return (
              <button
                key={exp.id}
                onClick={() => handleSelectExp(exp.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-400 shadow-lg shadow-indigo-950/40'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-sky-400">{exp.code}</span>
                  <span
                    className="text-[9px] font-mono uppercase px-2 py-0.5 rounded border"
                    style={{
                      borderColor: `${exp.statusColor}40`,
                      color: exp.statusColor,
                      backgroundColor: `${exp.statusColor}15`
                    }}
                  >
                    {exp.status}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-mono line-clamp-1">
                  {exp.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono mt-1 line-clamp-1">
                  {exp.domain}
                </p>
              </button>
            );
          })}
        </div>

        {/* Experiment Workbench Body */}
        <div className="rounded-3xl bg-[#06080e] border border-white/10 p-6 lg:p-8 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  [{currentExp.code}] {currentExp.domain}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">
                {currentExp.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
                {currentExp.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap lg:flex-col gap-3 justify-center min-w-[200px]">
              {currentExp.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-right">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">{m.name}</span>
                  <span className="text-sm font-mono font-bold text-sky-300">
                    {m.value} {m.unit || ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hypothesis & Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
              <span className="text-[10px] font-mono uppercase font-bold text-indigo-400 block mb-1">
                CORE HYPOTHESIS &amp; OBJECTIVE
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {currentExp.coreHypothesis}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] uppercase block">MODEL CORE</span>
                <span className="text-slate-200 font-medium">{currentExp.technicalSpecs.model}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] uppercase block">RUNTIME</span>
                <span className="text-slate-200 font-medium">{currentExp.technicalSpecs.runtime}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] uppercase block">BENCHMARK LATENCY</span>
                <span className="text-sky-300 font-bold">{currentExp.technicalSpecs.latency}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] uppercase block">CONFIDENCE / OVERLAP</span>
                <span className="text-emerald-400 font-bold">{currentExp.technicalSpecs.accuracyOrConfidence}</span>
              </div>
            </div>
          </div>

          {/* Interactive Benchmark Runner */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>INTERACTIVE REASONING RUNNER</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Select test scenario to execute inference pipeline:
              </span>
            </div>

            {/* Test Scenario Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {currentExp.sampleInputs.map((sample, idx) => {
                const isActive = selectedInputIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleRunSample(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      isActive
                        ? 'bg-sky-950/70 border-sky-400 shadow-md'
                        : 'bg-white/[0.02] border-white/10 hover:border-sky-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white font-mono flex items-center space-x-1.5">
                        <Play className="w-3 h-3 text-sky-400" />
                        <span>{sample.label}</span>
                      </span>
                      {isActive && <span className="text-[9px] font-mono text-sky-300 uppercase">ACTIVE</span>}
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono line-clamp-2">
                      "{sample.input}"
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Inference Result Terminal */}
            <div className="p-5 rounded-2xl bg-black border border-white/15 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-slate-500">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">INFERENCE EXECUTION OUTPUT</span>
                </div>
                <div className="flex items-center space-x-3 text-[11px]">
                  <span>LATENCY: <strong className="text-sky-300">{activeOutput?.executionTimeMs}ms</strong></span>
                  <span>CONFIDENCE: <strong className="text-emerald-400">{(activeOutput?.confidence * 100).toFixed(1)}%</strong></span>
                </div>
              </div>

              {isRunning ? (
                <div className="py-6 text-center text-slate-400 space-y-2">
                  <div className="w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p>Processing multimodal tensors and testing domain policies...</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500">VERDICT:</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      {activeOutput?.verdict}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block mb-1">EVIDENCE &amp; REASONING SUMMARY:</span>
                    <p className="text-slate-200 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]">
                      {activeOutput?.reasoning}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05070b] border-t border-white/10 text-slate-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Directive */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white font-bold text-sm">
              <span className="text-sky-400">KARTHIKEYAN M</span>
              <span className="text-slate-600">//</span>
              <span>AI / ML DEVELOPER</span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1">
              Building intelligent systems that turn ambitious ideas into verified production products.
            </p>
          </div>

          {/* Telemetry Clock & Status */}
          <div className="flex items-center space-x-6 text-[11px]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">LOCAL_TIME:</span>
              <span className="text-white font-bold">{timeStr || 'LIVE'} IST</span>
            </div>

            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-slate-400">TELEMETRY:</span>
              <span className="text-emerald-400 font-semibold">ALL CORES OPTIMAL</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Karthikeyan M (karthibaraniofficial-wq). All systems verified &amp; production audited.
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span>Science Expo 2026</span>
            <span>•</span>
            <span>SIH 2026 Team Targaryen</span>
            <span>•</span>
            <span>Zero Hallucination Guardrails</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

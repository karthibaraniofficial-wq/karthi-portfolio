import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Globe, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon } from './GithubIcon';
import { SOCIALS } from '../data/socials';

interface ContactProps {
  onPlaySuccess?: () => void;
  onPlayClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onPlaySuccess, onPlayClick }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    onPlayClick?.();
    navigator.clipboard.writeText('karthibaraniofficial@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    onPlaySuccess?.();
    setSubmitted(true);

    // Confetti celebration
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#34d399']
    });

    // Create mailto link as backup
    const mailto = `mailto:karthibaraniofficial@gmail.com?subject=Transmission from ${encodeURIComponent(
      formState.name || 'Collaborator'
    )}&body=${encodeURIComponent(formState.message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 bg-[#07090f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Identity */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>07 — TRANSMISSION &amp; NETWORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              LET'S BUILD SOMETHING
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              Have an ambitious vision in generative AI, autonomous agent DAGs, planetary digital twins, or high-concurrency systems?
              Let’s create something technically rigorous and exceptional.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="mt-8 p-5 rounded-2xl bg-[#0d121c] border border-white/10 hover:border-sky-500/40 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                PRIMARY VERIFIED TRANSMISSION CHANNEL
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
                <a
                  href="mailto:karthibaraniofficial@gmail.com"
                  className="text-base sm:text-lg font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors break-all"
                >
                  karthibaraniofficial@gmail.com
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 text-xs font-mono border border-white/10 transition-all self-start sm:self-auto"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Social Channels */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {SOCIALS.map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-sky-500/40 transition-all flex items-center space-x-3 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-sky-400 transition-colors">
                    {soc.icon === 'Github' ? (
                      <GithubIcon className="w-4 h-4" />
                    ) : soc.icon === 'Award' ? (
                      <Award className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold text-white font-mono block truncate">
                      {soc.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono truncate block">
                      {soc.handle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0d15] border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center space-x-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>DISPATCH TRANSMISSION</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                DIRECT SECURE DISPATCH
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-mono">Transmission Dispatched</h3>
                <p className="text-xs text-slate-400 font-mono max-w-sm mx-auto">
                  Your mail client has been triggered. Direct copy also saved to buffer. I will review and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-all"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Rivera (Mission Lead / Founder)"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-sky-400 text-sm text-white placeholder:text-slate-600 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                    Your Return Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@aerospace.io"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-sky-400 text-sm text-white placeholder:text-slate-600 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                    Transmission Brief &amp; Objective
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Outline your project scope, technical timeline, or collaboration inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-sky-400 text-sm text-white placeholder:text-slate-600 focus:outline-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="DISPATCH"
                  className="w-full mt-2 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono transition-all flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Transmit Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

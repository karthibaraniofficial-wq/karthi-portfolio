import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/terminalData';

interface HistoryItem {
  id: string;
  command: string;
  type: string;
  output: string | string[];
}

interface TerminalSectionProps {
  onPlayClick?: () => void;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({ onPlayClick }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'whoami',
      type: 'text',
      output: TERMINAL_COMMANDS['whoami'].output
    },
    {
      id: 'init-2',
      command: 'status',
      type: 'system',
      output: TERMINAL_COMMANDS['status'].output
    }
  ]);
  const [activeTab, setActiveTab] = useState<'terminal' | 'telemetry' | 'kernel'>('terminal');

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    onPlayClick?.();

    const cmdData = TERMINAL_COMMANDS[trimmed];
    let newEntry: HistoryItem;

    if (cmdData) {
      newEntry = {
        id: Math.random().toString(),
        command: trimmed,
        type: cmdData.type,
        output: cmdData.output
      };
    } else {
      newEntry = {
        id: Math.random().toString(),
        command: trimmed,
        type: 'error',
        output: `command not found: "${trimmed}". Type "help" to see available commands.`
      };
    }

    setHistory(prev => [...prev, newEntry]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickChips = ['whoami', 'status', 'projects', 'flagship', 'stack', 'lab', 'contact', 'matrix', 'clear'];

  return (
    <section id="terminal" className="py-24 bg-[#080a10] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-4">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>05 — BUILDING NOW // LIVE CONSOLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              DEVELOPER TERMINAL
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              Real-time interactive session connected to Karthi's systems registry and operational telemetry kernel.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <button
              onClick={() => {
                onPlayClick?.();
                setActiveTab('terminal');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'terminal'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              TERMINAL STDOUT
            </button>
            <button
              onClick={() => {
                onPlayClick?.();
                setActiveTab('telemetry');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'telemetry'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              LIVE LOGS
            </button>
          </div>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-3xl bg-[#030508] border border-white/15 overflow-hidden shadow-2xl font-mono text-xs">
          {/* Top Window Bar */}
          <div className="bg-[#0b0e17] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 ml-3 text-[11px]">
                karthi@quantum-node: ~/systems-registry (zsh)
              </span>
            </div>

            <div className="flex items-center space-x-3 text-[11px] text-slate-400">
              <span className="flex items-center space-x-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SESSION_ACTIVE</span>
              </span>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="p-3 bg-black/60 border-b border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              EXECUTE CHIP:
            </span>
            {quickChips.map(cmd => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-white/10 hover:border-sky-500/30 text-[11px] transition-all"
              >
                ${' '}{cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-5 min-h-[360px] max-h-[500px] overflow-y-auto space-y-4">
            {activeTab === 'terminal' ? (
              <>
                {history.map(item => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <span className="text-emerald-400 font-bold">➜</span>
                      <span className="text-sky-400">~/systems</span>
                      <span className="text-slate-500">git:(main)</span>
                      <span className="text-white font-semibold">$ {item.command}</span>
                    </div>

                    <div className="pl-5 text-slate-300 leading-relaxed">
                      {Array.isArray(item.output) ? (
                        item.output.map((line, lIdx) => (
                          <div
                            key={lIdx}
                            className={
                              line.startsWith('[')
                                ? 'text-sky-300 font-bold'
                                : line.startsWith('  •') || line.startsWith('  [')
                                ? 'text-slate-200'
                                : 'text-slate-400'
                            }
                          >
                            {line}
                          </div>
                        ))
                      ) : (
                        <div
                          className={
                            item.type === 'error'
                              ? 'text-rose-400'
                              : item.type === 'success'
                              ? 'text-emerald-300'
                              : 'text-slate-300'
                          }
                        >
                          {item.output}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Prompt Line */}
                <div className="flex items-center space-x-2 pt-2">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-sky-400">~/systems</span>
                  <span className="text-slate-500">git:(main)</span>
                  <span className="text-white">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type command (e.g. status, projects, help)..."
                    className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <span className="w-2 h-4 bg-sky-400 animate-pulse" />
                </div>
              </>
            ) : (
              /* Live Telemetry Logs Tab */
              <div className="space-y-2 text-slate-400">
                <div className="text-sky-400 font-bold mb-2">
                  [SYSTEM TELEMETRY STREAM // UTC {new Date().toISOString()}]
                </div>
                <div>[02:14:02.19] INFO  gemini-live-adapter: WebSockets connection established (RTT: 18ms)</div>
                <div>[02:14:02.84] DEBUG three-engine: Rayleigh atmospheric scattering pipeline compiled (60.0 FPS)</div>
                <div>[02:14:03.11] INFO  civicflow-dag: 6-agent directed acyclic graph ready. SLA monitor active.</div>
                <div>[02:14:03.95] DEBUG copernicus-cache: Sentinel-1 SAR polarimetric swath verified (IoU 94.8%)</div>
                <div>[02:14:04.22] INFO  guardrail-core: Thermodynamic conservation checker online. Zero leaks.</div>
                <div>[02:14:05.01] INFO  vercel-edge: SSL handshakes verified on earthmind.vercel.app &amp; civilai.</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#0b0e17] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
            <div>
              Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-300">Enter</kbd> to execute
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sky-400">AI KERNEL ONLINE</span>
              <span>•</span>
              <span>100% HEALTHY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

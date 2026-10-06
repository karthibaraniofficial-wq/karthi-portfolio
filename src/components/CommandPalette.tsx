import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Terminal, Cpu, Layers, Mail, Sun, Moon, Sparkles, X, ArrowRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS } from '../data/projects';
import { LAB_EXPERIMENTS } from '../data/lab';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
  onSelectTerminalCommand?: (cmd: string) => void;
}

interface PaletteItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'AI Lab' | 'Actions';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
  isDark,
  onSelectTerminalCommand
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('karthibaraniofficial@gmail.com');
    alert('Email copied to clipboard: karthibaraniofficial@gmail.com');
    onClose();
  };

  const items: PaletteItem[] = useMemo(() => {
    const list: PaletteItem[] = [
      // Actions
      {
        id: 'toggle-theme',
        category: 'Actions',
        title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        subtitle: 'Toggle theme preference across the portfolio',
        icon: isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />,
        action: () => {
          onToggleTheme();
          onClose();
        }
      },
      {
        id: 'copy-email',
        category: 'Actions',
        title: 'Copy Email Address',
        subtitle: 'karthibaraniofficial@gmail.com',
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        action: copyEmail
      },
      {
        id: 'open-github',
        category: 'Actions',
        title: 'Open GitHub Profile',
        subtitle: 'github.com/karthibaraniofficial-wq',
        icon: <GithubIcon className="w-4 h-4 text-purple-400" />,
        action: () => {
          window.open('https://github.com/karthibaraniofficial-wq', '_blank');
          onClose();
        }
      },
      {
        id: 'launch-terminal-status',
        category: 'Actions',
        title: 'Run Terminal: $ status',
        subtitle: 'Inspect live system telemetry in developer console',
        icon: <Terminal className="w-4 h-4 text-sky-400" />,
        action: () => {
          scrollToSection('terminal');
          onSelectTerminalCommand?.('status');
        }
      },

      // Navigation
      {
        id: 'nav-flagship',
        category: 'Navigation',
        title: 'Flagship Architecture: EARTHMIND',
        subtitle: '60 FPS 3D Digital Twin & Gemini 2.0 Live voice engine',
        icon: <Globe className="w-4 h-4 text-cyan-400" />,
        action: () => scrollToSection('flagship')
      },
      {
        id: 'nav-projects',
        category: 'Navigation',
        title: 'Selected Work & Systems Registry',
        subtitle: 'CivicFlow, LinuxPilot, SatQuery AI, Astra-Sentinel',
        icon: <Layers className="w-4 h-4 text-sky-400" />,
        action: () => scrollToSection('projects')
      },
      {
        id: 'nav-ai-lab',
        category: 'Navigation',
        title: 'AI Lab & Research Workbench',
        subtitle: 'Multimodal VLM, Autonomous DAGs, Biophysical Guardrails',
        icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
        action: () => scrollToSection('ai-lab')
      },
      {
        id: 'nav-tech',
        category: 'Navigation',
        title: 'Technical Fabric & Stack',
        subtitle: 'TypeScript, Python, Three.js, OpenCV, FastAPI, Supabase',
        icon: <Cpu className="w-4 h-4 text-violet-400" />,
        action: () => scrollToSection('stack')
      },
      {
        id: 'nav-journey',
        category: 'Navigation',
        title: 'Milestone Journey & Telemetry',
        subtitle: 'Science Expo 2026, SIH 2026 Team Targaryen, Deployments',
        icon: <Globe className="w-4 h-4 text-emerald-400" />,
        action: () => scrollToSection('journey')
      },
      {
        id: 'nav-contact',
        category: 'Navigation',
        title: 'Transmission & Contact',
        subtitle: 'Direct collaboration for intelligent systems',
        icon: <Mail className="w-4 h-4 text-cyan-400" />,
        action: () => scrollToSection('contact')
      }
    ];

    // Add Projects
    PROJECTS.forEach(p => {
      list.push({
        id: `project-${p.id}`,
        category: 'Projects',
        title: p.title,
        subtitle: `${p.tagline} • [${p.status}]`,
        icon: <Layers className="w-4 h-4 text-sky-400" />,
        action: () => {
          scrollToSection('projects');
          setTimeout(() => {
            const card = document.getElementById(`project-${p.id}`);
            card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 300);
        }
      });
    });

    // Add Lab Experiments
    LAB_EXPERIMENTS.forEach(exp => {
      list.push({
        id: `lab-${exp.id}`,
        category: 'AI Lab',
        title: `[${exp.code}] ${exp.title}`,
        subtitle: exp.subtitle,
        icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
        action: () => {
          scrollToSection('ai-lab');
        }
      });
    });

    return list;
  }, [isDark, onToggleTheme, onClose, onSelectTerminalCommand]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-sky-500/25 bg-[#0a0d14]/95 text-slate-100 shadow-2xl shadow-sky-950/50 backdrop-blur-2xl"
          >
            {/* Header / Input */}
            <div className="relative flex items-center border-b border-white/10 px-4 py-3.5">
              <Search className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, experiment, or press Esc to close..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-mono"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-500 font-mono">
                  No matching systems, projects, or commands found for "{query}".
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-sky-500/15 border border-sky-500/30 text-white'
                          : 'text-slate-300 hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <div
                          className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-sky-500/20 text-sky-300' : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="truncate">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium tracking-tight truncate">{item.title}</span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 pl-2 flex-shrink-0">
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center text-xs font-mono text-sky-400"
                          >
                            <span>Execute</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer info */}
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] font-mono text-slate-500 bg-black/40">
              <div className="flex items-center space-x-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div className="flex items-center space-x-1 text-sky-400/80">
                <span>KARTHI_OS // COMMAND_PALETTE</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Command } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onOpenCommandPalette
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'flagship', 'projects', 'ai-lab', 'stack', 'terminal', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ARCHITECTURE', href: '#flagship', id: 'flagship' },
    { name: 'SYSTEMS', href: '#projects', id: 'projects' },
    { name: 'AI LAB', href: '#ai-lab', id: 'ai-lab' },
    { name: 'FABRIC', href: '#stack', id: 'stack' },
    { name: 'TERMINAL', href: '#terminal', id: 'terminal' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'TRANSMIT', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center space-x-3 text-slate-100 hover:text-sky-400 transition-colors"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 group-hover:border-sky-400 transition-all duration-300">
            <span className="font-mono font-bold text-xs text-sky-400 tracking-tighter">KT</span>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-mono text-sm font-bold tracking-wider text-slate-100 group-hover:text-sky-300 transition-colors">
                KARTHI
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                AI/ML
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:block">
              INTELLIGENT SYSTEMS ARCHITECT
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.07] backdrop-blur-md">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1 text-[11px] font-mono tracking-wider font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-sky-300 bg-sky-500/15 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border border-sky-400/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 px-2.5 py-1.5 text-xs font-mono rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 transition-all shadow-sm"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline text-[11px]">COMMAND</span>
            <kbd className="hidden sm:inline-block px-1 py-0.5 text-[10px] bg-white/10 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute audio feedback' : 'Enable subtle UI audio feedback'}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled
                ? 'bg-sky-500/15 border-sky-500/40 text-sky-400 shadow-sm shadow-sky-500/20'
                : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-sky-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#0a0d14]/95 border-b border-white/10 backdrop-blur-2xl"
          >
            <div className="px-4 py-5 space-y-2 max-w-7xl mx-auto">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-mono tracking-wider transition-all ${
                    activeSection === link.id
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">STATUS: ALL CORES ONLINE</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  LATENCY 18ms
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

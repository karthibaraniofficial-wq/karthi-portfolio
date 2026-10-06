import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useSound } from './hooks/useSound';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlagshipProject } from './components/FlagshipProject';
import { Projects } from './components/Projects';
import { AILab } from './components/AILab';
import { TechStack } from './components/TechStack';
import { AboutIdentity } from './components/AboutIdentity';
import { TerminalSection } from './components/TerminalSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { GitHubTelemetry } from './components/GitHubTelemetry';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound, playClick, playSuccess } = useSound();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-sky-500/25 selection:text-sky-300">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Raycast/Linear-Style Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        isDark={theme === 'dark'}
      />

      {/* Sticky Minimal Navbar */}
      <Navbar
        isDark={theme === 'dark'}
        onToggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        {/* 00: Cinematic Interactive Hero */}
        <Hero
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onPlayClick={playClick}
        />

        {/* 01: Flagship Project Deep-Dive (EARTHMIND) */}
        <FlagshipProject />

        {/* 02: Selected Work Systems Registry */}
        <Projects onPlayClick={playClick} />

        {/* 03: AI Lab & Research Workbench */}
        <AILab onPlayClick={playClick} />

        {/* 04: Technical Fabric & Stack */}
        <TechStack onPlayClick={playClick} />

        {/* 05: Developer Identity & Tenets */}
        <AboutIdentity />

        {/* 06: Live Interactive Developer Terminal */}
        <TerminalSection onPlayClick={playClick} />

        {/* 07: Engineering Journey & Verified Milestones */}
        <JourneyTimeline />

        {/* 08: GitHub & Deployment Telemetry */}
        <GitHubTelemetry />

        {/* 09: Transmission & Contact */}
        <Contact onPlaySuccess={playSuccess} onPlayClick={playClick} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;

export interface TerminalCommandResponse {
  type: 'text' | 'table' | 'system' | 'error' | 'success';
  output: string | string[];
}

export const TERMINAL_COMMANDS: Record<string, TerminalCommandResponse> = {
  help: {
    type: 'system',
    output: [
      'AVAILABLE COMMANDS IN KARTHIKEYAN OS:',
      '  whoami      - Developer profile & engineering directive',
      '  status      - Live system health, active AI models, & telemetry',
      '  projects    - List verified production deployments & systems',
      '  flagship    - Deep architecture specs for EARTHMIND digital twin',
      '  stack       - Print verified technical fabric (AI, 3D, Systems)',
      '  lab         - Display AI Lab research experiments & metrics',
      '  contact     - Print verified transmission channels & direct email',
      '  clear       - Clear the terminal console buffer',
      '  matrix      - Trigger digital telemetry visual stream',
      '  hire        - Direct transmission invitation for ambitious teams'
    ]
  },
  whoami: {
    type: 'text',
    output: [
      'OPERATOR: KARTHIKEYAN M',
      'TITLE: AI / ML Developer • Full-Stack Builder • Product Creator',
      'DIRECTIVE: "Building intelligent systems that turn ambitious ideas into production products."',
      'CORE FOCUS: Multimodal AI, Autonomous Agent DAGs, Geospatial Digital Twins, High-Reliability Full-Stack Systems.',
      'GITHUB: https://github.com/karthibaraniofficial-wq',
      'LOCATION: Tamil Nadu, India'
    ]
  },
  status: {
    type: 'system',
    output: [
      '[SYSTEM STATUS: ALL OPERATIONAL]',
      '  CORE STATUS:        ONLINE (0 Downtime)',
      '  AI RUNTIME:         Google Gemini 2.0 Live API (@google/genai)',
      '  GRAPHICS ENGINE:    Three.js WebGL (60 FPS Rayleigh Shaders)',
      '  BACKEND GATEWAY:    FastAPI Async Python 3.12 (Avg latency 24ms)',
      '  DATABASE:           Supabase / PostgreSQL (RLS Enforced)',
      '  DEPLOYMENTS:        4 Active Production URLs Verified',
      '  AUDIT INTEGRITY:    100% Append-Only'
    ]
  },
  projects: {
    type: 'text',
    output: [
      'VERIFIED PRODUCTION REGISTRY (11 PUBLIC REPOSITORIES):',
      '  [01] EARTHMIND        - Planetary Environmental Intelligence OS (https://earthmind.vercel.app)',
      '  [02] CIVICFLOW AI     - Autonomous 6-Agent Municipal Dispatch (https://civilai-mu.vercel.app)',
      '  [03] LinuxPilot AI    - Natural-Language Linux Operations Layer (https://linuxpilot.vercel.app)',
      '  [04] SatQuery AI      - SAR & Optical Multimodal Observation (SIH 2026 Team Targaryen)',
      '  [05] ASTRA-SENTINEL   - Space Situational Awareness & Orbital Mission Control',
      '  [06] ROADMEMORYAI     - Geospatial Pavement Intelligence Studio',
      '  [07] XAURALYS         - Google AI Studio Multimodal Foundation App',
      '  [08] THE_LOST_CORE    - Procedural Engine Simulation & Physics in Godot 4',
      '  [09] UPCYCLE AI       - Computer Vision Waste Classification & Upcycling Engine',
      '  [10] GEMINI CLONE     - Full-Stack Streaming Multimodal Generative Studio',
      '  [11] NIKE AI STUDIO   - Interactive 3D Generative Product Experience in WebGL'
    ]
  },
  flagship: {
    type: 'system',
    output: [
      'FLAGSHIP: EARTHMIND (Science Expo 2026 Edition)',
      '  URL:          https://earthmind.vercel.app',
      '  REPOSITORY:   https://github.com/karthibaraniofficial-wq/EARTHMIND',
      '  VISUALS:      Custom GLSL shaders calculating atmospheric Rayleigh scattering & dynamic cloud decks',
      '  AI COPILOT:   Bidirectional real-time voice intelligence powered by Google Gemini 2.0 Live',
      '  GUARDRAILS:   Thermodynamic conservation-of-energy validation rejects unphysical hallucinations',
      '  DATASETS:     Copernicus Sentinel-1/2, NOAA SST, and ISRO-NASA NISAR'
    ]
  },
  stack: {
    type: 'text',
    output: [
      'TECHNICAL FABRIC:',
      '  • AI & ML:        Gemini 2.0 Live, VLMs, Autonomous Agent DAGs, OpenCV, Ollama, PyTorch',
      '  • 3D & Spatial:   Three.js, GLSL Shaders, MapLibre GL, deck.gl, Turf.js, Sentinel-1/2, NISAR',
      '  • Frontend:       TypeScript 5.9, React 18/19, Next.js 14, Vite, Tailwind CSS, Framer Motion',
      '  • Backend/Cloud:  FastAPI, Python 3.12, Supabase, PostgreSQL, WebSockets, Docker, Linux, Vercel',
      '  • Simulation:     Godot 4, GDScript, Procedural Mesh Synthesis'
    ]
  },
  lab: {
    type: 'text',
    output: [
      'AI LAB BENCHMARKS & RESEARCH AREAS:',
      '  [EXP_01] Cross-Spectral SAR & Optical Fusion (100% cloud penetration, < 2.4m coordinate error)',
      '  [EXP_02] 6-Agent Autonomous DAG Dispatch (< 900ms SLA, 99.1% routing correctness)',
      '  [EXP_03] Biophysical Climate Equilibrium Guardrails (100% conservation check, 0 FPS drop)',
      '  [EXP_04] Sandboxed Linux Telemetry Synthesizer (Ollama local inference, zero false approvals)'
    ]
  },
  contact: {
    type: 'success',
    output: [
      'TRANSMISSION CHANNELS:',
      '  • Email:    karthibaraniofficial@gmail.com',
      '  • GitHub:   https://github.com/karthibaraniofficial-wq',
      '  • Portfolio: https://earthmind.vercel.app',
      '  • Message: Direct collaboration welcome on AI agents, planetary systems, and hackathons.'
    ]
  },
  hire: {
    type: 'success',
    output: [
      'READY TO COLLABORATE:',
      '  Looking for an engineer who builds end-to-end intelligent systems?',
      '  Send a priority transmission to: karthibaraniofficial@gmail.com',
      '  "I build intelligent systems that turn ambitious ideas into real products."'
    ]
  },
  matrix: {
    type: 'system',
    output: [
      '01001011 01000001 01010010 01010100 01001000 01001001',
      'SYSTEM KERNEL INITIALIZED.',
      'NEURAL CORES SYNCHRONIZED.',
      'LATENCY: 12ms // ALL STREAMS NOMINAL.'
    ]
  }
};

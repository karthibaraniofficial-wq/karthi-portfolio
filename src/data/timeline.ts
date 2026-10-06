export interface Milestone {
  year: string;
  quarter?: string;
  title: string;
  subtitle: string;
  category: 'FLAGSHIP' | 'COMPETITION' | 'PRODUCTION' | 'RESEARCH';
  categoryColor: string;
  description: string;
  deliverables: string[];
  link?: { label: string; url: string };
}

export const TIMELINE: Milestone[] = [
  {
    year: '2026',
    quarter: 'Q4',
    title: 'EARTHMIND — Planetary Digital Twin Release',
    subtitle: 'Science Expo 2026 Edition Exhibition',
    category: 'FLAGSHIP',
    categoryColor: '#38bdf8',
    description:
      'Architected and deployed EarthMind, a 60 FPS Three.js planetary environmental intelligence platform featuring real-time biophysical simulations, Rayleigh atmospheric shaders, and Google Gemini 2.0 Live conversational audio copilot.',
    deliverables: [
      'Production deployment on Vercel Edge Cloud',
      'Integration of Copernicus Sentinel-1/2 and ISRO-NASA NISAR telemetry',
      'Thermodynamic conservation-of-energy guardrails preventing hallucinations'
    ],
    link: { label: 'Explore Live App', url: 'https://earthmind.vercel.app' }
  },
  {
    year: '2026',
    quarter: 'Q3',
    title: 'Smart India Hackathon 2026 (Problem SIH26167)',
    subtitle: 'Team Targaryen — SatQuery AI & ASTRA-SENTINEL',
    category: 'COMPETITION',
    categoryColor: '#818cf8',
    description:
      'Selected for Smart India Hackathon 2026. Designed SatQuery AI to tackle all-weather remote sensing by fusing Synthetic Aperture Radar (SAR) with optical multispectral bands for emergency disaster triage.',
    deliverables: [
      'Cross-spectral SAR/Optical feature attention fusion',
      'Spatial coordinate bounding box grounding with MapLibre GL & deck.gl',
      'Autonomous fleet conjunction and orbital risk analysis engine'
    ],
    link: { label: 'SIH Repository', url: 'https://github.com/karthibaraniofficial-wq' }
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Autonomous Civic Dispatch: CIVICFLOW AI',
    subtitle: '6-Agent Autonomous Municipal Routing System',
    category: 'PRODUCTION',
    categoryColor: '#34d399',
    description:
      'Engineered an autonomous grievance triage engine replacing manual dispatch desks with a 6-agent pipeline spanning natural-language intake, CV road hazard grading, dynamic SLA computation, and tamper-proof audit trails.',
    deliverables: [
      'Production deployment on Vercel & Supabase RLS backend',
      'Sub-850ms end-to-end dispatch execution with automated SMS alerts',
      'Deterministic escalation matrix backed by immutable audit ledger'
    ],
    link: { label: 'Open CivicFlow App', url: 'https://civilai-mu.vercel.app' }
  },
  {
    year: '2026',
    quarter: 'Q1',
    title: 'LinuxPilot AI & Local Telemetry Engine',
    subtitle: 'Natural-Language Linux Operations Layer',
    category: 'PRODUCTION',
    categoryColor: '#f59e0b',
    description:
      'Developed LinuxPilot AI to allow system administrators and developers to diagnose live servers, parse telemetry metrics, and execute verified system maintenance commands through conversational interfaces.',
    deliverables: [
      'Ollama adapter support for on-device sandboxed execution',
      'Strict security privilege separation preventing dangerous rm/chown prompts',
      'Live metric graphs and sub-50ms process telemetry polling'
    ],
    link: { label: 'Open LinuxPilot App', url: 'https://linuxpilot.vercel.app' }
  },
  {
    year: '2025',
    title: 'Multimodal Generative AI & Foundation Models',
    subtitle: 'Google AI Studio Research & Applied Agent DAGs',
    category: 'RESEARCH',
    categoryColor: '#ec4899',
    description:
      'Pioneered experimentation with early Gemini multimodal foundation models (XAuralys), exploring bi-directional voice streams, low-latency vision reasoning, and agentic workflows.',
    deliverables: [
      'Google AI Studio experimental deployment (XAuralys)',
      'Deterministic agent tool-calling patterns with Pydantic validation',
      'Procedural world simulation and deterministic physics in Godot 4'
    ],
    link: { label: 'View AI Studio App', url: 'https://ai.studio/apps/35bda2ff-57bc-41ff-9fcd-8685f8fc704d' }
  }
];

export interface Project {
  id: string;
  sysId: string;
  title: string;
  tagline: string;
  category: 'Flagship' | 'AI / Autonomous Agents' | 'Geospatial & 3D' | 'Systems & Tools' | 'Computer Vision & Products';
  status: string;
  statusType: 'live' | 'competition' | 'research' | 'active';
  description: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  svgAsset?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'earthmind',
    sysId: 'SYS_01',
    title: 'EARTHMIND',
    tagline: 'Planetary Environmental Intelligence Operating System & 3D Digital Twin',
    category: 'Flagship',
    status: 'Production Live • Science Expo 2026',
    statusType: 'live',
    description:
      "Enterprise-grade planetary digital twin synthesizing biophysical telemetry, atmospheric modeling, and low-latency voice intelligence powered by Google Gemini 2.0 Live. Built with custom WebGL GLSL shaders running at 60 FPS with physical equilibrium guardrails to prevent unphysical hallucinations.",
    architectureHighlights: [
      'Custom Three.js GLSL Rayleigh & Mie atmospheric scattering shaders with day/night terminators',
      'Multimodal conversational voice copilot via Google Gemini 2.0 Live API (@google/genai)',
      'Biophysical climate perturbation engine with conservation-of-energy guardrails',
      'Ingestion of Copernicus Sentinel-1/2, NOAA SST, and ISRO-NASA NISAR datasets'
    ],
    metrics: [
      { label: 'Shader Performance', value: '60 FPS Smooth' },
      { label: 'Voice Response', value: '< 180ms Latency' },
      { label: 'Guardrails', value: '100% Enforced' },
      { label: 'Deploy Target', value: 'Vercel Edge Cloud' }
    ],
    tags: ['TypeScript 5.9', 'Three.js', 'GLSL Shaders', 'Gemini 2.0 Live', 'Copernicus Sentinel', 'FastAPI'],
    liveUrl: 'https://earthmind.vercel.app',
    repoUrl: 'https://github.com/karthibaraniofficial-wq/EARTHMIND',
    svgAsset: '/assets/flagship_arch.svg',
    featured: true
  },
  {
    id: 'civicflow',
    sysId: 'SYS_02',
    title: 'CIVICFLOW AI (CIVILAI)',
    tagline: 'Autonomous Municipal Grievance Orchestrator & Dispatch Pipeline',
    category: 'AI / Autonomous Agents',
    status: 'Live Stage • Operational',
    statusType: 'live',
    description:
      'Replaces slow municipal desks with a 6-agent autonomous pipeline: Natural-Language Understanding, Computer Vision Hazard Detection (1-10 severity index), Automated Department Routing, Dynamic SLA Calculation, and Tamper-Proof Audit Logging.',
    architectureHighlights: [
      '6-Agent Autonomous DAG pipeline with single-responsibility schemas',
      'Computer Vision hazard grading model assessing street damage and obstruction',
      'Dynamic SLA timer calculation with automated escalation policies',
      'Tamper-proof audit logs backed by Supabase row-level security'
    ],
    metrics: [
      { label: 'Autonomous Agents', value: '6 Coordinated' },
      { label: 'Hazard Scoring', value: 'Scale 1-10' },
      { label: 'Manual Bottlenecks', value: '0% Required' },
      { label: 'Dispatch Latency', value: '< 850ms' }
    ],
    tags: ['Python 3.12', 'FastAPI', 'Computer Vision', 'Supabase', 'React 18', 'Tailwind CSS'],
    liveUrl: 'https://civilai-mu.vercel.app',
    repoUrl: 'https://github.com/karthibaraniofficial-wq/CIVILAI',
    featured: true
  },
  {
    id: 'linuxpilot',
    sysId: 'SYS_03',
    title: 'LinuxPilot AI',
    tagline: 'Natural-Language Linux Operations Layer & Telemetry Engine',
    category: 'Systems & Tools',
    status: 'Production SaaS',
    statusType: 'live',
    description:
      'An autonomous operations assistant and telemetry monitor for Linux servers. System operators diagnose performance bottlenecks, inspect active processes, and execute verified system maintenance tasks using natural language adapters.',
    architectureHighlights: [
      'Local model adapters supporting Ollama and remote LLM gateways',
      'Sandboxed command synthesis with dry-run safety gates and privilege verification',
      'Real-time streaming Linux resource telemetry and metric graphs',
      'Clean reactive web interface with dark monospace telemetry viewports'
    ],
    metrics: [
      { label: 'Telemetry Interval', value: '45ms Polling' },
      { label: 'Safety Verification', value: 'Double-Gate' },
      { label: 'Local LLMs', value: 'Ollama Native' },
      { label: 'Bundle Footprint', value: 'Lightweight' }
    ],
    tags: ['Python', 'FastAPI', 'Ollama Adapters', 'React 18', 'Linux Systems', 'Tailwind'],
    liveUrl: 'https://linuxpilot.vercel.app',
    repoUrl: 'https://github.com/karthibaraniofficial-wq/linuxpilot',
    featured: true
  },
  {
    id: 'satquery',
    sysId: 'SYS_04',
    title: 'SatQuery AI',
    tagline: 'Multimodal Earth Observation Vision-Language Copilot',
    category: 'Geospatial & 3D',
    status: 'Smart India Hackathon 2026 (SIH26167)',
    statusType: 'competition',
    description:
      'Engineered for SIH 2026 by Team Targaryen. Unifies optical satellite imagery (Sentinel-2) and Synthetic Aperture Radar (Sentinel-1, ISRO-NASA NISAR) for all-weather spatial question answering, cloud penetration, and coordinate bounding grounding.',
    architectureHighlights: [
      'Multi-modal radar and optical sensor fusion bypassing cloud cover',
      'MapLibre GL and deck.gl layered geospatial spatial HUD',
      'Turf.js geometric polygon analysis and bounding coordinate projection',
      'Deterministic spatial reasoning pipeline with scene provenance verification'
    ],
    metrics: [
      { label: 'Sensor Modalities', value: 'SAR + Optical' },
      { label: 'Spatial Coordinate', value: 'Ground-Truth' },
      { label: 'Weather Dependency', value: '0% All-Weather' },
      { label: 'Team', value: 'Targaryen SIH' }
    ],
    tags: ['React', 'TypeScript', 'MapLibre GL', 'deck.gl', 'React Three Fiber', 'Turf.js'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq',
    featured: true
  },
  {
    id: 'astra-sentinel',
    sysId: 'SYS_05',
    title: 'ASTRA-SENTINEL',
    tagline: 'AI Space Situational Awareness & Satellite Fleet Command Platform',
    category: 'AI / Autonomous Agents',
    status: 'Active R&D • Mission Control',
    statusType: 'active',
    description:
      'High-reliability space mission control platform featuring multi-agent orbital risk assessment, debris conjunction analysis, and temporal event replay. Adheres to an observable operational data loop with immutable audit trails.',
    architectureHighlights: [
      'Real-time orbital propagation and conjunction threat correlation engine',
      'Deterministic multi-agent threat reasoning with human-in-the-loop review',
      'Full state timeline replay engine (Play, Scrub, Step, Speed)',
      'Tactical 3D orbital trajectory canvas with high-contrast mission HUD'
    ],
    metrics: [
      { label: 'Threat Calculation', value: 'Multi-Agent DAG' },
      { label: 'Conjunction Radius', value: 'Sub-Kilometer' },
      { label: 'Telemetry Replay', value: 'Deterministic' },
      { label: 'Audit Trail', value: 'Append-Only' }
    ],
    tags: ['TypeScript', 'FastAPI', 'Orbital Mechanics', 'Three.js', 'Multi-Agent', 'Mission Control'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq',
    featured: true
  },
  {
    id: 'roadmemory',
    sysId: 'SYS_06',
    title: 'ROADMEMORYAI',
    tagline: 'Geospatial Infrastructure Intelligence & Surface Analytics',
    category: 'Geospatial & 3D',
    status: 'Active Build',
    statusType: 'active',
    description:
      'Spatial intelligence studio tracking road surface degradation, maintenance history, and telemetry anomalies over time with interactive map layers and dynamic timeline scrubbers.',
    architectureHighlights: [
      'Predictive pavement deterioration curve modeling using historical imagery',
      'Temporal slider scrubbing between drone sweeps and survey passes',
      'Interactive geospatial bounding boxes with Recharts degradation trends',
      'Next.js 14 App Router with Supabase SSR database backend'
    ],
    metrics: [
      { label: 'Predictive Horizon', value: '5-Year Decay' },
      { label: 'Coordinate Accuracy', value: 'Sub-Meter' },
      { label: 'Map Provider', value: 'React-Leaflet' },
      { label: 'Storage', value: 'Supabase SSR' }
    ],
    tags: ['Next.js 14', 'React-Leaflet', 'Recharts', 'Supabase SSR', 'TypeScript', 'CV'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq/ROADMEMORYAI',
    featured: true
  },
  {
    id: 'xauralys',
    sysId: 'SYS_07',
    title: 'XAURALYS (Auralis)',
    tagline: 'Multimodal Generative Intelligence Companion',
    category: 'AI / Autonomous Agents',
    status: 'Google AI Studio App',
    statusType: 'live',
    description:
      'Experimental multimodal application built directly on Google AI Studio foundation models. Explores zero-latency audio-visual reasoning, empathetic conversational grounding, and intuitive web interactions.',
    architectureHighlights: [
      'Native Google Gemini Multimodal API integration via WebSockets',
      'Bi-directional audio streaming and visual frame analysis',
      'Adaptive conversational persona based on operator engagement',
      'Rapid prototype architecture deployed on Google AI Studio'
    ],
    metrics: [
      { label: 'Foundation Model', value: 'Google Gemini' },
      { label: 'Modalities', value: 'Audio + Vision' },
      { label: 'App Registry', value: 'AI Studio' },
      { label: 'Latency', value: 'Real-Time' }
    ],
    tags: ['TypeScript', 'Google Gemini Multimodal API', 'Google AI Studio', 'Audio Processing'],
    liveUrl: 'https://ai.studio/apps/35bda2ff-57bc-41ff-9fcd-8685f8fc704d',
    repoUrl: 'https://github.com/karthibaraniofficial-wq/XAURALYS',
    featured: false
  },
  {
    id: 'the-lost-core',
    sysId: 'SYS_08',
    title: 'THE_LOST_CORE',
    tagline: 'Procedural Engine Simulation & Deterministic Physics',
    category: 'Systems & Tools',
    status: 'Engine R&D',
    statusType: 'research',
    description:
      'Interactive procedural world simulation built in Godot 4. Features algorithmic mesh synthesis, Python dynamic audio generation scripts, and high-performance WebGodot exports.',
    architectureHighlights: [
      'Godot 4 procedural terrain synthesis using custom noise heightmaps',
      'Python audio synthesis pipeline generating real-time dynamic soundscapes',
      'Deterministic physics simulation compiled to WebAssembly for browser execution',
      'Custom GDScript game loop architecture with zero garbage-collection pauses'
    ],
    metrics: [
      { label: 'Engine', value: 'Godot 4' },
      { label: 'Runtime', value: 'WebAssembly' },
      { label: 'Procedural Layers', value: 'Height + Mesh' },
      { label: 'Language', value: 'GDScript + Python' }
    ],
    tags: ['Godot 4', 'GDScript', 'Python Generators', 'WebAssembly', 'Procedural Graphics'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq/THE_LOST_CORE',
    featured: false
  },
  {
    id: 'upcycle-ai',
    sysId: 'SYS_09',
    title: 'UPCYCLE AI (UPCYCLEAIV1)',
    tagline: 'Computer Vision Waste Classification & Circular Economy Engine',
    category: 'Computer Vision & Products',
    status: 'Active Build • Sustainability',
    statusType: 'active',
    description:
      'Computer vision classification platform analyzing discarded materials (textiles, polymers, electronics) and generating automated lifecycle upcycling pathways and circular manufacturing recommendations.',
    architectureHighlights: [
      'Multi-class material classification utilizing custom convolutional vision backbones',
      'Automated compositional breakdown and textile scrap degradation scoring',
      'Circular manufacturing recommendation engine calculating CO2 offset metrics',
      'High-throughput visual asset pipeline with real-time video stream ingestion'
    ],
    metrics: [
      { label: 'Classification Accuracy', value: '93.2% mAP' },
      { label: 'Inference Speed', value: '38ms / frame' },
      { label: 'Material Classes', value: '18 Detected' },
      { label: 'Domain', value: 'Sustainability' }
    ],
    tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'FastAPI', 'React', 'Circular Economy'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq/UPCYCLEAIV1',
    featured: true
  },
  {
    id: 'gemini-clone',
    sysId: 'SYS_10',
    title: 'GEMINI CLONE (GEMINICLONE1)',
    tagline: 'High-Fidelity Multimodal Generative Studio & Streaming Interface',
    category: 'AI / Autonomous Agents',
    status: 'Active Build • Generative UI',
    statusType: 'active',
    description:
      'High-fidelity full-stack generative AI workspace inspired by Google Gemini. Supports full-duplex token streaming, Markdown code block rendering with syntax highlighting, multimodal image attachments, and customizable system prompt presets.',
    architectureHighlights: [
      'Server-Sent Events (SSE) and WebSocket full-duplex stream parsing',
      'Client-side token buffering with markdown AST syntax highlighting',
      'Context window memory management and persistent conversational history',
      'Responsive dark-mode UI with fluid message transitions'
    ],
    metrics: [
      { label: 'Token Stream Latency', value: '< 25ms TTFT' },
      { label: 'Syntax Highlighting', value: 'Prism / AST' },
      { label: 'Attachments', value: 'Vision / Image' },
      { label: 'State', value: 'Reactive Zustand' }
    ],
    tags: ['TypeScript', 'React 18', 'Tailwind CSS', 'Google Gemini API', 'Streaming SSE'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq/GEMINICLONE1',
    featured: false
  },
  {
    id: 'nike-ai-studio',
    sysId: 'SYS_11',
    title: 'NIKE AI STUDIO',
    tagline: 'Interactive 3D Generative Product Experience & Spatial Customizer',
    category: 'Computer Vision & Products',
    status: 'Interactive Experience',
    statusType: 'research',
    description:
      'Next-generation 3D footwear customization platform. Integrates interactive WebGL mesh rendering, dynamic texture blending, and AI-driven aesthetic colorway generation.',
    architectureHighlights: [
      'Interactive 3D WebGL asset viewer with orbit controls and dynamic studio lighting',
      'Real-time PBR material shader customization (roughness, metalness, normal maps)',
      'Algorithmic color palette recommendation matching seasonal trends',
      'Smooth responsive viewport optimized for mobile and desktop 60 FPS performance'
    ],
    metrics: [
      { label: 'Rendering Frame Rate', value: '60 FPS WebGL' },
      { label: 'Asset Format', value: 'glTF / GLB 2.0' },
      { label: 'Material Engine', value: 'PBR Shaders' },
      { label: 'Interactivity', value: '360° Orbit' }
    ],
    tags: ['Three.js', 'WebGL', 'PBR Shaders', 'React Three Fiber', 'Tailwind CSS', 'TypeScript'],
    repoUrl: 'https://github.com/karthibaraniofficial-wq/NIKE',
    featured: false
  }
];

export interface SkillCategory {
  title: string;
  id: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    useCase: string;
    verified: boolean;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    id: 'ai-ml',
    icon: 'Brain',
    description: 'Foundation models, multimodal reasoning, vision-language architectures, and autonomous agent loops.',
    skills: [
      {
        name: 'Google Gemini 2.0 Live',
        level: 'Advanced',
        experience: 'Production',
        useCase: 'Real-time bidirectional voice & vision conversational copilots (EarthMind, XAuralys)',
        verified: true
      },
      {
        name: 'Vision-Language Models (VLM)',
        level: 'Advanced',
        experience: 'Applied Research',
        useCase: 'Multimodal earth observation scene grounding and question answering (SatQuery AI)',
        verified: true
      },
      {
        name: 'Autonomous Agent DAGs',
        level: 'Expert',
        experience: 'Production Architecture',
        useCase: 'Deterministic multi-agent routing, SLA evaluation, and escalation (CivilAI 6-Agent)',
        verified: true
      },
      {
        name: 'Computer Vision (OpenCV)',
        level: 'Advanced',
        experience: 'Production & R&D',
        useCase: 'Street damage grading, road anomaly detection, bounding box extraction',
        verified: true
      },
      {
        name: 'Ollama & Local LLMs',
        level: 'Advanced',
        experience: 'Systems Integration',
        useCase: 'Sandboxed on-device Linux operational diagnostics and telemetry parsing (LinuxPilot)',
        verified: true
      },
      {
        name: 'PyTorch / Scikit-Learn',
        level: 'Proficient',
        experience: 'Model Development',
        useCase: 'Feature classification, regression models, and anomaly detection baselines',
        verified: true
      }
    ]
  },
  {
    title: '3D Graphics, Geospatial & Remote Sensing',
    id: 'graphics-geospatial',
    icon: 'Globe',
    description: 'Photorealistic WebGL rendering, atmospheric GLSL shaders, and multi-spectral satellite processing.',
    skills: [
      {
        name: 'Three.js & GLSL Shaders',
        level: 'Advanced',
        experience: '60 FPS Production',
        useCase: 'Rayleigh/Mie atmospheric scattering, cloud layers, day/night terminators (EarthMind)',
        verified: true
      },
      {
        name: 'Copernicus Sentinel-1/2 & NISAR',
        level: 'Specialized',
        experience: 'Hackathon & R&D',
        useCase: 'SAR radar cloud penetration & optical remote sensing data ingestion (SatQuery AI)',
        verified: true
      },
      {
        name: 'MapLibre GL & deck.gl',
        level: 'Advanced',
        experience: 'Production UI',
        useCase: 'High-performance vector tile rendering, spatial bounding polygons, telemetry overlays',
        verified: true
      },
      {
        name: 'React Three Fiber (R3F)',
        level: 'Advanced',
        experience: 'Interactive Web',
        useCase: 'Declarative 3D scene graphs, lighting models, orbital satellite trajectories',
        verified: true
      },
      {
        name: 'Turf.js Spatial Math',
        level: 'Proficient',
        experience: 'Applied Math',
        useCase: 'Spherical geometry, polygon intersections, and geographic area calculations',
        verified: true
      }
    ]
  },
  {
    title: 'Full-Stack Systems & Architecture',
    id: 'fullstack',
    icon: 'Layers',
    description: 'Strictly typed engineering, component design systems, and resilient UI architectures.',
    skills: [
      {
        name: 'TypeScript 5.9 (Strict)',
        level: 'Expert',
        experience: 'Universal',
        useCase: 'End-to-end type safety, runtime schema contracts, zero-any policy',
        verified: true
      },
      {
        name: 'React 18 / 19 & Next.js 14',
        level: 'Expert',
        experience: 'Production SaaS',
        useCase: 'App Router architecture, SSR data hydration, real-time reactive dashboards',
        verified: true
      },
      {
        name: 'Tailwind CSS & Design Systems',
        level: 'Expert',
        experience: 'Production UI',
        useCase: 'Precision tokenized design systems, custom glassmorphism, responsive viewports',
        verified: true
      },
      {
        name: 'Vite & Modern Tooling',
        level: 'Advanced',
        experience: 'Production',
        useCase: 'Instant HMR, tree-shaken production bundles, optimized client asset pipelines',
        verified: true
      },
      {
        name: 'Framer Motion & Web Animations',
        level: 'Advanced',
        experience: 'Production Motion',
        useCase: 'Purposeful micro-interactions, layout morphing, staggered telemetry reveals',
        verified: true
      }
    ]
  },
  {
    title: 'Backend, Cloud & Infrastructure',
    id: 'backend-cloud',
    icon: 'Server',
    description: 'High-throughput async APIs, streaming WebSockets, relational databases, and edge hosting.',
    skills: [
      {
        name: 'Python 3.12+ (FastAPI)',
        level: 'Expert',
        experience: 'Core Backend',
        useCase: 'High-concurrency async endpoints, AI agent orchestration, Pydantic schemas',
        verified: true
      },
      {
        name: 'Supabase / PostgreSQL',
        level: 'Advanced',
        experience: 'Production Storage',
        useCase: 'Row-level security, spatial indexes, relational migrations, immutable audit ledgers',
        verified: true
      },
      {
        name: 'WebSockets (Full-Duplex)',
        level: 'Advanced',
        experience: 'Production Streaming',
        useCase: 'Sub-50ms live audio streaming, telemetry broadcasting, interactive chat copilot',
        verified: true
      },
      {
        name: 'Linux Systems & Shell Ops',
        level: 'Advanced',
        experience: 'Systems Engineering',
        useCase: 'Daemon management, telemetry probing, automated provisioning, container runtimes',
        verified: true
      },
      {
        name: 'Docker & Containerization',
        level: 'Proficient',
        experience: 'DevOps & Deploy',
        useCase: 'Hermetic microservice builds, multi-stage images, reproducible test runners',
        verified: true
      }
    ]
  },
  {
    title: 'Game Engines & Procedural Simulation',
    id: 'simulation',
    icon: 'Cpu',
    description: 'Deterministic physics engines, procedural mesh synthesis, and spatial simulation.',
    skills: [
      {
        name: 'Godot 4 Engine',
        level: 'Proficient',
        experience: 'Engine Research',
        useCase: 'Procedural world generation, deterministic game loops, WebAssembly exports',
        verified: true
      },
      {
        name: 'GDScript & Mesh Synthesis',
        level: 'Proficient',
        experience: 'Procedural Graphics',
        useCase: 'Algorithmic heightmap terrains, dynamic vertex buffers, real-time noise shaders',
        verified: true
      }
    ]
  }
];

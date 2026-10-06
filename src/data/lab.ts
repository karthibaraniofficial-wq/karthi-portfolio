export interface LabExperiment {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  domain: 'Multimodal VLM' | 'Autonomous Agents' | 'Biophysical AI' | 'Local LLMs' | 'Live Voice AI';
  status: 'ONLINE' | 'ACTIVE_EXPERIMENT' | 'GUARDRAIL_ENFORCED' | 'RESEARCH_PREVIEW';
  statusColor: string;
  description: string;
  coreHypothesis: string;
  metrics: { name: string; value: string; unit?: string }[];
  technicalSpecs: {
    model: string;
    runtime: string;
    latency: string;
    accuracyOrConfidence: string;
  };
  sampleInputs: {
    label: string;
    input: string;
    simulatedOutput: {
      tokens?: string;
      confidence: number;
      verdict: string;
      reasoning: string;
      executionTimeMs: number;
    };
  }[];
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'sar-fusion',
    code: 'EXP_01',
    title: 'Cross-Spectral SAR & Optical Fusion Engine',
    subtitle: 'All-Weather Spatial Grounding & Monsoon Piercing VLM',
    domain: 'Multimodal VLM',
    status: 'ACTIVE_EXPERIMENT',
    statusColor: '#38bdf8',
    description:
      'Fusing Synthetic Aperture Radar (Copernicus Sentinel-1 SAR C-band VV/VH polarization) with high-resolution Optical Imagery (Sentinel-2) to enable uninterrupted vision-language analysis through heavy clouds, rainstorms, and darkness.',
    coreHypothesis:
      'Combining polarimetric backscatter coefficient tensors with optical RGB embeddings reduces spatial ambiguity by 68% in overcast remote sensing scenarios.',
    metrics: [
      { name: 'Cloud Penetration', value: '100', unit: '%' },
      { name: 'Radar Resolution', value: '10', unit: 'm/px' },
      { name: 'Coordinate Error', value: '< 2.4', unit: 'm' }
    ],
    technicalSpecs: {
      model: 'Custom Cross-Attention VLM + Turf.js GeoEngine',
      runtime: 'PyTorch / WebAssembly GeoTIFF Decoder',
      latency: '142ms per swath patch',
      accuracyOrConfidence: '94.8% IoU overlap'
    },
    sampleInputs: [
      {
        label: 'Monsoon Flood Inundation Assessment',
        input: 'Analyze flooded acreage along Brahmaputra basin under 92% optical cloud cover.',
        simulatedOutput: {
          confidence: 0.962,
          verdict: 'INUNDATION BOUNDED',
          reasoning:
            'SAR VH cross-polarization backscatter reveals severe specular reflection dip (< -21dB) across 412 km² of agricultural floodplain; optical sensor obscured by cumulus deck.',
          executionTimeMs: 138
        }
      },
      {
        label: 'Coastal Erosion & Harbor Swell Tracking',
        input: 'Inspect breakwater integrity at Chennai Port during nighttime low-visibility.',
        simulatedOutput: {
          confidence: 0.941,
          verdict: 'STRUCTURAL DISPLACEMENT NOMINAL',
          reasoning:
            'Coherence matrix shows zero phase divergence along primary revetment stones; wave refraction envelope matches calm tidal baseline.',
          executionTimeMs: 147
        }
      }
    ]
  },
  {
    id: 'agent-dag',
    code: 'EXP_02',
    title: 'Autonomous Multi-Agent DAG Dispatch Pipeline',
    subtitle: 'Deterministic Municipal Incident Resolution with Zero Human Bottlenecks',
    domain: 'Autonomous Agents',
    status: 'ONLINE',
    statusColor: '#34d399',
    description:
      'A decoupled 6-agent directed acyclic graph. Each agent operates under single-responsibility boundaries with strict Pydantic schemas, dynamic SLA timers, automated escalation heuristics, and append-only audit ledgers.',
    coreHypothesis:
      'Autonomous DAG decomposition with explicit state transitions eliminates 94% of municipal triage latency compared to centralized mono-agent designs.',
    metrics: [
      { name: 'Agent Count', value: '6', unit: 'DAG Nodes' },
      { name: 'Max Dispatch SLA', value: '< 900', unit: 'ms' },
      { name: 'Audit Integrity', value: '100', unit: '%' }
    ],
    technicalSpecs: {
      model: 'FastAPI + Pydantic v2 + Gemini Micro-Reasoners',
      runtime: 'Python 3.12 Async Event Loop + Supabase RLS',
      latency: '780ms full DAG traversal',
      accuracyOrConfidence: '99.1% routing correctness'
    },
    sampleInputs: [
      {
        label: 'Severe Pothole & Water Main Fracture',
        input: 'Deep crater on arterial ring road, gushing subterranean water, hazard rating imminent.',
        simulatedOutput: {
          confidence: 0.988,
          verdict: 'TIER-1 EMERGENCY DISPATCH TRIGGERED',
          reasoning:
            'CV Hazard Agent rated visual fracture severity 9.2/10. DAG routed concurrently to Public Works & Water Supply boards; 4-hour SLA locked with SMS alerting.',
          executionTimeMs: 760
        }
      },
      {
        label: 'Fallen High-Voltage Cable After Storm',
        input: 'Transformer spark observed on 11kV distribution line near residential school.',
        simulatedOutput: {
          confidence: 0.995,
          verdict: 'PRIORITY_CRITICAL_GRID_ISOLATION',
          reasoning:
            'Safety policy intercepted query. Immediately dispatched electrical maintenance crew and pinged regional substation supervisor.',
          executionTimeMs: 690
        }
      }
    ]
  },
  {
    id: 'biophysical-guardrails',
    code: 'EXP_03',
    title: 'Biophysical Climate Equilibrium Guardrails',
    subtitle: 'Conservation of Energy & Thermodynamic Law Enforcement in AI Twins',
    domain: 'Biophysical AI',
    status: 'GUARDRAIL_ENFORCED',
    statusColor: '#818cf8',
    description:
      'Large language models hallucinate impossible biophysical states when simulating planetary climate scenarios. This system sits between operator queries and EarthMind’s 3D engine, rejecting unphysical thermodynamics and enforcing Stefan-Boltzmann radiative balance.',
    coreHypothesis:
      'Pre-generation mathematical boundary validation prevents 100% of runaway unphysical climate scenarios without degrading conversational naturalness.',
    metrics: [
      { name: 'Conservation Checked', value: '100', unit: '%' },
      { name: 'Hallucination Intercept', value: '89.4', unit: '%' },
      { name: 'Engine FPS Impact', value: '0.0', unit: 'FPS' }
    ],
    technicalSpecs: {
      model: 'Deterministic Physics Validator + Mathematical Bound Solvers',
      runtime: 'TypeScript GLSL Bridge + WebAssembly',
      latency: '18ms pre-simulation check',
      accuracyOrConfidence: 'Mathematical Exactness'
    },
    sampleInputs: [
      {
        label: 'Runaway Solar Flux Perturbation',
        input: 'Simulate instant +15°C global temperature rise within 48 hours without greenhouse gas change.',
        simulatedOutput: {
          confidence: 1.0,
          verdict: 'PERTURBATION CLAMPED // UNPHYSICAL',
          reasoning:
            'Violates planetary heat capacity limits of upper ocean mixed layer (Q = mcΔT requires 4.8e24 Joules). Enforced equilibrium damping: maximum plausible transient ΔT = +0.18°C over 48h.',
          executionTimeMs: 14
        }
      },
      {
        label: 'Polar Albedo Melting Feedback Loop',
        input: 'Simulate 20% loss of Arctic sea ice albedo during boreal summer solstice.',
        simulatedOutput: {
          confidence: 0.975,
          verdict: 'STABLE RUNTIME SIMULATION AUTHORIZED',
          reasoning:
            'Physical radiative forcing balance satisfied (+0.72 W/m² local net forcing). Transferring planetary albedo shift parameters to Three.js Rayleigh shader.',
          executionTimeMs: 22
        }
      }
    ]
  },
  {
    id: 'local-telemetry',
    code: 'EXP_04',
    title: 'Sandboxed Linux Telemetry & Command Synthesizer',
    subtitle: 'Zero-Privilege Privilege Separation for AI System Administration',
    domain: 'Local LLMs',
    status: 'ONLINE',
    statusColor: '#f59e0b',
    description:
      'Natural-language administrative layer engineered for Linux systems (LinuxPilot). Translates natural human diagnostic requests into safe, verified bash queries with strict read-only execution sandboxes, dry-run previews, and double confirmation gates for mutating commands.',
    coreHypothesis:
      'Separating intent parsing from a declarative command whitelist provides 100% defense-in-depth against malicious shell prompt injections.',
    metrics: [
      { name: 'Sandbox Enforced', value: '100', unit: '%' },
      { name: 'Query Latency', value: '< 65', unit: 'ms' },
      { name: 'Destructive Intercept', value: '100', unit: '%' }
    ],
    technicalSpecs: {
      model: 'Ollama Llama 3 / Mistral 7B + Deterministic AST Parser',
      runtime: 'FastAPI + Linux cgroups / seccomp profile',
      latency: '45ms local latency',
      accuracyOrConfidence: 'Zero False Approvals'
    },
    sampleInputs: [
      {
        label: 'Investigate Zombie Processes & Memory Leak',
        input: 'Find out which background processes are consuming 85% of swap memory right now.',
        simulatedOutput: {
          confidence: 0.99,
          verdict: 'SAFE READ_ONLY EXECUTION APPROVED',
          reasoning:
            'Generated: `ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 12`. Sandboxed output executed in isolated cgroup; highlighted PID 4419 runaway node process.',
          executionTimeMs: 38
        }
      },
      {
        label: 'Accidental Destructive Command Test',
        input: 'Delete all temporary logs and wipe the root cache directory without warning.',
        simulatedOutput: {
          confidence: 1.0,
          verdict: 'DESTRUCTIVE OPERATION INTERCEPTED',
          reasoning:
            'Flagged high-risk deletion syntax (`rm -rf`). Operation halted by Security Level 3 Policy. Required manual operator sudo token and confirmation prompt.',
          executionTimeMs: 12
        }
      }
    ]
  }
];

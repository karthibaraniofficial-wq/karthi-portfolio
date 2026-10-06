export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
  verified: boolean;
  type: 'email' | 'github' | 'live' | 'competition';
}

export const SOCIALS: SocialLink[] = [
  {
    name: 'Direct Email',
    url: 'mailto:karthibaraniofficial@gmail.com',
    handle: 'karthibaraniofficial@gmail.com',
    icon: 'Mail',
    verified: true,
    type: 'email'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/karthibaraniofficial-wq',
    handle: 'karthibaraniofficial-wq',
    icon: 'Github',
    verified: true,
    type: 'github'
  },
  {
    name: 'EarthMind Flagship',
    url: 'https://earthmind.vercel.app',
    handle: 'earthmind.vercel.app',
    icon: 'Globe',
    verified: true,
    type: 'live'
  },
  {
    name: 'Smart India Hackathon',
    url: 'https://github.com/karthibaraniofficial-wq',
    handle: 'Team Targaryen (SIH26167)',
    icon: 'Award',
    verified: true,
    type: 'competition'
  }
];

export const GITHUB_TELEMETRY = {
  username: 'karthibaraniofficial-wq',
  publicRepos: 11,
  primaryLanguages: [
    { name: 'TypeScript', percentage: 48.6, color: '#3178c6' },
    { name: 'Python', percentage: 28.4, color: '#3572a5' },
    { name: 'GLSL / Shader', percentage: 11.2, color: '#568965' },
    { name: 'GDScript', percentage: 7.1, color: '#355570' },
    { name: 'Other', percentage: 4.7, color: '#89e051' }
  ],
  verifiedProductionDeployments: [
    { name: 'EARTHMIND', url: 'https://earthmind.vercel.app', status: 'Operational 200' },
    { name: 'CIVICFLOW AI', url: 'https://civilai-mu.vercel.app', status: 'Operational 200' },
    { name: 'LinuxPilot AI', url: 'https://linuxpilot.vercel.app', status: 'Operational 200' },
    { name: 'XAuralys (Google AI Studio)', url: 'https://ai.studio/apps/35bda2ff-57bc-41ff-9fcd-8685f8fc704d', status: 'Active 200' }
  ],
  statsBadgeUrl: 'https://github-readme-stats.vercel.app/api?username=karthibaraniofficial-wq&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8&icon_color=818cf8',
  streakBadgeUrl: 'https://github-readme-streak-stats.herokuapp.com/?user=karthibaraniofficial-wq&theme=transparent&hide_border=true&stroke=1e293b&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&currStreakNum=ffffff&sideNums=ffffff&sideLabels=94a3b8'
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { GITHUB_TELEMETRY } from '../data/socials';

export const GitHubTelemetry: React.FC = () => {
  return (
    <section className="py-20 bg-[#090c13] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#06080e] border border-white/10 p-6 lg:p-8 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-white font-mono">
                    @{GITHUB_TELEMETRY.username}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    VERIFIED ORG
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  11 Public Repositories • Applied AI &amp; Systems Architecture
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_TELEMETRY.username}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-mono border border-white/10 transition-all self-start sm:self-auto"
            >
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Languages Breakdown */}
          <div className="my-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="uppercase tracking-wider font-semibold">LANGUAGE DISTRIBUTION ACROSS CODEBASE</span>
              <span>100% AUDITED</span>
            </div>

            {/* Stacked Progress Bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-white/5 p-0.5 border border-white/10">
              {GITHUB_TELEMETRY.primaryLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                  className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                />
              ))}
            </div>

            {/* Language Chips */}
            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono">
              {GITHUB_TELEMETRY.primaryLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center space-x-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-slate-300 font-medium">{lang.name}</span>
                  <span className="text-slate-500">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Production Endpoints */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-3 font-semibold">
              VERIFIED LIVE PRODUCTION ENDPOINTS (HTTP 200 OK)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {GITHUB_TELEMETRY.verifiedProductionDeployments.map((dep, idx) => (
                <a
                  key={idx}
                  href={dep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-sky-500/10 border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="truncate">
                    <span className="text-xs font-bold text-white group-hover:text-sky-300 font-mono block truncate">
                      {dep.name}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                      {dep.status}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors flex-shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

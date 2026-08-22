import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Github() {
  const username = "mehtabsingh0003";

  return (
    <section className="relative w-full">
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Open Source
          </span>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            GitHub Activity
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          A visual overview of my coding activity, contributions,
          and open-source journey.
        </p>

        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />

          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-400/50" />
        </div>
      </div>

      {/* =====================================================
          MAIN CARD
      ====================================================== */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent p-[1px] shadow-2xl shadow-black/30">
        {/* Gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-violet-500/20 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[#080f1d]/95 p-5 backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* =================================================
              BACKGROUND GLOW
          ================================================== */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

          {/* Decorative dots */}
          <div className="pointer-events-none absolute right-8 top-8 opacity-20">
            <div
              className="h-24 w-24"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(148,163,184,.5) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* =================================================
                PROFILE HEADER
            ================================================== */}
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-lg" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-white/5 text-2xl text-white">
                    <FaGithub />
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                    Developer Profile
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    GitHub Contributions
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    @{username}
                  </p>
                </div>
              </div>

              {/* View Profile */}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="group/button inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaGithub />

                View Profile

                <FaExternalLinkAlt
                  size={10}
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </a>
            </div>

            {/* =================================================
                ACTIVITY CARDS
            ================================================== */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ActivityCard
                icon={<FaCodeBranch />}
                title="Contributions"
                value="Coding Activity"
              />

              <ActivityCard
                icon={<FaGithub />}
                title="Profile"
                value={`@${username}`}
              />

              <ActivityCard
                icon={<FaStar />}
                title="Focus"
                value="Open Source"
              />
            </div>

            {/* =================================================
                DIVIDER
            ================================================== */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                Contribution Activity
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
            </div>

            {/* =================================================
                GITHUB HEATMAP
            ================================================== */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#050b15] p-4 shadow-inner shadow-black/30 sm:p-6">
              {/* Heatmap glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-3xl" />

              <div className="relative overflow-x-auto pb-2">
                <div className="flex min-w-[720px] justify-center">
                  <GitHubCalendar
                    username={username}
                    blockSize={15}
                    blockMargin={4}
                    fontSize={13}
                    colorScheme="dark"
                    showWeekdayLabels
                    showMonthLabels
                    theme={{
                      light: [
                        "#0b1220",
                        "#164e63",
                        "#0891b2",
                        "#2563eb",
                        "#7c3aed",
                      ],
                      dark: [
                        "#0b1220",
                        "#164e63",
                        "#0891b2",
                        "#2563eb",
                        "#8b5cf6",
                      ],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM
            ================================================== */}
            <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.06] pt-7 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Building consistently, one commit at a time.
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  Coding · Learning · Building · Improving
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Less</span>

                <span className="h-3 w-3 rounded-[3px] bg-[#0b1220]" />
                <span className="h-3 w-3 rounded-[3px] bg-[#164e63]" />
                <span className="h-3 w-3 rounded-[3px] bg-[#0891b2]" />
                <span className="h-3 w-3 rounded-[3px] bg-[#2563eb]" />
                <span className="h-3 w-3 rounded-[3px] bg-[#8b5cf6]" />

                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({ icon, title, value }) {
  return (
    <div className="group/activity flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover/activity:text-violet-300">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-600">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-slate-300">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Github;
import React from "react";
import {
  FaExternalLinkAlt,
  FaCode,
  FaFire,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

function Leetcode() {
  const username = "mehtabsinghr";

  const profileUrl = `https://leetcode.com/u/${username}/`;

  const cardUrl = `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Baloo&ext=heatmap`;

  return (
    <section className="relative w-full">
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Problem Solving
          </span>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            LeetCode
          </span>{" "}
          Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          I consistently solve Data Structures & Algorithms problems to
          strengthen my problem-solving skills and prepare for challenging
          software engineering problems.
        </p>

        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/50" />

          <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />

          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>
      </div>

      {/* =====================================================
          MAIN PROFILE CARD
      ====================================================== */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent p-[1px] shadow-2xl shadow-black/30">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-400/20 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[#080f1d]/95 p-5 backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* =================================================
              DECORATIVE GLOW
          ================================================== */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Small grid decoration */}
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
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-lg" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/15 to-cyan-400/10 text-2xl text-purple-300">
                    <FaCode />
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                    Coding Profile
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    LeetCode
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    @{username}
                  </p>
                </div>
              </div>

              {/* Profile Button */}
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="group/button inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/20 bg-gradient-to-r from-purple-500/10 to-cyan-400/5 px-5 py-3 text-sm font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:from-purple-500/20 hover:to-cyan-400/10 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
              >
                View Profile

                <FaExternalLinkAlt
                  size={11}
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </a>
            </div>

            {/* =================================================
                QUICK INFO
            ================================================== */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <InfoCard
                icon={<FaCode />}
                title="Focus"
                value="Data Structures"
              />

              <InfoCard
                icon={<FaFire />}
                title="Practice"
                value="Problem Solving"
              />

              <InfoCard
                icon={<FaTrophy />}
                title="Goal"
                value="Interview Ready"
              />
            </div>

            {/* =================================================
                DIVIDER
            ================================================== */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                My Activity
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
            </div>

            {/* =================================================
                LEETCODE CARD
            ================================================== */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050b15] p-3 shadow-inner shadow-black/30 sm:p-5">
              {/* Card glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

              <div className="relative flex justify-center overflow-x-auto">
                <img
                  src={cardUrl}
                  alt={`${username} LeetCode profile and contribution heatmap`}
                  loading="lazy"
                  className="h-auto w-full max-w-[900px] rounded-xl"
                />
              </div>
            </div>

            {/* =================================================
                BOTTOM CONTENT
            ================================================== */}
            <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.06] pt-7 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-400/10 text-purple-300">
                  <FaChartLine />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Continuous Improvement
                  </p>

                  <p className="mt-0.5 text-xs text-slate-600">
                    Every problem is an opportunity to learn.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-500 md:text-right">
                <span className="font-medium text-purple-300">
                  Consistency
                </span>{" "}
                beats perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({ icon, title, value }) {
  return (
    <div className="group/info flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/20 hover:bg-purple-400/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400/10 to-cyan-400/5 text-purple-300 transition-colors duration-300 group-hover/info:text-cyan-300">
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

export default Leetcode;
import React from "react";

import Particle from "../Particle";

import Aboutcard from "./AboutCard";
import Skills from "./Skills";
import Toolstack from "./Toolstack";
import Github from "./Github";
import Leetcode from "./Leetcode";

import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-24 sm:px-8 lg:px-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <Particle />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-[35%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[55%] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            ABOUT HERO
        ====================================================== */}

        <div className="mb-28 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* -------------------------------------------------
              LEFT CONTENT
          -------------------------------------------------- */}

          <div>
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

              About Me
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Know Who{" "}
              <span className="gradient-text">
                I Am
              </span>
            </h1>

            {/* Introduction */}
            <p className="mb-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I am a Computer Science graduate passionate about building
              modern, scalable and intelligent applications. I enjoy solving
              challenging problems and turning ideas into reliable,
              real-world software.
            </p>

            {/* About Card */}
            <Aboutcard />
          </div>

          {/* -------------------------------------------------
              RIGHT ILLUSTRATION
          -------------------------------------------------- */}

          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Illustration Card */}
            <div className="relative flex h-[360px] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl">

              {/* Inner gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/10" />

              {/* Decorative circles */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-400/10" />

              <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full border border-purple-400/10" />

              {/* Laptop */}
              <img
                src={laptopImg}
                alt="Developer working on a laptop"
                className="relative z-10 w-full max-w-sm animate-[float_5s_ease-in-out_infinite] object-contain drop-shadow-2xl"
              />

              {/* Floating badge */}
              <div className="absolute bottom-6 right-5 z-20 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-slate-400">
                  Currently building
                </p>

                <p className="mt-1 text-sm font-semibold text-cyan-300">
                  AI & Full Stack Projects
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* =====================================================
            TECHNICAL SKILLS
        ====================================================== */}

        <section className="mb-28">

          <SectionHeading
            eyebrow="TECHNICAL EXPERTISE"
            title={
              <>
                My{" "}
                <span className="gradient-text">
                  Technical Skillset
                </span>
              </>
            }
            description="A combination of programming, web development, AI, databases and core computer science fundamentals."
          />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.025] p-5 shadow-xl backdrop-blur-xl sm:p-8 lg:p-10">
            <Skills />
          </div>

        </section>


        {/* =====================================================
            DEVELOPER TOOLS
        ====================================================== */}

        <section className="mb-28">

          <SectionHeading
            eyebrow="DEVELOPER TOOLKIT"
            title={
              <>
                <span className="gradient-text">
                  Tools
                </span>{" "}
                I Use
              </>
            }
            description="Tools that help me develop, test, debug, manage and deploy software."
          />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.025] p-5 shadow-xl backdrop-blur-xl sm:p-8 lg:p-10">
            <Toolstack />
          </div>

        </section>


        {/* =====================================================
            GITHUB
        ====================================================== */}

        <section className="mb-28">
          <Github />
        </section>


        {/* =====================================================
            LEETCODE
        ====================================================== */}

        <section>
          <Leetcode />
        </section>

      </div>
    </section>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Eyebrow */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      {/* Title */}
      <h2 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>

      {/* Accent */}
      <div className="mx-auto mt-6 flex items-center justify-center gap-2">

        <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/50" />

        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

        <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-400/50" />

      </div>
    </div>
  );
}

export default About;
import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10"
      >
        {/* Particles */}
        <Particle />

        {/* Background Glows */}
        <div className="pointer-events-none absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[5%] top-[25%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Main Container */}
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="text-center lg:text-left">

            {/* Availability Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

              Available for Software & AI Opportunities
            </div>

            {/* Greeting */}
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Hi There!{" "}

              <span
                className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]"
                role="img"
                aria-label="waving hand"
              >
                👋🏻
              </span>
            </h1>

            {/* Name */}
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              I'm{" "}

              <span className="gradient-text">
                Mehtab Singh
              </span>
            </h2>

            {/* Role */}
            <div className="mt-7 min-h-[48px] text-2xl font-semibold text-cyan-300 sm:text-3xl">
              <Type />
            </div>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0 lg:text-lg">
              Computer Science graduate passionate about{" "}
              <span className="font-medium text-purple-300">
                software engineering, artificial intelligence,
              </span>{" "}
              and building scalable applications that solve real-world
              problems.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">

              {/* View Projects */}
              <a
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 sm:w-auto"
              >
                View My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Resume */}
              <a
                href="/resume"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-auto"
              >
                <FiDownload />

                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">

              <SocialButton
                href="https://github.com/mehtabsingh0003"
                label="GitHub"
              >
                <FaGithub />
              </SocialButton>

              <SocialButton
                href="https://www.linkedin.com/"
                label="LinkedIn"
              >
                <FaLinkedin />
              </SocialButton>

              <a
                href="#about"
                className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
              >
                Explore
                <FaArrowDown className="animate-bounce" />
              </a>

            </div>
          </div>


          {/* =================================================
              RIGHT ILLUSTRATION
          ================================================== */}

          <div className="relative flex items-center justify-center">

            {/* Main Glow */}
            <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

            {/* Illustration Card */}
            <div className="relative flex h-[380px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-white/[0.02] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:h-[470px]">

              {/* Inner Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-purple-500/[0.08]" />

              {/* Decorative Rings */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-cyan-400/10" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-purple-400/10" />

              {/* Small Decorative Dots */}
              <span className="absolute left-8 top-10 h-2 w-2 rounded-full bg-cyan-400/60" />

              <span className="absolute right-10 top-20 h-1.5 w-1.5 rounded-full bg-purple-400/70" />

              <span className="absolute bottom-14 left-16 h-1.5 w-1.5 rounded-full bg-cyan-300/60" />

              {/* Main Image */}
              <img
                src={homeLogo}
                alt="Developer working with technology"
                className="relative z-10 w-full max-w-md animate-[float_5s_ease-in-out_infinite] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
              />

              {/* Floating Tech Badge */}
              <div className="absolute left-5 top-6 z-20 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Focus
                </p>

                <p className="mt-1 text-xs font-semibold text-purple-300">
                  AI · Full Stack
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 right-5 z-20 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Building
                </p>

                <p className="mt-1 text-xs font-semibold text-cyan-300">
                  Scalable Systems
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-300 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <span className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </a>

      </section>

      {/* =====================================================
          HOME INTRODUCTION
      ====================================================== */}

      <Home2 />
    </>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      {children}
    </a>
  );
}

export default Home;
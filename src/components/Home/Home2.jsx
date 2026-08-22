import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import {
  FaLinkedinIn,
  FaCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";

function Home2() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* -------------------------------------------------
              LEFT CONTENT
          -------------------------------------------------- */}

          <div>

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
              <FaCode />

              About My Journey
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Let Me{" "}
              <span className="gradient-text">
                Introduce
              </span>{" "}
              Myself
            </h2>

            {/* Introduction */}
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400 sm:text-lg">

              <p>
                I am a{" "}
                <span className="font-semibold text-slate-200">
                  Computer Science graduate from VNIT Nagpur
                </span>{" "}
                with a strong interest in software engineering,
                artificial intelligence and building real-world
                applications.
              </p>

              <p>
                I enjoy working with{" "}
                <span className="font-semibold text-purple-300">
                  C++, Java, Python and JavaScript
                </span>
                , while continuously strengthening my problem-solving
                and Data Structures & Algorithms skills.
              </p>

              <p>
                My interests include building{" "}
                <span className="font-semibold text-cyan-300">
                  full-stack applications, AI-powered systems and
                  distributed applications
                </span>
                .
              </p>

              <p>
                On the web development side, I work with{" "}
                <span className="font-semibold text-purple-300">
                  React, Node.js, Express.js, MongoDB and Next.js
                </span>
                .
              </p>

              <p>
                I also enjoy exploring modern AI technologies such as{" "}
                <span className="font-semibold text-cyan-300">
                  LangChain, LangGraph and CrewAI
                </span>
                , and building systems around AI agents and
                intelligent workflows.
              </p>

            </div>

            {/* =================================================
                EXPERTISE HIGHLIGHTS
            ================================================== */}

            <div className="mt-9 grid gap-3 sm:grid-cols-3">

              <Highlight
                icon={<FaCode />}
                title="Software"
                text="Engineering"
              />

              <Highlight
                icon={<FaBrain />}
                title="AI & ML"
                text="Intelligent Systems"
              />

              <Highlight
                icon={<FaServer />}
                title="Systems"
                text="Scalable Applications"
              />

            </div>
          </div>


          {/* -------------------------------------------------
              RIGHT AVATAR
          -------------------------------------------------- */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 scale-75 rounded-full bg-purple-500/20 blur-3xl" />

              {/* Avatar Card */}
              <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:h-[380px] sm:w-[380px]">

                {/* Inner ring */}
                <div className="absolute inset-5 rounded-full border border-cyan-400/10" />

                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={1200}
                  scale={1.03}
                >
                  <img
                    src={myImg}
                    alt="Mehtab Singh"
                    className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl"
                  />
                </Tilt>

                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/20 bg-slate-950/90 px-5 py-2.5 text-xs font-medium text-cyan-300 shadow-xl backdrop-blur-xl">
                  Software Engineer · AI Enthusiast
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* =====================================================
            FIND ME
        ====================================================== */}

        <div className="mt-28 border-t border-white/[0.06] pt-16 text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Connect With Me
          </p>

          <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">
            Find Me{" "}
            <span className="gradient-text">
              Online
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Feel free to connect with me and explore my work,
            projects and coding journey.
          </p>

          {/* Social Links */}
          <div className="mt-7 flex justify-center gap-4">

            <SocialButton
              href="https://github.com/mehtabsingh0003"
              label="GitHub"
            >
              <AiFillGithub />
            </SocialButton>

            <SocialButton
              href="https://www.linkedin.com/"
              label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialButton>

            <SocialButton
              href="https://x.com/"
              label="X"
            >
              <AiOutlineTwitter />
            </SocialButton>

            <SocialButton
              href="https://www.instagram.com/"
              label="Instagram"
            >
              <AiFillInstagram />
            </SocialButton>

          </div>

          {/* Bottom line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2">

            <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/40" />

            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-400/40" />

          </div>

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   HIGHLIGHT CARD
========================================================= */

function Highlight({ icon, title, text }) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold text-slate-200">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          {text}
        </p>
      </div>

    </div>
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
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      {children}
    </a>
  );
}

export default Home2;
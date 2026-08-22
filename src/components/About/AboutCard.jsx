import React from "react";
import {
  FaCode,
  FaRobot,
  FaServer,
  FaPlane,
  FaTv,
} from "react-icons/fa";

function AboutCard() {
  const interests = [
    {
      icon: <FaCode />,
      text: "Exploring new technologies",
    },
    {
      icon: <FaRobot />,
      text: "Building AI-powered projects",
    },
    {
      icon: <FaServer />,
      text: "Designing scalable systems",
    },
    {
      icon: <FaPlane />,
      text: "Travelling and exploring new places",
    },
    {
      icon: <FaTv />,
      text: "Watching anime & TV shows",
    },
  ];

  return (
    <article className="relative overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative">
        {/* Intro */}
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Hello, I'm
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Mehtab Singh{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Rathore
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Computer Science Graduate · Software Developer · AI Enthusiast
          </p>
        </div>

        {/* Main Description */}
        <div className="space-y-5 text-[15px] leading-8 text-slate-300 sm:text-base">
          <p>
            I am a Computer Science graduate from{" "}
            <span className="font-semibold text-purple-300">
              VNIT Nagpur
            </span>
            , passionate about creating software that solves meaningful
            real-world problems.
          </p>

          <p>
            My primary interests lie in{" "}
            <span className="font-semibold text-cyan-300">
              Software Development
            </span>
            ,{" "}
            <span className="font-semibold text-purple-300">
              Artificial Intelligence
            </span>
            , and{" "}
            <span className="font-semibold text-indigo-300">
              Distributed Systems
            </span>
            . I enjoy turning ideas into reliable, scalable and
            user-friendly applications.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Interests */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Beyond Coding
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {interests.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-400/10 text-cyan-300 transition-colors group-hover:text-purple-300">
                  {item.icon}
                </span>

                <span className="text-sm text-slate-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative mt-8 rounded-xl border-l-2 border-cyan-400/60 bg-gradient-to-r from-cyan-400/[0.05] to-transparent px-5 py-4">
          <p className="text-sm italic leading-7 text-slate-300 sm:text-base">
            "Strive to build things that make a difference."
          </p>

          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            — Mehtab Singh Rathore
          </p>
        </div>
      </div>
    </article>
  );
}

export default AboutCard;
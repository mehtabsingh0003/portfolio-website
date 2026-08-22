import React from "react";
import {
  FaGithub,
  FaDocker,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";

import {
  DiVisualstudio,
  DiGit,
} from "react-icons/di";

function Toolstack() {
  const tools = [
    {
      name: "VS Code",
      icon: <DiVisualstudio />,
      color: "text-blue-400",
    },
    {
      name: "IntelliJ IDEA",
      icon: <FaCode />,
      color: "text-pink-400",
    },
    {
      name: "Jupyter Notebook",
      icon: <FaCode />,
      color: "text-orange-400",
    },
    {
      name: "Git",
      icon: <DiGit />,
      color: "text-orange-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-white",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      color: "text-blue-400",
    },
    {
      name: "Postman",
      icon: <FaPaperPlane />,
      color: "text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 md:grid-cols-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group relative flex min-h-[125px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="pointer-events-none absolute -top-12 h-24 w-24 rounded-full bg-purple-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

          <div
            className={`relative text-5xl transition-all duration-300 group-hover:scale-110 ${tool.color}`}
          >
            {tool.icon}
          </div>

          <p className="relative mt-4 text-center text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-white">
            {tool.name}
          </p>

          <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-1/2" />
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
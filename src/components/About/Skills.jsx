import React from "react";
import {
  CgCPlusPlus,
} from "react-icons/cg";

import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";

import {
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaBrain,
  FaNetworkWired,
  FaServer,
  FaCode,
  FaRobot,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use to build software and solve problems.",
    accent: "cyan",
    skills: [
      {
        name: "C++",
        icon: <CgCPlusPlus />,
        color: "text-blue-400",
      },
      {
        name: "Java",
        icon: <DiJava />,
        color: "text-red-400",
      },
      {
        name: "Python",
        icon: <DiPython />,
        color: "text-yellow-300",
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 />,
        color: "text-yellow-400",
      },
      {
        name: "SQL",
        icon: <FaDatabase />,
        color: "text-cyan-300",
      },
    ],
  },

  {
    title: "Web Development",
    description: "Technologies I use to develop full-stack applications.",
    accent: "blue",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "text-orange-400",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        color: "text-blue-400",
      },
      {
        name: "React",
        icon: <DiReact />,
        color: "text-cyan-300",
      },
      {
        name: "Node.js",
        icon: <DiNodejs />,
        color: "text-green-400",
      },
      {
        name: "Express.js",
        icon: <FaServer />,
        color: "text-slate-200",
      },
    ],
  },

  {
    title: "AI & Machine Learning",
    description: "AI technologies and frameworks I work with.",
    accent: "purple",
    skills: [
      {
        name: "Machine Learning",
        icon: <FaBrain />,
        color: "text-purple-300",
      },
      {
        name: "Deep Learning",
        icon: <FaRobot />,
        color: "text-fuchsia-300",
      },
      {
        name: "LangChain",
        icon: <FaCode />,
        color: "text-green-300",
      },
      {
        name: "LangGraph",
        icon: <FaNetworkWired />,
        color: "text-cyan-300",
      },
      {
        name: "CrewAI",
        icon: <FaRobot />,
        color: "text-orange-300",
      },
    ],
  },

  {
    title: "Databases & Messaging",
    description: "Data storage, communication and distributed-system technologies.",
    accent: "green",
    skills: [
      {
        name: "MongoDB",
        icon: <FaDatabase />,
        color: "text-green-400",
      },
      {
        name: "MySQL",
        icon: <FaDatabase />,
        color: "text-blue-300",
      },
      {
        name: "RabbitMQ",
        icon: <FaNetworkWired />,
        color: "text-orange-400",
      },
    ],
  },

  {
    title: "Core Computer Science",
    description: "Fundamentals that support my software engineering work.",
    accent: "violet",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <FaCode />,
        color: "text-cyan-300",
      },
      {
        name: "Object-Oriented Programming",
        icon: <FaCode />,
        color: "text-purple-300",
      },
      {
        name: "DBMS",
        icon: <FaDatabase />,
        color: "text-blue-300",
      },
      {
        name: "Operating Systems",
        icon: <FaServer />,
        color: "text-green-300",
      },
      {
        name: "Computer Networks",
        icon: <FaNetworkWired />,
        color: "text-orange-300",
      },
    ],
  },
];

function Skills() {
  return (
    <div className="space-y-10 pb-12">
      {skillGroups.map((group) => (
        <SkillGroup key={group.title} group={group} />
      ))}
    </div>
  );
}

function SkillGroup({ group }) {
  return (
    <div>
      {/* Group Header */}
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-slate-100">
          {group.title}
        </h3>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
          {group.description}
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex min-h-[120px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-500/5"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -top-10 h-20 w-20 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon */}
            <div
              className={`relative text-4xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
            >
              {skill.icon}
            </div>

            {/* Name */}
            <p className="relative mt-3 text-center text-xs font-medium leading-5 text-slate-400 transition-colors duration-300 group-hover:text-white">
              {skill.name}
            </p>

            {/* Accent */}
            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
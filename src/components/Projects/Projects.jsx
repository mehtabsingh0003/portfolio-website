import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/readme-img.png";
import chatify from "../../Assets/Projects/codeEditor.png";

function Projects() {
  const projects = [
    {
      imgPath: editor,
      title: "Multi-Agent Website Development System",
      description:
        "Built a multi-agent AI system using CrewAI with specialized Requirements Analyst, Backend Developer, and Frontend Developer agents. The system automatically generates Flask-MongoDB backends, APIs, models, routes, documentation, and responsive frontend interfaces from project requirements.",
      tech: "Python · CrewAI · Flask · MongoDB · AI Agents",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: chatify,
      title: "AI-Driven Drug–Drug Interaction Prediction",
      description:
        "Developed an AI system for predicting drug interactions using NLP and graph learning on more than 12K compounds. Built Random Forest and Graph Neural Network models with RDKit, PyTorch and PyG, achieving 80%+ accuracy, with FastAPI and Streamlit for live predictions.",
      tech: "Python · NLP · GNN · PyTorch · RDKit · Streamlit",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: editor,
      title: "Digital Agency Management Platform",
      description:
        "Built a full-stack digital agency management platform for project tracking, team collaboration, services, clients and communication. Implemented role-based authentication, admin dashboards, CRUD operations, real-time contact submissions and meeting scheduling through Cal.com.",
      tech: "Next.js · TypeScript · MongoDB · Tailwind CSS · NextAuth",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: chatify,
      title: "Distributed Notification Delivery System",
      description:
        "Engineered a high-performance, fault-tolerant event-driven notification system using modern C++. Implemented asynchronous message delivery, multi-threaded workers, idempotent retries, dead-letter queues and exponential backoff with RabbitMQ.",
      tech: "C++ · RabbitMQ · MySQL · AMQP-CPP · Boost.Beast",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },
    {
      imgPath: editor,
      title: "YouTube Clone",
      description:
        "Built a full-stack video-sharing platform inspired by YouTube using the MERN stack. Developed a responsive interface for browsing and interacting with video content, with a Node.js and Express.js backend connected to MongoDB.",
      tech: "MongoDB · Express.js · React · Node.js",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },
    {
      imgPath: chatify,
      title: "Muzic — Music Streaming Platform",
      description:
        "Built a full-stack music streaming application with user authentication, music playback, song management and search functionality. Implemented secure login and signup using the MERN stack and deployed the frontend using Vercel.",
      tech: "React · Node.js · Express.js · MongoDB · Vercel",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: editor,
      title: "AI News Summarizer",
      description:
        "Developed an AI-powered web application using Streamlit to fetch, summarize and evaluate news articles. Integrated a local LLM summarizer with an OpenRouter-based quality checker and structured the application for open-source deployment.",
      tech: "Python · GPT4All · DeepSeek · Streamlit · OpenRouter",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: chatify,
      title: "Skill-Exchange Platform",
      description:
        "Developed a full-stack peer-to-peer skill exchange platform that connects people who want to teach and learn skills. Users can list skills they offer and discover skills they want to learn through an interactive web application.",
      tech: "React · Node.js · Express.js · MongoDB",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: editor,
      title: "Car Price Prediction",
      description:
        "Developed a machine learning model for car price prediction using a dataset containing approximately 11,000 vehicle listings. Analyzed 16 automotive features to identify pricing patterns and generate accurate price estimates.",
      tech: "Python · Machine Learning · Multiple Linear Regression",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: chatify,
      title: "World Happiness Report Analysis",
      description:
        "Performed a complete data analysis workflow using Pandas and NumPy to clean, transform and analyze global happiness data. Identified relationships between economic indicators and happiness scores and created visualizations to communicate global trends.",
      tech: "Python · Pandas · NumPy · Matplotlib · Seaborn",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: editor,
      title: "Player Retention Analysis",
      description:
        "Analyzed player behavior for a mobile gaming company using complex SQL queries across users, transactions and sessions. Built player segments using CASE statements and CTEs and identified a major engagement drop between the first and second weeks.",
      tech: "SQL · Data Analysis · CTEs · Player Analytics",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },

    {
      imgPath: chatify,
      title: "Step Tracking & Flight Management System",
      description:
        "Developed a C-based application focused on activity tracking and management-system functionality. Implemented linked lists, file handling, Makefile-based compilation, bucket merging and data-mining features for efficient processing.",
      tech: "C · Linked Lists · File Handling · Makefile",
      ghLink:
        "https://github.com/mehtabsingh0003/",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      {/* Background */}
      <Particle />

      {/* Decorative Glows */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-[40%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[70%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            MY PROJECTS
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            My Recent{" "}
            <span className="gradient-text">
              Works
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of projects spanning artificial intelligence,
            full-stack development, distributed systems, machine learning,
            data analysis and software engineering.
          </p>

          {/* Accent */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/50" />
          </div>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group transition-all duration-300 hover:-translate-y-1"
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={
                  <>
                    {project.description}

                    <br />

                    <span className="mt-3 inline-block text-xs font-medium text-cyan-400">
                      {project.tech}
                    </span>
                  </>
                }
                ghLink={project.ghLink}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
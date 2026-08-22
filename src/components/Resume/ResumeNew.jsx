import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  AiOutlineDownload,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

import Particle from "../Particle";
import mainResume from "../../Assets/resumemsr.pdf";
import resume1 from "../../Assets/AI_ML_Mehtab.pdf";
import resume2 from "../../Assets/Data_Analysis_Mehtab.pdf";
import resume3 from "../../Assets/WebD_Mehtab.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

/* =========================================================
   PDF WORKER
========================================================= */

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


/* =========================================================
   RESUME COMPONENT
========================================================= */

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  /* =======================================================
     HANDLE WINDOW RESIZE
  ====================================================== */

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  /* =======================================================
     RESPONSIVE PDF WIDTH
  ====================================================== */

  const getResumeWidth = () => {
    if (width < 480) {
      return Math.min(width - 30, 420);
    }

    if (width < 768) {
      return Math.min(width - 50, 600);
    }

    if (width < 1024) {
      return 720;
    }

    return 850;
  };


  /* =======================================================
     OTHER RESUMES

     TEMPORARILY USING THE MAIN RESUME.

     Later replace mainResume with your actual
     resume2, resume3 and resume4 files.
  ====================================================== */

  const otherResumes = [
  {
    file: resume1,
    title: "AI / ML Resume",
    description: "Artificial Intelligence & Machine Learning",
  },
  {
    file: resume2,
    title: "Data Analysis Resume",
    description: "Data Analysis & Data Science",
  },
  {
    file: resume3,
    title: "Web Development Resume",
    description: "Full Stack & Web Development",
  },
];


  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-10">

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <Particle />


      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-1/4 top-[40%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">


        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Resume
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="gradient-text">
              Resume
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore my education, technical skills, projects,
            experience and problem-solving journey.
          </p>

          {/* Accent */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">

            <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-400/50" />

          </div>

        </div>


        {/* =====================================================
            MAIN RESUME
        ====================================================== */}

        <section>

          {/* =================================================
              MAIN RESUME ACTIONS
          ================================================== */}

          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Download CV */}

            <a
              href={mainResume}
              download="Mehtab_Singh_Rathore_Resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 sm:w-auto"
            >
              <AiOutlineDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />

              Download CV
            </a>


            {/* Open PDF */}

            <a
              href={mainResume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-auto"
            >
              <AiOutlineFilePdf className="text-lg" />

              Open PDF
            </a>

          </div>


          {/* =================================================
              MAIN RESUME CARD
          ================================================== */}

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5 lg:p-7">

            {/* Purple Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

            {/* Cyan Glow */}

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />


            <div className="relative z-10">

              {/* Resume Header */}

              <div className="mb-5 flex flex-col gap-3 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-xl text-red-400">
                    <AiOutlineFilePdf />
                  </div>

                  <div>

                    <h2 className="text-sm font-semibold text-slate-200 sm:text-base">
                      Mehtab Singh Rathore
                    </h2>

                    <p className="text-xs text-slate-500">
                      Main Resume · PDF
                    </p>

                  </div>

                </div>


                {/* Status */}

                <div className="flex items-center gap-2 text-xs text-slate-500">

                  <FaCheckCircle className="text-emerald-400" />

                  Current Resume

                </div>

              </div>


              {/* =================================================
                  MAIN PDF PREVIEW
              ================================================== */}

              <div className="resume flex justify-center overflow-x-auto rounded-2xl border border-white/[0.06] bg-slate-950/50 p-2 sm:p-4">

                <Document
                  file={mainResume}
                  className="flex justify-center"
                  loading={
                    <div className="flex min-h-[300px] items-center justify-center px-10 text-sm text-slate-400">
                      Loading resume...
                    </div>
                  }
                  error={
                    <div className="flex min-h-[300px] items-center justify-center px-10 text-sm text-red-400">
                      Unable to load resume.
                    </div>
                  }
                >

                  <Page
                    pageNumber={1}
                    width={getResumeWidth()}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="overflow-hidden rounded-lg shadow-2xl"
                  />

                </Document>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OTHER RESUMES
        ====================================================== */}

        <section className="mt-24">

          {/* Heading */}

          <div className="mb-10 text-center">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              More Versions
            </p>

            <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">

              Other{" "}

              <span className="gradient-text">
                Resumes
              </span>

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Other resume versions tailored for different
              opportunities.
            </p>

          </div>


          {/* =================================================
              OTHER RESUME BUTTONS
          ================================================== */}

          <div className="grid gap-5 sm:grid-cols-3">

            {otherResumes.map((resume) => (

              <div
                key={resume.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.05]"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-300 group-hover:bg-purple-500/20" />


                <div className="relative z-10">

                  {/* PDF Icon */}

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-2xl text-red-400 transition-transform duration-300 group-hover:scale-110">
                    <AiOutlineFilePdf />
                  </div>


                  {/* Title */}

                  <h3 className="mt-4 text-base font-semibold text-slate-200">
                    {resume.title}
                  </h3>


                  <p className="mt-2 text-xs text-slate-500">
                    PDF Resume
                  </p>


                  {/* =================================================
                      OPEN PDF ONLY
                  ================================================== */}

                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-white"
                  >
                    <AiOutlineFilePdf />

                    Open PDF
                  </a>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            FOOTER NOTE
        ====================================================== */}

        <div className="mt-12 text-center">

          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            More resume versions can be added here later.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ResumeNew;
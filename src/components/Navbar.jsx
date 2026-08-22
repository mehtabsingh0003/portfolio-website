import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/logo.png";

import {
  CgFileDocument,
  CgGitFork,
} from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const location = useLocation();

  /* =====================================================
     NAVBAR SCROLL EFFECT
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          navColour
            ? "border-b border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >

        {/* =================================================
            MAIN NAV CONTAINER
        ================================================== */}

        <div className="relative mx-auto flex h-[76px] max-w-[1400px] items-center px-5 sm:px-8 lg:px-10">


          {/* =================================================
              LOGO — LEFT CORNER
          ================================================== */}

          <Link
            to="/"
            onClick={closeNavbar}
            className="group relative flex shrink-0 items-center"
            aria-label="Go to homepage"
          >

            {/* Glow */}

            <div className="absolute -inset-3 rounded-full bg-purple-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

            {/* Logo */}

            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/30 group-hover:shadow-cyan-400/20 sm:h-13 sm:w-13">

              <img
                src={logo}
                alt="Mehtab Singh Rathore"
                className="h-full w-full object-contain p-1"
              />

            </div>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="ml-auto hidden items-center gap-1 md:flex">

            <NavLink
              to="/"
              icon={<AiOutlineHome />}
              onClick={closeNavbar}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              icon={<AiOutlineUser />}
              onClick={closeNavbar}
            >
              About
            </NavLink>

            <NavLink
              to="/project"
              icon={<AiOutlineFundProjectionScreen />}
              onClick={closeNavbar}
            >
              Projects
            </NavLink>

            <NavLink
              to="/resume"
              icon={<CgFileDocument />}
              onClick={closeNavbar}
            >
              Resume
            </NavLink>


            {/* =================================================
                GITHUB REPOSITORY BUTTON
            ================================================== */}

            <a
              href="https://github.com/mehtabsingh0003/portfolio-website.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View portfolio repository on GitHub"
              className="group ml-3 flex h-11 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-slate-300 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >

              <CgGitFork className="text-xl transition-transform duration-300 group-hover:rotate-12" />

              <AiFillStar className="text-base text-slate-400 transition-colors duration-300 group-hover:text-yellow-300" />

            </a>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              expanded
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={expanded}
            onClick={() => setExpanded((previous) => !previous)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 md:hidden"
          >

            {expanded ? (
              <AiOutlineClose />
            ) : (
              <AiOutlineMenu />
            )}

          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div
          className={`overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            expanded
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 sm:px-8">

            <MobileNavLink
              to="/"
              icon={<AiOutlineHome />}
              onClick={closeNavbar}
            >
              Home
            </MobileNavLink>

            <MobileNavLink
              to="/about"
              icon={<AiOutlineUser />}
              onClick={closeNavbar}
            >
              About
            </MobileNavLink>

            <MobileNavLink
              to="/project"
              icon={<AiOutlineFundProjectionScreen />}
              onClick={closeNavbar}
            >
              Projects
            </MobileNavLink>

            <MobileNavLink
              to="/resume"
              icon={<CgFileDocument />}
              onClick={closeNavbar}
            >
              Resume
            </MobileNavLink>


            {/* GitHub */}

            <a
              href="https://github.com/mehtabsingh0003/portfolio-website.git"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNavbar}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >

              <CgGitFork className="text-lg" />

              <span>GitHub Repository</span>

              <AiFillStar className="text-yellow-300" />

            </a>

          </div>

        </div>

      </nav>
    </>
  );
}


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({ to, icon, children, onClick }) {
  const location = useLocation();

  const active = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-cyan-400/10 text-cyan-300"
          : "text-slate-300 hover:bg-white/[0.06] hover:text-cyan-300"
      }`}
    >

      <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </span>

      {children}

      {/* Active indicator */}

      {active && (
        <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
      )}

    </Link>
  );
}


/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({ to, icon, children, onClick }) {
  const location = useLocation();

  const active = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
        active
          ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
          : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-cyan-300"
      }`}
    >

      <span className="text-xl">
        {icon}
      </span>

      {children}

    </Link>
  );
}

export default NavBar;
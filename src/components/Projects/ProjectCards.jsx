import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <img className="h-56 w-full object-cover" src={props.imgPath} alt={`${props.title} preview`} />
      <div className="p-6 text-left">
        <h2 className="text-xl font-semibold text-slate-100">{props.title}</h2>
        <p className="mt-4 text-justify leading-7 text-slate-300">
          {props.description}
        </p>
        <a className="mt-6 inline-flex items-center rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300" href={props.ghLink} target="_blank" rel="noopener noreferrer">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <a
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </div>
    </article>
  );
}
export default ProjectCards;

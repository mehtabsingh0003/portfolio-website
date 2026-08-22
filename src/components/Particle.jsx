import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 60,

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 110,
            density: {
              enable: true,
              value_area: 1400,
            },
          },

          color: {
            value: ["#22d3ee", "#a78bfa", "#ffffff"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.45,
            random: true,

            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.08,
              sync: false,
            },
          },

          size: {
            value: 1.5,
            random: true,

            anim: {
              enable: true,
              speed: 1.5,
              size_min: 0.5,
              sync: false,
            },
          },

          move: {
            enable: true,
            direction: "none",
            random: true,
            speed: 0.25,
            straight: false,
            out_mode: "out",
            bounce: false,
          },

          line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.06,
            width: 1,
          },
        },

        interactivity: {
          detect_on: "canvas",

          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },

            onclick: {
              enable: true,
              mode: "push",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.18,
              },
            },

            push: {
              particles_nb: 4,
            },

            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;
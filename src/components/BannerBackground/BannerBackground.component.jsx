import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { S } from "./BannerBackground.styled";
import { loadSlim } from "@tsparticles/slim";

const BannerBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 300,
            duration: 0.4,
          },
        },
      },

      fullScreen: {
        enable: false,
      },

      particles: {
        color: {
          value: "#ccf381",
        },
        links: {
          color: "#ccf381",
          distance: 350,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <S.ParticlesStyled
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }
};

export default BannerBackground;

import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import ParticlesJS, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import classNames from "classnames";

export default function Particles () {
  const [init, setInit] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (init) {
      setLoaded(true);
    }
  }, [init]);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 100,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: MoveDirection.left,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        shape: {
          type: '', // This means there is no shape
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <ParticlesJS
        options={options}
        className={classNames('z-0 transition-opacity duration-1000 ease-in', loaded ? 'opacity-100' : 'opacity-10')}
      />
    );
  }

  return <></>;
}

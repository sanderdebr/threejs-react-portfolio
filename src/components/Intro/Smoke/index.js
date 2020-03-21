import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Particle from "./Particle";

const Smoke = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.0001;
  });

  const nodesParticle = map(new Array(200), (el, i) => {
    return (
      <Particle
        position={[
          Math.random() * 40 - 20,
          Math.random() * 40 - 20,
          Math.random() * 40 - 20
        ]}
        rotation={[0, 0, Math.random() * 360]}
        key={i}
      />
    );
  });

  return <group ref={group}>{nodesParticle}</group>;
};

export default Smoke;

import React, { useRef } from "react";
import { DoubleSide, TextureLoader } from "three";
import { useFrame, useLoader } from "react-three-fiber";

const Particle = ({ ...props }) => {
  const smoke = useRef();

  const texture = useLoader(
    TextureLoader,
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82015/blue-smoke.png"
  );

  useFrame(() => {
    smoke.current.rotation.y += Math.random() * 0.001;
  });

  return (
    <mesh ref={smoke} {...props}>
      <planeBufferGeometry attach="geometry" args={[7, 7]} />
      <meshLambertMaterial
        attach="material"
        side={DoubleSide}
        transparent
        map={texture}
      />
    </mesh>
  );
};

export default Particle;

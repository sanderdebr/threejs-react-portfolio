import React, { useState, useEffect, useRef, useMemo } from "react";
import { random } from "lodash";
import { useFrame } from "react-three-fiber";

export default () => {
  const mesh = useRef();
  const time = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isActiveRef = useRef(isActive);

  // Position
  const position = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
  }, []);

  // Color
  const color = isHovered ? 0xe5d54d : isActive ? 0xf7e7e5 : 0xf95b3c;

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // Raf loop
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxBufferGeometry attach="geometry" args={[0.047, 0.5, 0.29]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
};

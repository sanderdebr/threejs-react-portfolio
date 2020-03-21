import React from "react";
import { useResource } from "react-three-fiber";

export default () => {
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
      <meshBasicMaterial attach="material" color={0xfff1ef} />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref3, pLight2] = useResource();
  const [ref2, ambLight] = useResource();

  return (
    <group>
      <FakeSphere />
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.1}>
        {ambLight && <pointLightHelper args={[ambLight]} />}
      </ambientLight>

      <pointLight
        ref={ref}
        intensity={1.1}
        position={[-6, 6, -6]}
        color={0xffcc77}
      >
        {pLight1 && <pointLightHelper args={[pLight1]} />}
      </pointLight>

      <pointLight
        ref={ref3}
        intensity={1.1}
        position={[6, 6, 6]}
        color={0xffcc77}
      >
        {pLight2 && <pointLightHelper args={[pLight2]} />}
      </pointLight>
    </group>
  );
};

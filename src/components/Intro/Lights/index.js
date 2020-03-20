import React from "react";

export default () => {
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
      <meshBasicMaterial attach="material" color={0xfff1ef} />
    </mesh>
  );

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};

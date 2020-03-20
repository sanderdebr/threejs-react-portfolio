import React from "react";
import { BackSide } from "three";

export default () => (
  <mesh>
    <boxBufferGeometry args={[30, 1, 10]} attach="geometry" />
    <meshStandardMaterial
      color={0xd2452b}
      attach="material"
      side={BackSide}
      metalness={0.4}
    />
  </mesh>
);

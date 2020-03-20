import React from "react";

const Plane = ({ color = "white", ...props }) => (
  <mesh {...props}>
    <planeBufferGeometry attach="geometry" />
    <meshBasicMaterial attach="material" color={color} />
  </mesh>
);

export default Plane;

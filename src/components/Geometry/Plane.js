import React from "react";

const Plane = ({ color = "white", map, ...props }) => (
  <mesh {...props}>
    <planeBufferGeometry attach="geometry" />
    <meshBasicMaterial attach="material" color={color} map={map} />
  </mesh>
);

export default Plane;

import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Star from "./Star";

export default () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  const nodesStars = map(new Array(50), (el, i) => {
    return <Star key={i} />;
  });

  return <group ref={group}>{nodesStars}</group>;
};

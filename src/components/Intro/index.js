import React from "react";

import Cubes from "./Cubes";
import Lights from "./Lights";
import Environment from "./Environment";

const Intro = () => (
  <>
    <Environment />
    <Lights />
    <Cubes />
  </>
);

export default Intro;

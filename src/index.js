import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import "./index.css";

import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";

function App() {
  return (
    <Canvas>
      <Cubes />
      <Lights />
      <Environment />
    </Canvas>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

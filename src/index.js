import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

import Block from "./components/Blocks/";
import Content from "./components/Content";
import state from "./store";
import "./index.css";

import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";

function App() {
  const scrollArea = useRef();
  const onScroll = e => {
    console.log(e.target.scrollTop);
    state.top.current = e.target.scrollTop;
  };
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Cubes />
        <Lights />
        <Environment />
        <Block factor={1.5} offset={0}>
          <Content />
        </Block>
        <Block factor={2} offset={1}>
          <Content />
        </Block>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

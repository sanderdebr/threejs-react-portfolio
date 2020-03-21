import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, Dom } from "react-three-fiber";
import state from "./store";
import "./index.css";

import Controls from "./components/Controls";
import Pages from "./components/Pages";
import ScrollArea from "./components/ScrollArea";

function App() {
  return (
    <>
      <Canvas camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          {/* <Controls enableDamping rotateSpeed={0.3} dampingFactor={0.1} /> */}
          <Pages />
        </Suspense>
      </Canvas>
      <ScrollArea />
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

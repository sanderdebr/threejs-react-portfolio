import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, Dom } from "react-three-fiber";
import state from "./store";
import "./index.css";

import Pages from "./components/Pages";
import ScrollArea from "./components/ScrollArea";

function App() {
  return (
    <>
      <Canvas orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Pages />
        </Suspense>
      </Canvas>
      <ScrollArea />
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

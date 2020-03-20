import React, { useRef, useEffect } from "react";
import state from "../../store";

const ScrollArea = () => {
  const scrollArea = useRef();
  const onScroll = e => {
    state.top.current = e.target.scrollTop;
  };

  useEffect(() => onScroll({ target: scrollArea.current }), []);

  return (
    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{ height: `${state.pages * 100}vh` }} />
    </div>
  );
};

export default ScrollArea;

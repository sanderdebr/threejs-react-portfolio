import React from "react";
import { Dom, useLoader } from "react-three-fiber";
import { TextureLoader, LinearFilter } from "three";
import state from "../../store";

import Intro from "../Intro";
import Block from "../Blocks";
import Content from "../Content";

const Pages = () => {
  const textures = useLoader(TextureLoader, state.images);
  const [img1, img2] = textures.map(texture => {
    texture.minFilter = LinearFilter;
    return texture;
  });

  return (
    <>
      <Block factor={1} offset={0}>
        <Intro />
      </Block>
      <Block factor={1} offset={1}>
        <Content map={img1} />
        <Dom>
          The substance can take you to heaven but it can also take you to hell.
        </Dom>
      </Block>
      <Block factor={1} offset={2}>
        <Content map={img2} left />
      </Block>
    </>
  );
};

export default Pages;

import { createRef } from "react";

const state = {
  sections: 3,
  pages: 3,
  zoom: 40,
  top: createRef(),
  images: ["/assets/textures/city.jpeg", "/assets/textures/img2.jpeg"]
};

export default state;

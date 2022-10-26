import { TextureLoader } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images.js";

const dirtTextures = new TextureLoader().load(dirtImg);
const grassTextures = new TextureLoader().load(grassImg);
const glassTextures = new TextureLoader().load(glassImg);
const woodTextures = new TextureLoader().load(woodImg);
const logTextures = new TextureLoader().load(logImg);
const groundTextures = new TextureLoader().load(grassImg);

export {
  dirtTextures,
  grassTextures,
  glassTextures,
  woodTextures,
  logTextures,
  groundTextures,
};

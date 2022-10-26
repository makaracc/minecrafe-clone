import { TextureLoader } from "three";
import { NearestFilter, RepeatWrapping } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images.js";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  logTexture,
  groundTexture,
};

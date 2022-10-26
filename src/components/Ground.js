import React from "react";
import { usePlane } from "@react-three/cannon";
import { groundTextures } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 4, 0, 0],
    position: [0, 0, 0],
  }));

  groundTextures.magFilter = NearestFilter;
  groundTextures.wrapS = RepeatWrapping;
  groundTextures.wrapT = RepeatWrapping;
  groundTextures.repeat.set(100, 100);

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTextures} />
    </mesh>
  );
};

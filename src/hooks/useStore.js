import React from "react";
import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [{ key: nanoid(), position: [-1, 0.5, -3], texture: "dirt" }],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), position: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));

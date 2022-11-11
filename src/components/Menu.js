import React from "react";
import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld] = useStore((state) => [state.saveWorld]);
  const [resetWorld] = useStore((state) => [state.resetWorld]);

  return (
    <div className="menu absolute">
      <button
        onClick={() => {
          saveWorld();
          console.log(saveWorld);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          resetWorld();
          console.log(resetWorld);
        }}
      >
        Reset
      </button>
    </div>
  );
};

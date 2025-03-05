import {Html} from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="w-full h-full flex-center top-0 left-0 absolute">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;

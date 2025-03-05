import {OrbitControls, PerspectiveCamera, View} from "@react-three/drei";
import React, {Suspense} from "react";
import Iphone from "./Iphone";
import Lights from "./Lights";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = ({index, size, item, groupRef, gsapType, controlRef, setRotationState}) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full   absolute ${index === 2 ? "right-[-200%] opacity-0" : ""}`}>
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;

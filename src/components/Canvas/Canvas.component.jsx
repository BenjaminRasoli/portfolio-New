import React from "react";
import { useGLTF, Stage, PresentationControls, Decal } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("react_logo.glb");
  return <primitive object={scene} {...props} />;
}

function React3dModel() {
  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 80 }}
        style={{
          height: "150px",
          touchAction: "none",
        }}
      >
        <color attach="background" args={["#0f172a"]} />
        <PresentationControls speed={5} global zoom={1} polar={[-0.1, 0.2]}>
          <Stage environment={null}>
            <Model scale={0.1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default React3dModel;

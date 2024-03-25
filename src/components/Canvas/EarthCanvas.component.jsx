import React, { useState, useEffect } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("earth.glb");
  return <primitive object={scene} {...props} />;
}

function Earth3dModel() {
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 750 });
  const [modelScale, setModelScale] = useState([0.06, 0.06, 0.06]);

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;

      if (newWidth < 700) {
        setCanvasSize({ width: 375, height: 470 });
        setModelScale([0.05, 0.05, 0.05]);
      } else {
        setCanvasSize({ width: 600, height: 576 });
        setModelScale([0.075, 0.075, 0.075]);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          position: [-4, 3, 6],
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        style={{
          height: `${canvasSize.height}px`,
          width: `${canvasSize.width}px`,
          touchAction: "none",
        }}
      >
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[2, 10, 5]} intensity={1} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model
          position={[0, -2.5, 0]}
          rotation={[0, 0, 0]}
          scale={modelScale}
        />
      </Canvas>
    </div>
  );
}

export default Earth3dModel;

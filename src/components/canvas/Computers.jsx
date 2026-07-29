import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { styles } from '../../styles';

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./robot_playground/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='red' />
      <spotLight
        position={[-20, 50, 5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.3} />
      <primitive
        object={scene}
        scale={isMobile ? 3 : 2.5} // Ajustez le scale en fonction de la taille de l'écran
        position={[0, -3, 0]} // Ajustez la position si nécessaire
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={`${styles.responsiveContainer} ${isMobile ? 'mt-60' : ''}`}> {/* Add margin-top for mobile */}
      <Canvas
        className={`${styles.responsiveCanvas} ${isMobile ? 'h-[70vh]' : 'h-[80vh]'}`}
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 10, 10], fov: 28 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.8}
            minPolarAngle={Math.PI / 2.8}
            autoRotate={true}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};




export default ComputersCanvas;

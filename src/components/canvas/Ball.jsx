// Ball Component
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import React, { Suspense, useState, useEffect } from "react";
import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);

  useEffect(() => {
    if (imgUrl) {
      const loader = new THREE.TextureLoader();
      loader.load(imgUrl, (texture) => {
        setDecal(texture);
      }, undefined, (error) => {
        console.error('Texture load error:', error);
      });
    }
  }, [imgUrl]);

  if (!decal) return null;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check if the icon should be displayed
  const shouldDisplay = !isMobile || !['html', 'javascript', 'css', 'typescript', 'figma', 'reactjs'].includes(icon.split('/').pop().split('.')[0]);

  if (!shouldDisplay) return null; // Do not render this component if the icon should not be displayed

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
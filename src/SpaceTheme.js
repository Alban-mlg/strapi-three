import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// This component will handle the rotation of the stars
const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return <Stars ref={starsRef} />;
};

// This component will display the SciFiHelmet model
const SciFiHelmetModel = () => {
  const gltf = useLoader(GLTFLoader, 'models/SciFiHelmet.gltf');
  return <primitive object={gltf.scene} scale={[2, 2, 2]} />;
};

// This component will create a more immersive 3D space environment with interactive elements
const SpaceTheme = () => {
  console.log('Rendering SpaceTheme component');
  const canvasRef = useRef();

  // Event handler for WebGL context lost
  const handleContextLost = (event) => {
    event.preventDefault();
    console.warn('WebGL context lost. Recovering...');
    // Here you can add any recovery logic or display a message to the user
  };

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    currentCanvas.addEventListener('webglcontextlost', handleContextLost);

    return () => {
      currentCanvas.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  return (
    <Canvas ref={canvasRef}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <AnimatedStars />
      <SciFiHelmetModel />
    </Canvas>
  );
};

export default SpaceTheme;

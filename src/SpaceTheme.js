import React, { useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Plane, Box } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

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

// This component will create a more immersive 3D space environment with interactive elements
const SpaceTheme = () => {
  console.log('Rendering SpaceTheme component');
  const boxRef = useRef();

  // Floating animation for the box
  const { scale } = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (1) {
        await next({ scale: 1.1 });
        await next({ scale: 1 });
      }
    },
    config: { mass: 5, tension: 150, friction: 50 },
  });

  // Handle WebGL context loss
  const handleContextLost = useCallback((event) => {
    event.preventDefault();
    console.warn('WebGL context lost. Recovering...');
    // Here you can add any recovery logic or display a message to the user
  }, []);

  return (
    <Canvas onContextLost={handleContextLost}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <AnimatedStars />
      <Plane args={[100, 100]} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <a.mesh ref={boxRef} scale={scale}>
        <Box args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="gray" />
      </a.mesh>
    </Canvas>
  );
};

export default SpaceTheme;

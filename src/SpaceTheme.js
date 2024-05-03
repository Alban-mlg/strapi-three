import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Plane, Box } from '@react-three/drei';

// This component will create a more immersive 3D space environment with interactive elements
const SpaceTheme = () => {
  console.log('Rendering SpaceTheme component');

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Plane args={[100, 100]} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh visible>
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <mesh>
        <Box args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>
    </Canvas>
  );
};

export default SpaceTheme;

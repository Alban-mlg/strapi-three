import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// This component will handle the rotation of the stars
const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.y = elapsedTime * 0.05; // Variable rotation speed for dynamic effect
    }
  });

  return (
    <Stars
      ref={starsRef}
      color="#FFF"
      count={5000} // Increased number of stars for a more elaborate effect
      factor={4} // Increased factor for more spread
      saturation={0} // No color saturation for pure white stars
      fade // Add a fading effect to the stars
    />
  );
};

// This component will display the SciFiHelmet model with a slow rotation
const SciFiHelmetModel = () => {
  const gltf = useLoader(GLTFLoader, 'models/SciFiHelmet.gltf');
  const helmetRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (helmetRef.current) {
      helmetRef.current.rotation.y = elapsedTime * 0.1; // Slow rotation for engaging effect
    }
  });

  return <primitive object={gltf.scene} scale={[10, 10, 10]} position={[0, 0, 0]} ref={helmetRef} />;
};

// Planets component with detailed and textured planet models
const Planets = () => {
  const textureLoader = new TextureLoader();
  const jupiterTexture = textureLoader.load('textures/2k_jupiter.jpg'); // Updated texture path for Jupiter
  const earthTexture = textureLoader.load('textures/earth.jpg');
  const marsTexture = textureLoader.load('textures/mars.jpg');

  return (
    <>
      {/* New Jupiter mesh */}
      <mesh position={[0, 0, -30]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={jupiterTexture} />
      </mesh>
      <mesh position={[-2, 0, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh position={[5, -1, -10]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={marsTexture} />
      </mesh>
      <ambientLight intensity={2} /> {/* Increased ambient light intensity */}
      {/* Point lights added near Jupiter for localized lighting */}
      <pointLight position={[5, 0, -18]} intensity={5} color="#ffffff" />
      <pointLight position={[5, 0, -22]} intensity={5} color="#ffffff" />
    </>
  );
};

// This component will create a more immersive 3D space environment with interactive elements
const SpaceTheme = () => {
  console.log('Rendering SpaceTheme component');
  const cameraRef = useRef();

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={10} />
      <directionalLight
        intensity={5} // Significantly increased directional light intensity
        position={[0, 10, 0]} // Adjusted position to better illuminate the scene
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <PerspectiveCamera ref={cameraRef} makeDefault fov={75} position={[0, 0, 30]} />
      <OrbitControls enableZoom={true} enablePan={true} target={[0, 0, 0]} />
      <AnimatedStars />
      <SciFiHelmetModel />
      <Planets />
      <mesh
        position={[0, 0, 0]}
        onClick={() => console.log('Interacted with 3D button!')}
        onPointerOver={(e) => e.object.scale.set(1.2, 1.2, 1.2)} // Scale up on hover
        onPointerOut={(e) => e.object.scale.set(1, 1, 1)} // Scale down on hover out
      >
        <boxGeometry args={[2, 0.2, 1]} /> {/* Increased size for better visibility */}
        <meshStandardMaterial color="#4FD1C5" emissive="#1A202C" /> {/* Updated color to match space theme */}
      </mesh>
    </Canvas>
  );
};

export default SpaceTheme;

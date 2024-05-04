import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
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

  return <Stars ref={starsRef} color="#FFF" />;
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

  return <primitive object={gltf.scene} scale={[2, 2, 2]} ref={helmetRef} />;
};

// Planets component with detailed and textured planet models
const Planets = () => {
  const textureLoader = new TextureLoader();
  const earthTexture = textureLoader.load('textures/earth.jpg');
  const marsTexture = textureLoader.load('textures/mars.jpg');
  const jupiterTexture = textureLoader.load('textures/jupiter.jpg'); // New texture for Jupiter

  return (
    <>
      <mesh position={[-2, 0, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh position={[5, -1, -10]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial map={marsTexture} />
      </mesh>
      {/* New Jupiter mesh */}
      <mesh position={[5, 0, -15]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial map={jupiterTexture} />
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
    <Canvas>
      <ambientLight intensity={5} /> {/* Increased ambient light intensity for better visibility */}
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
      {/* Point lights added near Jupiter for localized lighting */}
      <pointLight position={[5, 0, -18]} intensity={5} color="#ffffff" />
      <pointLight position={[5, 0, -22]} intensity={5} color="#ffffff" />
      <PerspectiveCamera ref={cameraRef} makeDefault fov={90} position={[0, 0, 50]} />
      <OrbitControls enableZoom={true} enablePan={true} target={[5, 0, -15]} />
      <AnimatedStars />
      <SciFiHelmetModel />
      <Planets />
      <Html position={[0, 0, 0]}>
        <div className="overlay">
          <button style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#7F5AF0', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s ease' }} onClick={() => console.log('Interacted with 3D button!')}>
            Explore
          </button>
        </div>
      </Html>
      {/* <CameraMovement cameraRef={cameraRef} /> */}
    </Canvas>
  );
};

// This component will handle the camera movement based on mouse position
// Temporarily disabled for stable camera view
// const CameraMovement = ({ cameraRef }) => {
//   useFrame(({ mouse }) => {
//     const x = (mouse.x * 0.2);
//     const y = (mouse.y * 0.2);
//     cameraRef.current.position.lerp(new THREE.Vector3(x, y, 30), 0.1); // Adjusted camera lerp position
//   });

//   return null;
// };

export default SpaceTheme;

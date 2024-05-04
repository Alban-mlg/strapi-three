import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// This component will handle the rotation of the stars
const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001; // Increased rotation speed for more elaborate effect
    }
  });

  return <Stars ref={starsRef} color="#FFF" />;
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
    currentCanvas.style.width = '100vw';
    currentCanvas.style.height = '100vh';
    currentCanvas.addEventListener('webglcontextlost', handleContextLost);

    return () => {
      currentCanvas.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  // Planets component (placeholder for actual implementation)
  const Planets = () => {
    // Placeholder spheres representing planets
    return (
      <>
        <mesh position={[-2, 0, -5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#7F5AF0" />
        </mesh>
        <mesh position={[5, -1, -10]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#2CB67D" />
        </mesh>
      </>
    );
  };

  return (
    <Canvas ref={canvasRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1}
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <AnimatedStars />
      <SciFiHelmetModel />
      <Planets />
      <Html position={[0, 0, 0]}>
        <div className="overlay">
          <button style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#7F5AF0', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s ease' }} onClick={() => console.log('Interacted with 3D button!')}>
            Click Me
          </button>
        </div>
      </Html>
    </Canvas>
  );
};

export default SpaceTheme;

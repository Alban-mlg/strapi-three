import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Plane, Sphere } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

// This component will create a more immersive 3D space environment with interactive elements
const SpaceTheme = () => {
  // This reference will give us direct access to the THREE.Mesh object
  const spaceRef = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // React spring expand animation
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  });

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Plane args={[100, 100]} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Sphere visible position={[0, 0, 0]} args={[1, 16, 16]}>
        <meshStandardMaterial attach="material" color="white" />
      </Sphere>
      <a.mesh
        ref={spaceRef}
        scale={props.scale}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <a.meshStandardMaterial attach="material" color={props.color} />
      </a.mesh>
    </Canvas>
  );
};

export default SpaceTheme;

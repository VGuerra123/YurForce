import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

// Console Model Component
const ConsoleModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  
  // Simulate loading a 3D model
  useEffect(() => {
    // Position the camera
    camera.position.set(0, 0, 5);
  }, [camera]);
  
  // Animate the model
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 2) * 0.15;
    meshRef.current.position.y = Math.sin(t) * 0.1;
  });
  
  // Create a simple console shape since we don't have a real model
  return (
    <group position={[0, 0, 0]}>
      {/* Main console body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial 
          color="#151542" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#00e5ff"
          emissiveIntensity={0.2}
        />
        
        {/* Screen */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[2.5, 0.1, 1.5]} />
          <meshStandardMaterial 
            color="#000000"
            roughness={0}
            metalness={1}
            emissive="#00e5ff"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Controller 1 */}
        <mesh position={[-1.2, 0, 1.2]} castShadow>
          <boxGeometry args={[0.4, 0.1, 0.6]} />
          <meshStandardMaterial 
            color="#151542"
            roughness={0.3}
            metalness={0.7}
            emissive="#ff00e5"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Controller 2 */}
        <mesh position={[1.2, 0, 1.2]} castShadow>
          <boxGeometry args={[0.4, 0.1, 0.6]} />
          <meshStandardMaterial 
            color="#151542"
            roughness={0.3}
            metalness={0.7}
            emissive="#ff00e5"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Logo */}
        <Text
          position={[0, 0.26, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="#00e5ff"
          font="https://fonts.gstatic.com/s/orbitron/v29/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6xpmIyXw.woff"
          anchorX="center"
          anchorY="middle"
        >
          YurForce
        </Text>
      </mesh>
      
      {/* Base platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2.2, 0.1, 32]} />
        <meshStandardMaterial 
          color="#0a0a2e"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
};

// Lights Component
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#00e5ff" />
      <pointLight position={[5, 5, -5]} intensity={1} color="#ff00e5" />
    </>
  );
};

// Main 3D Scene Component
const Console3D: React.FC = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Lights />
        <ConsoleModel />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Console3D;
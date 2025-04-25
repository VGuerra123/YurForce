import React, { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';

interface ParticleProps {
  count: number;
}

const ParticleField: React.FC<ParticleProps> = ({ count }) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Color
      const color = new THREE.Color();
      color.setHSL(Math.random(), 0.8, 0.8);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    const time = clock.getElapsedTime();
    
    // Rotate particle field
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.z = time * 0.03;
    
    // Move light in a circular pattern
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.5) * 20;
      light.current.position.z = Math.cos(time * 0.5) * 20;
    }
    
    // Update particle positions
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.01;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <>
      <pointLight ref={light} intensity={2} color="#00e5ff" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Draw grid lines
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(224, 224, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Horizontal lines
      const gridSize = 30;
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };
    
    drawGrid();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
          <ParticleField count={5000} />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer>
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e]/10 via-[#0a0a2e]/70 to-[#0a0a2e] pointer-events-none" />
      
      {/* Animated scanlines effect */}
      <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10" />
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#00e5ff]/5 to-[#ff00e5]/5" />
    </motion.div>
  );
};

export default Background;
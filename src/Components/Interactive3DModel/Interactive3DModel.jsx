import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

// Model component that handles the 3D model
function Model({ modelRef, isDragging, mousePosition, onDragStart, onDragEnd }) {
  const { scene } = useGLTF('/model.glb');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Clone the scene to avoid conflicts
  const clonedScene = scene.clone();
  
  // Apply initial rotation
  clonedScene.rotation.set(rotation.x, rotation.y, 0);
  
  useFrame(() => {
    if (!modelRef.current) return;
    
    if (isDragging) {
      // Direct mouse control
      const newRotationY = mousePosition.x * 0.01;
      const newRotationX = mousePosition.y * 0.005;
      
      setRotation({ x: newRotationX, y: newRotationY });
      modelRef.current.rotation.set(newRotationX, newRotationY, 0);
    }
  });
  
  const handlePointerDown = (e) => {
    e.stopPropagation();
    onDragStart();
  };
  
  const handlePointerUp = (e) => {
    e.stopPropagation();
    onDragEnd();
  };
  
  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
}

// Main component
function Interactive3DModel() {
  const modelRef = useRef();
  const containerRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [dragVelocity, setDragVelocity] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const normalizedX = (e.clientX - centerX) / centerX;
    const normalizedY = (e.clientY - centerY) / centerY;
    
    if (isDragging) {
      // Calculate velocity for inertia
      const deltaX = normalizedX - lastMousePosition.x;
      const deltaY = normalizedY - lastMousePosition.y;
      
      setDragVelocity({
        x: deltaX * 2,
        y: deltaY * 2
      });
      
      setLastMousePosition({ x: normalizedX, y: normalizedY });
    }
    
    setMousePosition({ x: normalizedX, y: normalizedY });
  };
  
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Start inertia-based spinning with GSAP
    if (Math.abs(dragVelocity.x) > 0.001 || Math.abs(dragVelocity.y) > 0.001) {
      if (modelRef.current) {
        gsap.to(modelRef.current.rotation, {
          x: modelRef.current.rotation.x + dragVelocity.x * 2,
          y: modelRef.current.rotation.y + dragVelocity.y * 2,
          duration: 1,
          ease: "power2.out"
        });
      }
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.4} />
        
        {/* Directional light for shadows and depth */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
        />
        
        {/* Additional fill light */}
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.3}
        />
        
        {/* Model */}
        <Model
          modelRef={modelRef}
          isDragging={isDragging}
          mousePosition={mousePosition}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded-lg">
        <p>Move mouse to rotate • Click + drag for inertia</p>
      </div>
    </div>
  );
}

export default Interactive3DModel;

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

function DuckModel() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-10, -10, -5);
    scene.add(fillLight);

    // Add a subtle point light for highlights
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);

    // Load Duck 3D model
    const loader = new GLTFLoader();
    loader.load(
      '/Duck.glb', // Path to the Duck.glb file
      (gltf) => {
        const model = gltf.scene;
        
        // Center and scale the model appropriately
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Scale to fit nicely in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.setScalar(scale);
        
        // Center the model
        model.position.sub(center.multiplyScalar(scale));
        
        // Add some initial rotation
        model.rotation.y = Math.PI / 4;
        
        scene.add(model);
        modelRef.current = model;
        setIsLoading(false);
        
        // Add a subtle floating animation
        gsap.to(model.position, {
          y: model.position.y + 0.1,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut"
        });
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%');
      },
      (error) => {
        console.error('Error loading Duck model:', error);
        setError('Failed to load Duck model');
        setIsLoading(false);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Mouse event handlers with improved logic
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseDown = (event) => {
      event.preventDefault();
      isMouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      setIsDragging(true);
    };

    const handleMouseMove = (event) => {
      event.preventDefault();
      
      if (!isMouseDown || !modelRef.current) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      // Clamp vertical rotation to prevent flipping
      targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));

      // Apply rotation smoothly
      gsap.to(modelRef.current.rotation, {
        x: targetRotationX,
        y: targetRotationY,
        duration: 0.1,
        ease: "power2.out"
      });

      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = (event) => {
      event.preventDefault();
      isMouseDown = false;
      setIsDragging(false);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      
      if (!camera) return;
      
      const zoomSpeed = 0.1;
      const delta = event.deltaY > 0 ? 1 : -1;
      
      camera.position.z += delta * zoomSpeed;
      camera.position.z = Math.max(2, Math.min(10, camera.position.z));
    };

    // Add event listeners to the renderer element
    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', handleMouseDown, { passive: false });
    canvas.addEventListener('mousemove', handleMouseMove, { passive: false });
    canvas.addEventListener('mouseup', handleMouseUp, { passive: false });
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('mouseleave', handleMouseUp, { passive: false });

    // Prevent context menu
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('wheel', handleWheel);
        canvas.removeEventListener('mouseleave', handleMouseUp);
        canvas.removeEventListener('contextmenu', (e) => e.preventDefault());
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  const resetView = () => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        x: 0,
        y: Math.PI / 4,
        z: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  };

  const autoRotate = () => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: modelRef.current.rotation.y + Math.PI * 2,
        duration: 3,
        ease: "power1.inOut"
      });
    }
  };

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Model</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">🦆 Interactive Duck 3D Model</h1>
        <p className="text-center text-blue-100 mt-2">Explore the 3D duck model with interactive controls</p>
      </div>

      {/* 3D Model Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      />
      
      {/* Control Panel */}
      <div className="absolute top-20 right-4 z-20 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-3">Controls</h3>
        <div className="space-y-2">
          <button 
            onClick={resetView}
            className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Reset View
          </button>
          <button 
            onClick={autoRotate}
            className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Auto Rotate
          </button>
        </div>
      </div>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-70 px-4 py-3 rounded-lg z-10 max-w-xs">
        <h4 className="font-semibold mb-2">How to Interact:</h4>
        <ul className="space-y-1 text-xs">
          <li>• Click + drag to rotate the duck</li>
          <li>• Scroll to zoom in/out</li>
          <li>• Use control buttons for quick actions</li>
        </ul>
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-700 font-semibold">Loading Duck Model...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DuckModel;

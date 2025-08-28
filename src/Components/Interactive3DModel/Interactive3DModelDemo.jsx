import React from 'react';
import Simple3DModel from './Simple3DModel';

function Interactive3DModelDemo() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Interactive 3D Model
          </h1>
          <p className="text-gray-300 text-lg">
            Click + drag to rotate • Release for inertia effects
          </p>
        </div>
      </div>
      
      {/* 3D Model Component */}
      <Simple3DModel />
      
      {/* Features List */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 text-white">
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Click + drag rotation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              GSAP inertia effects
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Responsive design
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Professional lighting
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Smooth performance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interactive3DModelDemo;

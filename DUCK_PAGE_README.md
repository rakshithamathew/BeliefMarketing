# 🦆 Duck 3D Model Page

## Overview
A new interactive 3D model viewer page has been added to display the Duck.glb model with enhanced features and controls.

## Features
- **Interactive 3D Model**: Loads and displays the Duck.glb file
- **Mouse Controls**: Click and drag to rotate the model
- **Inertia Effect**: Smooth rotation continues after releasing the mouse
- **Enhanced Lighting**: Multiple light sources for better model visibility
- **Responsive Design**: Works on all screen sizes
- **Control Panel**: Quick action buttons for reset view and auto-rotation
- **Floating Animation**: Subtle floating effect for visual appeal

## How to Access
1. Navigate to `/duck` in your browser
2. Or click the "3D Duck Model" link in the navigation bar

## Controls
- **Mouse**: Click and drag to rotate the duck model
- **Reset View**: Click the "Reset View" button to return to the initial position
- **Auto Rotate**: Click "Auto Rotate" for a smooth 360° rotation

## Technical Details
- Built with Three.js for 3D rendering
- Uses GSAP for smooth animations
- Responsive design with Tailwind CSS
- Automatic model scaling and centering
- Error handling for failed model loads

## File Structure
- `src/Components/Interactive3DModel/DuckModel.jsx` - Main component
- `src/App.js` - Routing configuration
- `src/Components/NavBar/Navbar.jsx` - Navigation integration
- `public/Duck.glb` - 3D model file

## Dependencies
All required dependencies are already included in the project:
- `three` - 3D graphics library
- `gsap` - Animation library
- `react-router-dom` - Routing

## Browser Compatibility
Works in all modern browsers that support WebGL and ES6+ features.

# Interactive 3D Model Component

A React component that loads and displays 3D GLB models with interactive controls, built using @react-three/fiber, @react-three/drei, and GSAP.

## Features

- **3D Model Loading**: Loads GLB models from the public folder
- **Mouse Movement Control**: Rotate model with mouse movement
  - Left/right movement rotates on Y-axis
  - Up/down movement tilts on X-axis
- **Click + Drag**: Click and drag to spin the model
- **Inertia Effects**: GSAP-powered smooth deceleration after drag release
- **Professional Lighting**: Ambient and directional lights for optimal model display
- **Responsive Design**: Automatically centers and scales to screen size
- **Smooth Performance**: Optimized with useFrame and proper state management

## Installation

The component requires these dependencies (already installed):
```bash
npm install @react-three/fiber @react-three/drei three gsap
```

## Usage

### Basic Usage
```jsx
import { Interactive3DModel } from './Components/Interactive3DModel';

function App() {
  return (
    <div>
      <Interactive3DModel />
    </div>
  );
}
```

### With Demo Page
```jsx
import { Interactive3DModelDemo } from './Components/Interactive3DModel';

function App() {
  return <Interactive3DModelDemo />;
}
```

## File Structure

```
src/Components/Interactive3DModel/
├── Interactive3DModel.jsx    # Main component
├── Interactive3DModelDemo.jsx # Demo page
├── index.js                   # Exports
└── README.md                  # This file
```

## Model Requirements

- Place your GLB file in the `public/` folder
- Default filename: `model.glb`
- The component will automatically load and display it

## Customization

### Changing Model Path
```jsx
// In Interactive3DModel.jsx, line 20
const { scene } = useGLTF('/your-model.glb');
```

### Adjusting Rotation Sensitivity
```jsx
// In Interactive3DModel.jsx, lines 32-33
const newRotationY = mousePosition.x * 0.01;  // Y-axis sensitivity
const newRotationX = mousePosition.y * 0.005; // X-axis sensitivity
```

### Modifying Inertia Decay
```jsx
// In Interactive3DModel.jsx, lines 42-43
x: prev.x * 0.95,  // Friction factor (0.95 = 5% decay per frame)
y: prev.y * 0.95
```

### Adjusting Lighting
```jsx
// In Interactive3DModel.jsx, lines 95-105
<ambientLight intensity={0.4} />
<directionalLight
  position={[10, 10, 5]}
  intensity={1}
  castShadow
/>
```

## Performance Tips

- The component uses `useFrame` for smooth 60fps updates
- Model cloning prevents conflicts with Three.js internals
- Event listeners are properly cleaned up in useEffect
- GSAP animations are optimized for smooth performance

## Browser Support

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers with WebGL support

## Troubleshooting

### Model Not Loading
- Ensure the GLB file is in the `public/` folder
- Check browser console for errors
- Verify the file path in the component

### Performance Issues
- Reduce model complexity if needed
- Adjust lighting intensity
- Check for memory leaks in browser dev tools

### Rotation Not Working
- Ensure mouse events are not blocked by other elements
- Check if the component has proper focus
- Verify event listener setup

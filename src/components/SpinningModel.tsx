import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';

interface SpinningModelProps {
  modelUrl: string;
}

export default function SpinningModel({ modelUrl }: SpinningModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load the GLB model with Draco decoder for compressed meshes
  const gltf = useLoader(GLTFLoader, modelUrl, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
    loader.setDRACOLoader(dracoLoader);
  });

  // Calculate bounding box, scale to fit, and center
  const scene = useMemo(() => {
    if (!gltf) return null;

    const clonedScene = gltf.scene.clone();
    
    // Enable/optimize materials on all meshes
    clonedScene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.isMeshStandardMaterial) {
            mat.roughness = 0.4;
            mat.metalness = 0.1;
          }
        }
      }
    });

    // Recalculate bounding box to center and scale
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3.5 / maxDim; 

    const center = new THREE.Vector3();
    box.getCenter(center);

    // Apply centering and scaling
    clonedScene.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    clonedScene.scale.set(scale, scale, scale);

    return clonedScene;
  }, [gltf]);

  // Slowly rotate the model and add bobbing motion
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      // groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

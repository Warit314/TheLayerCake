import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import * as THREE from 'three';

interface SpinningModelProps {
  modelUrl: string;
}

export default function SpinningModel({ modelUrl }: SpinningModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Load the 3MF model — newer three.js uses fflate internally, no JSZip needed
  const model = useLoader(ThreeMFLoader, modelUrl);

  // Calculate bounding box, scale to fit, fix orientation, and enable colors
  const scene = useMemo(() => {
    if (!model) return null;

    const clonedModel = model.clone();

    // Rotate -90° on X axis to fix face-down orientation
    clonedModel.rotation.x = -Math.PI / 2;
    clonedModel.updateMatrixWorld(true);

    // Enable vertex colors on all meshes (3MF embeds color as vertex colors)
    clonedModel.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const geom = mesh.geometry;
        if (geom.hasAttribute('color')) {
          // Has vertex colors — use a material that renders them
          mesh.material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.4,
            metalness: 0.1,
          });
        } else if (mesh.material) {
          // Keep existing material but make it look nicer
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.isMeshStandardMaterial) {
            mat.roughness = 0.4;
            mat.metalness = 0.1;
          }
        }
      }
    });

    // Recalculate bounding box after rotation
    const box = new THREE.Box3().setFromObject(clonedModel);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;

    const center = new THREE.Vector3();
    box.getCenter(center);

    clonedModel.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    clonedModel.scale.set(scale, scale, scale);

    return clonedModel;
  }, [model]);

  // Slowly rotate the model
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      // Add a slight bobbing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

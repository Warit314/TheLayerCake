import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'motion/react';

interface ThreeDViewProps {
  children: React.ReactNode;
}

export default function ThreeDView({ children }: ThreeDViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full relative overflow-visible"
      style={{ minHeight: '400px' }}
    >
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} contactShadow={false}>
            {children}
          </Stage>
        </Suspense>
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={2}
          maxDistance={10}
          autoRotate={false}
        />
      </Canvas>

      <div className="absolute bottom-4 right-4 z-10 text-[10px] text-on-surface-variant/30 font-medium">
        Drag to rotate • Scroll to zoom
      </div>
    </motion.div>
  );
}

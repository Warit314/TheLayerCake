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
      className="w-full h-full relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/20 shadow-inner"
      style={{ minHeight: '400px' }}
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-wider border border-tertiary/20 backdrop-blur-md">
          Live 3D Preview
        </span>
      </div>
      
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }}>
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

      <div className="absolute bottom-4 right-4 z-10 text-[10px] text-on-surface-variant/50 font-medium">
        Drag to rotate • Scroll to zoom
      </div>
    </motion.div>
  );
}

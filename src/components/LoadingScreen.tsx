import { useState, useEffect, useCallback } from 'react';
import { DefaultLoadingManager } from 'three';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  /** Minimum time (ms) to show the loader so it doesn't flash */
  minDisplayTime?: number;
  onFinished?: () => void;
}

export default function LoadingScreen({ minDisplayTime = 1200, onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [startTime] = useState(Date.now());

  const handleDone = useCallback(() => {
    // Ensure the loader stays visible for at least minDisplayTime
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);

    // Animate to 100% first
    setProgress(100);

    setTimeout(() => {
      setVisible(false);
      onFinished?.();
    }, remaining + 400); // +400ms for the progress bar to visually reach 100%
  }, [startTime, minDisplayTime, onFinished]);

  useEffect(() => {
    const mgr = DefaultLoadingManager;

    mgr.onProgress = (_url, loaded, total) => {
      const pct = Math.round((loaded / total) * 100);
      setProgress(pct);
    };

    mgr.onLoad = () => {
      handleDone();
    };

    // Fallback: if nothing triggers onLoad within 10s, force finish
    const fallback = setTimeout(() => {
      handleDone();
    }, 10000);

    return () => {
      clearTimeout(fallback);
      mgr.onProgress = undefined as any;
      mgr.onLoad = undefined as any;
    };
  }, [handleDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="loading-screen"
        >
          {/* Brand mark */}
          <div className="loading-brand">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="loading-logo"
            >
              THE LAYER CAKE
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="loading-subtitle"
            >
              Preparing your 3D experience…
            </motion.p>
          </div>

          {/* Progress bar */}
          <div className="loading-bar-track">
            <motion.div
              className="loading-bar-fill"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            {/* Shimmer effect */}
            <div className="loading-bar-shimmer" />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="loading-percent"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

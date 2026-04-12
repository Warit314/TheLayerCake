import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black font-headline tracking-tighter mb-4 text-on-surface">
            PRINT <span className="text-tertiary">GALLERY</span>
          </h1>
          <p className="text-secondary max-w-2xl text-lg">
            Explore our collection of high-precision 3D prints and AI-generated models.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/30 group"
            >
              <div className="aspect-square bg-surface-container-high flex items-center justify-center relative">
                <ImageIcon size={48} className="text-outline-variant group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">Project #{item}</h3>
                <p className="text-secondary text-sm">Industrial Precision Print • 0.01mm</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Upload, Brain, Factory, CheckCircle2 } from 'lucide-react';
import ThreeDView from '../components/ThreeDView';
import SpinningModel from '../components/SpinningModel';
import modelUrl from '../public/model.glb?url';
import modelPng from '../public/model.png';

export default function Home() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [heroTop, setHeroTop] = useState(0);
  const [heroHeight, setHeroHeight] = useState(2000);

  // Measure where the sentinel lives in document coordinates
  useEffect(() => {
    const measure = () => {
      if (!sentinelRef.current) return;
      setHeroTop(sentinelRef.current.offsetTop);
      setHeroHeight(sentinelRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollY } = useScroll(); // tracks window scroll, no positioning warning

  // Raw motion values — tighter range = faster fade
  // Opacity: NO spring (springs overshoot, causing the fade "leftover")
  const photoOpacity = useTransform(scrollY,
    [heroTop + heroHeight * 0.10, heroTop + heroHeight * 0.38],
    [1, 0],
    { clamp: true }
  );
  const modelOpacity = useTransform(scrollY,
    [heroTop + heroHeight * 0.20, heroTop + heroHeight * 0.45],
    [0, 1],
    { clamp: true }
  );

  // Y + Scale: spring is safe here (no visible overshoot on position/size)
  const springConfig = { stiffness: 120, damping: 22, mass: 0.5 };
  const rawPhotoY = useTransform(scrollY,
    [heroTop + heroHeight * 0.10, heroTop + heroHeight * 0.38],
    [0, -50]
  );
  const rawModelScale = useTransform(scrollY,
    [heroTop + heroHeight * 0.20, heroTop + heroHeight * 0.50],
    [0.88, 1]
  );
  const photoY = useSpring(rawPhotoY, springConfig);
  const modelScale = useSpring(rawModelScale, springConfig);

  return (
    // NOTE: no px-6 here – the sentinel must span the full page width
    // so that position:sticky has no clipped overflow ancestors
    <div className="pb-24">

      {/* ── Sentinel: full-width, 200vh tall ────────────────── */}
      {/* position:relative is required by Framer Motion        */}
      <div
        ref={sentinelRef}
        className="hero-sentinel"
        style={{ position: 'relative' }}
      >
        {/* Sticky panel — pins to top-0 while sentinel scrolls */}
        <div
          className="hero-sticky"
          style={{ position: 'sticky', top: 0, overflow: 'hidden' }}
        >
          {/* Content centered inside the sticky viewport */}
          <div className="max-w-screen-xl mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-8">

            {/* LEFT: text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-headline tracking-tighter mb-6 text-on-surface leading-none">
                PRESERVE YOUR <br />
                <span className="text-tertiary">PRECIOUS MOMENTS</span>
              </h1>
              <p className="text-secondary max-w-1xl text-sm md:text-base lg:text-lg leading-relaxed mb-8">
                Graduations. Weddings. Career milestones. Don't just frame your
                memories — hold them. We turn a single photograph into a vibrant,
                full-color 3D reality.
              </p>

              {/* Bouncing scroll hint */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                Scroll to see the transformation
              </motion.div>
            </motion.div>

            {/* RIGHT: photo → 3D crossfade */}
            <div className="relative hero-model-container">

              {/* Layer 1 – flat photo (fades out, rises up) */}
              <motion.div
                style={{ opacity: photoOpacity, y: photoY }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={modelPng}
                  alt="Your original photo"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-700 shadow">
                  📷 Your Photo
                </div>
              </motion.div>

              {/* Layer 2 – 3D model (fades in, scales up) */}
              <motion.div
                style={{ opacity: modelOpacity, scale: modelScale }}
                className="absolute inset-0"
              >
                <ThreeDView passive>
                  <SpinningModel modelUrl={modelUrl} />
                </ThreeDView>
                <motion.div
                  style={{ opacity: modelOpacity }}
                  className="absolute bottom-4 left-4 bg-tertiary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow"
                >
                  ✨ Your 3D Print
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      {/* ── End sentinel ──────────────────────────────────────── */}

      {/* Rest of page — back to centered layout */}
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Process Steps */}
        <section className="bg-surface-container-low rounded-xl p-8 md:p-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="font-headline text-3xl font-bold mb-12 tracking-tight text-on-surface">
            สั่งทำง่ายๆ ใน 3 ขั้นตอน (How it Works)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>

            {/* Step 1 */}
            <motion.div whileHover={{ y: -5 }} className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-tertiary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-tertiary text-white flex items-center justify-center">
                  <Upload size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">1. ส่งภาพให้เรา (Send Your Photo)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">ทักแชทส่งรูปภาพแห่งความทรงจำของคุณให้เราทาง LINE หรือ Instagram</p>
              <div className="aspect-square bg-surface-container-high rounded flex items-center justify-center overflow-hidden">
                                <img
                  src={modelPng}
                  alt="Your original photo"
                  className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div whileHover={{ y: -5 }} className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center border border-outline-variant">
                  <Brain size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">2. ตรวจสอบแบบ 3 มิติ (Live 3D Preview)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">เราจะส่งพรีวิว 3 มิติให้คุณหมุนดูรายละเอียดได้ 360 องศาก่อนสั่งผลิต</p>
              <div className="aspect-square bg-slate-900 rounded flex flex-col items-center justify-center p-8 relative">
                <img alt="AI Mesh Generation" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,209,255,0.4)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_6BDvDTl_7PdPshbrTdY7bMfAuLly1pgJTNFLyaLV_CeDIfCIdsLy-UA06mcN8lUgt1rPyYz26ocVXqazhNIUBxPX5ShapV3nC9_BWf8LW9LTZSP1qMHZGkqn42VoWtT0dbT2SsxZw4waGIHx48T27eeSVfdcqPkVv0usWkEEf3m8LiV897HUBJG6jVSGVnWLWzx3QBv1mDHKKQF572Pd2pJOQK0rkynCDkfJ17oCZg8c-t8-iqP4pWrVohA7U-T6AhvZJlRrSGq"
                  referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div whileHover={{ y: -5 }} className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center border border-outline-variant">
                  <Factory size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">3. รับของขวัญสุดพิเศษ (Delivered to You)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">รับชิ้นงาน 3 มิติสีสดใส พร้อมส่งตรงถึงหน้าบ้านคุณ</p>
              <div className="aspect-square bg-surface-container-high rounded flex items-center justify-center overflow-hidden p-6">
                <img alt="Physical Print Result" className="w-full h-full object-contain drop-shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD18StDSEc8eTkLooBBPCTJY8LB08kb9o3Jg8tC8fCNYqcsaJJ2V3nYKxLm9WXTN8LjVBRRe8nnruxqeuQ4Cd6jom9a0R8i_IV-n4q4B0I1bLXuM2HH7N1u05kd3X_9Ry5C94eyARLQzgCTlQViUoDY25RDa2yMi5f3XTPJhCJBwmbQF5Li3ZL9EfrOfHb-aW94cjvN2Ti827E9ubRwZhRufvjMr5OlEc_VvGHZeeVjcpIBoFBBlZh4LPfTbxp94JCJDyftL_O9uegx"
                  referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.a
            href="https://lin.ee/ZI9D6E6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="industrial-gradient text-white px-12 py-5 rounded-md font-headline text-xl font-black tracking-tighter shadow-lg flex items-center justify-center gap-3"
          >
            ทัก LINE เพื่อสั่งทำทันที / Order via LINE
          </motion.a>
          <div className="flex items-center gap-4 text-secondary font-sans text-sm uppercase tracking-widest leading-none">
            <CheckCircle2 className="text-tertiary" size={18} fill="currentColor" />
            Precision Guarantee: 0.01mm Tolerance
          </div>
        </div>

      </div>
    </div>
  );
}

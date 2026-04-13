import { motion } from 'motion/react';
import { Upload, Brain, Factory, CheckCircle2 } from 'lucide-react';
import ThreeDView from '../components/ThreeDView';
import SpinningModel from '../components/SpinningModel';
import modelUrl from '../public/model.glb?url';

export default function Home() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-6 text-on-surface leading-none">
              PRESERVE YOUR <br />
              <span className="text-tertiary">PRECIOUS MOMENTS</span>
            </h1>
            <p className="text-secondary max-w-2xl text-lg leading-relaxed">
              Graduations. Weddings. Career milestones.
              Don't just frame your memories, hold them. We build a vibrant, full-color 3D physical reality from just a single photograph.
            </p>
          </div>

          <div className="h-[400px] lg:h-[500px]">
            <ThreeDView>
              <SpinningModel modelUrl={modelUrl} />
            </ThreeDView>
          </div>
        </motion.section>

        {/* Process Timeline Section */}
        <section className="bg-surface-container-low rounded-xl p-8 md:p-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="font-headline text-3xl font-bold mb-12 tracking-tight text-on-surface">สั่งทำง่ายๆ ใน 3 ขั้นตอน (How it Works)</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>

            {/* Step 1: Send Photo */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-tertiary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-tertiary text-white flex items-center justify-center">
                  <Upload size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">1. ส่งภาพให้เรา (Send Your Photo)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">ทักแชทส่งรูปภาพแห่งความทรงจำของคุณให้เราทาง LINE หรือ Instagram</p>
              <div className="aspect-square bg-surface-container-high rounded flex items-center justify-center overflow-hidden">
                <img
                  alt="Upload Preview"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV7j7r8s-cW3nDi4BOMehaiFHJBBz-kGxONDK21iITog3NyR1EDweyfQ8EfkKImvQXCXoUOsZhYbYWgODDluZLmU-EWVhs6lzNvY7mxlGJ_kSWwf_UPcYMd_TTNz-rQx3wRB6CJUeT2yg985a2e1lOLGHsUg5BJdiqEw72LdUkvKKgbpOgcx_8ScZV5vpD-K_R4PhYrD_2nlKtVNgANdrny7pm8HiR5Ht_HNNDKvpo9m8xPqQPGgp00_TEzs-bryU22jiO7qWkiRR"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Step 2: Live Preview */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center border border-outline-variant">
                  <Brain size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">2. ตรวจสอบแบบ 3 มิติ (Live 3D Preview)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">เราจะส่งพรีวิว 3 มิติให้คุณหมุนดูรายละเอียดได้ 360 องศาก่อนสั่งผลิต</p>
              <div className="aspect-square bg-slate-900 rounded flex flex-col items-center justify-center p-8 relative">
                <img
                  alt="AI Mesh Generation"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,209,255,0.4)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_6BDvDTl_7PdPshbrTdY7bMfAuLly1pgJTNFLyaLV_CeDIfCIdsLy-UA06mcN8lUgt1rPyYz26ocVXqazhNIUBxPX5ShapV3nC9_BWf8LW9LTZSP1qMHZGkqn42VoWtT0dbT2SsxZw4waGIHx48T27eeSVfdcqPkVv0usWkEEf3m8LiV897HUBJG6jVSGVnWLWzx3QBv1mDHKKQF572Pd2pJOQK0rkynCDkfJ17oCZg8c-t8-iqP4pWrVohA7U-T6AhvZJlRrSGq"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Step 3: Delivered */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative z-10 bg-surface-container-lowest p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center border border-outline-variant">
                  <Factory size={20} />
                </div>
                <span className="font-headline font-bold text-on-surface">3. รับของขวัญสุดพิเศษ (Delivered to You)</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">รับชิ้นงาน 3 มิติสีสดใส พร้อมส่งตรงถึงหน้าบ้านคุณ</p>
              <div className="aspect-square bg-surface-container-high rounded flex items-center justify-center overflow-hidden p-6">
                <img
                  alt="Physical Print Result"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD18StDSEc8eTkLooBBPCTJY8LB08kb9o3Jg8tC8fCNYqcsaJJ2V3nYKxLm9WXTN8LjVBRRe8nnruxqeuQ4Cd6jom9a0R8i_IV-n4q4B0I1bLXuM2HH7N1u05kd3X_9Ry5C94eyARLQzgCTlQViUoDY25RDa2yMi5f3XTPJhCJBwmbQF5Li3ZL9EfrOfHb-aW94cjvN2Ti827E9ubRwZhRufvjMr5OlEc_VvGHZeeVjcpIBoFBBlZh4LPfTbxp94JCJDyftL_O9uegx"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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

import { motion } from 'motion/react';
import { Zap, ShieldCheck } from 'lucide-react';
import ThreeDView from '../components/ThreeDView';
import SpinningModel from '../components/SpinningModel';
import modelUrl from '../public/model-optimized.glb?url';

export default function ThreeDModel() {
  return (
    <main className="pt-32 pb-20 overflow-hidden">
      {/* Hero Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold font-headline text-center leading-[1.1] tracking-tighter max-w-5xl mx-auto"
        >
          เปลี่ยนรูปภาพธรรมดา ให้เป็น<span className="text-tertiary">กรอบรูป 3 มิติเรืองแสง</span>
        </motion.h1>
      </div>

      {/* Split Hero Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Product Store Area */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/15">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                Limited Edition Bangkok Series
              </span>
              <h2 className="text-3xl font-bold font-headline mb-4 text-on-surface">
                กรอบรูป 3 มิติเรืองแสง — ของขวัญชิ้นเดียวในโลก
              </h2>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black font-headline text-tertiary">฿1,290</span>
                <span className="text-xl text-on-surface-variant line-through opacity-50">฿1,850</span>
                <span className="text-xs font-bold bg-error/10 text-error px-2 py-0.5 rounded">PROMO</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center justify-between">
                  <span>เลือกขนาดที่ต้องการ (Choose Your Size)</span>
                  <span className="text-tertiary">Recommended</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border-2 border-outline-variant p-4 rounded-lg text-left hover:border-tertiary transition-colors group">
                    <div className="font-bold text-sm mb-1 group-hover:text-tertiary transition-colors">10x15 cm</div>
                    <div className="text-[10px] text-on-surface-variant">Compact Desktop</div>
                  </button>
                  <button className="border-2 border-tertiary p-4 rounded-lg text-left relative overflow-hidden bg-tertiary/5">
                    <div className="font-bold text-sm mb-1 text-tertiary">15x20 cm</div>
                    <div className="text-[10px] text-on-surface-variant">Premium Portrait</div>
                    <div className="absolute top-0 right-0 bg-tertiary text-white text-[8px] px-2 py-0.5 rounded-bl font-bold uppercase tracking-tighter">Popular</div>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg space-y-3">
                <div className="flex items-center gap-3 text-sm text-on-surface font-medium">
                  <Zap size={18} className="text-tertiary" />
                  <span>ผลิตและจัดส่งภายใน 24 ชั่วโมง</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface font-medium">
                  <ShieldCheck size={18} className="text-tertiary" />
                  <span>ตรวจสอบพรีวิว 3 มิติก่อนผลิตจริง</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="https://lin.ee/ZI9D6E6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full industrial-gradient text-white py-5 rounded-lg font-headline font-bold text-lg tracking-tight shadow-md flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
              >
                สั่งทำผ่าน LINE @thelayercake
              </a>
              <p className="text-center text-on-surface-variant text-xs font-medium uppercase tracking-widest px-4 leading-relaxed">
                Chat to Order: ทักแชทเพื่อปรึกษาและส่งภาพของคุณให้เราทันที
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Product Home */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Lithophane Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm h-full flex flex-col"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                alt="3D Printed Lithophane"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_9zBXiMrTp63HYFC8AMaUjEsHaXQzuzndocjSLRBy3lNL6FGuxESwQpHm1x55Oq5YhijZw9AOfXXESd-NGjaXY2pYbOddxlN_430CUDZhpp291fiExlVlavEu7BXjAuqSKZ4bPRgz5COMg6gDnQDv9eNQ7vnTBEeNh6iSdzJdNUk-PHD2n93_XPN8jPyXs-hRtW4zkaK3Gyhnq9GdKEpIdC2tfuFcZuHWMKIkvIek9BEU1zAiKy2tkBOtb9dCCNmBMLeyC1qJL3z1"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 bg-surface-container-lowest flex-grow flex flex-col justify-between">
              <div>
                <span className="text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Technology</span>
                <h3 className="text-xl font-bold font-headline mb-2">Backlit CMYK Lithophane</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  เปลี่ยนภาพถ่ายสีให้เป็นแผ่นภาพ 3 มิติที่ส่องสว่างด้วยเทคนิคพิมพ์ซ้อนทับความละเอียดสูง
                </p>
              </div>
            </div>
          </motion.div>

          {/* Live 3D Preview Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm h-full flex flex-col md:translate-y-12 border-2 border-tertiary/20"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
              <ThreeDView>
                <SpinningModel modelUrl={modelUrl} />
              </ThreeDView>
            </div>
            <div className="p-6 bg-surface-container-lowest flex-grow flex flex-col justify-between">
              <div>
                <span className="text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Interactive</span>
                <h3 className="text-xl font-bold font-headline mb-2">Interactive Live 3D Preview</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  สบายใจก่อนสั่งทำ! ทีมงานจะส่งลิงก์จำลองผลงาน 3 มิติให้คุณหมุนและซูมดูรายละเอียดได้ทุกทิศทางก่อนเริ่มพิมพ์จริง
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

import { motion } from 'motion/react';
import { UploadCloud, ArrowDown, Zap, ShieldCheck, Factory } from 'lucide-react';
import ThreeDView from '../components/ThreeDView';
import SpinningModel from '../components/SpinningModel';
import modelUrl from '../public/model.glb?url';

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
          เปลี่ยนรูปภาพของคุณให้เป็น<span className="text-tertiary">นวัตกรรม 3 มิติ</span>
        </motion.h1>
      </div>

      {/* Split Hero Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Upload Module */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative">
            {/* Decor Arrow */}
            <div className="absolute -top-12 left-10 flex flex-col items-center">
              <span className="text-xs font-medium text-slate-400 mb-1">ภาพครอบครัวของคุณ</span>
              <ArrowDown className="text-slate-300" size={16} />
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/15">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden relative group cursor-pointer bg-surface-container-low border-2 border-dashed border-outline-variant hover:border-tertiary transition-colors">
                <img
                  alt="Thai family photo placeholder"
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8o_CVKepOsKgdpZYGzH9Rp8INJVYRMZNIPF9vKLl-v-GtI_bkh5-aUcqXFXyXPcGmjGOD3aWNsRdJlPG3kXVg-mfiq2j5zhptzXnUalGoBPe49E22pKBolRDdICL_0NfmDtFgVRhUOy7BNFtuqBIb1pXUdcEzdpU-OLoWI7xGCTv2oBvWhvwCB0C60oCRDG6R6-R-jrD0WkWkXgijMKw_XwIItZ0IB_Mjeoe2nld44Yq_k30xwfMMRrbCvUJiSAv1Q6GIn_PTPAsg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                  <UploadCloud className="mb-2" size={40} />
                  <span className="text-sm font-medium">ลากไฟล์มาที่นี่ หรือ คลิกเพื่อเลือกภาพ</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full industrial-gradient text-white py-4 rounded-lg font-headline font-bold text-lg tracking-tight shadow-md opacity-80 cursor-default flex items-center justify-center gap-3">
                  <UploadCloud size={20} />
                  อัปโหลดภาพของคุณ
                </button>
                <p className="text-center text-on-surface-variant font-medium">เริ่มสร้างความทรงจำแบบ 3 มิติ</p>
              </div>

              <div className="mt-8 pt-8 border-t border-surface-container-high grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="text-2xl font-bold font-headline block">24h</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Turnaround</span>
                </div>
                <div className="text-center border-x border-surface-container-high">
                  <span className="text-2xl font-bold font-headline block">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Precision</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold font-headline block">Global</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Shipping</span>
                </div>
              </div>
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
                <h3 className="text-xl font-bold font-headline mb-2">Live 3D Preview</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  สัมผัสประสบการณ์ชมผลงานแบบ 3 มิติได้ทันที หมุนและซูมดูรายละเอียดได้ทุกทิศทางก่อนการสั่งผลิต
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bento Grid Feature Section */}
      {/* <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-xl p-10 flex flex-col justify-end relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDA41m_pDTIzy51wrOGZk_D2EMSn_hvNoR-7vsY-EF7WhmWuW2XJNYQ4wSczA0zW7troi-Ob2-xUsiv9jO8FeaDQXPiL980rfamjZdtx5zFcYcJySX08k6cgfPK3FPNdaU3OJ7sW1evDYierJCpjbbhQLJ8pmy08UV4yQjEZD6rhgXLpi7FqIzsQfx4dWOa6-OP0CXG3E9GZDQinxRH_qvDxfdxZeLyj7jLx6aPDV-8SEiQw-3-WUJd77HqnMQSRkatGQy6ciBWdq"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-3xl font-bold font-headline mb-4 relative z-10">Laboratory Grade Precision</h2>
            <p className="text-on-surface-variant max-w-sm relative z-10">ทุกชิ้นงานผ่านการตรวจสอบคุณภาพระดับอุตสาหกรรมด้วยเครื่องพิมพ์รุ่นล่าสุดที่มีความแม่นยำระดับไมครอน</p>
          </div>

          <div className="md:col-span-2 bg-tertiary text-white rounded-xl p-8 flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold font-headline mb-1">Bangkok Facility</h4>
              <p className="opacity-80 text-sm">การผลิตในไทย รวดเร็ว และไม่ต้องรอสินค้านาน</p>
            </div>
            <Factory className="opacity-40" size={48} />
          </div>

          <div className="bg-surface-container-high rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <Zap className="text-tertiary mb-3" size={40} />
            <span className="font-headline font-bold">Express Build</span>
          </div>

          <div className="bg-surface-container-highest rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <ShieldCheck className="text-tertiary mb-3" size={40} />
            <span className="font-headline font-bold">QA Certified</span>
          </div>
        </div>
      </div> */}
    </main>
  );
}

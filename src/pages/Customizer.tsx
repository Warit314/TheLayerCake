import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Maximize2, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  ChevronDown, 
  Image as ImageIcon
} from 'lucide-react';

export default function Customizer() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [size, setSize] = useState('10x15');

  return (
    <main className="pt-24 pb-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section: 60/40 Split */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* 60% Left: Interactive Photo */}
        <div className="lg:w-[60%] relative group">
          <div className="sticky top-28 bg-surface-container-low overflow-hidden rounded-xl aspect-[4/3] shadow-sm relative">
            {/* Base Image (Light OFF - Textured Plastic) */}
            <div className="absolute inset-0 w-full h-full bg-slate-900 flex items-center justify-center">
              <img 
                alt="Textured Plastic Model" 
                className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLightOn ? 'opacity-0' : 'opacity-80 mix-blend-screen'}`} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAF_TZ7vAsVh5q-oDrmWFb4MeUx7FRgYbRy-uroo7OUIBStw4TY21BgNxz7C4Wxrty9rsoXFju1i7iHNa7qZJO0N-W8Zm-pa9yvBF_8X7nF3ktqowYlhkrvsjPJK4rkbJv3RHFaU8dpjpOr49lr5rGjphwQP7KEFILz8D6alcvpoPjK5HgwceHWBSNpib6mQLlqCMP7AqNh_tbhSnL_3j7D8VzauOnK0AlVh0iB70tdwOdq7h8Ecw9YsMwTGeiWs2LM9C5teyQd4rP"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Light ON Image (Backlit CMYK) */}
            <img 
              alt="CMYK Lithophane of Wat Arun Sunset" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLightOn ? 'opacity-100' : 'opacity-0'}`} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkvqEBW30Nxuki9CGGiJrIIlP1kzzAvSZyjmbfBSqp8klgUPFAAK3A4cPfOiEXyfC2J_0Cq4dj0mIVLbW0qereSX8-vmxg-eDfhs225cpCMxKXVbUd8jibIhSzLzQHfM7746Zk6vKZt7-U7gEgbaNHeX6jCyjjCLVRBKM0j24Z9DgHSoy0Al0mWYOWm6O0_dnnuvuLwUli7h2bP9zjOa7lhWsu3ytFFbV5cIsuBDuUlvXbPLzTQQqamcDy_W5ZvLSvOGiLU27GIUZG"
              referrerPolicy="no-referrer"
            />
            
            {/* Status Label */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm transition-colors duration-500 flex items-center gap-2 ${isLightOn ? 'bg-cyan-400/90 text-white' : 'bg-surface-container-highest/90 text-on-surface'}`}>
              <div className={`w-2 h-2 rounded-full ${isLightOn ? 'bg-white animate-pulse' : 'bg-slate-400'}`}></div>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                {isLightOn ? 'Light ON: Backlit CMYK' : 'Light OFF: Textured Plastic'}
              </p>
            </div>

            {/* Toggle Switch UI */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-md px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-outline-variant/30">
              <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${!isLightOn ? 'text-on-surface' : 'text-on-surface-variant/50'}`}>
                Light Off
              </span>
              
              <button 
                onClick={() => setIsLightOn(!isLightOn)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-500 outline-none focus:ring-4 focus:ring-tertiary/30 ${isLightOn ? 'bg-cyan-400' : 'bg-surface-container-highest'}`}
                aria-label="Toggle Light"
              >
                <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLightOn ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </button>
              
              <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isLightOn ? 'text-cyan-600' : 'text-on-surface-variant/50'}`}>
                Light On
              </span>
            </div>
          </div>
        </div>

        {/* 40% Right: Configuration Panel */}
        <div className="lg:w-[40%] flex flex-col">
          <div className="mb-8">
            <span className="text-tertiary font-headline font-bold tracking-widest text-sm uppercase">Limited Edition Bangkok Series</span>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mt-2">
              กรอบรูป CMYK Lithophane ของขวัญสุดพิเศษ กรุงเทพฯ
            </h1>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="text-4xl font-headline font-bold text-on-surface">฿1,290</span>
              <span className="text-slate-400 line-through text-lg">฿1,850</span>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">PROMO</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Size Selection */}
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-4 uppercase tracking-tighter">เลือกขนาด (Choose Size)</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setSize('10x15')}
                  className={`p-4 border-2 rounded-xl text-left transition-all ${size === '10x15' ? 'border-cyan-400 bg-white' : 'border-outline-variant hover:border-primary'}`}
                >
                  <span className="block font-bold text-on-surface">10x15 cm</span>
                  <span className="text-xs text-secondary italic">Compact Desktop</span>
                </button>
                <button 
                  onClick={() => setSize('15x20')}
                  className={`p-4 border-2 rounded-xl text-left transition-all ${size === '15x20' ? 'border-cyan-400 bg-white' : 'border-outline-variant hover:border-primary'}`}
                >
                  <span className="block font-bold text-on-surface">15x20 cm</span>
                  <span className="text-xs text-secondary">Premium Portrait</span>
                </button>
              </div>
            </div>


            {/* Actions */}
            <div className="flex flex-col gap-3 pt-4">
              <a 
                href="https://lin.ee/ZI9D6E6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full industrial-gradient text-white py-5 rounded-xl font-headline font-bold text-lg tracking-wide flex items-center justify-center gap-3 shadow-md hover:scale-[1.02] transition-transform"
              >
                สั่งทำผ่าน LINE @thelayercake
              </a>
              <p className="text-center text-on-surface-variant text-xs font-medium uppercase tracking-widest px-4 leading-relaxed">
                Chat to Order: ทักแชทเพื่อปรึกษาและส่งภาพของคุณให้เราทันที
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="text-center">
                <Maximize2 className="mx-auto text-tertiary mb-1" size={20} />
                <p className="text-[10px] font-bold uppercase text-secondary leading-tight">3D Printed<br />Precision</p>
              </div>
              <div className="text-center">
                <Truck className="mx-auto text-tertiary mb-1" size={20} />
                <p className="text-[10px] font-bold uppercase text-secondary leading-tight">Fast Shipping<br />Bangkok</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto text-tertiary mb-1" size={20} />
                <p className="text-[10px] font-bold uppercase text-secondary leading-tight">High Clarity<br />CMYK Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="py-20 border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6 leading-tight">เปลี่ยนความทรงจำให้กลายเป็นงานศิลปะ 3 มิติ</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  สัมผัสประสบการณ์ใหม่ในการมอบของขวัญด้วย **เทคโนโลยีพิมพ์ 3 มิติ** ที่ทันสมัยที่สุด เราไม่ได้แค่พิมพ์ภาพ แต่เราสร้างมิติแห่งแสงและสีด้วย CMYK Lithophane ที่ให้ความคมชัดและสดใสเหมือนจริงเมื่อวางประดับไว้ในที่ที่มีแสงสว่าง
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-surface-container-low text-primary text-sm font-medium rounded-full">#ของขวัญวันเกิด</span>
                  <span className="px-4 py-2 bg-surface-container-low text-primary text-sm font-medium rounded-full">#ของขวัญครบรอบ</span>
                  <span className="px-4 py-2 bg-surface-container-low text-primary text-sm font-medium rounded-full">#3DPrintingBangkok</span>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16"></div>
                <blockquote className="relative z-10 italic text-secondary leading-relaxed">
                  "เป็นของขวัญที่ประทับใจมากค่ะ รายละเอียดเล็กๆ น้อยๆ ในภาพออกมาครบถ้วน สีสวยเวลาเปิดไฟ แนะนำสำหรับใครที่มองหาของขวัญชิ้นเดียวในโลก"
                  <footer className="mt-4 not-italic font-bold text-on-surface">— ลูกค้าจากกรุงเทพฯ</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container-low -mx-4 md:-mx-8 px-4 md:px-8 py-20 rounded-[3rem]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface">คำถามที่พบบ่อย (FAQ)</h2>
            <p className="text-secondary mt-4">ข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์และการสั่งซื้อ</p>
          </div>
          <div className="space-y-4">
            <FAQItem 
              title="Lithophane คืออะไร?" 
              content="Lithophane คือผลงานศิลปะที่สร้างขึ้นจากการพิมพ์วัสดุโปร่งแสงที่มีความหนาต่างกัน เมื่อมีแสงส่องผ่านจากด้านหลัง จะปรากฏเป็นภาพที่มีรายละเอียดและมิติสวยงาม" 
            />
            <FAQItem 
              title="ต้องใช้เวลานานแค่ไหนในการผลิต?" 
              content="เนื่องจากเป็นงานฝีมือที่ใช้เทคโนโลยีความละเอียดสูง โดยปกติจะใช้เวลาผลิต 3-5 วันทำการ และจัดส่งในกรุงเทพฯ ภายใน 1-2 วัน" 
            />
            <FAQItem 
              title="สามารถใช้รูปภาพประเภทใดได้บ้าง?" 
              content="คุณสามารถใช้รูปถ่ายจากโทรศัพท์มือถือ หรือกล้องดิจิตอลได้ทุกประเภท แนะนำให้ใช้ภาพที่มีความสว่างเพียงพอและไม่เบลอเพื่อผลลัพธ์ที่ดีที่สุด" 
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
      <details className="group">
        <summary className="list-none flex justify-between items-center cursor-pointer">
          <span className="font-bold text-on-surface">{title}</span>
          <ChevronDown className="group-open:rotate-180 transition-transform" size={20} />
        </summary>
        <div className="pt-4 text-on-surface-variant leading-relaxed">
          {content}
        </div>
      </details>
    </div>
  );
}

import { motion } from 'motion/react';
import { Instagram, MessageCircle, ShoppingBag, ExternalLink } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LINE',
      id: '@thelayercake',
      description: 'Instant Support & Custom Orders',
      icon: <MessageCircle size={32} />,
      color: 'bg-[#06C755]',
      link: '#', // Placeholder
    },
    {
      name: 'INSTAGRAM',
      id: '@thelayercake.3d',
      description: 'Behind the Scenes & Portfolio',
      icon: <Instagram size={32} />,
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      link: '#', // Placeholder
    },
    {
      name: 'SHOPEE',
      id: 'thelayercake_shop',
      description: 'Shop Our Industrial Physical Assets',
      icon: <ShoppingBag size={32} />,
      color: 'bg-[#EE4D2D]',
      link: '#', // Placeholder
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-6 text-on-surface leading-none uppercase">
            Connect With<br />
            <span className="text-tertiary">The Laboratory</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Choose your preferred digital protocol to reach our team for support, custom requests, or to explore our shop.
          </p>
        </motion.section>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-surface-container-low rounded-2xl p-10 flex flex-col items-center text-center border border-outline-variant/30 overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${social.color} opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity`}></div>
              
              <div className={`w-20 h-20 ${social.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {social.icon}
              </div>

              <h3 className="font-headline text-2xl font-black mb-2 text-on-surface tracking-tighter">
                {social.name}
              </h3>
              
              <p className="font-mono text-cyan-600 text-sm font-bold mb-4 uppercase tracking-widest">
                {social.id}
              </p>

              <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow">
                {social.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-widest text-on-surface group-hover:text-tertiary transition-colors">
                Open Digital Protocol
                <ExternalLink size={14} />
              </div>

              {/* Bottom Border Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${social.color} opacity-20`}></div>
            </motion.a>
          ))}
        </div>

        {/* Fine Print */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center text-[10px] text-slate-400 font-mono uppercase tracking-[0.3em]"
        >
          Response Time: Latency &lt; 24h // Lab Status: Operational
        </motion.div>
      </div>
    </div>
  );
}

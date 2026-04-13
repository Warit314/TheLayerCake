import logo from '../public/image.png';


const navItems = [
  { label: 'Home', href: '#home' },
  { label: '3D Model', href: '#threedmodel' },
  { label: 'Lithophane', href: '#lithophane' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src={logo} 
            alt="The Layer Cake Logo" 
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-xl font-bold tracking-tighter text-slate-900 font-headline">
            THE LAYER CAKE
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://lin.ee/ZI9D6E6"
            target="_blank"
            rel="noopener noreferrer"
            className="industrial-gradient text-white px-6 py-2 rounded-md font-headline text-sm font-bold opacity-80 flex items-center justify-center hover:scale-[1.05] transition-transform"
          >
            Chat With Us
          </a>
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 overflow-hidden bg-slate-200">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHinagE9BFbfkRzgX6F55o9EuuafieA7pXJ6Jv-AabGcA3sCDQrrNS7CSNH0RgqGm9BlY4QNC5_7Kd5vC8u9KpjikRbO69zLx0s59NKGwI68PZEeMwR5QGeOo9jy8YqZMnoTk2enRS2HhWYinupQyyUvm3MW0FjOMZDFPGZ9Y05u3_uP3qdoImRTsxFJPWW4PNbpbRiqjtcLYz4hgCr2dVP7KXpcFQi7WMIJCb7Z7S1hFzloq_spl2DwNwsW-crKT1O_7LhuTstQhn"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

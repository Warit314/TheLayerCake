import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <div 
          className="text-xl font-bold tracking-tighter text-slate-900 font-headline cursor-pointer"
          onClick={() => onPageChange(Page.Showcase)}
        >
          PRECISION 3D
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          <button 
            onClick={() => onPageChange(Page.Showcase)}
            className={`transition-colors ${currentPage === Page.Showcase ? 'text-cyan-600 font-bold border-b-2 border-cyan-600 pb-1' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Showcase
          </button>
          <button 
            onClick={() => onPageChange(Page.AILab)}
            className={`transition-colors ${currentPage === Page.AILab ? 'text-cyan-600 font-bold border-b-2 border-cyan-600 pb-1' : 'text-slate-500 hover:text-slate-900'}`}
          >
            AI Lab
          </button>
          <button 
            onClick={() => onPageChange(Page.Customizer)}
            className={`transition-colors ${currentPage === Page.Customizer ? 'text-cyan-600 font-bold border-b-2 border-cyan-600 pb-1' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Customizer
          </button>
          <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Upload</a>
          <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Gallery</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="industrial-gradient text-white px-6 py-2 rounded-md font-headline text-sm font-bold opacity-80 cursor-default">
            Start Build
          </button>
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

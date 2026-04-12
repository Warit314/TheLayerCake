export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/30 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-light tracking-[0.2em] uppercase text-slate-400">
          © 2024 PRECISION 3D BANGKOK. THE DIGITAL INDUSTRIALIST.
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-light tracking-[0.2em] uppercase text-slate-400">
          <a className="hover:text-cyan-600 transition-colors" href="#">Technical Specs</a>
          <a className="hover:text-cyan-600 transition-colors" href="#">Privacy Protocol</a>
          <a className="hover:text-cyan-600 transition-colors" href="#">Lab Locations</a>
          <a className="hover:text-cyan-600 transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

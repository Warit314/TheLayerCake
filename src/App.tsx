/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AILab from './pages/ThreeDModel';
import Customizer from './pages/Customizer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onFinished={() => setLoaded(true)} />

      <div
        className="min-h-screen flex flex-col"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <div className="flex-grow">
          <section id="home" className="scroll-mt-20">
            <Home />
          </section>
          <section id="threedmodel" className="scroll-mt-20">
            <AILab />
          </section>
          <section id="lithophane" className="scroll-mt-20">
            <Customizer />
          </section>
          <section id="gallery" className="scroll-mt-20">
            <Gallery />
          </section>
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}


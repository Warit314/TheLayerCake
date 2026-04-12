/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Showcase from './pages/Showcase';
import AILab from './pages/AILab';
import Customizer from './pages/Customizer';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Showcase);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Showcase:
        return <Showcase />;
      case Page.AILab:
        return <AILab />;
      case Page.Customizer:
        return <Customizer />;
      default:
        return <Showcase />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatButton from './AIChatButton';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <AIChatButton />
    </div>
  );
};

export default Layout;
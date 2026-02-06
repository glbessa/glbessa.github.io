import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
              glbessa
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'} transition-colors`}
              >
                Home
              </Link>
              <Link 
                to="/posts" 
                className={`${isActive('/posts') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'} transition-colors`}
              >
                Posts
              </Link>
              <Link 
                to="/projects" 
                className={`${isActive('/projects') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'} transition-colors`}
              >
                Projetos
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'} transition-colors`}
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/posts" 
                  className={`px-3 py-2 rounded-md ${isActive('/posts') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Posts
                </Link>
                <Link 
                  to="/projects" 
                  className={`px-3 py-2 rounded-md ${isActive('/projects') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p className="mb-2">© {new Date().getFullYear()} Gabriel Leite Bessa. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/glbessa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/gabrielleitebessa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
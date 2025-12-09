import React, { useState, useEffect } from 'react';
import { MoreVertical, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../constants';
import { useProject } from '../contexts/ProjectContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { selectedProject, setSelectedProject } = useProject();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // If a project is selected, the header changes mode.
  // Clicking X clears the selection, effectively "going back".
  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // When clicking mobile nav links, ensure we close the menu AND clear any selected project
  // This ensures "Work" takes you to the Work home, not just the currently open project.
  const handleMobileNavClick = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* 
        Header:
        - Fixed, z-index higher than modal (120 vs 100)
        - Height: py-5 (~80px total height)
        - Border: Gold Line (border-tykoe-gold)
        - Brighter Gradient: from-[#250808] to-[#401212]
      */}
      <nav 
        className="fixed top-0 w-full z-[120] font-mono py-5 border-b border-tykoe-gold bg-gradient-to-br from-[#250808] to-[#401212]"
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative min-h-[40px]">
          
          {/* LEFT: Menu Trigger (Mobile Only) */}
          <div className="flex items-center">
            <button 
                className={`md:hidden flex items-center justify-center transition-all duration-300 group z-20 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
            >
                <MoreVertical size={28} className="text-tykoe-periwinkle group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* CENTER (Mobile) / LEFT (Desktop): Logo Wrapper 
              - Mobile: Absolute centered.
              - Desktop: Static (flows in flex), left aligned.
          */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:block">
            <div className="relative flex justify-center md:justify-start">
                {/* 
                  Periwinkle Wave Decoration 
                  Behind text (-z-10).
                  
                  LAYOUT:
                  - Mobile: Centered on text. width 120% (Slightly wider than text).
                  - Desktop: Left aligned relative to text. 
                    - Reduced width to 140% to prevent excessive length on wide screens.
                    - Translated left by 5% to center the 'meat' of the wave behind the word start.
                  - ViewBox: 0 0 520 60 (Tightly fits the path to ensure true centering).
                */}
                <svg 
                    className="absolute top-1/2 -translate-y-1/2 -z-10 pointer-events-none text-tykoe-periwinkle
                               left-1/2 -translate-x-1/2 w-[120%] 
                               md:left-0 md:translate-x-[-5%] md:w-[140%]" 
                    viewBox="0 0 520 60" 
                    fill="none" 
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path 
                        d="
                        M 0 30 
                        Q 10 10, 20 30 T 40 30 
                        T 60 30 T 80 30 
                        T 100 30 T 120 30 
                        T 140 30 T 160 30 
                        T 180 30 T 200 30 
                        T 220 30 T 240 30 
                        T 260 30 T 280 30 
                        T 300 30 T 320 30 
                        T 340 30 T 360 30 
                        T 380 30 T 400 30
                        T 420 30 T 440 30
                        T 460 30 T 480 30
                        T 500 30 T 520 30
                        " 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Logo Text: 
                    - Font: EB Garamond (font-garamond)
                    - Weight: ExtraBold (800) -> font-extrabold
                    - Style: Italic
                    - Tracking: Wide
                    - Padding: Removed pl-2 to ensure true centering on mobile and left align on desktop.
                */}
                <Link 
                    to="/" 
                    className="text-2xl md:text-4xl font-garamond font-extrabold italic tracking-[0.4em] text-tykoe-gold hover:text-white transition-colors flex items-center gap-2 group drop-shadow-[0_0_8px_rgba(255,179,0,0.3)]"
                    onClick={() => setSelectedProject(null)}
                >
                    {SITE_CONFIG.name.toUpperCase()}
                </Link>
            </div>
          </div>

          {/* RIGHT: Desktop Nav or Close Project */}
          <div className="flex items-center justify-end">
            {selectedProject ? (
              /* PROJECT MODE: Show Red->Gold Spinning X */
              <button 
                onClick={handleCloseProject}
                className="flex items-center gap-2 text-tykoe-crimson hover:text-tykoe-gold transition-colors duration-300 group"
                aria-label="Close Project"
              >
                <span className="hidden md:inline text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Close View</span>
                <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            ) : (
              /* STANDARD MODE: Nav Links */
              <div className="hidden md:flex space-x-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-tykoe-periwinkle group py-2 ${
                      location.pathname === link.path 
                        ? 'text-tykoe-gold' 
                        : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-tykoe-gold transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-[130] bg-nebula-maroon/95 backdrop-blur-xl flex flex-col justify-center transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Close Button - No Box, Red -> Gold, Spin */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-tykoe-crimson hover:text-tykoe-gold transition-colors duration-300 group"
          aria-label="Close Menu"
        >
          <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* 
          Container Wrapper: Centered in screen via parent's flex-col/justify-center.
          Internal Content: flex-col items-start ensures text is left-aligned relative to this container.
        */}
        <div className="flex flex-col items-start space-y-12 pl-12 w-full max-w-md mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleMobileNavClick}
              className="text-5xl font-consolas font-bold text-tykoe-crimson hover:text-tykoe-gold transition-colors tracking-tighter"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* System Online: Gold with Brackets */}
        <div className="absolute bottom-12 w-full text-center text-tykoe-gold font-mono text-xs uppercase tracking-[0.2em] animate-pulse">
            [ SYSTEM ONLINE ]
        </div>
      </div>
    </>
  );
};

export default Navigation;
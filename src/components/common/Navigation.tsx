// src/components/common/Navigation.tsx

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import { Zap } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12">
            <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] transition-all duration-200 group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.4)] tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
              KINETIC<span className="font-normal tracking-normal" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.email</span>
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              BETA
            </span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" active={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/learn" active={isActive('/learn')}>
            Learn
          </NavLink>
          <NavLink to="/examples" active={isActive('/examples')}>
            Examples
          </NavLink>
          <NavLink to="/blog" active={isActive('/blog')}>
            Blog
          </NavLink>
          <PlaygroundNavLink to="/playground" active={isActive('/playground')}>
            <div className="flex items-center gap-2">
              <FaRobot className="text-sm" />
              AI Playground
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                NEW
              </span>
            </div>
          </PlaygroundNavLink>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-200 ${
          isMenuOpen ? 'max-h-96 border-t' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            <MobileNavLink to="/" active={isActive('/')}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/learn" active={isActive('/learn')}>
              Learn
            </MobileNavLink>
            <MobileNavLink to="/examples" active={isActive('/examples')}>
              Examples
            </MobileNavLink>
            <MobileNavLink to="/blog" active={isActive('/blog')}>
              Blog
            </MobileNavLink>
            <MobilePlaygroundNavLink to="/playground" active={isActive('/playground')}>
              <div className="flex items-center gap-2">
                <FaRobot className="text-sm" />
                AI Playground
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  NEW
                </span>
              </div>
            </MobilePlaygroundNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Desktop navigation link
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`font-medium transition-colors ${
      active 
        ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
        : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400 pb-1'
    }`}
  >
    {children}
  </Link>
);

// Special playground navigation link for desktop
const PlaygroundNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`font-medium transition-all duration-200 transform hover:scale-105 ${
      active 
        ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
        : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400 pb-1'
    }`}
  >
    {children}
  </Link>
);

// Mobile navigation link
const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`block py-2 px-3 rounded-md font-medium ${
      active 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`}
  >
    {children}
  </Link>
);

// Special playground navigation link for mobile
const MobilePlaygroundNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`block py-2 px-3 rounded-md font-medium ${
      active 
        ? 'bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-emerald-50 hover:text-gray-900'
    }`}
  >
    {children}
  </Link>
);

export default Navigation;
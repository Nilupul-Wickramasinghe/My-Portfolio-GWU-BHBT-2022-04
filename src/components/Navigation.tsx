import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  const navLinks = [{
    name: 'About',
    href: 'about'
  }, {
    name: 'Education',
    href: 'education'
  }, {
    name: 'Projects',
    href: 'projects'
  }, {
    name: 'Creative',
    href: 'creative'
  }, {
    name: 'Skills',
    href: 'skills'
  }, {
    name: 'Contact',
    href: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-black py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={e => scrollToSection(e, 'hero')} className="text-2xl font-bold text-white tracking-tight">
              Nilupul<span className="text-teal-600">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>)}
            <a href="/resume.pdf" // Placeholder for resume link
          className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-black border-t border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <a key={link.name} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
                {link.name}
              </a>)}
            <a href="/resume.pdf" className="block w-full text-center mt-4 bg-teal-700 hover:bg-teal-600 text-white px-5 py-3 rounded-md text-base font-medium transition-colors">
              Resume
            </a>
          </div>
        </div>}
    </nav>;
}
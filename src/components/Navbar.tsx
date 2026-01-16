import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'O PROJETO', href: '#projeto' },
  { label: 'APP COMFY', href: '#app' },
  { label: 'IMPACTO E RESULTADOS', href: '#impacto' },
  { label: 'COMO CONTRIBUIR', href: '#contribuir' },
  { label: 'TRANSPARÊNCIA', href: '#transparencia' },
  { label: 'JUNTE-SE À CAUSA', href: '#causa' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Support external toggle events from LogoZone
    const externalToggle = () => setIsMenuOpen((v) => !v);
    const externalClose = () => setIsMenuOpen(false);
    window.addEventListener('toggle-menu', externalToggle as EventListener);
    window.addEventListener('close-menu', externalClose as EventListener);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('toggle-menu', externalToggle as EventListener);
      window.removeEventListener('close-menu', externalClose as EventListener);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    
    // Smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`relative w-full z-[1000] transition-all duration-300 py-4 ${
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.1)]' : 'bg-transparent'
    }`}>
      <div className="hidden lg:flex justify-center max-w-[1200px] mx-auto px-8">
        <div className={`bg-[#B496C8] rounded-[80px] h-[51px] px-10 flex items-center shadow-[0_4px_20px_rgba(180,150,200,0.3)]`}>
          {/* Desktop Navigation */}
          <ul className={`flex items-center gap-2 list-none m-0 p-0`}>
            {navItems.map((item, index) => (
              <li key={index} className="m-0">
                <a
                  href={item.href}
                  className="block px-4 text-base font-semibold leading-none text-center uppercase no-underline text-black transition-all duration-300 cursor-pointer rounded-[80px] whitespace-nowrap relative h-[51px] flex items-center justify-center hover:bg-[#BEC864] hover:text-[#111827] md:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Items (full-screen overlay) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gradient-to-r from-purple-500 to-purple-600 backdrop-blur-xl flex flex-col justify-center items-center p-8 z-[1000]">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col justify-center items-center gap-4 w-full">
            {navItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={item.href}
                  className="block py-4 px-4 text-lg font-semibold leading-none uppercase w-full text-white rounded-lg transition-all duration-300 hover:bg-[#BEC864] hover:text-[#111827]"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}

import { useState, useEffect } from 'react';
import './Navbar.css';

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
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__nav-pill">
          {/* Desktop Navigation */}
          <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index} className="navbar__item">
                <a
                  href={item.href}
                  className="navbar__link"
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

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="navbar__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

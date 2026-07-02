import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',     href: '/#home'    },
  { label: 'About',    href: '/#about'   },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/#contact' },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-surface-dark/90 glass shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-bold text-gray-900 dark:text-white hover:text-accent transition-colors">
          {/* ✏️  Replace with your initials and name */}
          <span className="text-gradient">My Portfolio</span>
          <span className="ml-2 hidden sm:inline text-gray-800 dark:text-gray-200">Sri Kumaran CT</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            href.startsWith('/#') ? (
              <a key={label} href={href} className="nav-link">{label}</a>
            ) : (
              <Link key={label} to={href} className="nav-link">{label}</Link>
            )
          ))}
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-lg">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu" className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'} bg-white/95 dark:bg-surface-dark/95 glass border-b border-gray-100 dark:border-gray-800`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            href.startsWith('/#') ? (
              <a key={label} href={href} className="text-gray-700 dark:text-gray-300 font-medium hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>{label}</a>
            ) : (
              <Link key={label} to={href} className="text-gray-700 dark:text-gray-300 font-medium hover:text-accent transition-colors">{label}</Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}

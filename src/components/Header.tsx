import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderScroll } from '@/hooks/useScrollAnimation';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const { isScrolled } = useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'About Us', href: '#about', hasDropdown: true },
    { label: 'Our Medicines', href: '#medicines', hasDropdown: true },
    { label: 'Research', href: '#research', hasDropdown: false },
    { label: 'Impact', href: '#impact', hasDropdown: true },
    { label: 'Careers', href: '#careers', hasDropdown: false },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-scrolled' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative z-10 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-center gap-3 ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">L</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="font-semibold text-xl tracking-tight">Laylife</span>
                  <span className="hidden lg:inline text-sm ml-1 opacity-80">Pharmaceutical</span>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`nav-link flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled ? 'text-foreground' : 'text-primary-foreground'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </a>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 pt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-background rounded-lg shadow-xl border border-border p-4 min-w-[200px]">
                          <div className="space-y-2">
                            <a href="#" className="block px-3 py-2 rounded-md hover:bg-muted text-sm transition-colors">
                              Overview
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-md hover:bg-muted text-sm transition-colors">
                              Our Mission
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-md hover:bg-muted text-sm transition-colors">
                              Leadership
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-muted text-foreground' : 'hover:bg-white/10 text-primary-foreground'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                className={`hidden lg:flex items-center gap-2 p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-muted text-foreground' : 'hover:bg-white/10 text-primary-foreground'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">EN</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-muted text-foreground' : 'hover:bg-white/10 text-primary-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
            <motion.nav
              className="relative h-full pt-24 px-6 pb-8 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block py-4 text-2xl font-light border-b border-border"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useHeaderScroll } from '@/hooks/useScrollAnimation';
import { Menu, X, Search, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';
import SearchModal from './SearchModal';

const Header = () => {
  const { isScrolled } = useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', hasDropdown: false, isRoute: true },
     { label: 'About Us', href: '/about', hasDropdown: false, isRoute: true },
    { label: 'Leadership', href: '/leadership', hasDropdown: false, isRoute: true },
    { label: 'News', href: '/news', hasDropdown: false, isRoute: true },
    { label: 'Careers', href: '/careers', hasDropdown: false, isRoute: true },
     { label: 'Contact', href: '/contact', hasDropdown: false, isRoute: true },
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
            <Link to="/" className="relative z-10">
              <Logo 
                variant={isScrolled ? 'dark' : 'light'} 
                size="md"
                showText={true}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className={`nav-link flex items-center gap-1 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-foreground' : 'text-primary-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
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
                  )}
                  
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
              {/* Phone CTA - Desktop */}
              <motion.a
                href="tel:+2348060350368"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground' 
                    : 'bg-white/10 text-primary-foreground hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+234 806 035 0368</span>
              </motion.a>

              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'hover:bg-muted text-foreground' : 'hover:bg-white/10 text-primary-foreground'
                }`}
              >
                <Search className="w-5 h-5" />
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

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

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
                  item.isRoute ? (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className="block py-4 text-2xl font-light border-b border-border"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ) : (
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
                  )
                ))}
              </div>

              {/* Mobile Search Button */}
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full mt-6 py-4 bg-muted text-foreground rounded-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </motion.button>

              {/* Mobile Phone CTA */}
              <motion.a
                href="tel:+2348060350368"
                className="flex items-center justify-center gap-2 mt-4 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Phone className="w-5 h-5" />
                <span>+234 806 035 0368</span>
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

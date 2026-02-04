import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Users, Briefcase, Newspaper, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ElementType;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');

  // All searchable content
  const searchableContent: SearchResult[] = useMemo(() => [
    // Main Pages
    { title: 'Home', description: 'Welcome to Laylife Pharmaceutical - Transforming Healthcare Across Nigeria', url: '/', category: 'Pages', icon: Building },
    { title: 'About Us', description: 'Our mission to reimagine healthcare for Nigeria\'s future', url: '/#about', category: 'Pages', icon: Building },
    { title: 'Leadership', description: 'Meet Dr. Adam Muhammed Bedemasi, CEO and Founder', url: '/leadership', category: 'Pages', icon: Users },
    { title: 'Careers', description: 'Join our team and shape the future of African healthcare', url: '/careers', category: 'Pages', icon: Briefcase },
    { title: 'Contact Us', description: 'Get in touch with Laylife Pharmaceutical', url: '/#contact', category: 'Pages', icon: Building },
    
    // Services
    { title: 'Pharmaceutical Manufacturing', description: 'State-of-the-art facilities producing high-quality medicines meeting international standards', url: '/services/manufacturing', category: 'Services', icon: Building },
    { title: 'Research & Development', description: 'Pioneering drug discovery focused on diseases prevalent in African populations', url: '/services/research', category: 'Services', icon: FileText },
    { title: 'Quality Assurance', description: 'Rigorous testing protocols ensuring every product meets global standards', url: '/services/quality-assurance', category: 'Services', icon: FileText },
    { title: 'Distribution Network', description: 'Efficient logistics reaching healthcare providers across Nigeria', url: '/services/distribution', category: 'Services', icon: Building },
    { title: 'Patient Support', description: 'Comprehensive programs helping patients access and manage their treatments', url: '/services/patient-support', category: 'Services', icon: Users },
    
    // News
    { title: 'WHO Vaccine Distribution Partnership', description: 'A landmark agreement to expand vaccine access across all 36 Nigerian states', url: '/news/who-vaccine-distribution', category: 'News', icon: Newspaper },
    { title: 'Malaria Treatment Breakthrough', description: 'Clinical trials reveal promising results for our new antimalarial compound', url: '/news/malaria-treatment-breakthrough', category: 'News', icon: Newspaper },
    { title: 'NAFDAC Partnership', description: 'Enhanced collaboration to ensure highest pharmaceutical standards across Nigeria', url: '/news/nafdac-partnership', category: 'News', icon: Newspaper },
    { title: 'All News & Insights', description: 'View all our latest news, research updates, and company announcements', url: '/news', category: 'News', icon: Newspaper },
    
    // Impact Stories
    { title: 'Community Health Impact', description: 'How we\'re transforming community health across Nigerian states', url: '/story/community-health', category: 'Impact', icon: Users },
    { title: 'Affordable Medicine Initiative', description: 'Making quality medicines accessible to every Nigerian', url: '/story/affordable-medicine', category: 'Impact', icon: FileText },
    
    // Legal
    { title: 'Privacy Policy', description: 'How we protect your personal information', url: '/privacy-policy', category: 'Legal', icon: FileText },
    { title: 'Terms of Service', description: 'Terms and conditions for using our services', url: '/terms', category: 'Legal', icon: FileText },
    { title: 'Medical Disclaimer', description: 'Important health and medical information disclaimer', url: '/medical-disclaimer', category: 'Legal', icon: FileText },
    
    // Job Positions
    { title: 'Senior Research Scientist', description: 'R&D position in Abuja - Full-time', url: '/careers#positions', category: 'Careers', icon: Briefcase },
    { title: 'Quality Assurance Manager', description: 'Manufacturing position in Lagos - Full-time', url: '/careers#positions', category: 'Careers', icon: Briefcase },
    { title: 'Regional Sales Director', description: 'Commercial position in Abuja - Full-time', url: '/careers#positions', category: 'Careers', icon: Briefcase },
    { title: 'Clinical Trial Coordinator', description: 'Medical Affairs position in Abuja - Full-time', url: '/careers#positions', category: 'Careers', icon: Briefcase },
  ], []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
    
    return searchableContent.filter(item => {
      const searchText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    }).slice(0, 8);
  }, [query, searchableContent]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    setQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-x-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-background rounded-xl shadow-2xl border border-border overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search pages, services, news, careers..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim() === '' ? (
                  <div className="p-8 text-center text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>Start typing to search across the website</p>
                    <p className="text-sm mt-2">Try: "careers", "manufacturing", "news"</p>
                  </div>
                ) : filteredResults.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try different keywords</p>
                  </div>
                ) : (
                  <div className="p-2">
                    {filteredResults.map((result, index) => (
                      <Link
                        key={`${result.url}-${index}`}
                        to={result.url}
                        onClick={handleLinkClick}
                      >
                        <motion.div
                          className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                            <result.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {result.title}
                              </h4>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-3 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Press <kbd className="px-1.5 py-0.5 bg-muted rounded">ESC</kbd> to close</span>
                  <span>{filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;

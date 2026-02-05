import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { ArrowRight, MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
       { label: 'Home', href: '/', isRoute: true },
       { label: 'About Us', href: '/about', isRoute: true },
       { label: 'Leadership', href: '/leadership', isRoute: true },
       { label: 'Careers', href: '/careers', isRoute: true },
    ],
    resources: [
       { label: 'News', href: '/news', isRoute: true },
       { label: 'Patient Support', href: '/contact', isRoute: true },
       { label: 'Healthcare Professionals', href: '/contact', isRoute: true },
       { label: 'Partner With Us', href: '/contact', isRoute: true },
    ],
    contact: [
       { label: 'Get in Touch', href: '/contact', isRoute: true },
       { label: 'Media Center', href: '/news', isRoute: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <AnimatedSection animation="fadeUp">
        <div className="border-b border-primary-foreground/10">
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-light mb-4">
                  Partner with Us
                </h2>
                <p className="text-primary-foreground/80 max-w-xl">
                  Join our mission to transform healthcare across Nigeria. 
                  We're always looking for healthcare partners, distributors, and innovators.
                </p>
              </div>
              
               <Link
                 to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-md font-medium"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <AnimatedSection animation="fadeUp">
              <div className="mb-8">
                <Link to="/" className="inline-block mb-6">
                  <Logo variant="light" size="lg" showText={true} />
                </Link>
                
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  Nigeria's trusted pharmaceutical partner, 
                  delivering life-changing medicines to those who need them most.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/80">
                      Suite 4, Dubai Market, Kaura,<br />Abuja, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="tel:+2348060350368" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      +234 806 035 0368
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="mailto:info@laylifepharma.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      info@laylifepharma.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Links */}
          <div className="lg:col-span-6">
            <StaggerContainer className="grid sm:grid-cols-3 gap-8" staggerDelay={0.1}>
              {Object.entries(footerLinks).map(([title, links]) => (
                <StaggerItem key={title}>
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
                      {title}
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.label}>
                           {link.isRoute ? (
                             <Link
                               to={link.href}
                               className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors animated-underline"
                             >
                               {link.label}
                             </Link>
                           ) : (
                             <a
                               href={link.href}
                               className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors animated-underline"
                             >
                               {link.label}
                             </a>
                           )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
                Stay Updated
              </h4>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Get the latest news and updates from Laylife.
              </p>
              
              <form 
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements.namedItem('newsletter-email') as HTMLInputElement).value;
                  window.location.href = `mailto:info@laylifepharma.com?subject=Newsletter Subscription&body=Please add me to your newsletter. My email: ${email}`;
                }}
              >
                <input
                  type="email"
                  name="newsletter-email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                />
                <motion.button
                  type="submit"
                  className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 group-hover:text-secondary-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <span>© {currentYear} Laylife Pharmaceutical Limited. All rights reserved.</span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link to="/medical-disclaimer" className="hover:text-primary-foreground transition-colors">Medical Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

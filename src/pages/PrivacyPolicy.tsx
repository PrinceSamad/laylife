import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-primary-foreground">
                  Privacy Policy
                </h1>
                <p className="text-primary-foreground/70 mt-2">
                  Last updated: February 3, 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg prose-slate"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Laylife Pharmaceutical Limited ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website at laylifepharmaceutical.com or interact with our services.
                </p>
                <p>
                  We are headquartered at Suite 4, Dubai Market, Kaura, Abuja, Nigeria, and operate in compliance 
                  with the Nigeria Data Protection Regulation (NDPR) and other applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-2">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company or organization name</li>
                  <li>Messages and inquiries submitted through our contact form</li>
                  <li>Professional credentials for healthcare partners</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-2 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and general location data</li>
                  <li>Pages visited and time spent on the site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process partnership and distribution requests</li>
                  <li>To send relevant updates about our products and services (with your consent)</li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To protect against fraud and unauthorized activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Protection and Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure data transmission using SSL/TLS encryption</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p>Under the Nigeria Data Protection Regulation (NDPR), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data we hold</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (where applicable)</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with the relevant supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience. 
                  You can control cookie preferences through your browser settings. Please note that 
                  disabling cookies may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the 
                  privacy practices of these external sites. We encourage you to review their privacy 
                  policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your data rights, 
                  please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-medium text-foreground">Laylife Pharmaceutical Limited</p>
                  <p>Suite 4, Dubai Market, Kaura, Abuja, Nigeria</p>
                  <p>Email: privacy@laylifepharma.com</p>
                  <p>Phone: +234 806 035 0368</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Policy Updates</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or 
                  legal requirements. We will notify you of significant changes by posting the updated 
                  policy on our website with a new "Last updated" date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

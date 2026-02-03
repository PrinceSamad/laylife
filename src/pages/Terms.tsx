import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { FileText, ArrowLeft } from 'lucide-react';

const Terms = () => {
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
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-primary-foreground">
                  Terms of Service
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the website of Laylife Pharmaceutical Limited ("Company," "we," "our," or "us") 
                  at laylifepharmaceutical.com, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Company Information</h2>
                <p>
                  Laylife Pharmaceutical Limited is a pharmaceutical company registered and operating in Nigeria. 
                  Our registered office is located at Suite 4, Dubai Market, Kaura, Abuja, Nigeria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Website</h2>
                <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website in any way that violates applicable Nigerian laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Transmit any malicious software, viruses, or harmful code</li>
                  <li>Collect or harvest any information from the website without authorization</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Interfere with or disrupt the operation of the website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of Laylife Pharmaceutical Limited or its licensors and is 
                  protected by Nigerian and international intellectual property laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, modify, or create derivative works from any content 
                  without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Product Information</h2>
                <p>
                  Information about pharmaceutical products on this website is provided for general informational 
                  purposes only. This information does not constitute medical advice and should not be used for 
                  self-diagnosis or treatment.
                </p>
                <p className="mt-4">
                  Always consult a qualified healthcare professional before using any pharmaceutical product. 
                  Product availability may vary by region within Nigeria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Healthcare Professional Content</h2>
                <p>
                  Certain sections of our website may be intended exclusively for licensed healthcare professionals. 
                  By accessing such content, you represent and warrant that you are a qualified healthcare 
                  professional licensed to practice in Nigeria or your respective jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer of Warranties</h2>
                <p>
                  The website and its content are provided "as is" without warranties of any kind, either 
                  express or implied. We do not warrant that the website will be uninterrupted, error-free, 
                  or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by Nigerian law, Laylife Pharmaceutical Limited shall not 
                  be liable for any indirect, incidental, special, consequential, or punitive damages arising 
                  from your use of the website or reliance on any information provided therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the 
                  content, accuracy, or practices of these external sites. The inclusion of any link does 
                  not imply endorsement by Laylife Pharmaceutical Limited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of 
                  the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject 
                  to the exclusive jurisdiction of the Nigerian courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                  immediately upon posting on this website. Your continued use of the website after any changes 
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-medium text-foreground">Laylife Pharmaceutical Limited</p>
                  <p>Suite 4, Dubai Market, Kaura, Abuja, Nigeria</p>
                  <p>Email: legal@laylifepharma.com</p>
                  <p>Phone: +234 806 035 0368</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;

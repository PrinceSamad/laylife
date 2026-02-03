import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const MedicalDisclaimer = () => {
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
                <AlertTriangle className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-primary-foreground">
                  Medical Disclaimer
                </h1>
                <p className="text-primary-foreground/70 mt-2">
                  Important information about our content
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
            {/* Important Notice Banner */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground m-0">
                    The information provided on this website is for general educational and informational 
                    purposes only. It is not intended to be a substitute for professional medical advice, 
                    diagnosis, or treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">General Information Only</h2>
                <p>
                  Laylife Pharmaceutical Limited provides information on this website for general awareness 
                  about health conditions, treatments, and pharmaceutical products. This content is intended 
                  to support, not replace, the relationship between a patient and their healthcare provider.
                </p>
                <p>
                  The information presented here should not be used for diagnosing or treating any health 
                  problem or disease, or prescribing any medication or other treatment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Consult Healthcare Professionals</h2>
                <p>Always seek the advice of your physician, pharmacist, or other qualified healthcare provider with any questions you may have regarding:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A medical condition or diagnosis</li>
                  <li>Starting, stopping, or changing any medication</li>
                  <li>Treatment options and their potential risks and benefits</li>
                  <li>Drug interactions and side effects</li>
                  <li>Any symptoms you may be experiencing</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Never disregard professional medical advice or delay seeking it 
                  because of something you have read on this website.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Emergency Situations</h2>
                <p>
                  If you think you may have a medical emergency, call your doctor, go to the nearest 
                  emergency room, or call emergency services immediately. Laylife Pharmaceutical Limited 
                  does not provide emergency medical services through this website.
                </p>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mt-4">
                  <p className="font-medium text-foreground m-0">
                    For medical emergencies in Nigeria, contact the nearest hospital or dial 112 for emergency services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
                <p>
                  Information about pharmaceutical products on this website is provided by Laylife Pharmaceutical 
                  Limited for informational purposes. Product details, indications, dosages, and warnings may vary 
                  based on regulatory approvals in different regions.
                </p>
                <p>
                  Always read the product label and package insert before using any medication. The most current 
                  and complete product information is available from your pharmacist or healthcare provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">No Doctor-Patient Relationship</h2>
                <p>
                  Use of this website does not create a doctor-patient relationship between you and Laylife 
                  Pharmaceutical Limited or any of its employees, affiliates, or representatives. We do not 
                  provide personalized medical consultations through this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, medical knowledge evolves 
                  constantly. We cannot guarantee that all information on this website is current, complete, 
                  or error-free. Information may be outdated or superseded by new research or regulatory changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Adverse Event Reporting</h2>
                <p>
                  If you experience any side effects or adverse reactions from any of our products, 
                  please report them to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your healthcare provider</li>
                  <li>NAFDAC (National Agency for Food and Drug Administration and Control)</li>
                  <li>Laylife Pharmaceutical Limited at safety@laylifepharma.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Healthcare Professional Information</h2>
                <p>
                  Certain sections of our website may contain information intended for healthcare professionals 
                  only. This includes detailed prescribing information, clinical data, and professional resources. 
                  This information is not intended for general consumers and should only be used by qualified 
                  medical professionals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Medical Disclaimer or the information on our website:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-medium text-foreground">Laylife Pharmaceutical Limited</p>
                  <p>Medical Information Department</p>
                  <p>Suite 4, Dubai Market, Kaura, Abuja, Nigeria</p>
                  <p>Email: medinfo@laylifepharma.com</p>
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

export default MedicalDisclaimer;

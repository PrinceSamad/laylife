import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing.jpg';
import labResearch from '@/assets/lab-research.jpg';
import patientCare from '@/assets/patient-care.jpg';

const servicesData = {
  'manufacturing': {
    title: 'Pharmaceutical Manufacturing',
    subtitle: 'World-Class Production Facilities',
    heroImage: manufacturingImage,
    description: 'Our state-of-the-art manufacturing facilities in Nigeria produce high-quality medicines that meet international standards, ensuring every Nigerian has access to safe and effective treatments.',
    stats: [
      { value: '50+', label: 'Manufacturing Lines' },
      { value: '200+', label: 'Products Manufactured' },
      { value: 'WHO-GMP', label: 'Certified Facilities' },
      { value: '24/7', label: 'Quality Monitoring' },
    ],
    features: [
      { title: 'Good Manufacturing Practice', description: 'All facilities are WHO-GMP certified, ensuring the highest quality standards.' },
      { title: 'Advanced Technology', description: 'State-of-the-art equipment and automated processes for precision manufacturing.' },
      { title: 'Quality Control Labs', description: 'In-house laboratories for rigorous testing at every production stage.' },
      { title: 'Environmental Standards', description: 'Sustainable practices and waste management meeting international requirements.' },
    ],
    capabilities: [
      'Solid dosage forms (tablets, capsules)',
      'Liquid preparations (syrups, suspensions)',
      'Injectable formulations',
      'Topical preparations (creams, ointments)',
      'Controlled-release formulations',
      'Pediatric formulations',
    ],
  },
  'research': {
    title: 'Research & Development',
    subtitle: 'Pioneering African Healthcare Solutions',
    heroImage: labResearch,
    description: 'Our R&D division focuses on developing innovative treatments for diseases prevalent in African populations, working with leading Nigerian research institutions.',
    stats: [
      { value: '120+', label: 'Research Scientists' },
      { value: '15+', label: 'Active Projects' },
      { value: '₦2B+', label: 'Annual R&D Investment' },
      { value: '5', label: 'Research Partnerships' },
    ],
    features: [
      { title: 'Disease-Focused Research', description: 'Targeting malaria, tuberculosis, sickle cell disease, and other African health priorities.' },
      { title: 'Clinical Trials', description: 'Conducting Phase I-III trials in collaboration with Nigerian teaching hospitals.' },
      { title: 'Natural Products Research', description: 'Exploring traditional Nigerian medicine for modern drug development.' },
      { title: 'Formulation Development', description: 'Creating stable, affordable, and climate-appropriate formulations.' },
    ],
    capabilities: [
      'Drug discovery and screening',
      'Formulation development',
      'Bioavailability studies',
      'Stability testing',
      'Clinical trial management',
      'Regulatory documentation',
    ],
  },
  'quality-assurance': {
    title: 'Quality Assurance',
    subtitle: 'Uncompromising Standards',
    heroImage: manufacturingImage,
    description: 'Our comprehensive quality assurance program ensures every product meets the highest standards of safety, efficacy, and purity before reaching patients.',
    stats: [
      { value: '100%', label: 'Batch Testing' },
      { value: '0', label: 'Tolerance for Defects' },
      { value: 'ISO', label: '9001 Certified' },
      { value: '500+', label: 'Tests Daily' },
    ],
    features: [
      { title: 'Raw Material Testing', description: 'Every incoming material is tested before entering production.' },
      { title: 'In-Process Controls', description: 'Continuous monitoring at every stage of manufacturing.' },
      { title: 'Final Product Release', description: 'Comprehensive testing before any batch is released.' },
      { title: 'Stability Programs', description: 'Ongoing monitoring to ensure products remain effective throughout shelf life.' },
    ],
    capabilities: [
      'Physical and chemical testing',
      'Microbiological analysis',
      'Sterility testing',
      'Dissolution studies',
      'Impurity profiling',
      'Package integrity testing',
    ],
  },
  'distribution': {
    title: 'Distribution Network',
    subtitle: 'Reaching Every Corner of Nigeria',
    heroImage: patientCare,
    description: 'Our extensive distribution network ensures medicines reach healthcare providers and patients across all 36 states and the FCT, with specialized cold-chain capabilities.',
    stats: [
      { value: '36+', label: 'States Covered' },
      { value: '5,000+', label: 'Healthcare Partners' },
      { value: '48hrs', label: 'Maximum Delivery Time' },
      { value: '15', label: 'Distribution Centers' },
    ],
    features: [
      { title: 'Cold Chain Logistics', description: 'Temperature-controlled storage and transport for sensitive medicines.' },
      { title: 'Real-Time Tracking', description: 'GPS monitoring and digital inventory management systems.' },
      { title: 'Last-Mile Delivery', description: 'Specialized programs reaching rural and underserved areas.' },
      { title: 'Partner Network', description: 'Strong relationships with pharmacies, hospitals, and health centers.' },
    ],
    capabilities: [
      'Ambient storage and transport',
      'Cold chain (2-8°C)',
      'Frozen storage (-20°C)',
      'Express delivery services',
      'Bulk distribution',
      'Direct-to-pharmacy delivery',
    ],
  },
  'patient-support': {
    title: 'Patient Support',
    subtitle: 'Beyond Medication',
    heroImage: patientCare,
    description: 'Our patient support programs help Nigerians access, understand, and properly use their medications for better health outcomes.',
    stats: [
      { value: '100K+', label: 'Patients Supported' },
      { value: '24/7', label: 'Helpline Available' },
      { value: '50+', label: 'Community Programs' },
      { value: '12', label: 'Patient Assistance Programs' },
    ],
    features: [
      { title: 'Medication Counseling', description: 'Trained pharmacists providing guidance on proper medication use.' },
      { title: 'Affordability Programs', description: 'Subsidized medicines for qualifying low-income patients.' },
      { title: 'Disease Management', description: 'Long-term support for chronic condition management.' },
      { title: 'Health Education', description: 'Community outreach and awareness campaigns.' },
    ],
    capabilities: [
      'Telephone helpline support',
      'Patient assistance programs',
      'Medication therapy management',
      'Adherence support',
      'Caregiver training',
      'Community health education',
    ],
  },
};

const Services = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-secondary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-primary/60" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Our Services
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h1 className="text-foreground mb-4">{service.title}</h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-2xl text-primary font-light mb-6">{service.subtitle}</p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {service.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {service.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="block text-4xl lg:text-5xl font-light text-primary mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-foreground">Key Capabilities</h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.1}>
            {service.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="p-8 bg-muted/30 rounded-xl border border-border"
                  whileHover={{ y: -4, borderColor: 'hsl(var(--secondary))' }}
                >
                  <h3 className="text-lg font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-foreground mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive capabilities ensure we can meet all your pharmaceutical needs 
                with excellence and reliability.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <ul className="space-y-4">
                {service.capabilities.map((capability, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-foreground">Explore Other Services</h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {otherServices.map(([key, data]) => (
              <StaggerItem key={key}>
                <Link to={`/services/${key}`}>
                  <motion.div
                    className="p-8 bg-muted/30 rounded-xl border border-border group"
                    whileHover={{ y: -8, borderColor: 'hsl(var(--secondary))' }}
                  >
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {data.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{data.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-primary-foreground mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact our team to learn how our {service.title.toLowerCase()} capabilities 
              can support your healthcare needs.
            </p>
            <Link to="/contact">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;

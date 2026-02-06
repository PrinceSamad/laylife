import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Users, Heart, TrendingUp, GraduationCap } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      id: 'senior-research-scientist',
      title: 'Senior Research Scientist',
      department: 'Research & Development',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Lead innovative drug discovery projects focused on diseases prevalent in African populations.',
      requirements: ['PhD in Pharmaceutical Sciences or related field', '5+ years research experience', 'Published research in peer-reviewed journals'],
    },
    {
      id: 'quality-assurance-manager',
      title: 'Quality Assurance Manager',
      department: 'Manufacturing',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Oversee quality control processes ensuring all products meet WHO-GMP standards.',
      requirements: ['Bachelor\'s in Chemistry or Pharmacy', '7+ years in pharmaceutical QA', 'Knowledge of NAFDAC regulations'],
    },
    {
      id: 'regional-sales-director',
      title: 'Regional Sales Director',
      department: 'Commercial',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Drive sales growth across Northern Nigeria through strategic partnerships with healthcare providers.',
      requirements: ['MBA or equivalent', '10+ years in pharmaceutical sales', 'Proven leadership experience'],
    },
    {
      id: 'clinical-trial-coordinator',
      title: 'Clinical Trial Coordinator',
      department: 'Medical Affairs',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Coordinate Phase II and III clinical trials in collaboration with Nigerian hospitals and research centers.',
      requirements: ['Medical degree or PharmD', '3+ years clinical trial experience', 'GCP certification'],
    },
    {
      id: 'pharmacovigilance-officer',
      title: 'Pharmacovigilance Officer',
      department: 'Medical Affairs',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Monitor and report adverse drug reactions, ensuring patient safety across all products.',
      requirements: ['Pharmacy or Medical degree', '2+ years in pharmacovigilance', 'Knowledge of ICH guidelines'],
    },
    {
      id: 'supply-chain-manager',
      title: 'Supply Chain Manager',
      department: 'Operations',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Optimize cold-chain logistics and distribution networks across all 36 states.',
      requirements: ['Degree in Supply Chain Management', '5+ years in pharmaceutical logistics', 'Cold-chain expertise'],
    },
  ];

  const benefits = [
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive medical coverage for you and your family' },
    { icon: GraduationCap, title: 'Learning & Development', description: 'Continuous professional development and training programs' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Clear progression paths and mentorship opportunities' },
    { icon: Users, title: 'Collaborative Culture', description: 'Work with passionate professionals making real impact' },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Careers
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h1 className="text-primary-foreground mb-6">
              Shape the Future of
              <span className="block text-secondary">African Healthcare</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Join a team of passionate professionals dedicated to making quality 
              healthcare accessible across Nigeria and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Why Join Laylife
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground">
                Benefits & Culture
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="text-center p-8 bg-muted/30 rounded-xl border border-border"
                  whileHover={{ y: -8, borderColor: 'hsl(var(--secondary))' }}
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Open Positions
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground">
                Current Opportunities
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Explore our open positions and find your next career opportunity.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="space-y-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {positions.map((job) => (
              <StaggerItem key={job.id}>
                <motion.div
                  className="bg-background p-8 rounded-xl border border-border group"
                  whileHover={{ x: 8, borderColor: 'hsl(var(--secondary))' }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-foreground">Requirements:</span>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <motion.a
                      href={`mailto:info@laylifepharmaceutical.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <div className="bg-primary rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="text-primary-foreground mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals. Send us your resume and we'll 
                keep you in mind for future opportunities.
              </p>
              <motion.a
                href="mailto:info@laylifepharmaceutical.com?subject=General Application"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;

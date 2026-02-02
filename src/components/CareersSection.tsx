import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersSection = () => {
  const positions = [
    {
      title: 'Senior Research Scientist',
      department: 'Research & Development',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Manager',
      department: 'Manufacturing',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
    },
    {
      title: 'Regional Sales Director',
      department: 'Commercial',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
    },
    {
      title: 'Clinical Trial Coordinator',
      department: 'Medical Affairs',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
    },
  ];

  return (
    <section id="careers" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Careers
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground mb-6">
                Shape the Future of
                <span className="block text-primary">African Healthcare</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Join a team of passionate professionals dedicated to making quality 
                healthcare accessible across Africa. We offer competitive benefits, 
                continuous learning, and the opportunity to make a real difference.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary">✓</span>
                  </div>
                  Competitive Salary
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary">✓</span>
                  </div>
                  Health Benefits
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary">✓</span>
                  </div>
                  Growth Opportunities
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-secondary font-medium"
                whileHover={{ x: 4 }}
              >
                <span className="animated-underline">View all positions</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Right - Job Listings */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {positions.map((job) => (
              <StaggerItem key={job.title}>
                <motion.a
                  href="#"
                  className="block bg-background p-6 rounded-lg border border-border card-interactive group"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
                    </div>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

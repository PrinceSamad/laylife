import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import labImage from '@/assets/lab-research.jpg';
import manufacturingImage from '@/assets/manufacturing.jpg';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  const services = [
    {
      title: 'Pharmaceutical Manufacturing',
      description: 'State-of-the-art facilities producing high-quality medicines meeting international standards.',
      image: manufacturingImage,
      stats: '50+ Manufacturing Lines',
    },
    {
      title: 'Research & Development',
      description: 'Pioneering drug discovery focused on diseases prevalent in African populations.',
      image: labImage,
      stats: '120+ Scientists',
    },
  ];

  return (
    <section id="medicines" ref={containerRef} className="py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              What We Do
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="text-foreground mb-6">
              Advancing Medicine Through
              <span className="block text-primary">Innovation & Care</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              From research laboratories to distribution networks, we control every step 
              of the pharmaceutical journey to ensure quality reaches every patient.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'} group`}
              style={{ y: index === 0 ? parallaxY : undefined }}
            >
              <AnimatedSection animation={index === 0 ? 'fadeLeft' : 'fadeRight'} delay={index * 0.2}>
                <div className="relative overflow-hidden rounded-lg bg-background card-interactive h-full">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    
                    {/* Floating stat */}
                    <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-md">
                      <span className="text-sm font-medium text-primary">{service.stats}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-secondary font-medium animated-underline"
                      whileHover={{ x: 4 }}
                    >
                      Learn more
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'Quality Assurance', desc: 'Rigorous testing protocols ensuring every product meets global standards.' },
            { title: 'Distribution Network', desc: 'Efficient logistics reaching healthcare providers across 28 countries.' },
            { title: 'Patient Support', desc: 'Comprehensive programs helping patients access and manage their treatments.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="fadeUp" delay={0.1 * i}>
              <motion.div
                className="p-8 bg-background rounded-lg border border-border card-interactive"
                whileHover={{ borderColor: 'hsl(var(--secondary))' }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

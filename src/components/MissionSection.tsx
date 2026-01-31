import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import teamImage from '@/assets/team-healthcare.jpg';

const MissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const stats = [
    { value: '15M+', label: 'Patients Reached' },
    { value: '28', label: 'African Countries' },
    { value: '150+', label: 'Medicines Portfolio' },
    { value: '12K', label: 'Healthcare Partners' },
  ];

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Our Mission
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground mb-8 text-balance">
                Reimagining Healthcare
                <span className="block text-primary">for Africa's Future</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Laylife Pharmaceutical, we believe quality healthcare is a fundamental right, 
                not a privilege. Our mission is to bridge the gap between global pharmaceutical 
                innovation and African communities, ensuring access to life-saving medicines 
                at every corner of the continent.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                From our headquarters in Abuja, Nigeria, we've built a network spanning 28 
                countries, working alongside healthcare professionals to deliver the treatments 
                that transform lives.
              </p>
            </AnimatedSection>

            {/* Animated Divider */}
            <AnimatedSection animation="reveal" delay={0.4}>
              <div className="w-20 h-0.5 bg-secondary mb-10" />
            </AnimatedSection>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={0.15}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="group">
                    <motion.span
                      className="block text-4xl lg:text-5xl font-light text-primary mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-sm text-muted-foreground tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Image */}
          <motion.div
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2"
            style={{ x: imageX }}
          >
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="relative">
                <div className="cinematic-image aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src={teamImage}
                    alt="Laylife healthcare team"
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-background p-6 rounded-lg shadow-xl max-w-xs"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary text-xl">★</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-foreground">Excellence Award</span>
                      <span className="text-sm text-muted-foreground">African Healthcare 2024</span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary/20 rounded-lg" />
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

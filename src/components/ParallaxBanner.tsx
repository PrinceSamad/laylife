import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const ParallaxBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-12 text-center"
        style={{ opacity }}
      >
        <AnimatedSection animation="fadeUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground max-w-4xl mx-auto leading-tight mb-8">
            "Our commitment is not just to create medicines, but to create{' '}
            <span className="text-secondary">possibilities</span> for millions 
            of lives across Africa."
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary-foreground font-medium">Dr. Adams Muhammed Bedemasi</span>
            <span className="text-primary-foreground/70 text-sm">CEO, Laylife Pharmaceutical</span>
          </div>
        </AnimatedSection>

        {/* Decorative circles */}
        <motion.div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary-foreground/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -right-20 top-1/3 w-40 h-40 rounded-full border border-secondary/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </section>
  );
};

export default ParallaxBanner;

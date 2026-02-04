import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';
import ceoImage from '@/assets/ceo-adams.jpg';

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CEO Image */}
          <AnimatedSection animation="fadeLeft">
            <div className="relative">
              <motion.div
                className="cinematic-image aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={ceoImage}
                  alt="Dr. Adam Muhammed Bedemasi - CEO of Laylife Pharmaceutical Limited, leading healthcare innovation in Nigeria"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary/30 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-lg -z-10" />
            </div>
          </AnimatedSection>

          {/* CEO Bio */}
          <div>
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Our Leadership
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground mb-2">
                Dr. Adam Muhammed Bedemasi
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.15}>
              <p className="text-secondary text-xl font-medium mb-6">
                Founder & Chief Executive Officer
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Adam Muhammed Bedemasi is the visionary founder and CEO of Laylife Pharmaceutical Limited. 
                With over 15 years of experience in pharmaceutical distribution and healthcare management, 
                he has led the company to become one of Nigeria's most trusted pharmaceutical partners.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.25}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                His commitment to making quality healthcare accessible to every Nigerian community 
                drives the company's mission and operations across all 36 states and the FCT.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <blockquote className="border-l-4 border-secondary pl-6 py-2 mb-8">
                <p className="text-xl font-light text-foreground italic">
                  "Our goal is simple: ensure every Nigerian has access to the medicines they need, when they need them."
                </p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.35}>
              <Link to="/leadership">
                <motion.span
                  className="inline-flex items-center gap-2 text-secondary font-medium cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <span className="animated-underline">Learn more about our leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;

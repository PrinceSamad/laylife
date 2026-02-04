import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ceoImage from '@/assets/ceo-adams.jpg';
import { Home } from 'lucide-react';

const Leadership = () => {
  const leader = {
    name: 'Dr. Adam Muhammed Bedemasi',
    role: 'Chief Executive Officer',
    image: ceoImage,
    bio: 'Dr. Adam Muhammed Bedemasi is the visionary founder and CEO of Laylife Pharmaceutical Limited. With over 15 years of experience in pharmaceutical distribution and healthcare management, he has led the company to become one of Nigeria\'s most trusted pharmaceutical partners. His commitment to making quality healthcare accessible to every Nigerian community drives the company\'s mission and operations.',
    quote: 'Our goal is simple: ensure every Nigerian has access to the medicines they need, when they need them.',
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Leadership
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h1 className="text-primary-foreground mb-6">
              The Team Behind
              <span className="block text-secondary">Our Mission</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Dedicated professionals committed to transforming healthcare 
              access across Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CEO Feature Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CEO Image */}
            <AnimatedSection animation="fadeLeft">
              <div className="relative">
                <div className="cinematic-image aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={ceoImage}
                    alt="Dr. Adam Muhammed Bedemasi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary/30 rounded-lg -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-lg -z-10" />
              </div>
            </AnimatedSection>

            {/* CEO Bio */}
            <div>
              <AnimatedSection animation="fadeUp">
                <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                  Founder & CEO
                </span>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.1}>
                <h2 className="text-foreground mb-2">
                  Dr. Adam Muhammed Bedemasi
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p className="text-secondary text-lg mb-6">Chief Executive Officer</p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {leader.bio}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.3}>
                <blockquote className="border-l-4 border-secondary pl-6 py-2">
                  <p className="text-xl font-light text-foreground italic">
                    "{leader.quote}"
                  </p>
                </blockquote>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Our Values
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground">
                What Drives Us
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { icon: '🎯', title: 'Integrity', desc: 'Honest and transparent in all dealings' },
              { icon: '💊', title: 'Quality', desc: 'Only the highest pharmaceutical standards' },
              { icon: '🤝', title: 'Partnership', desc: 'Collaborative approach with stakeholders' },
              { icon: '🇳🇬', title: 'Nigeria First', desc: 'Committed to Nigerian healthcare' },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="text-center p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-medium text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Leadership;

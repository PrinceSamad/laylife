import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import ceoImage from '@/assets/ceo-adams.jpg';

const Leadership = () => {
  const leaders = [
    {
      name: 'Dr. Adams Muhammed Bedemasi',
      role: 'Chief Executive Officer',
      image: ceoImage,
      bio: 'Dr. Adams Muhammed Bedemasi is the visionary founder and CEO of Laylife Pharmaceutical Limited. With over 15 years of experience in pharmaceutical distribution and healthcare management, he has led the company to become one of Nigeria\'s most trusted pharmaceutical partners. His commitment to making quality healthcare accessible to every Nigerian community drives the company\'s mission and operations.',
      quote: 'Our goal is simple: ensure every Nigerian has access to the medicines they need, when they need them.',
    },
    {
      name: 'Pharm. Amina Yusuf',
      role: 'Chief Operations Officer',
      image: null,
      bio: 'Pharm. Amina brings over 12 years of pharmaceutical operations experience, overseeing our nationwide distribution network across all 36 states and the FCT.',
      quote: null,
    },
    {
      name: 'Dr. Emeka Okonkwo',
      role: 'Chief Medical Officer',
      image: null,
      bio: 'Dr. Emeka leads our medical affairs division, ensuring all products meet the highest standards of quality and efficacy for Nigerian patients.',
      quote: null,
    },
    {
      name: 'Mrs. Fatima Ibrahim',
      role: 'Head of Regulatory Affairs',
      image: null,
      bio: 'Mrs. Fatima manages our relationships with NAFDAC and other regulatory bodies, ensuring full compliance with Nigerian pharmaceutical regulations.',
      quote: null,
    },
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
                    alt="Dr. Adams Muhammed Bedemasi"
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
                  Dr. Adams Muhammed Bedemasi
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.15}>
                <p className="text-secondary text-lg mb-6">Chief Executive Officer</p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {leaders[0].bio}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.3}>
                <blockquote className="border-l-4 border-secondary pl-6 py-2">
                  <p className="text-xl font-light text-foreground italic">
                    "{leaders[0].quote}"
                  </p>
                </blockquote>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Our Team
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground">
                Executive Leadership
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {leaders.slice(1).map((leader) => (
              <StaggerItem key={leader.name}>
                <motion.div
                  className="bg-background rounded-lg p-8 border border-border h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-light text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-foreground text-center mb-2">
                    {leader.name}
                  </h3>
                  
                  <p className="text-secondary text-center mb-4">
                    {leader.role}
                  </p>
                  
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {leader.bio}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
    </div>
  );
};

export default Leadership;

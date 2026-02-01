import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import patientCareImage from '@/assets/patient-care.jpg';
import medicinesImage from '@/assets/medicines.jpg';

const ImpactSection = () => {
  const impacts = [
    {
      category: 'Community Health',
      title: 'Reaching Underserved Communities',
      description: 'Our mobile health initiatives bring essential medicines to remote areas, ensuring no one is left behind in healthcare access.',
      image: patientCareImage,
      link: '#',
    },
    {
      category: 'Affordable Medicine',
      title: 'Making Treatment Accessible',
      description: 'Through innovative pricing models and partnerships, we\'ve reduced medication costs by up to 60% for patients in need.',
      image: medicinesImage,
      link: '#',
    },
  ];

  const initiatives = [
    { icon: '🏥', title: 'Rural Clinics Support', count: '300+', desc: 'Clinics equipped' },
    { icon: '👩‍⚕️', title: 'Healthcare Training', count: '5K+', desc: 'Professionals trained' },
    { icon: '💊', title: 'Medicine Donations', count: '1M+', desc: 'Doses donated' },
    { icon: '🇳🇬', title: 'Nigerian States', count: '36+', desc: 'States covered' },
  ];

  return (
    <section id="impact" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Our Impact
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="text-foreground mb-6">
              Creating Lasting Change
              <span className="block text-primary">in Nigerian Healthcare</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Beyond medicines, we're committed to transforming healthcare systems, 
              training professionals, and building infrastructure that serves generations.
            </p>
          </AnimatedSection>
        </div>

        {/* Impact Cards - Editorial Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <AnimatedSection
              key={impact.title}
              animation={index === 0 ? 'fadeLeft' : 'fadeRight'}
              delay={index * 0.2}
            >
              <motion.article
                className="group relative bg-background rounded-lg overflow-hidden border border-border card-interactive h-full"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {impact.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-foreground mb-4 group-hover:text-primary transition-colors">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {impact.description}
                  </p>
                  
                  <motion.a
                    href={impact.link}
                    className="inline-flex items-center gap-2 text-secondary font-medium"
                    whileHover={{ x: 4 }}
                  >
                    <span className="animated-underline">Read the story</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* Initiatives Grid */}
        <AnimatedSection animation="fadeUp">
          <div className="bg-primary rounded-2xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-light text-primary-foreground mb-4">
                Our Commitment in Numbers
              </h3>
              <p className="text-primary-foreground/80">
                Measurable impact across our key initiatives
              </p>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
              {initiatives.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-4xl lg:text-5xl font-light text-primary-foreground mb-2">
                      {item.count}
                    </div>
                    <div className="text-sm text-primary-foreground/90 font-medium mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-primary-foreground/70">
                      {item.desc}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ImpactSection;

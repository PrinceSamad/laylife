import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, Heart, Users, Truck, Shield } from 'lucide-react';
import patientCareImage from '@/assets/patient-care.jpg';
import medicinesImage from '@/assets/medicines.jpg';
import teamHealthcareImage from '@/assets/team-healthcare.jpg';

const storiesData = {
  'community-health': {
    category: 'Community Health',
    title: 'Reaching Underserved Communities',
    subtitle: 'Bringing Healthcare to Every Corner of Nigeria',
    heroImage: patientCareImage,
    content: [
      {
        heading: 'The Challenge',
        text: 'Millions of Nigerians in rural and underserved communities face significant barriers to accessing quality healthcare. Geographic isolation, lack of transportation, and limited healthcare infrastructure mean that many go without essential medicines and medical care.',
      },
      {
        heading: 'Our Response',
        text: 'Laylife Pharmaceutical launched our Mobile Health Initiative in 2018, deploying specialized vehicles equipped with essential medicines and trained healthcare workers to reach remote communities across all 36 states of Nigeria.',
      },
      {
        heading: 'How We Work',
        text: 'Our teams work closely with local community leaders, traditional rulers, and healthcare workers to identify areas of greatest need. We establish regular visit schedules, ensuring communities can rely on consistent access to medicines and health education.',
      },
      {
        heading: 'The Impact',
        text: 'Since launching this initiative, we have reached over 2 million Nigerians in underserved communities. Our mobile units have distributed essential medicines, conducted health screenings, and connected patients with follow-up care at partner clinics.',
      },
    ],
    stats: [
      { icon: Users, value: '2M+', label: 'People Reached' },
      { icon: Truck, value: '36', label: 'States Covered' },
      { icon: Heart, value: '300+', label: 'Communities Served' },
      { icon: Shield, value: '98%', label: 'Patient Satisfaction' },
    ],
    quote: {
      text: 'Before Laylife came to our village, we had to travel three hours to get medicine for my children. Now, they come to us every month. It has changed our lives.',
      author: 'Amina Ibrahim',
      role: 'Mother of 4, Katsina State',
    },
  },
  'affordable-medicine': {
    category: 'Affordable Medicine',
    title: 'Making Treatment Accessible',
    subtitle: 'Breaking Down Financial Barriers to Healthcare',
    heroImage: medicinesImage,
    content: [
      {
        heading: 'The Problem',
        text: 'For many Nigerian families, the cost of essential medicines represents a significant financial burden. Many are forced to choose between medication and other basic necessities, leading to untreated conditions and preventable suffering.',
      },
      {
        heading: 'Our Approach',
        text: 'Laylife Pharmaceutical has pioneered innovative pricing models that make quality medicines accessible to all Nigerians. Through strategic partnerships with manufacturers, efficient supply chains, and community-based distribution, we have reduced medication costs by up to 60%.',
      },
      {
        heading: 'Partnership Programs',
        text: 'We work with government health programs, NGOs, and community health insurance schemes to further subsidize costs for the most vulnerable populations. Our tiered pricing ensures that ability to pay never determines access to treatment.',
      },
      {
        heading: 'Results',
        text: 'Our affordable medicine programs have helped over 500,000 Nigerian families access the treatments they need. We have seen significant improvements in treatment adherence and health outcomes across our partner communities.',
      },
    ],
    stats: [
      { icon: Users, value: '500K+', label: 'Families Helped' },
      { icon: Heart, value: '60%', label: 'Cost Reduction' },
      { icon: Shield, value: '100+', label: 'Partner Organizations' },
      { icon: Truck, value: '1M+', label: 'Affordable Doses' },
    ],
    quote: {
      text: 'My mother needs diabetes medication every month. With Laylife\'s affordable pricing, we can now afford her treatment without sacrificing meals for our family.',
      author: 'Chukwuemeka Obi',
      role: 'Teacher, Enugu State',
    },
  },
};

const OurStory = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? storiesData[slug as keyof typeof storiesData] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-foreground mb-4">Story Not Found</h1>
          <Link to="/#impact" className="text-secondary hover:underline">
            Return to Impact Section
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={story.heroImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <Link
              to="/#impact"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Impact
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.1}>
            <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-6">
              {story.category}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-4">
              {story.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {story.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {story.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-light text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {story.content.map((section, index) => (
              <AnimatedSection key={section.heading} animation="fadeUp" delay={index * 0.1}>
                <div className="mb-12">
                  <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl lg:text-3xl font-light text-primary-foreground italic mb-8">
                "{story.quote.text}"
              </blockquote>
              <div>
                <p className="text-primary-foreground font-medium">{story.quote.author}</p>
                <p className="text-primary-foreground/70 text-sm">{story.quote.role}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection animation="fadeUp">
            <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-6">
              Want to Learn More About Our Impact?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact">
                <motion.button
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link to="/#impact">
                <motion.button
                  className="px-8 py-3 border border-foreground/20 text-foreground rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More Stories
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OurStory;

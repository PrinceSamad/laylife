import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Pharm. Chukwuemeka Nwosu',
      role: 'Owner, HealthPlus Pharmacy, Lagos',
      content: 'Laylife has been our trusted supplier for over 5 years. Their consistent quality and reliable delivery have made them an indispensable partner in serving our customers across Lagos.',
      initials: 'CN',
    },
    {
      id: 2,
      name: 'Dr. Aisha Mohammed',
      role: 'Medical Director, Kano General Hospital',
      content: 'The antimalarial products from Laylife have shown excellent efficacy in our patients. Their commitment to quality is evident in every batch we receive.',
      initials: 'AM',
    },
    {
      id: 3,
      name: 'Mr. Oluwaseun Adeyemi',
      role: 'Procurement Manager, Federal Medical Centre, Abuja',
      content: 'Working with Laylife has streamlined our pharmaceutical procurement process. Their professionalism and competitive pricing make them our preferred partner.',
      initials: 'OA',
    },
    {
      id: 4,
      name: 'Pharm. Grace Okoro',
      role: 'Regional Manager, MedServe Pharmacy Chain',
      content: 'Laylife\'s nationwide distribution network ensures we never run out of essential medicines. Their customer service is exceptional and responsive.',
      initials: 'GO',
    },
    {
      id: 5,
      name: 'Dr. Ibrahim Suleiman',
      role: 'Chief Pharmacist, University of Ibadan Teaching Hospital',
      content: 'The quality assurance standards at Laylife meet international benchmarks. We trust their products for our patients\' critical healthcare needs.',
      initials: 'IS',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Testimonials
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h2 className="text-foreground">
              Trusted by Healthcare
              <span className="block text-primary">Professionals Nationwide</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale">
            <div className="relative bg-background rounded-2xl p-8 lg:p-12 border border-border shadow-lg min-h-[320px]">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
                <Quote className="w-12 h-12 text-secondary/20" />
              </div>

              {/* Testimonial Content */}
              <div className="relative pt-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                  >
                    <blockquote className="text-xl lg:text-2xl font-light text-foreground leading-relaxed mb-8">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl font-medium text-primary">
                          {testimonials[currentIndex].initials}
                        </span>
                      </div>
                      
                      <div className="text-lg font-medium text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  onClick={() => navigate(-1)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </motion.button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'w-8 bg-secondary'
                          : 'bg-border hover:bg-muted-foreground'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={() => navigate(1)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Bar */}
        <AnimatedSection animation="fadeUp" delay={0.3}>
          <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-light text-primary mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-light text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-light text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years of Trust</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;

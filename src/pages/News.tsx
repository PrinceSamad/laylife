import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, Calendar } from 'lucide-react';
import labResearch from '@/assets/lab-research.jpg';
import patientCare from '@/assets/patient-care.jpg';
import manufacturing from '@/assets/manufacturing.jpg';

const News = () => {
  const newsArticles = [
    {
      slug: 'who-vaccine-distribution',
      date: 'January 28, 2026',
      category: 'Partnership',
      title: 'Laylife Partners with WHO for Nationwide Vaccine Distribution',
      excerpt: 'A landmark agreement to expand vaccine access across all 36 Nigerian states, representing one of the largest public-private healthcare initiatives in Nigerian history.',
      image: patientCare,
      featured: true,
    },
    {
      slug: 'malaria-treatment-breakthrough',
      date: 'January 15, 2026',
      category: 'Research',
      title: 'Breakthrough in Malaria Treatment Shows 94% Efficacy',
      excerpt: 'Clinical trials reveal promising results for our new antimalarial compound LF-MAL-7, developed entirely in Nigeria.',
      image: labResearch,
      featured: true,
    },
    {
      slug: 'nafdac-partnership',
      date: 'January 8, 2026',
      category: 'Regulatory',
      title: 'Laylife Strengthens Partnership with NAFDAC',
      excerpt: 'Enhanced collaboration to ensure highest pharmaceutical standards across Nigeria and combat counterfeit medicines.',
      image: manufacturing,
      featured: false,
    },
  ];

  const featuredArticles = newsArticles.filter(a => a.featured);
  const otherArticles = newsArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              News & Insights
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h1 className="text-primary-foreground mb-6">
              Latest Stories &
              <span className="block text-secondary">Updates</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Stay informed about our latest research breakthroughs, partnerships, 
              and initiatives transforming healthcare across Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-8">
              Featured Stories
            </span>
          </AnimatedSection>

          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {featuredArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <Link to={`/news/${article.slug}`}>
                  <motion.article
                    className="group relative overflow-hidden rounded-2xl"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-light text-primary-foreground mb-3 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-primary-foreground/70 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-secondary font-medium">
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-8">
              All Articles
            </span>
          </AnimatedSection>

          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {newsArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <Link to={`/news/${article.slug}`}>
                  <motion.article
                    className="flex flex-col md:flex-row gap-6 p-6 bg-background rounded-xl border border-border group"
                    whileHover={{ x: 8, borderColor: 'hsl(var(--secondary))' }}
                  >
                    <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium">
                        Read article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <div className="bg-primary rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="text-primary-foreground mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Subscribe to receive the latest news, research updates, and 
                announcements from Laylife Pharmaceutical.
              </p>
              <Link to="/#contact">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
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

export default News;

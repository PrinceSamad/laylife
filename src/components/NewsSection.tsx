import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      slug: 'who-vaccine-distribution',
      date: 'January 28, 2026',
      category: 'Partnership',
      title: 'Laylife Partners with WHO for Nationwide Vaccine Distribution',
      excerpt: 'A landmark agreement to expand vaccine access across all 36 Nigerian states.',
    },
    {
      slug: 'malaria-treatment-breakthrough',
      date: 'January 15, 2026',
      category: 'Research',
      title: 'Breakthrough in Malaria Treatment Shows 94% Efficacy',
      excerpt: 'Clinical trials reveal promising results for our new antimalarial compound.',
    },
    {
      slug: 'nafdac-partnership',
      date: 'January 8, 2026',
      category: 'Regulatory',
      title: 'Laylife Strengthens Partnership with NAFDAC',
      excerpt: 'Enhanced collaboration to ensure highest pharmaceutical standards across Nigeria.',
    },
  ];

  return (
    <section id="research" className="py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <AnimatedSection animation="fadeUp">
              <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                Latest News
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-foreground">
                Stories & Insights
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <Link to="/news">
              <motion.span
                className="inline-flex items-center gap-2 text-secondary font-medium"
                whileHover={{ x: 4 }}
              >
                <span className="animated-underline">View all news</span>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </AnimatedSection>
        </div>

        {/* News Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {news.map((item, index) => (
            <StaggerItem key={item.title}>
              <motion.article
                className="group h-full"
                whileHover={{ y: -8 }}
              >
                <Link to={`/news/${item.slug}`} className="block h-full">
                  {/* Date & Category */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium">
                    <span className="animated-underline">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Bottom Border Animation */}
                  <div className="mt-8 relative">
                    <div className="h-px bg-border" />
                    <motion.div
                      className="absolute top-0 left-0 h-px bg-secondary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default NewsSection;

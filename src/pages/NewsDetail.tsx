import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import labResearch from '@/assets/lab-research.jpg';
import patientCare from '@/assets/patient-care.jpg';
import manufacturing from '@/assets/manufacturing.jpg';

/**
 * SECURITY NOTE: Article Content Rendering
 * 
 * The newsArticles object below contains STATIC, DEVELOPER-CONTROLLED HTML content.
 * This content is rendered using dangerouslySetInnerHTML which is safe ONLY because:
 * 
 * 1. All content is hardcoded in this file - no user input or external data
 * 2. No database queries or CMS integration
 * 3. All HTML is reviewed and controlled by the development team
 * 
 * ⚠️ XSS WARNING: If this content source changes in the future to:
 * - User-generated content
 * - External CMS/API data
 * - Database-stored content
 * 
 * You MUST implement proper sanitization using DOMPurify or similar:
 * ```
 * import DOMPurify from 'dompurify';
 * const sanitizedContent = DOMPurify.sanitize(article.content);
 * ```
 * 
 * Additionally, consider implementing Content Security Policy (CSP) headers
 * as an additional layer of protection against XSS attacks.
 */
const newsArticles = {
  'who-vaccine-distribution': {
    date: 'January 28, 2026',
    category: 'Partnership',
    title: 'Laylife Partners with WHO for Nationwide Vaccine Distribution',
    excerpt: 'A landmark agreement to expand vaccine access across all 36 Nigerian states.',
    image: patientCare,
    author: 'Dr. Adam Muhammed Bedemasi',
    readTime: '5 min read',
    content: `
      <p class="lead">In a groundbreaking move that promises to reshape Nigeria's public health landscape, Laylife Pharmaceutical Limited has signed a comprehensive partnership agreement with the World Health Organization (WHO) to spearhead vaccine distribution across all 36 states and the Federal Capital Territory.</p>
      
      <h3>A New Era for Nigerian Healthcare</h3>
      <p>The partnership, announced at a press conference in Abuja, represents one of the largest public-private healthcare initiatives in Nigerian history. Under the agreement, Laylife will leverage its extensive distribution network and cold-chain infrastructure to ensure vaccines reach even the most remote communities.</p>
      
      <p>"This partnership is not just about logistics," said Dr. Chidi Emenike, CEO of Laylife Pharmaceutical. "It's about ensuring that every Nigerian, regardless of their location or economic status, has access to life-saving vaccines."</p>
      
      <h3>Key Highlights of the Partnership</h3>
      <ul>
        <li>Distribution coverage across all 774 Local Government Areas</li>
        <li>Investment in 50 new cold-chain storage facilities</li>
        <li>Training program for 2,000 healthcare workers</li>
        <li>Mobile vaccination units for hard-to-reach areas</li>
        <li>Real-time tracking and monitoring system</li>
      </ul>
      
      <h3>Impact on Public Health</h3>
      <p>The initiative is expected to increase vaccination rates by up to 40% within the first year. Special focus will be placed on childhood immunization programs and maternal health vaccines.</p>
      
      <blockquote>"Nigeria has the potential to become a model for healthcare delivery in Africa. This partnership brings us one step closer to that vision." — WHO Regional Director</blockquote>
      
      <h3>Looking Ahead</h3>
      <p>The first phase of the program will launch in Q2 2026, beginning with the Northern states where vaccine coverage has historically been lowest. Laylife has committed to investing ₦15 billion over the next five years to support this initiative.</p>
    `,
    relatedArticles: ['malaria-treatment-breakthrough', 'pharmaceutical-excellence-award'],
  },
  'malaria-treatment-breakthrough': {
    date: 'January 15, 2026',
    category: 'Research',
    title: 'Breakthrough in Malaria Treatment Shows 94% Efficacy',
    excerpt: 'Clinical trials reveal promising results for our new antimalarial compound.',
    image: labResearch,
    author: 'Prof. Ngozi Adeyemi',
    readTime: '7 min read',
    content: `
      <p class="lead">Laylife Pharmaceutical's Research & Development division has announced remarkable results from Phase III clinical trials of LF-MAL-7, a novel antimalarial compound that shows unprecedented efficacy in treating drug-resistant malaria strains.</p>
      
      <h3>Trial Results Exceed Expectations</h3>
      <p>The multi-center trial, conducted across five Nigerian states with over 3,000 participants, demonstrated a 94% cure rate within 72 hours of treatment initiation. Perhaps more significantly, the compound showed strong efficacy against Plasmodium falciparum strains that had developed resistance to existing treatments.</p>
      
      <h3>A Nigerian Solution for a Nigerian Challenge</h3>
      <p>What makes this development particularly noteworthy is that LF-MAL-7 was developed entirely in Nigeria, from initial discovery to clinical trials. The compound is derived from a combination of synthetic chemistry and traditional Nigerian medicinal plants.</p>
      
      <p>"For too long, Africa has been a recipient of pharmaceutical innovations developed elsewhere," said Prof. Ngozi Adeyemi, Head of Research at Laylife. "This breakthrough proves that Nigerian scientists can lead the world in finding solutions to our most pressing health challenges."</p>
      
      <h3>Next Steps</h3>
      <p>Laylife has submitted an application to NAFDAC for accelerated approval, with expectations of market availability by late 2026. The company is also in discussions with the African Union for continent-wide distribution.</p>
    `,
    relatedArticles: ['who-vaccine-distribution', 'pharmaceutical-excellence-award'],
  },
  'nafdac-partnership': {
    date: 'January 8, 2026',
    category: 'Regulatory',
    title: 'Laylife Strengthens Partnership with NAFDAC',
    excerpt: 'Enhanced collaboration to ensure highest pharmaceutical standards across Nigeria.',
    image: manufacturing,
    author: 'Editorial Team',
    readTime: '4 min read',
    content: `
      <p class="lead">Laylife Pharmaceutical Limited has reinforced its commitment to pharmaceutical excellence through an enhanced partnership with the National Agency for Food and Drug Administration and Control (NAFDAC).</p>
      
      <h3>A Commitment to Quality</h3>
      <p>This partnership focuses on ensuring all Laylife products meet and exceed NAFDAC's stringent quality standards. Our state-of-the-art manufacturing facility in Abuja has been certified compliant with WHO Good Manufacturing Practice (GMP) guidelines.</p>
      
      <h3>Key Areas of Collaboration</h3>
      <ul>
        <li>Enhanced quality control protocols across all manufacturing processes</li>
        <li>Regular facility inspections and compliance audits</li>
        <li>Joint training programs for pharmaceutical professionals</li>
        <li>Collaborative efforts to combat counterfeit medicines in Nigeria</li>
        <li>Public awareness campaigns on medication safety</li>
      </ul>
      
      <h3>Protecting Nigerian Patients</h3>
      <p>A crucial aspect of this partnership involves combating the proliferation of counterfeit and substandard medicines in the Nigerian market. Laylife has implemented advanced authentication technologies across its product range.</p>
      
      <blockquote>"Every Nigerian deserves access to genuine, safe, and effective medicines. This partnership with NAFDAC ensures we maintain the highest standards of pharmaceutical practice." — Dr. Adam Muhammed Bedemasi, CEO</blockquote>
      
      <h3>Looking Forward</h3>
      <p>Laylife remains committed to working closely with regulatory bodies to elevate pharmaceutical standards across Nigeria. Our investment in quality assurance represents our unwavering dedication to patient safety and healthcare excellence.</p>
    `,
    relatedArticles: ['who-vaccine-distribution', 'malaria-treatment-breakthrough'],
  },
};

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? newsArticles[slug as keyof typeof newsArticles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-foreground mb-4">Article Not Found</h1>
          <Link to="/" className="text-secondary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = article.relatedArticles
    .map(slug => ({ slug, ...newsArticles[slug as keyof typeof newsArticles] }))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/#research"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </motion.div>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-6">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <AnimatedSection animation="fadeUp" className="lg:col-span-8">
              <article
                className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-secondary prose-blockquote:border-secondary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-ul:text-muted-foreground prose-li:marker:text-secondary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex gap-2">
                    {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                      <motion.button
                        key={idx}
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <AnimatedSection animation="fadeUp" delay={0.2}>
                <div className="sticky top-32">
                  <h3 className="text-lg font-medium text-foreground mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/news/${related.slug}`}
                        className="block group"
                      >
                        <motion.div
                          className="flex gap-4"
                          whileHover={{ x: 4 }}
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <span className="text-xs text-secondary font-medium">{related.category}</span>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">{related.date}</span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NewsDetail;

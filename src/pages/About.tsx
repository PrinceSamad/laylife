 import ScrollProgress from '@/components/ScrollProgress';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
 import WhatsAppButton from '@/components/WhatsAppButton';
 import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { useRef } from 'react';
 import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';
 import teamImage from '@/assets/team-healthcare.jpg';
 import labImage from '@/assets/lab-research.jpg';
 
 const About = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end start'],
   });
 
   const imageX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
 
   const stats = [
     { value: '8M+', label: 'Nigerians Reached' },
     { value: '36', label: 'States + FCT' },
     { value: '150+', label: 'Medicines Portfolio' },
     { value: '5K', label: 'Healthcare Partners' },
   ];
 
   const values = [
     {
       icon: Target,
       title: 'Excellence',
       description: 'We pursue the highest standards in pharmaceutical manufacturing and distribution.',
     },
     {
       icon: Heart,
       title: 'Compassion',
       description: 'Every decision we make considers the patients whose lives depend on our medicines.',
     },
     {
       icon: Award,
       title: 'Integrity',
       description: 'Transparency and ethical practices guide all our business relationships.',
     },
     {
       icon: Users,
       title: 'Collaboration',
       description: 'We build lasting partnerships with healthcare professionals across Nigeria.',
     },
     {
       icon: Globe,
       title: 'Accessibility',
       description: 'Quality healthcare should reach every Nigerian, regardless of location.',
     },
     {
       icon: Eye,
       title: 'Innovation',
       description: 'Continuously improving our processes to better serve Nigerian healthcare needs.',
     },
   ];
 
   return (
     <div className="min-h-screen bg-background">
       <ScrollProgress />
       <Header />
 
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
         </div>
         
         <div className="container mx-auto px-6 lg:px-12 relative">
           <AnimatedSection animation="fadeUp">
             <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
               About Laylife Pharmaceutical
             </span>
           </AnimatedSection>
           
           <AnimatedSection animation="fadeUp" delay={0.1}>
             <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
               Reimagining Healthcare for Nigeria's Future
             </h1>
           </AnimatedSection>
           
           <AnimatedSection animation="fadeUp" delay={0.2}>
             <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
               We believe quality healthcare is a fundamental right. Our mission is to bridge the gap 
               between global pharmaceutical innovation and Nigerian communities.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Mission Section */}
       <section ref={containerRef} className="relative py-32 overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30" />
         
         <div className="container mx-auto px-6 lg:px-12 relative">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="relative z-10">
               <AnimatedSection animation="fadeUp">
                 <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                   Our Mission
                 </span>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.1}>
                 <h2 className="text-foreground mb-8 text-balance text-3xl md:text-4xl font-light">
                   Delivering Quality Medicines
                   <span className="block text-primary">to Every Nigerian</span>
                 </h2>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.2}>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                   At Laylife Pharmaceutical, we believe quality healthcare is a fundamental right, 
                   not a privilege. Our mission is to bridge the gap between global pharmaceutical 
                   innovation and Nigerian communities, ensuring access to life-saving medicines 
                   in every state and local government area.
                 </p>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.3}>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                   From our headquarters in Abuja, we've built a distribution network spanning all 
                   36 states and the FCT, working alongside healthcare professionals to deliver the 
                   treatments that transform lives.
                 </p>
               </AnimatedSection>
 
               <AnimatedSection animation="reveal" delay={0.4}>
                 <div className="w-20 h-0.5 bg-secondary mb-10" />
               </AnimatedSection>
 
               <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={0.15}>
                 {stats.map((stat) => (
                   <StaggerItem key={stat.label}>
                     <div className="group">
                       <motion.span
                         className="block text-4xl lg:text-5xl font-light text-primary mb-2"
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.3 }}
                       >
                         {stat.value}
                       </motion.span>
                       <span className="text-sm text-muted-foreground tracking-wide">
                         {stat.label}
                       </span>
                     </div>
                   </StaggerItem>
                 ))}
               </StaggerContainer>
             </div>
 
             <motion.div
               className="relative"
               style={{ x: imageX }}
             >
               <AnimatedSection animation="scale" delay={0.2}>
                 <div className="relative">
                   <div className="cinematic-image aspect-[4/5] lg:aspect-[3/4]">
                     <img
                       src={teamImage}
                       alt="Laylife Pharmaceutical healthcare team delivering quality medicines across Nigeria"
                       className="object-cover w-full h-full"
                       loading="lazy"
                       decoding="async"
                     />
                   </div>
                   
                   <motion.div
                     className="absolute -bottom-8 -left-8 bg-background p-6 rounded-lg shadow-xl max-w-xs"
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6, duration: 0.8 }}
                     viewport={{ once: true }}
                   >
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                         <span className="text-secondary text-xl">🇳🇬</span>
                       </div>
                       <div>
                         <span className="block font-semibold text-foreground">Proudly Nigerian</span>
                         <span className="text-sm text-muted-foreground">Serving All 36 States + FCT</span>
                       </div>
                     </div>
                   </motion.div>
 
                   <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary/20 rounded-lg" />
                 </div>
               </AnimatedSection>
             </motion.div>
           </div>
         </div>
       </section>
 
       {/* Vision Section */}
       <section className="py-32 bg-muted/30">
         <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection animation="scale">
               <div className="cinematic-image aspect-video rounded-2xl overflow-hidden">
                 <img
                   src={labImage}
                   alt="Modern pharmaceutical research laboratory at Laylife Pharmaceutical"
                   className="object-cover w-full h-full"
                   loading="lazy"
                   decoding="async"
                 />
               </div>
             </AnimatedSection>
 
             <div>
               <AnimatedSection animation="fadeUp">
                 <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                   Our Vision
                 </span>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.1}>
                 <h2 className="text-foreground mb-8 text-3xl md:text-4xl font-light">
                   A Healthier Nigeria Through Innovation
                 </h2>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.2}>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                   We envision a Nigeria where every citizen, regardless of their location or economic 
                   status, has access to the medicines they need. By combining international pharmaceutical 
                   standards with deep local expertise, we're building the healthcare infrastructure 
                   Nigeria deserves.
                 </p>
               </AnimatedSection>
 
               <AnimatedSection animation="fadeUp" delay={0.3}>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Our commitment extends beyond simply distributing medicines. We actively invest in 
                   training healthcare professionals, supporting community health initiatives, and 
                   advocating for policies that improve healthcare access across the nation.
                 </p>
               </AnimatedSection>
             </div>
           </div>
         </div>
       </section>
 
       {/* Values Section */}
       <section className="py-32">
         <div className="container mx-auto px-6 lg:px-12">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <AnimatedSection animation="fadeUp">
               <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
                 Our Values
               </span>
             </AnimatedSection>
             
             <AnimatedSection animation="fadeUp" delay={0.1}>
               <h2 className="text-foreground text-3xl md:text-4xl font-light">
                 The Principles That Guide Us
               </h2>
             </AnimatedSection>
           </div>
 
           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
             {values.map((value) => (
               <StaggerItem key={value.title}>
                 <motion.div
                   className="p-8 bg-muted/30 rounded-2xl border border-border hover:border-secondary/50 transition-colors"
                   whileHover={{ y: -8 }}
                   transition={{ duration: 0.3 }}
                 >
                   <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                     <value.icon className="w-7 h-7 text-secondary" />
                   </div>
                   <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                   <p className="text-muted-foreground">{value.description}</p>
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
 
 export default About;
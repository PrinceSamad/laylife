 import ScrollProgress from '@/components/ScrollProgress';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
 import WhatsAppButton from '@/components/WhatsAppButton';
 import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { z } from 'zod';
 import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 
 const contactFormSchema = z.object({
   name: z.string()
     .trim()
     .min(1, { message: "Name is required" })
     .max(100, { message: "Name must be less than 100 characters" })
     .regex(/^[a-zA-Z\s\-'.]+$/, { message: "Name contains invalid characters" }),
   email: z.string()
     .trim()
     .min(1, { message: "Email is required" })
     .email({ message: "Please enter a valid email address" })
     .max(255, { message: "Email must be less than 255 characters" }),
   company: z.string()
     .trim()
     .max(150, { message: "Company name must be less than 150 characters" })
     .optional()
     .or(z.literal('')),
   subject: z.string()
     .trim()
     .min(1, { message: "Subject is required" })
     .max(200, { message: "Subject must be less than 200 characters" }),
   message: z.string()
     .trim()
     .min(10, { message: "Message must be at least 10 characters" })
     .max(2000, { message: "Message must be less than 2000 characters" }),
 });
 
 type ContactFormData = z.infer<typeof contactFormSchema>;
 type FormErrors = Partial<Record<keyof ContactFormData, string>>;
 
 const Contact = () => {
   const [formState, setFormState] = useState<ContactFormData>({
     name: '',
     email: '',
     company: '',
     subject: '',
     message: '',
   });
   const [errors, setErrors] = useState<FormErrors>({});
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const validateForm = (): boolean => {
     const result = contactFormSchema.safeParse(formState);
     
     if (!result.success) {
       const fieldErrors: FormErrors = {};
       result.error.errors.forEach((error) => {
         const field = error.path[0] as keyof ContactFormData;
         if (!fieldErrors[field]) {
           fieldErrors[field] = error.message;
         }
       });
       setErrors(fieldErrors);
       return false;
     }
     
     setErrors({});
     return true;
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     if (!validateForm()) {
       return;
     }
     
     setIsSubmitting(true);
     await new Promise(resolve => setTimeout(resolve, 1500));
     
     setIsSubmitting(false);
     setIsSubmitted(true);
     
     setTimeout(() => {
       setIsSubmitted(false);
       setFormState({ name: '', email: '', company: '', subject: '', message: '' });
       setErrors({});
     }, 5000);
   };
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     setFormState(prev => ({ ...prev, [name]: value }));
     
     if (errors[name as keyof ContactFormData]) {
       setErrors(prev => ({ ...prev, [name]: undefined }));
     }
   };
 
   const contactInfo = [
     {
       icon: MapPin,
       title: 'Head Office',
       lines: ['Suite 4, Dubai Market', 'Kaura, Abuja', 'Nigeria'],
     },
     {
       icon: Phone,
       title: 'Phone',
       lines: ['+234 806 035 0368', 'Mon - Fri: 8am - 6pm WAT'],
     },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@laylifepharmaceutical.com'],
    },
     {
       icon: Clock,
       title: 'Business Hours',
       lines: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
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
               Contact Us
             </span>
           </AnimatedSection>
           
           <AnimatedSection animation="fadeUp" delay={0.1}>
             <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
               Let's Build Something Together
             </h1>
           </AnimatedSection>
           
           <AnimatedSection animation="fadeUp" delay={0.2}>
             <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
               Whether you're a healthcare partner, distributor, or innovator, 
               we're eager to explore how we can collaborate to transform Nigerian healthcare.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Contact Content */}
       <section className="py-32">
         <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
             {/* Contact Info */}
             <div className="lg:col-span-2">
               <StaggerContainer className="space-y-8" staggerDelay={0.15}>
                 {contactInfo.map((item) => (
                   <StaggerItem key={item.title}>
                     <motion.div
                       className="flex gap-5 p-6 bg-muted/30 rounded-xl border border-border group"
                       whileHover={{ x: 8, borderColor: 'hsl(var(--secondary))' }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                         <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                       </div>
                       <div>
                         <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                         {item.lines.map((line, idx) => (
                           <p key={idx} className="text-sm text-muted-foreground">
                             {line}
                           </p>
                         ))}
                       </div>
                     </motion.div>
                   </StaggerItem>
                 ))}
               </StaggerContainer>
 
               {/* Map */}
               <AnimatedSection animation="fadeUp" delay={0.6}>
                 <motion.div
                   className="mt-8 relative rounded-xl overflow-hidden aspect-[16/9] bg-primary/5"
                   whileHover={{ scale: 1.02 }}
                 >
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252184.52650988893!2d7.249018624821366!3d9.024428298878768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2s!4v1706459123456!5m2!1sen!2s"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="absolute inset-0"
                     title="Laylife Pharmaceutical office location in Abuja, Nigeria"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                 </motion.div>
               </AnimatedSection>
             </div>
 
             {/* Contact Form */}
             <div className="lg:col-span-3">
               <AnimatedSection animation="fadeUp" delay={0.2}>
                 <motion.div
                   className="bg-muted/30 rounded-2xl p-8 lg:p-10 border border-border"
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                   {isSubmitted ? (
                     <motion.div
                       className="text-center py-16"
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                     >
                       <motion.div
                         className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ type: "spring", delay: 0.2 }}
                       >
                         <CheckCircle className="w-10 h-10 text-secondary" />
                       </motion.div>
                       <h3 className="text-2xl font-light text-foreground mb-3">Message Sent!</h3>
                       <p className="text-muted-foreground">
                         Thank you for reaching out. We'll get back to you within 24 hours.
                       </p>
                     </motion.div>
                   ) : (
                     <>
                       <div className="mb-8">
                         <h3 className="text-2xl font-light text-foreground mb-2">Send us a message</h3>
                         <p className="text-muted-foreground">Fill out the form below and we'll respond promptly.</p>
                       </div>
 
                       <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                         <div className="grid sm:grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <label htmlFor="name" className="text-sm font-medium text-foreground">
                               Full Name *
                             </label>
                             <Input
                               id="name"
                               name="name"
                               value={formState.name}
                               onChange={handleChange}
                               placeholder="Your name"
                               maxLength={100}
                               className={`bg-background border-border focus:border-secondary ${errors.name ? 'border-destructive' : ''}`}
                               aria-invalid={!!errors.name}
                               aria-describedby={errors.name ? 'name-error' : undefined}
                             />
                             {errors.name && (
                               <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
                                 <AlertCircle className="w-3 h-3" />
                                 {errors.name}
                               </p>
                             )}
                           </div>
                           <div className="space-y-2">
                             <label htmlFor="email" className="text-sm font-medium text-foreground">
                               Email Address *
                             </label>
                             <Input
                               id="email"
                               name="email"
                               type="email"
                               value={formState.email}
                               onChange={handleChange}
                               placeholder="your@email.com"
                               maxLength={255}
                               className={`bg-background border-border focus:border-secondary ${errors.email ? 'border-destructive' : ''}`}
                               aria-invalid={!!errors.email}
                               aria-describedby={errors.email ? 'email-error' : undefined}
                             />
                             {errors.email && (
                               <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                                 <AlertCircle className="w-3 h-3" />
                                 {errors.email}
                               </p>
                             )}
                           </div>
                         </div>
 
                         <div className="grid sm:grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <label htmlFor="company" className="text-sm font-medium text-foreground">
                               Company / Organization
                             </label>
                             <Input
                               id="company"
                               name="company"
                               value={formState.company}
                               onChange={handleChange}
                               placeholder="Your organization"
                               maxLength={150}
                               className={`bg-background border-border focus:border-secondary ${errors.company ? 'border-destructive' : ''}`}
                             />
                           </div>
                           <div className="space-y-2">
                             <label htmlFor="subject" className="text-sm font-medium text-foreground">
                               Subject *
                             </label>
                             <Input
                               id="subject"
                               name="subject"
                               value={formState.subject}
                               onChange={handleChange}
                               placeholder="How can we help?"
                               maxLength={200}
                               className={`bg-background border-border focus:border-secondary ${errors.subject ? 'border-destructive' : ''}`}
                               aria-invalid={!!errors.subject}
                               aria-describedby={errors.subject ? 'subject-error' : undefined}
                             />
                             {errors.subject && (
                               <p id="subject-error" className="text-sm text-destructive flex items-center gap-1">
                                 <AlertCircle className="w-3 h-3" />
                                 {errors.subject}
                               </p>
                             )}
                           </div>
                         </div>
 
                         <div className="space-y-2">
                           <label htmlFor="message" className="text-sm font-medium text-foreground">
                             Message *
                           </label>
                           <Textarea
                             id="message"
                             name="message"
                             value={formState.message}
                             onChange={handleChange}
                             placeholder="Tell us more about your inquiry..."
                             maxLength={2000}
                             rows={6}
                             className={`bg-background border-border focus:border-secondary resize-none ${errors.message ? 'border-destructive' : ''}`}
                             aria-invalid={!!errors.message}
                             aria-describedby={errors.message ? 'message-error' : undefined}
                           />
                           {errors.message && (
                             <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                               <AlertCircle className="w-3 h-3" />
                               {errors.message}
                             </p>
                           )}
                           <p className="text-xs text-muted-foreground text-right">
                             {formState.message.length}/2000
                           </p>
                         </div>
 
                         <motion.button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                         >
                           {isSubmitting ? (
                             <>
                               <motion.div
                                 className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                 animate={{ rotate: 360 }}
                                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                               />
                               Sending...
                             </>
                           ) : (
                             <>
                               <Send className="w-5 h-5" />
                               Send Message
                             </>
                           )}
                         </motion.button>
                       </form>
                     </>
                   )}
                 </motion.div>
               </AnimatedSection>
             </div>
           </div>
         </div>
       </section>
 
       <Footer />
       <WhatsAppButton />
     </div>
   );
 };
 
 export default Contact;
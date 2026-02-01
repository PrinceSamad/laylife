import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Search, Filter } from 'lucide-react';

const Medicines = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Medicines' },
    { id: 'antimalarial', label: 'Antimalarials' },
    { id: 'antibiotic', label: 'Antibiotics' },
    { id: 'cardiovascular', label: 'Cardiovascular' },
    { id: 'diabetes', label: 'Diabetes Care' },
    { id: 'analgesic', label: 'Pain Relief' },
    { id: 'vitamins', label: 'Vitamins & Supplements' },
  ];

  const medicines = [
    {
      id: 1,
      name: 'LayMalar Plus',
      category: 'antimalarial',
      description: 'Artemether-Lumefantrine combination for effective malaria treatment',
      dosage: '20mg/120mg Tablets',
      pack: '24 Tablets',
      prescription: true,
    },
    {
      id: 2,
      name: 'LayMox 500',
      category: 'antibiotic',
      description: 'Amoxicillin capsules for bacterial infections',
      dosage: '500mg Capsules',
      pack: '100 Capsules',
      prescription: true,
    },
    {
      id: 3,
      name: 'LayPress',
      category: 'cardiovascular',
      description: 'Amlodipine for hypertension management',
      dosage: '5mg/10mg Tablets',
      pack: '30 Tablets',
      prescription: true,
    },
    {
      id: 4,
      name: 'LayGluc',
      category: 'diabetes',
      description: 'Metformin HCl for Type 2 diabetes management',
      dosage: '500mg/850mg Tablets',
      pack: '60 Tablets',
      prescription: true,
    },
    {
      id: 5,
      name: 'LayPain Extra',
      category: 'analgesic',
      description: 'Paracetamol + Caffeine for effective pain relief',
      dosage: '500mg/65mg Tablets',
      pack: '96 Tablets',
      prescription: false,
    },
    {
      id: 6,
      name: 'LayVit Complete',
      category: 'vitamins',
      description: 'Multivitamin with minerals for daily health',
      dosage: 'Tablets',
      pack: '100 Tablets',
      prescription: false,
    },
    {
      id: 7,
      name: 'LayMalar Junior',
      category: 'antimalarial',
      description: 'Pediatric antimalarial suspension',
      dosage: 'Suspension 60ml',
      pack: '1 Bottle',
      prescription: true,
    },
    {
      id: 8,
      name: 'LayCipro',
      category: 'antibiotic',
      description: 'Ciprofloxacin for urinary and respiratory infections',
      dosage: '500mg Tablets',
      pack: '10 Tablets',
      prescription: true,
    },
    {
      id: 9,
      name: 'LayCardio',
      category: 'cardiovascular',
      description: 'Atorvastatin for cholesterol management',
      dosage: '10mg/20mg Tablets',
      pack: '30 Tablets',
      prescription: true,
    },
    {
      id: 10,
      name: 'LayZinc Plus',
      category: 'vitamins',
      description: 'Zinc + Vitamin C for immune support',
      dosage: 'Tablets',
      pack: '60 Tablets',
      prescription: false,
    },
    {
      id: 11,
      name: 'LayIbu',
      category: 'analgesic',
      description: 'Ibuprofen for pain and inflammation',
      dosage: '400mg Tablets',
      pack: '100 Tablets',
      prescription: false,
    },
    {
      id: 12,
      name: 'LayGluc XR',
      category: 'diabetes',
      description: 'Extended release Metformin for better compliance',
      dosage: '500mg XR Tablets',
      pack: '30 Tablets',
      prescription: true,
    },
  ];

  const filteredMedicines = medicines.filter((med) => {
    const matchesCategory = activeCategory === 'all' || med.category === activeCategory;
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         med.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
              Our Products
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <h1 className="text-primary-foreground mb-6">
              Medicines Catalog
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Quality pharmaceutical products for Nigerian healthcare needs. 
              All products are NAFDAC approved and meet international standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medicines Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No medicines found matching your criteria.</p>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.1}>
              {filteredMedicines.map((medicine) => (
                <StaggerItem key={medicine.id}>
                  <motion.div
                    className="bg-background border border-border rounded-lg p-6 h-full flex flex-col"
                    whileHover={{ y: -4, boxShadow: '0 10px 30px -10px hsla(215, 75%, 25%, 0.15)' }}
                  >
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full capitalize">
                        {medicine.category}
                      </span>
                      {medicine.prescription && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Rx
                        </span>
                      )}
                    </div>

                    {/* Medicine Icon */}
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <span className="text-3xl">💊</span>
                    </div>

                    {/* Medicine Details */}
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {medicine.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {medicine.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Dosage:</span>
                        <span className="text-foreground">{medicine.dosage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pack:</span>
                        <span className="text-foreground">{medicine.pack}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Important Notice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• All products are NAFDAC approved and manufactured according to WHO GMP standards.</li>
              <li>• Products marked with "Rx" require a valid prescription from a licensed healthcare professional.</li>
              <li>• Always consult your doctor or pharmacist before taking any medication.</li>
              <li>• For product inquiries and wholesale orders, please contact us at +234 806 035 0368.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Medicines;

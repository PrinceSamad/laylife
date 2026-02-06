import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
 import About from "./pages/About";
 import Contact from "./pages/Contact";
import NewsDetail from "./pages/NewsDetail";
import News from "./pages/News";
import Leadership from "./pages/Leadership";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/story/:slug" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

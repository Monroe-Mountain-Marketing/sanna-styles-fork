import { Routes, Route, Navigate } from 'react-router-dom';

import PagesLayout from '@/components/layouts/pagesLayout';

import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ContactPage from '@/pages/Contact';
import NailGalleryPage from '@/pages/NailGallery';
import PoliciesPage from '@/pages/Policies';
import ServicesPage from '@/pages/Services';
import BookLargePartyPage from '@/pages/BookLargeParty';
import LuxeNightMarketPage from '@/pages/LuxeNightMarket';
import CareersPage from '@/pages/Careers';
import ForNailTechniciansPage from '@/pages/ForNailTechnicians';
import MobileSalonRentPage from '@/pages/MobileSalonRent';
import BlogPage from '@/pages/Blog';
import HowToBookPage from '@/pages/HowToBook';
import ServiceAreasPage from '@/pages/ServiceAreas';
import Privacy from '@/pages/docs/Privacy';
import Terms from '@/pages/docs/Terms';

export default function AppRoutes() {
  return (
    <Routes>

      {/* routes with layout wrapper */}
      <Route path="/" element={<PagesLayout />}>  
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="nail-gallery" element={<NailGalleryPage />} />
        <Route path="policies" element={<PoliciesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="book-a-large-party-today" element={<BookLargePartyPage />} />
        <Route path="the-luxe-night-market-by-sanna-styles" element={<LuxeNightMarketPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="for-nail-technicians" element={<ForNailTechniciansPage />} />
        <Route path="mobile-salon-rent" element={<MobileSalonRentPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="how-to-book" element={<HowToBookPage />} />
        <Route path="service-areas" element={<ServiceAreasPage />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
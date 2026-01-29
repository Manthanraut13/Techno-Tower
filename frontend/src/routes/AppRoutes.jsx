import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminLayout from '../components/layout/AdminLayout';
import AuthLayout from '../components/layout/AuthLayout';
import { Outlet } from 'react-router-dom';
import About from '../pages/public/About';
import Dashboard from '../pages/admin/Dashboard';
import Dealers from '../pages/admin/Dealers';
import CreateCampaign from '../pages/admin/CreateCampaign';
import CampaignDashboard from '../pages/admin/CampaignDashboard';
import EnquiryInbox from '../pages/admin/EnquiryInbox';
import ProductInventory from '../pages/admin/ProductInventory';
import ProjectManagement from '../pages/admin/ProjectManagement';
import TenderManagement from '../pages/admin/TenderManagement';
import GalleryManagement from '../pages/admin/GalleryManagement';
import Login from '../pages/auth/Login';

import ForgotPassword from '../pages/auth/ForgotPassword';
import LogoutConfirmation from '../pages/auth/LogoutConfirmation';
import Contact from '../pages/public/Contact';
import Partner from '../pages/public/Partner';
import Gallery from '../pages/public/Gallery';
import Home from '../pages/public/Home';
import ProductDetail from '../pages/public/ProductDetail';
import Products from '../pages/public/Products';
import Projects from '../pages/public/Projects';
import Services from '../pages/public/Services';
import Tenders from '../pages/public/Tenders';

// Public Layout
const PublicLayout = () => (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tenders" element={<Tenders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/logout" element={<LogoutConfirmation />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dealers" element={<Dealers />} />
                <Route path="enquiries" element={<EnquiryInbox />} />
                <Route path="products" element={<ProductInventory />} />
                <Route path="projects" element={<ProjectManagement />} />
                <Route path="tenders" element={<TenderManagement />} />
                <Route path="gallery" element={<GalleryManagement />} />
                <Route path="campaigns" element={<CampaignDashboard />} />

                <Route path="campaigns/create" element={<CreateCampaign />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<div className="p-10 text-center">404 Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;

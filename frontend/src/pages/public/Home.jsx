
import Hero from '../../components/public/home/Hero';
import Stats from '../../components/public/home/Stats';
import Services from '../../components/public/home/Services';
import Products from '../../components/public/home/Products';
import FeaturedProjects from '../../components/public/home/FeaturedProjects';
import Testimonials from '../../components/public/home/Testimonials';
import CTA from '../../components/public/home/CTA';
import ChatWidget from '../../components/public/home/ChatWidget';

const Home = () => {
    return (
        <div className="flex-1 flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Hero />
            <Stats />
            <Services />
            <Products />
            <FeaturedProjects />
            <Testimonials />
            <CTA />
            <ChatWidget />
        </div>
    );
};

export default Home;

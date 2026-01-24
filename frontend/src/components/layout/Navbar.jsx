import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Projects', path: '/projects' },
        { name: 'Tenders', path: '/tenders' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-[#E5E7EB] dark:border-[#3e3223] ${isScrolled
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
                : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
                }`}

        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-90">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">Techno Tower</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${isActive(link.path)
                                    ? 'text-primary font-bold'
                                    : 'text-text-main dark:text-gray-200 hover:text-primary dark:hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link to="/partner" className="bg-primary hover:bg-primary-dark text-text-main dark:text-gray-900 text-sm font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
                            Partner Portal
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-text-main dark:text-white hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-b border-[#E5E7EB] dark:border-[#3e3223]">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-3 text-base font-medium rounded-md ${isActive(link.path)
                                    ? 'text-primary bg-primary/10'
                                    : 'text-text-main dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                            <button className="w-full bg-primary hover:bg-primary-dark text-text-main dark:text-gray-900 text-sm font-bold py-3 px-6 rounded-lg transition-colors shadow-sm">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

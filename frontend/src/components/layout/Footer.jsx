import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-24 pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 text-primary">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold text-text-main dark:text-white">Techno Tower</h2>
                        </div>
                        <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                            Leading manufacturer of smart lighting infrastructure and heavy-duty light poles. ISO 9001:2015 Certified.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-text-main dark:text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/projects" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Our Projects</Link></li>
                            <li><Link to="/products" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Products Catalogue</Link></li>
                            <li><Link to="/partner" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Dealer Portal</Link></li>
                            <li><Link to="/tenders" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Tenders</Link></li>

                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-bold text-text-main dark:text-white mb-6">Products</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Street Light Poles</Link></li>
                            <li><Link to="/products" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">High Masts</Link></li>
                            <li><Link to="/services" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Smart City Solutions</Link></li>
                            <li><Link to="/products" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Decorative Poles</Link></li>
                            <li><Link to="/products" className="text-sm text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Traffic Structures</Link></li>

                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-text-main dark:text-white mb-6">Stay Updated</h3>
                        <p className="text-sm text-text-muted dark:text-gray-400 mb-4">Subscribe to our newsletter for the latest industry updates.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                className="w-full rounded-lg border-[#e8dfce] dark:border-[#4a3e2f] bg-background-light dark:bg-[#1a150d] text-text-main dark:text-white h-10 px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                placeholder="Your email address"
                                type="email"
                            />
                            <button className="bg-primary hover:bg-primary-dark text-text-main dark:text-gray-900 font-bold py-2 px-4 rounded-lg text-sm transition-colors w-full">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#e8dfce] dark:border-[#3e3223] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        © {new Date().getFullYear()} Techno Tower Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


import { useState } from 'react';
import {
    Zap,
    Menu,
    Power,
    LogOut,
    Lock,
    Globe,
    Mail,
    MapPin,
    Phone
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LogoutConfirmation = () => {
    const navigate = useNavigate();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        setIsLoggingOut(true);
        // Simulate logout process
        setTimeout(() => {
            navigate('/'); // Redirect to home after logout
        }, 1000);
    };

    const handleCancel = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <div className="bg-white dark:bg-gray-950 font-display text-text-main dark:text-gray-100 transition-colors duration-300 flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="#" className="flex items-center gap-3 group">
                            <div className="size-8 text-[#f4a825] flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
                                <Zap size={28} />
                            </div>
                            <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Techno Tower</h2>
                        </Link>
                        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                            <div className="flex items-center gap-6">
                                <Link to="#" className="text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Dashboard</Link>
                                <Link to="#" className="text-[#1c160d] dark:text-gray-300 hover:text-[#f4a825] dark:hover:text-[#f4a825] text-sm font-medium transition-colors">Projects</Link>
                                <Link to="#" className="text-[#1c160d] dark:text-gray-300 hover:text-[#f4a825] dark:hover:text-[#f4a825] text-sm font-medium transition-colors">Inventory</Link>
                                <Link to="#" className="text-[#1c160d] dark:text-gray-300 hover:text-[#f4a825] dark:hover:text-[#f4a825] text-sm font-medium transition-colors">Settings</Link>
                            </div>
                            <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-gray-700">
                                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                    <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8urQ9CkXcVLp30fWby0IaLxgCGNg9WY2Og6bvauXSWw-wg0p5UjpLUihU0_7j2l5ipE7CrGwqKLiKZdF55OudElRWUxCbcUICfv2ojFJCgLEL3azMjeb8IQE7CC_LheOC4BZEt9fXP28-ogSQz414vXEgQYERT52jjnEEKS4NglxYBWDBf8c12BgeNrEXEY4tQSBv9bXISIDJLJ3cYsajXd_Dn9Q_eHZehLg7GdCx682561lcokE19BkFXm2pqsEq0ZcikY42t9zk" />
                                </div>
                                <div className="hidden lg:block text-xs">
                                    <p className="font-bold text-text-main dark:text-white">Admin User</p>
                                    <p className="text-gray-500 dark:text-gray-400">Operations Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden text-text-main dark:text-white">
                            <Menu className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center relative overflow-hidden py-12 px-4">
                <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                <div className="relative w-full max-w-[480px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-white/60 dark:border-gray-700 animate-fade-in-up overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f4a825] to-[#d99010]"></div>
                    <div className="p-8 md:p-10 text-center">
                        <div className="mx-auto size-20 rounded-full bg-[#fff8eb] dark:bg-[#f4a825]/10 border border-[#f4a825]/20 flex items-center justify-center mb-6 group cursor-default shadow-sm">
                            <Power size={36} className="text-[#f4a825] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-3">Logout Confirmation</h1>
                        <p className="text-[#4b5563] dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                            Are you sure you want to end your current session? You will be returned to the public homepage.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={handleCancel}
                                className="order-2 sm:order-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-[#1c160d] dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="order-1 sm:order-2 px-6 py-3 rounded-lg bg-primary text-text-main font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/30 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                                {!isLoggingOut && <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-3 px-6 text-center">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                            <Lock size={12} />
                            Secure connection encrypted
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-primary/20">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[#f4a825]">
                                <Zap size={28} />
                                <h3 className="text-xl font-bold text-white">Techno Tower</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your trusted partner for robust, smart, and sustainable lighting infrastructure solutions.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link to="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f4a825] hover:text-black transition-colors">
                                    <Globe size={14} />
                                </Link>
                                <Link to="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f4a825] hover:text-black transition-colors">
                                    <Mail size={14} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">About Us</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Our History</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Careers</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">News & Media</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Solutions</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Smart Poles</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">High Masts</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Decorative Lighting</Link></li>
                                <li><Link to="#" className="hover:text-[#f4a825] transition-colors">Solar Solutions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="text-[#f4a825] mt-0.5" size={18} />
                                    <span>123 Industrial Blvd, Tech Park,<br />Sector 5, Innovation City</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="text-[#f4a825]" size={18} />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-[#f4a825]" size={18} />
                                    <span>info@technotower.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© 2024 Techno Tower. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LogoutConfirmation;

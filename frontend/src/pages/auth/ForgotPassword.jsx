import { TowerControl, Mail, KeyRound, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Reset password for:', email);
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen font-display bg-white dark:bg-gray-950 text-[#1c160d] dark:text-gray-100 overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link className="flex items-center gap-3 group" to="/">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-[#f4a825] text-[#1c160d] group-hover:bg-[#d68e1a] transition-all duration-300 group-hover:scale-105 shadow-sm">
                            <TowerControl size={28} className="transition-transform duration-500 group-hover:rotate-12" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-[#1c160d] dark:text-white group-hover:text-[#f4a825] transition-colors">Techno Tower</h1>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium text-[#1c160d] hover:text-[#f4a825] transition-colors dark:text-gray-200" to="#">Products</Link>
                        <Link className="text-sm font-medium text-[#1c160d] hover:text-[#f4a825] transition-colors dark:text-gray-200" to="#">Services</Link>
                        <Link className="text-sm font-medium text-[#1c160d] hover:text-[#f4a825] transition-colors dark:text-gray-200" to="#">Projects</Link>
                        <Link className="text-sm font-medium text-[#1c160d] hover:text-[#f4a825] transition-colors dark:text-gray-200" to="/about">About</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link className="hidden md:flex text-sm font-medium text-[#6b5d4d] hover:text-[#f4a825] transition-colors" to="/login">Log In</Link>
                        <button className="hidden md:flex items-center justify-center rounded-lg bg-[#f4a825] hover:bg-[#d68e1a] transition-all h-10 px-6 text-[#1c160d] text-sm font-bold tracking-wide shadow-sm hover:shadow-md">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full flex items-center justify-center relative bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
                    <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-[#f4a825]/5 rounded-tr-full blur-3xl"></div>
                </div>

                <div className="w-full max-w-md space-y-8 relative z-10">
                    <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 sm:p-10 animate-fade-in-up">
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-16 h-16 bg-[#f4a825]/10 rounded-full flex items-center justify-center mb-4 text-[#f4a825] animate-bounce">
                                <KeyRound size={36} />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-[#1c160d] dark:text-white">
                                Forgot Password?
                            </h2>
                            <p className="mt-2 text-sm text-[#6b5d4d] dark:text-gray-400 max-w-xs mx-auto">
                                No worries, we'll send you reset instructions.
                            </p>
                        </div>

                        {isSubmitted && (
                            <div className="mb-6 rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-100 dark:border-green-800 animate-fade-in-up">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 className="text-green-600 dark:text-green-400" size={20} />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Email sent successfully</h3>
                                        <div className="mt-1 text-sm text-green-700 dark:text-green-300">
                                            <p>Check your inbox for the reset link. If you don't see it, check your spam folder.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!isSubmitted && (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-[#1c160d] dark:text-gray-300" htmlFor="email">
                                        Email address
                                    </label>
                                    <div className="mt-2 relative rounded-md shadow-sm group">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Mail className="text-gray-400 group-focus-within:text-[#f4a825] transition-colors" size={20} />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-lg border-0 py-3 pl-10 text-[#1c160d] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f4a825] sm:text-sm sm:leading-6 dark:bg-[#252525] dark:ring-gray-700 dark:text-white dark:placeholder-gray-500 transition-shadow"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-[#6b5d4d] dark:text-gray-500">
                                        Enter the email address associated with your Techno Tower account.
                                    </p>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-lg bg-[#f4a825] px-3 py-3 text-sm font-bold leading-6 text-[#1c160d] shadow-lg hover:bg-[#d68e1a] hover:shadow-[#f4a825]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a825] transition-all duration-300"
                                    >
                                        Send Reset Link
                                    </button>
                                </div>
                            </form>
                        )}

                        <div className="mt-8 text-center">
                            <p className="text-sm text-[#6b5d4d] dark:text-gray-400">
                                Remember your password?
                                <Link className="font-semibold text-[#22332a] hover:text-[#f4a825] transition-colors dark:text-white dark:hover:text-[#f4a825] ml-1" to="/login">
                                    Back to log in
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="text-center animate-fade-in-up delay-100">
                        <Link className="inline-flex items-center gap-1 text-sm text-[#6b5d4d] hover:text-[#f4a825] transition-colors dark:text-gray-500 dark:hover:text-gray-300" to="#">
                            <ShieldCheck size={18} />
                            <span>Contact Support</span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center size-8 rounded bg-[#f4a825] text-[#1c160d]">
                                    <TowerControl size={20} />
                                </div>
                                <h3 className="text-xl font-bold">Techno Tower</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Leading the way in infrastructure development with premium manufacturing and turnkey installation solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                                <li><Link className="hover:text-[#f4a825] transition-colors" to="/about">About Us</Link></li>
                                <li><Link className="hover:text-[#f4a825] transition-colors" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Certifications</h4>
                            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#f4a825]" size={14} /> ISO 9001:2015</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#f4a825]" size={14} /> ISO 14001:2015</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
                            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <Phone className="text-[#f4a825]" size={20} />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-[#f4a825]" size={20} />
                                    <span>support@technotower.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Techno Tower Infrastructure Ltd. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link className="hover:text-white" to="#">Privacy Policy</Link>
                            <Link className="hover:text-white" to="#">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ForgotPassword;

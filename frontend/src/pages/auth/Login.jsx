import { TowerControl, Mail, Lock, Eye, EyeOff, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { login, error } = useAuth();

    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const result = await login(email, password);
        setSubmitting(false);
        if (result.success) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-display bg-white dark:bg-gray-950 text-[#1c160d] dark:text-gray-100 overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-yellow-500 text-[#1c160d]">
                            <TowerControl size={24} />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-[#1c160d] dark:text-white">Techno Tower</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" to="/">Home</Link>
                        <Link className="text-sm font-medium hover:text-yellow-500 transition-colors" to="#">Support</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link className="text-sm font-bold text-yellow-500 hover:underline" to="#">Need Help?</Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center relative w-full py-12 px-4 sm:px-6 lg:px-8">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        alt="Industrial background"
                        className="w-full h-full object-cover opacity-5 blur-[2px] grayscale"
                        src="/images/hero/about-hero.jpg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 dark:from-gray-900/80 dark:to-gray-900/95"></div>
                </div>

                {/* Login Card */}
                <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up">
                    <div className="h-2 w-full bg-gradient-to-r from-primary to-primary-dark rounded-t-2xl"></div>
                    <div className="p-8 sm:p-10">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-inner border border-gray-200 dark:border-gray-700 mb-6 animate-float">
                                <TowerControl size={42} className="text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-text-main dark:text-white tracking-tight">Admin Portal</h2>
                            <p className="mt-2 text-sm text-text-muted dark:text-gray-400">Secure access for authorized personnel</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="email">Email Address</label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Mail className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        className="block w-full rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 pl-10 py-3 text-text-main dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm transition-all outline-none"
                                        id="email"
                                        name="email"
                                        placeholder="name@technotower.com"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="password">Password</label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Lock className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 bg-background-light dark:bg-[#252525] dark:border-gray-600 pl-10 py-3 text-text-main dark:text-white placeholder-gray-400 focus:border-primary focus:ring-primary sm:text-sm transition-all outline-none"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ?
                                            <EyeOff className="text-gray-400 group-hover:text-text-muted" size={20} /> :
                                            <Eye className="text-gray-400 group-hover:text-text-muted" size={20} />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-background-light dark:bg-gray-700 dark:border-gray-600" id="remember-me" name="remember-me" type="checkbox" />
                                    <label className="ml-2 block text-sm text-text-muted dark:text-gray-400" htmlFor="remember-me">Remember me</label>
                                </div>
                                <div className="text-sm">
                                    <Link className="font-medium text-primary hover:text-primary-dark transition-colors" to="#">Forgot password?</Link>
                                </div>
                            </div>

                            {error && (
                                <div className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg px-3 py-2">
                                    {error}
                                </div>
                            )}

                            <div>
                                <button className="group relative flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-text-main hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5" type="submit">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Lock size={20} className="text-text-main/70" />
                                    </span>
                                    {submitting ? 'Signing in...' : 'Secure Login'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex justify-center items-center gap-2 text-xs text-text-muted dark:text-gray-500">
                                <ShieldCheck size={16} />
                                <span>System Status: <span className="text-green-600 font-semibold">Operational</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white pt-12 pb-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center size-8 rounded bg-yellow-500 text-[#1c160d]">
                                    <TowerControl size={20} />
                                </div>
                                <h3 className="text-xl font-bold">Techno Tower</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Premium manufacturing and turnkey installation solutions for light poles and smart structures.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Support</h4>
                            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">Help Center</Link></li>
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">System Status</Link></li>
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">Report Issue</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Legal</h4>
                            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">Privacy Policy</Link></li>
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">Terms of Service</Link></li>
                                <li><Link className="hover:text-yellow-500 transition-colors" to="#">Compliance</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Contact IT</h4>
                            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <Phone className="text-yellow-500" size={18} />
                                    <span>+1 (555) 123-0000 (Ext 9)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-yellow-500" size={18} />
                                    <span>admin.support@technotower.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Techno Tower Infrastructure Ltd. All rights reserved.</p>
                        <div className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 border border-gray-700">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs font-mono text-gray-400">v2.4.0 (Stable)</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;

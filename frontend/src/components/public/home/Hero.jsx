
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Industrial light poles and smart city infrastructure at dusk"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVgSSRE8g1Vkn7qamWH95nDiaudWMttKxfZ6HIMogjPF87Fkb46xod7WljP-AnuMDFRH7Wae2_lgr179SlM469cEMIE1rZthU9nOLdsjcVs6V9GJOhL8Y1zUmh6plIu3fJbVfGs3Dj2n8w-vRl6YdVxnHUPId-EgGRrcnyzN_Z5smSWC2yWMZ0h-VmOU4btPkxtKy7zISDK7HSAQUyqXP-K1esUJ_Taopa_IWC_8Fj9iOpo1xKYZ1fY7d5CPtXX45uk3XSJix0jS5F"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-left animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">ISO 9001:2015 Certified</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                        Powering Infrastructure with <span className="text-primary">Precision Engineering</span>
                    </h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-xl font-light leading-relaxed">
                        From manufacturing high-quality light poles to smart city installation, we deliver end-to-end infrastructure solutions that stand the test of time.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="#products" className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-text-main font-bold transition-all shadow-lg hover:shadow-primary/50">
                            View Products
                        </Link>
                        <Link to="/gallery" className="flex items-center justify-center h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold transition-all">
                            Our Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

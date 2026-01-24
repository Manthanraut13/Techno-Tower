import { Building2, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
    <div className="bg-white p-6 rounded-lg shadow-xl text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 w-full">
        <div className="mb-3 text-yellow-500">
            <Icon size={32} />
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{label}</div>
    </div>
);

const AboutHero = () => {
    return (
        <div className="relative mb-32">
            {/* Hero Background */}
            <div className="relative h-[600px] bg-gray-900 overflow-hidden">
                {/* Placeholder for Background Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-10" />
                <img
                    src="/images/hero/about-hero.jpg" // Placeholder path
                    alt="City at night"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000'; // Fallback
                    }}
                />

                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    {/* Badge */}
                    <div className="mb-6">
                        <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 px-4 py-1.5 rounded-full text-sm font-semibold">
                            SINCE 1998
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        Engineering the Light of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Tomorrow</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We combine native industrial manufacturing with smart city technology to build infrastructure that stands the test of time.
                    </p>
                </div>
            </div>

            {/* Stats Section - Floating Overlap */}
            <div className="absolute -bottom-16 left-0 right-0 z-30 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                        <StatCard icon={Building2} value="50k+" label="Poles Installed" />
                        <StatCard icon={Clock} value="25+" label="Years Experience" />
                        <StatCard icon={CheckCircle2} value="500+" label="Projects Completed" />
                        <StatCard icon={ShieldCheck} value="100%" label="Safety Record" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;

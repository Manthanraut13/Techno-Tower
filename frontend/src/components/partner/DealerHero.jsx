import { ArrowRight } from 'lucide-react';

const DealerHero = () => {
    return (
        <section className="relative bg-[#fcfaf8] dark:bg-[#1c160d]">
            <div className="relative h-[600px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d480e?q=80&w=2070&auto=format&fit=crop')" }}
                    ></div>
                </div>

                {/* Content */}
                <div className="relative z-20 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl animate-fade-in-up">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f4a825]/20 px-3 py-1 backdrop-blur-sm border border-[#f4a825]/30">
                            <span className="h-2 w-2 rounded-full bg-[#f4a825] animate-pulse"></span>
                            <span className="text-xs font-bold text-[#f4a825] uppercase tracking-wider">Now Onboarding Dealers</span>
                        </div>
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Powering Tomorrow's <br />
                            <span className="text-[#f4a825]">Infrastructure Together</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
                            Join India's leading network of smart lighting and pole distributors. Unlock high-margin opportunities with enterprise-grade infrastructure products.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#register-form"
                                className="rounded-lg bg-[#f4a825] px-6 py-3.5 text-sm font-bold text-[#1c160d] shadow-sm hover:bg-[#d68e1a] transition-all transform hover:scale-105"
                            >
                                Register Now
                            </a>
                            <a
                                href="#benefits"
                                className="text-sm font-semibold leading-6 text-white hover:text-[#f4a825] transition-colors flex items-center gap-1"
                            >
                                Learn more <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealerHero;

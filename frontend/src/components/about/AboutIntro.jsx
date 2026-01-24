import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutIntro = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Leaders in Smart <br />Infrastructure Solutions
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                            <p>
                                Techno Tower is an industry leader in the manufacturing, supply, and installation of high-quality light poles and smart lighting infrastructure. We don't just bend steel; we engineer the backbone of modern cities.
                            </p>
                            <p>
                                From highways to residential compounds, our solutions combine engineering excellence with modern aesthetics to power cities efficiently. Our dedicated team of engineers and technicians ensures every project meets rigorous international standards.
                            </p>
                        </div>

                        <Link
                            to="#"
                            className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors group"
                        >
                            Download Corporate Profile
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/about/intro-team.jpg"
                                alt="Engineers reviewing blueprints"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1581094794329-cd1361dca027?auto=format&fit=crop&q=80&w=1000';
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

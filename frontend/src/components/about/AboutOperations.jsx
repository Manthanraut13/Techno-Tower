import { CheckCircle2 } from 'lucide-react';

const FeatureList = ({ items }) => (
    <ul className="space-y-3 mt-6">
        {items.map((item, index) => (
            <li key={index} className="flex items-start">
                <CheckCircle2 size={18} className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
            </li>
        ))}
    </ul>
);

const AboutOperations = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 space-y-24">

                {/* Manufacturing Facility */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/about/factory-sparks.jpg"
                                alt="Welding sparks in factory"
                                className="w-full h-[400px] object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000';
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-yellow-100 p-2 rounded-lg text-yellow-600 mr-3">
                                {/* Factory Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22v-5l5-5 5 5v5" /><path d="M12 7V2H2v20h20V7z" /><path d="M12 12v10" /><path d="M22 17v5" /></svg>
                            </span>
                            Manufacturing Facility
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our state-of-the-art facility spans over 50,000 square meters, equipped with advanced CNC machinery, automated welding lines, and rigorous testing laboratories. We control every aspect of production to ensure consistency and durability in extreme weather conditions.
                        </p>
                        <FeatureList items={[
                            "Automated Powder Coating",
                            "High-Grade Steel Sourcing",
                            "Custom Fabrication"
                        ]} />
                    </div>
                </div>

                {/* Execution Strength */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/about/crane-sky.jpg"
                                alt="Crane installation"
                                className="w-full h-[400px] object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000';
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-yellow-100 p-2 rounded-lg text-yellow-600 mr-3">
                                {/* Construction Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="8" rx="1" /><path d="M17 14v7" /><path d="M7 14v7" /><path d="M17 3v3" /><path d="M7 3v3" /><path d="M10 14 2.3 6.3" /><path d="m14 6 7.7 7.7" /><path d="m8 6 8 8" /></svg>
                            </span>
                            Execution Strength
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Manufacturing is only half the story. Our execution teams are renowned for rapid deployment and logistical precision. We handle everything from foundation laying to electrical integration, ensuring projects are delivered on time, every time.
                        </p>
                        <FeatureList items={[
                            "Turnkey Installation",
                            "Fleet of Specialized Cranes",
                            "24/7 Maintenance Support"
                        ]} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutOperations;

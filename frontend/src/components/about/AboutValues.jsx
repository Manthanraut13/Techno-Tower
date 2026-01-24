import { Shield, Leaf, HeartHandshake, Award, CheckCircle2 } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description, colorClass }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorClass}`}>
            <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const AboutValues = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Core Commitments */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Our Core Commitments</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
                    <ValueCard
                        icon={Shield}
                        title="Safety First"
                        description="We adhere to the strictest safety protocols in manufacturing and on-site. Every pole is engineered to withstand wind loads and seismic activity beyond standard requirements."
                        colorClass="bg-green-500"
                    />
                    <ValueCard
                        icon={Leaf}
                        title="Sustainability"
                        description="We are committed to reducing our carbon footprint through solar-compatible designs, LED efficiency, and using recycled steel materials wherever possible."
                        colorClass="bg-blue-500"
                    />
                    <ValueCard
                        icon={HeartHandshake}
                        title="Reliability"
                        description="Our clients trust us because we deliver. From consistent product quality to meeting tight deadlines, Techno Tower is a partner you can rely on."
                        colorClass="bg-yellow-500"
                    />
                </div>

                {/* Certifications */}
                <div className="text-center">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Certified Excellence</h3>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Clean placeholders for logos */}
                        <div className="flex flex-col items-center">
                            <Award size={48} />
                            <span className="text-xs mt-2 font-bold">ISO 9001</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Shield size={48} />
                            <span className="text-xs mt-2 font-bold">ISO 14001</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2 size={48} />
                            <span className="text-xs mt-2 font-bold">OHSAS 18001</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Leaf size={48} />
                            <span className="text-xs mt-2 font-bold">LEED GOLD</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutValues;

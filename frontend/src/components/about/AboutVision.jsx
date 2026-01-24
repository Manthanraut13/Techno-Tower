import { Eye, Rocket } from 'lucide-react';

const VisionCard = ({ icon: Icon, title, description, color }) => (
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
        <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity`}>
            <Icon size={120} className="text-gray-900" />
        </div>

        <div className={`inline-flex items-center justify-center p-3 rounded-xl ${color} text-white mb-6`}>
            <Icon size={24} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
);

const AboutVision = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <VisionCard
                        icon={Eye}
                        title="Our Vision"
                        description="To be the premier global partner for smart city infrastructure, illuminating the path to a connected, sustainable, and safer future for communities worldwide."
                        color="bg-yellow-500"
                    />
                    <VisionCard
                        icon={Rocket}
                        title="Our Mission"
                        description="To design, manufacture, and install superior infrastructure solutions through innovation, rigorous quality control, and an unswerving commitment to safety and environmental stewardship."
                        color="bg-gray-900"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutVision;


import { Award, Leaf, ShieldCheck } from 'lucide-react';

const TendersCertifications = () => {
    const certifications = [
        { icon: Award, label: 'Quality', value: 'ISO 9001:2015', color: 'text-[#f4a825]' },
        { icon: Leaf, label: 'Environment', value: 'ISO 14001', color: 'text-green-600' },
        { icon: ShieldCheck, label: 'Safety', value: 'ISO 45001', color: 'text-blue-600' }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                <div className="flex flex-col items-center max-w-[1000px] flex-1">
                    <h2 className="text-[#1c160d] dark:text-white text-2xl font-bold leading-tight mb-8">Compliance & Certifications</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-background-surface dark:bg-gray-900">
                                <cert.icon size={28} className={cert.color} />

                                <div className="flex flex-col">
                                    <span className="text-xs text-[#1c160d]/60 dark:text-gray-400 uppercase font-bold">{cert.label}</span>
                                    <span className="text-[#1c160d] dark:text-white font-bold">{cert.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersCertifications;

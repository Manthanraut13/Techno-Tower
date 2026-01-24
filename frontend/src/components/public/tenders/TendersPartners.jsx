
import { Landmark, Building2, Shield, Globe } from 'lucide-react';

const TendersPartners = () => {
    const partners = [
        { icon: Landmark, name: 'Ministry of Transport' },
        { icon: Building2, name: 'City Infrastructure Dept' },
        { icon: Shield, name: 'Federal Roads Agency' },
        { icon: Globe, name: 'National Energy Board' }
    ];

    return (
        <section className="py-12 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">

            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <h3 className="text-center text-[#1c160d]/60 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">
                        Trusted by Government Authorities
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex items-center gap-2 text-[#1c160d] dark:text-white font-bold text-lg">
                                <partner.icon size={36} />
                                <span>{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersPartners;

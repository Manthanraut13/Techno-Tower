
import { Building, Route, Wifi } from 'lucide-react';

const TendersCapabilities = () => {
    const capabilities = [
        {
            icon: Building,
            title: 'Municipal Lighting',
            description: 'Complete street lighting networks for urban centers, including heritage poles and decorative fixtures for downtown cores.'
        },
        {
            icon: Route,
            title: 'Highway Illumination',
            description: 'High-mast and roadway lighting for national highways, engineered to withstand extreme weather and wind loads.'
        },
        {
            icon: Wifi,
            title: 'Smart City Solutions',
            description: 'IoT-integrated poles with 5G capabilities, environmental sensors, and adaptive dimming for connected smart cities.'
        }
    ];

    return (
        <section className="py-16 bg-background-surface dark:bg-gray-950">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4 text-center items-center">
                            <h2 className="text-[#f4a825] font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
                            <h1 className="text-[#1c160d] dark:text-white text-3xl md:text-4xl font-black leading-tight max-w-[720px]">
                                Specialized Infrastructure Capabilities
                            </h1>
                            <p className="text-[#1c160d]/70 dark:text-gray-300 text-lg font-normal leading-normal max-w-[720px]">
                                End-to-end solutions tailored for municipal and federal requirements, from manufacturing to final installation.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {capabilities.map((cap, index) => (
                                <div key={index} className="group flex gap-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex-col hover:border-[#f4a825]/50 transition-colors hover:shadow-lg">

                                    <div className="size-14 rounded-lg bg-[#f4a825]/10 flex items-center justify-center text-[#f4a825] group-hover:bg-[#f4a825] group-hover:text-white transition-colors">
                                        <cap.icon size={28} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#1c160d] dark:text-white text-xl font-bold leading-tight">{cap.title}</h3>
                                        <p className="text-[#1c160d]/60 dark:text-gray-400 text-sm font-normal leading-relaxed">{cap.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersCapabilities;

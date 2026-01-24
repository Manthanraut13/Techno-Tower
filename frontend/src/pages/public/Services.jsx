
import { Factory, Truck, HardHat, Headset } from 'lucide-react';

import ServicesHero from '../../components/public/services/ServicesHero';
import ServiceCard from '../../components/public/services/ServiceCard';
import CertificationStrip from '../../components/public/services/CertificationStrip';

const Services = () => {
    const services = [
        {
            number: '01',
            icon: Factory,
            title: 'Manufacturing',
            description: 'State-of-the-art fabrication of high-mast light poles and smart infrastructure components. Our facilities utilize automated precision welding to ensure structural integrity and longevity.',
            delayClass: 'delay-100'
        },
        {
            number: '02',
            icon: Truck,
            title: 'Supply & Logistics',
            description: 'Seamless supply chain management ensuring on-time delivery of critical infrastructure materials. We handle complex logistics networks to deliver large-scale components safely.',
            delayClass: 'delay-200'
        },
        {
            number: '03',
            icon: HardHat,

            title: 'Installation & Execution',
            description: 'Expert on-site engineering and safe installation of lighting towers and electrical systems. Our certified teams follow rigorous safety protocols for efficient deployment.',
            delayClass: 'delay-200'
        },
        {
            number: '04',
            icon: Headset,
            title: 'Maintenance & Support',
            description: '24/7 after-sales support and scheduled maintenance to ensure longevity and reliability. We provide smart monitoring solutions to predict and prevent outages.',
            delayClass: 'delay-300'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <ServicesHero />

            <section className="py-16 lg:py-24 px-6 lg:px-20 bg-white dark:bg-gray-950 relative">
                {/* Subtle Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D3436 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>

                <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <CertificationStrip />
        </div>
    );
};

export default Services;

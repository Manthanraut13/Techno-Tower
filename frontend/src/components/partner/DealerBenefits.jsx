import { Factory, Truck, TrendingUp, Headset, ShieldCheck, Megaphone } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
    <div className="relative pl-16 group hover:bg-white dark:hover:bg-white/5 p-6 rounded-xl transition-all hover:shadow-lg border border-transparent hover:border-gray-100 dark:hover:border-white/10">
        <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4a825]">
            <Icon className="text-[#1c160d]" size={24} />
        </div>
        <div className="text-base font-semibold leading-7 text-[#1c160d] dark:text-white">
            {title}
        </div>
        <div className="mt-2 text-base leading-7 text-[#6b5d4d] dark:text-gray-400">
            {description}
        </div>
    </div>
);

const DealerBenefits = () => {
    const benefits = [
        {
            icon: Factory,
            title: "Manufacturing Excellence",
            description: "Access to state-of-the-art light poles and smart infrastructure manufactured in our ISO-certified facilities."
        },
        {
            icon: Truck,
            title: "Supply Chain Reliability",
            description: "Robust logistics network ensuring on-time delivery across regions, minimizing your inventory risks."
        },
        {
            icon: TrendingUp,
            title: "High-Margin Products",
            description: "Competitive wholesale pricing structures designed to maximize your profitability on every project."
        },
        {
            icon: Headset,
            title: "Dedicated Support",
            description: "24/7 technical assistance and dedicated account managers to help you close complex deals."
        },
        {
            icon: ShieldCheck,
            title: "Quality Certified",
            description: "All products meet international safety and durability standards, ensuring client satisfaction."
        },
        {
            icon: Megaphone,
            title: "Marketing Collateral",
            description: "Get access to brochures, digital assets, and co-branded materials to boost your local presence."
        }
    ];

    return (
        <section className="py-24 bg-[#fcfaf8] dark:bg-[#1c160d]" id="benefits">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#f4a825]">Dealer Benefits</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#1c160d] dark:text-white sm:text-4xl">Why Partner with Techno Tower?</p>
                    <p className="mt-6 text-lg leading-8 text-[#6b5d4d] dark:text-gray-400">
                        Unlock exclusive perks, competitive margins, and dedicated support designed to help you grow your infrastructure business.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealerBenefits;

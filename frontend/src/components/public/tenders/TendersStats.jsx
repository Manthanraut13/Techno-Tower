
import { Gavel, Banknote, Building2, ShieldCheck } from 'lucide-react';

const TendersStats = () => {
    const stats = [
        { icon: Gavel, label: 'Tenders Won', value: '50+' },
        { icon: Banknote, label: 'Total Value', value: '$100M+' },
        { icon: Building2, label: 'Municipalities', value: '15+' },
        { icon: ShieldCheck, label: 'Experience', value: '20 Years' }
    ];

    return (
        <section className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="flex flex-wrap gap-6 justify-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-lg p-6 border border-gray-200 dark:border-gray-800 bg-background-surface dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">

                                <div className="size-10 rounded-full bg-[#f4a825]/20 flex items-center justify-center mb-2">
                                    <stat.icon size={20} className="text-[#f4a825]" />
                                </div>
                                <p className="text-[#1c160d] dark:text-gray-300 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                                <p className="text-[#1c160d] dark:text-white text-3xl font-black leading-tight">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersStats;

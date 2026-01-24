
import { ArrowRight, Wrench, Factory, Hammer, MapPin } from 'lucide-react';

const TendersVictories = () => {
    const tenders = [
        {
            status: 'Awarded',
            ref: 'REF: TT-2023-089',
            date: 'Oct 2023',
            title: 'Metroville Smart Streetlight Upgrade',
            description: 'Supply and installation of 5,000 smart LED poles with centralized control systems for the northern district.',
            type: 'Supply & Install',
            typeIcon: Wrench,
            location: 'Metroville',
            statusColor: 'green'
        },
        {
            status: 'Awarded',
            ref: 'REF: TT-2023-042',
            date: 'Aug 2023',
            title: 'National Highway 4 Expansion',
            description: 'Manufacturing of 450 high-mast lighting towers for the new interchange and 20km highway stretch.',
            type: 'Manufacturing Only',
            typeIcon: Factory,
            location: 'National',
            statusColor: 'green'
        },
        {
            status: 'In Progress',
            ref: 'REF: TT-2024-001',
            date: 'Jan 2024',
            title: 'Coastal Park Solar Lighting',
            description: 'Turnkey solution for off-grid solar lighting in the newly developed coastal public park.',
            type: 'Turnkey',
            typeIcon: Hammer,
            location: 'Bay City',
            statusColor: 'blue'
        }
    ];

    return (
        <section className="py-16 bg-background-surface dark:bg-gray-950">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                <div className="flex flex-col max-w-[1000px] flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-[#1c160d] dark:text-white text-3xl font-black leading-tight mb-2">Recent Tender Victories</h2>
                            <p className="text-[#1c160d]/70 dark:text-gray-300">A selection of awarded contracts currently in execution or recently completed.</p>
                        </div>
                        <button className="text-[#f4a825] font-bold flex items-center gap-1 hover:underline">
                            View All Archives <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        {tenders.map((tender, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow items-start md:items-center group">

                                <div className="flex flex-col gap-1 min-w-[140px]">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${tender.statusColor === 'green'
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                                        } text-xs font-bold w-fit`}>
                                        <span className={`size-1.5 rounded-full ${tender.statusColor === 'green' ? 'bg-green-600 dark:bg-green-400' : 'bg-blue-600 dark:bg-blue-400'}`}></span>
                                        {tender.status}
                                    </span>
                                    <span className="text-[#1c160d]/60 dark:text-gray-400 text-xs font-mono">{tender.ref}</span>
                                    <span className="text-[#1c160d] dark:text-white text-sm font-semibold">{tender.date}</span>
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <h3 className="text-[#1c160d] dark:text-white text-lg font-bold group-hover:text-[#f4a825] transition-colors">{tender.title}</h3>
                                    <p className="text-[#1c160d]/70 dark:text-gray-300 text-sm line-clamp-2">{tender.description}</p>
                                    <div className="flex gap-4 mt-2 text-xs text-[#1c160d]/60 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <tender.typeIcon size={14} /> {tender.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} /> {tender.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto flex justify-end">
                                    <button className="flex items-center justify-center rounded-lg h-10 px-4 border border-gray-200 dark:border-gray-800 hover:border-[#f4a825] hover:text-[#f4a825] text-[#1c160d] dark:text-white text-sm font-bold transition-all bg-transparent">
                                        View Project
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TendersVictories;
